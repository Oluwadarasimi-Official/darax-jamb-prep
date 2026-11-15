'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useDb } from './db-context';
import { uid } from '../lib/store';
import { mirrorAttempt, mirrorNotification } from '../lib/sync';
import { PASS_MARK } from '../lib/progression';

export interface RunnerQ {
  ref: string; q: string; options: string[];
  /** Present ONLY for admin-published custom lessons, whose question bank lives
   *  on this device (no server bank exists for them). The server grades those
   *  from this supplied key and marks the result serverValidated:false. */
  answer?: number; explanation?: string;
}
export interface GradeResult { q: string; options: string[]; chosen: number; correct: number; explanation: string; }

/** One displayed question: its original ref + options in display order, with
 *  the map from each displayed option index back to its original option index. */
interface ShuffledQ { ref: string; q: string; options: string[]; origOptionIdx: number[]; answer?: number; explanation?: string; }

/** Deterministic shuffle from a seed (mulberry32) so one attempt has one fixed
 *  order while every new attempt gets a fresh seed — and therefore a new order. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffleWith<T>(arr: T[], rand: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function buildShuffle(questions: RunnerQ[]): ShuffledQ[] {
  const rand = mulberry32((Date.now() ^ Math.floor(Math.random() * 0xffffffff)) >>> 0);
  const order = shuffleWith(questions.map((_, i) => i), rand);
  return order.map(i => {
    const q = questions[i];
    const optOrder = shuffleWith(q.options.map((_, oi) => oi), rand);
    return { ref: q.ref, q: q.q, options: optOrder.map(oi => q.options[oi]), origOptionIdx: optOrder, answer: q.answer, explanation: q.explanation };
  });
}

export function QuizRunner({ questions, title, kind, subjectId, lessonId, timeLimitSec, nextHref }: {
  questions: RunnerQ[]; title: string; kind: 'lesson' | 'topic' | 'subject' | 'mixed' | 'mock';
  subjectId: string; lessonId?: string; timeLimitSec?: number; nextHref?: string;
}) {
  const { db, user, setDb } = useDb();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ score: number; correct: number; total: number; graded: GradeResult[]; serverValidated: boolean } | null>(null);
  const [error, setError] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(timeLimitSec || 0);
  const [attemptNo, setAttemptNo] = useState(0);
  const [shuffled, setShuffled] = useState<ShuffledQ[] | null>(null);
  const startedAt = useRef(Date.now());
  const submittedRef = useRef(false);

  // Fresh seeded shuffle on first load AND on every retake (attemptNo changes).
  // Built in an effect so server render and first client render match (no
  // hydration mismatch from Math.random during render).
  useEffect(() => {
    setShuffled(buildShuffle(questions));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attemptNo]);

  useEffect(() => {
    if (!timeLimitSec) return;
    const t = setInterval(() => {
      setSecondsLeft(s => {
        if (s <= 1) { clearInterval(t); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [timeLimitSec]);

  const submit = async (auto = false) => {
    if (!user || submittedRef.current || !shuffled) return;
    submittedRef.current = true;
    setSubmitting(true); setError('');
    try {
      // Convert displayed choices back to ORIGINAL option indices and send
      // refs in DISPLAY order — the server grades by `lessonId:originalIndex`
      // + original option index, so this mapping is what keeps grading correct
      // after the shuffle. Custom-lesson keys are supplied only for custom
      // questions (see RunnerQ); built-in questions are graded from the
      // server-side bank exactly as before.
      const customQuestions: Record<string, { q: string; options: string[]; answer: number; explanation: string }> = {};
      for (const q of shuffled) {
        if (typeof q.answer === 'number') {
          // Rebuild the ORIGINAL option order: display index d holds original
          // option origOptionIdx[d], so original[oi] = display[indexOf(oi)].
          customQuestions[q.ref] = { q: q.q, options: q.options.map((_, oi) => q.options[q.origOptionIdx.indexOf(oi)]), answer: q.answer, explanation: q.explanation || '' };
        }
      }
      const res = await fetch('/api/attempts', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id, kind, title, subjectId, lessonId,
          refs: shuffled.map(q => q.ref),
          answers: shuffled.map((q, i) => {
            const chosen = answers[i];
            return chosen === undefined ? -1 : q.origOptionIdx[chosen];
          }),
          ...(Object.keys(customQuestions).length > 0 ? { customQuestions } : {}),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Could not grade the assessment.');
      const durationSec = Math.round((Date.now() - startedAt.current) / 1000);
      const attemptId = uid('att');
      const attempt = {
        id: attemptId, userId: user.id, lessonId, subjectId, kind, title,
        total: data.total, correct: data.correct, score: data.score,
        answers: data.graded.map((g: GradeResult) => ({ q: g.q, chosen: g.chosen, correct: g.correct })),
        startedAt: new Date(startedAt.current).toISOString(), completedAt: new Date().toISOString(), durationSec,
      };
      const progressEntry = lessonId ? (() => {
        const prev = (db.progress[user.id] || []).find(x => x.lessonId === lessonId);
        const best = Math.max(prev?.bestScore || 0, data.score);
        const done = best >= PASS_MARK || data.score >= PASS_MARK;
        return {
          lessonId, completed: done, bestScore: best, attempts: (prev?.attempts || 0) + 1,
          completedAt: done ? new Date().toISOString() : prev?.completedAt,
          timeSpentSec: (prev?.timeSpentSec || 0) + durationSec,
        };
      })() : null;
      const ntf = {
        id: uid('ntf'), userId: user.id,
        title: `Assessment result: ${data.score}%`,
        body: `You scored ${data.correct} out of ${data.total} (${data.score}%) on “${title}”.${data.score >= PASS_MARK ? ' Well done — you passed!' : ' Keep practising — retake it to improve.'}`,
        kind: 'result', link: '/app/assessments', read: false, createdAt: new Date().toISOString(),
      };
      const wantsResultNtf = db.profiles.find(p => p.id === user.id)?.notifyPrefs?.results !== false;
      // Persist ONLY the server-graded result — never a client-computed score.
      setDb(d => {
        d.attempts.push(attempt);
        if (lessonId && progressEntry) {
          const list = d.progress[user.id] || (d.progress[user.id] = []);
          const p = list.find(x => x.lessonId === lessonId);
          if (p) Object.assign(p, progressEntry); else list.push(progressEntry);
        }
        if (wantsResultNtf) d.notifications.unshift(ntf);
        return d;
      });
      // Mirror to Supabase when configured (fire-and-forget — never blocks UI).
      mirrorAttempt(user.id, attempt, progressEntry);
      if (wantsResultNtf) mirrorNotification(user.id, ntf);
      setResult({ score: data.score, correct: data.correct, total: data.total, graded: data.graded, serverValidated: !!data.serverValidated });
    } catch (e) {
      submittedRef.current = false;
      setError(e instanceof Error ? e.message : 'Submission failed. Check your connection and try again.');
    } finally { setSubmitting(false); }
  };

  useEffect(() => {
    if (timeLimitSec && secondsLeft === 0 && !result && !submittedRef.current) submit(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft]);

  if (!user) return null;

  const retake = () => {
    setResult(null); setAnswers({}); submittedRef.current = false;
    startedAt.current = Date.now();
    if (timeLimitSec) setSecondsLeft(timeLimitSec);
    setAttemptNo(n => n + 1); // fresh seed → brand-new question AND option order
  };

  if (result) {
    const passed = result.score >= PASS_MARK;
    return (
      <div className="flex flex-col gap-4">
        <div className="glass p-6 text-center">
          <p className="text-5xl font-extrabold">{result.score}%</p>
          <p className="mt-1 font-semibold">{result.correct} correct out of {result.total}</p>
          <p className={`mt-2 font-semibold ${passed ? 'text-accent' : 'text-warn'}`}>
            {kind === 'lesson'
              ? passed ? '🎉 Passed! The next lesson is now unlocked.' : `Not yet — you need ${PASS_MARK}% to unlock the next lesson. Review the explanations and retake it.`
              : passed ? '🎉 Well done — you passed!' : 'Keep practising — review the explanations below and try again.'}
          </p>
          {result.serverValidated
            ? <p className="text-xs muted mt-2">Score graded by the server from the official question bank — not calculated in your browser.</p>
            : <p className="text-xs muted mt-2">This assessment includes an admin-published custom lesson, so it was graded on this device from that lesson&apos;s published question bank — not from the server&apos;s official bank.</p>}
        </div>
        <div className="flex flex-col gap-3">
          {result.graded.map((g, i) => (
            <div key={i} className={`glass p-4 border-l-4 ${g.chosen === g.correct ? '!border-l-accent' : '!border-l-danger'}`}>
              <p className="font-medium break-words">Q{i + 1}. {g.q}</p>
              <p className="text-sm mt-2 break-words">Your answer: <strong>{g.chosen >= 0 ? g.options[g.chosen] : 'No answer'}</strong> {g.chosen === g.correct ? '✓ Correct' : '✗ Incorrect'}</p>
              {g.chosen !== g.correct && <p className="text-sm mt-1 text-accent break-words">Correct answer: {g.options[g.correct]}</p>}
              <p className="text-sm muted mt-1 leading-relaxed break-words">Explanation: {g.explanation}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={retake} className="btn-primary">Retake this assessment</button>
          {passed && nextHref && <Link href={nextHref} className="btn-ghost">Continue to the next lesson →</Link>}
          <Link href="/app/assessments" className="btn-ghost">Assessment history</Link>
          <Link href="/app/dashboard" className="btn-ghost">Back to dashboard</Link>
        </div>
        <p className="text-xs muted">Retaking reshuffles the questions and answer options again — no two attempts are in the same order.</p>
      </div>
    );
  }

  const answered = Object.keys(answers).length;
  const mm = Math.floor(secondsLeft / 60);
  const ss = String(secondsLeft % 60).padStart(2, '0');

  if (!shuffled) {
    return (
      <div className="flex flex-col gap-4">
        <div className="glass p-5"><div className="skeleton h-6 w-2/3 mb-2" /><div className="skeleton h-4 w-1/3" /></div>
        <div className="glass p-5"><div className="skeleton h-4 w-full mb-3" /><div className="skeleton h-10 w-full mb-2" /><div className="skeleton h-10 w-full" /></div>
        <p className="text-sm muted">Preparing your questions…</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="glass p-5 flex flex-wrap items-center justify-between gap-3">
        <div className="min-w-0">
          <h1 className="text-xl font-bold break-words">{title}</h1>
          <p className="muted text-sm mt-0.5">{shuffled.length} questions · Pass mark {PASS_MARK}% · Answers are hidden until you submit</p>
          <p className="text-xs muted mt-1">🔀 Questions and answer options reshuffle on every retake.</p>
        </div>
        {timeLimitSec ? <p className={`font-bold text-lg shrink-0 ${secondsLeft < 120 ? 'text-danger' : ''}`}>⏱ {mm}:{ss} left</p> : <p className="text-sm muted shrink-0">Answered {answered}/{shuffled.length}</p>}
      </div>
      {error && <p className="text-sm text-danger bg-danger/10 border border-danger/30 rounded-lg px-3 py-2 break-words">{error}</p>}
      {shuffled.map((q, i) => (
        <div key={`${attemptNo}-${q.ref}`} className="glass p-5">
          <p className="font-semibold break-words">Q{i + 1}. {q.q}</p>
          <div className="grid gap-2 mt-3">
            {q.options.map((opt, oi) => {
              const sel = answers[i] === oi;
              return (
                <button key={oi} onClick={() => setAnswers(a => ({ ...a, [i]: oi }))}
                  className={`text-left p-3 rounded-xl border text-sm transition-colors break-words ${sel ? 'bg-accent/15 border-accent/50' : 'bg-ink/5 border-ink/10 hover:bg-ink/10'}`}>
                  <span className="font-bold mr-2">{'ABCD'[oi]}.</span>{opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <button onClick={() => submit(false)} disabled={submitting || answered < shuffled.length} className="btn-primary w-full md:w-auto self-start">
        {submitting ? 'Grading…' : answered < shuffled.length ? `Answer all questions to submit (${answered}/${shuffled.length})` : 'Submit assessment'}
      </button>
      {timeLimitSec ? <p className="text-xs muted">The assessment submits automatically when the timer reaches zero.</p> : null}
    </div>
  );
}

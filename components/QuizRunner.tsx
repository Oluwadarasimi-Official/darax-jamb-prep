'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useDb } from './db-context';
import { uid, SUBJECT_NAMES } from '../lib/store';
import { mirrorAttempt, mirrorNotification } from '../lib/sync';
import { PASS_MARK } from '../lib/progression';

export interface RunnerQ {
  ref: string; q: string; options: string[]; subjectId?: string;
  /** Present ONLY for admin-published custom lessons, whose question bank lives
   *  on this device (no server bank exists for them). The server grades those
   *  from this supplied key and marks the result serverValidated:false. */
  answer?: number; explanation?: string;
}
export interface GradeResult { q: string; options: string[]; chosen: number; correct: number; explanation: string; subjectId?: string; }

/** One displayed question: its original ref + options in display order, with
 *  the map from each displayed option index back to its original option index. */
interface ShuffledQ { ref: string; q: string; options: string[]; origOptionIdx: number[]; answer?: number; explanation?: string; subjectId?: string; }

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
function buildShuffle(questions: RunnerQ[], preserveQuestionOrder = false): ShuffledQ[] {
  const rand = mulberry32((Date.now() ^ Math.floor(Math.random() * 0xffffffff)) >>> 0);
  const order = preserveQuestionOrder ? questions.map((_, i) => i) : shuffleWith(questions.map((_, i) => i), rand);
  return order.map(i => {
    const q = questions[i];
    const optOrder = shuffleWith(q.options.map((_, oi) => oi), rand);
    return { ref: q.ref, q: q.q, options: optOrder.map(oi => q.options[oi]), origOptionIdx: optOrder, answer: q.answer, explanation: q.explanation, subjectId: q.subjectId };
  });
}

export function QuizRunner({ questions, title, kind, subjectId, lessonId, timeLimitSec, nextHref, examMode = false }: {
  questions: RunnerQ[]; title: string; kind: 'lesson' | 'topic' | 'subject' | 'mixed' | 'mock' | 'utme';
  subjectId: string; lessonId?: string; timeLimitSec?: number; nextHref?: string; examMode?: boolean;
}) {
  const { db, user, setDb } = useDb();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ score: number; correct: number; total: number; graded: GradeResult[]; serverValidated: boolean; utmeScore400?: number; utmeScore400Exact?: number; subjectScores?: Record<string, { correct: number; total: number; score: number }> } | null>(null);
  const [error, setError] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(timeLimitSec || 0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [attemptNo, setAttemptNo] = useState(0);
  const [shuffled, setShuffled] = useState<ShuffledQ[] | null>(null);
  const startedAt = useRef(Date.now());
  const submittedRef = useRef(false);

  // Fresh seeded shuffle on first load AND on every retake (attemptNo changes).
  // Built in an effect so server render and first client render match (no
  // hydration mismatch from Math.random during render).
  useEffect(() => {
    setShuffled(buildShuffle(questions, examMode));
    setCurrentIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attemptNo, examMode]);

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
      const customQuestions: Record<string, { q: string; options: string[]; answer: number; explanation: string; subjectId?: string }> = {};
      for (const q of shuffled) {
        if (typeof q.answer === 'number') {
          // Rebuild the ORIGINAL option order: display index d holds original
          // option origOptionIdx[d], so original[oi] = display[indexOf(oi)].
          customQuestions[q.ref] = { q: q.q, options: q.options.map((_, oi) => q.options[q.origOptionIdx.indexOf(oi)]), answer: q.answer, explanation: q.explanation || '', subjectId: q.subjectId };
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
        id: attemptId, userId: user.id, lessonId, subjectId, department: user.department || 'science', kind, title,
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
      setResult({ score: data.score, correct: data.correct, total: data.total, graded: data.graded, serverValidated: !!data.serverValidated, utmeScore400: data.utmeScore400, utmeScore400Exact: data.utmeScore400Exact, subjectScores: data.subjectScores });
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

  const utmeBreakdown = result?.subjectScores;
  const utmeRawScore = result?.utmeScore400Exact ?? result?.utmeScore400 ?? 0;
  const examSubjects = examMode
    ? Array.from(new Set(shuffled?.map(item => item.subjectId).filter((id): id is string => !!id) || []))
    : [];
  const subjectQuestionIndexes = (subjectId: string) => (shuffled || [])
    .map((item, index) => item.subjectId === subjectId ? index : -1)
    .filter(index => index >= 0);

  const retake = () => {
    setResult(null); setAnswers({}); setCurrentIndex(0); submittedRef.current = false;
    startedAt.current = Date.now();
    if (timeLimitSec) setSecondsLeft(timeLimitSec);
    setAttemptNo(n => n + 1); // fresh seed → brand-new question AND option order
  };

  if (result) {
    const passed = result.score >= PASS_MARK;
    return (
      <div className="flex flex-col gap-4">
        <div className="glass p-6 text-center">
          {kind === 'utme' ? <>
            <p className="text-5xl font-extrabold">{Math.round(utmeRawScore)}<span className="text-2xl muted"> / 400</span></p>
            <p className="mt-1 font-semibold">DARAX equal-subject practice benchmark</p>
            <p className="text-sm muted mt-1">{result.correct} correct · {result.total - result.correct} incorrect or unanswered · {result.total} questions</p>
          </> : <>
            <p className="text-5xl font-extrabold">{result.score}%</p>
            <p className="mt-1 font-semibold">{result.correct} correct out of {result.total}</p>
          </>}
          {kind === 'utme' && utmeBreakdown && <div className="mt-5 text-left border-t border-ink/10 pt-4">
            <div className="mb-3"><p className="text-xs muted uppercase tracking-wide">Subject breakdown · each subject is out of 100</p><p className="text-xs muted mt-1">DARAX practice conversion scales each subject's accuracy to 100. JAMB does not publish its complete raw-answer conversion algorithm.</p></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">{Object.entries(utmeBreakdown).map(([sid, row]) => <div key={sid} className="glass-soft p-3 rounded-xl"><p className="text-xs muted">{SUBJECT_NAMES[sid] || sid}</p><p className="text-lg font-bold">{row.score.toFixed(2)}<span className="text-xs muted"> / 100</span></p><p className="text-xs muted">{row.correct}/{row.total} correct</p></div>)}</div>
          </div>}
          {kind === 'utme' ? <p className="mt-2 font-semibold text-accent">Examination completed. Review your subject performance and explanations below.</p> : <p className={`mt-2 font-semibold ${passed ? 'text-accent' : 'text-warn'}`}>
            {kind === 'lesson'
              ? passed ? '🎉 Passed! The next lesson is now unlocked.' : `Not yet — you need ${PASS_MARK}% to unlock the next lesson. Review the explanations and retake it.`
              : passed ? '🎉 Well done — you passed!' : 'Keep practising — review the explanations below and try again.'}
          </p>}
          {result.serverValidated
            ? <p className="text-xs muted mt-2">Answers were graded by the server against the published DARAX question bank. This is a practice assessment, not an official JAMB result.</p>
            : <p className="text-xs muted mt-2">This assessment includes an admin-published custom lesson, so it was graded on this device from that lesson&apos;s published question bank — not from the server-side bank.</p>}
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
  const mm = Math.floor((secondsLeft % 3600) / 60);
  const hh = Math.floor(secondsLeft / 3600);
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
        {timeLimitSec ? <p className={`font-bold text-lg shrink-0 ${secondsLeft < 120 ? 'text-danger' : ''}`}>⏱ {examMode ? `${hh}:${String(mm).padStart(2, '0')}:${ss}` : `${mm}:${ss}`} left</p> : <p className="text-sm muted shrink-0">Answered {answered}/{shuffled.length}</p>}
      </div>
      {error && <p className="text-sm text-danger bg-danger/10 border border-danger/30 rounded-lg px-3 py-2 break-words">{error}</p>}
      {examMode ? (() => {
        const q = shuffled[currentIndex];
        const unanswered = shuffled.length - answered;
        return <>
          <div className="glass p-4">
            <div className="mb-4">
              <p className="text-xs font-semibold muted mb-2">JUMP TO SUBJECT</p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {examSubjects.map(subject => {
                  const indexes = subjectQuestionIndexes(subject);
                  const done = indexes.filter(index => answers[index] !== undefined).length;
                  const active = q.subjectId === subject;
                  return <button type="button" key={subject} onClick={() => {
                    const target = indexes.find(index => answers[index] === undefined) ?? indexes[0];
                    if (target !== undefined) setCurrentIndex(target);
                  }} aria-current={active ? 'true' : undefined}
                    className={`rounded-xl border px-3 py-2.5 text-left transition-colors ${active ? 'bg-accent text-white border-accent' : 'bg-ink/5 border-ink/10 hover:border-accent/50'}`}>
                    <span className="block text-xs font-bold">{SUBJECT_NAMES[subject] || subject}</span>
                    <span className={`block text-[11px] mt-1 ${active ? 'text-white/80' : 'muted'}`}>{done}/{indexes.length} answered</span>
                  </button>;
                })}
              </div>
            </div>
            <div className="flex items-center justify-between gap-3 text-sm"><strong>Question {currentIndex + 1} of {shuffled.length}</strong><span className="muted">{answered} answered · {unanswered} remaining</span></div>
            <div className="h-2 rounded-full bg-ink/10 mt-3 overflow-hidden"><div className="h-full rounded-full bg-accent" style={{ width: `${(answered / shuffled.length) * 100}%` }} /></div>
            <div className="grid grid-cols-8 sm:grid-cols-12 gap-1.5 mt-4 max-h-36 overflow-y-auto">{shuffled.map((item, index) => <button type="button" key={`${attemptNo}-nav-${item.ref}`} onClick={() => setCurrentIndex(index)} aria-label={`Go to question ${index + 1}`} className={`aspect-square rounded-lg border text-xs font-semibold ${index === currentIndex ? 'bg-accent text-white border-accent' : answers[index] !== undefined ? 'bg-accent/15 border-accent/40 text-ink' : 'bg-ink/5 border-ink/10 text-ink/70'}`}>{index + 1}</button>)}</div>
            <div className="flex flex-wrap gap-3 text-[11px] muted mt-3"><span>Current</span><span>Answered</span><span>Not answered</span></div>
          </div>
          <div className="glass p-5">
            <div className="flex items-center justify-between gap-2 mb-4"><span className="text-xs font-bold uppercase tracking-wide text-accent">{SUBJECT_NAMES[q.subjectId || ''] || 'UTME'}</span><span className="text-xs muted">Question {currentIndex + 1}</span></div>
            <p className="font-semibold text-base md:text-lg break-words leading-relaxed">{q.q}</p>
            <div className="grid gap-2 mt-4">{q.options.map((opt, oi) => { const sel = answers[currentIndex] === oi; return <button key={oi} onClick={() => setAnswers(a => ({ ...a, [currentIndex]: oi }))} className={`text-left p-3.5 rounded-xl border text-sm transition-colors break-words ${sel ? 'bg-accent/15 border-accent/50' : 'bg-ink/5 border-ink/10 hover:bg-ink/10'}`}><span className="font-bold mr-2">{'ABCD'[oi]}.</span>{opt}</button>; })}</div>
            <div className="flex items-center justify-between gap-3 mt-6"><button type="button" onClick={() => setCurrentIndex(i => Math.max(0, i - 1))} disabled={currentIndex === 0} className="btn-ghost disabled:opacity-40">← Previous</button><button type="button" onClick={() => setCurrentIndex(i => Math.min(shuffled.length - 1, i + 1))} disabled={currentIndex === shuffled.length - 1} className="btn-primary disabled:opacity-40">Next →</button></div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3"><p className="text-xs muted">Answer all questions before submission. Keyboard: A–D select · N/P navigate · S then Y submit.</p><button onClick={() => { if (window.confirm('Submit your completed examination? You cannot change answers afterwards.')) submit(false); }} disabled={submitting || answered !== shuffled.length} className="btn-primary disabled:opacity-40">{submitting ? 'Submitting…' : answered !== shuffled.length ? `Answer all questions (${answered}/${shuffled.length})` : 'Submit examination'}</button></div>
        </>;
      })() : shuffled.map((q, i) => (
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
      {!examMode && <button onClick={() => submit(false)} disabled={submitting || answered < shuffled.length} className="btn-primary w-full md:w-auto self-start">
        {submitting ? 'Grading…' : answered < shuffled.length ? `Answer all questions to submit (${answered}/${shuffled.length})` : 'Submit assessment'}
      </button>}
      {timeLimitSec ? <p className="text-xs muted">The assessment submits automatically when the timer reaches zero.</p> : null}
    </div>
  );
}

'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useDb } from './db-context';
import { uid, notify } from '../lib/store';
import { PASS_MARK } from '../lib/progression';

export interface RunnerQ { ref: string; q: string; options: string[]; }
export interface GradeResult { q: string; options: string[]; chosen: number; correct: number; explanation: string; }

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
  const startedAt = useRef(Date.now());
  const submittedRef = useRef(false);

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
    if (!user || submittedRef.current) return;
    submittedRef.current = true;
    setSubmitting(true); setError('');
    try {
      const res = await fetch('/api/attempts', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id, kind, title, subjectId, lessonId,
          refs: questions.map(q => q.ref),
          answers: questions.map((_, i) => answers[i] ?? -1),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Could not grade the assessment.');
      const durationSec = Math.round((Date.now() - startedAt.current) / 1000);
      const attemptId = uid('att');
      // Persist ONLY the server-graded result — never a client-computed score.
      setDb(d => {
        d.attempts.push({
          id: attemptId, userId: user.id, lessonId, subjectId, kind, title,
          total: data.total, correct: data.correct, score: data.score,
          answers: data.graded.map((g: GradeResult) => ({ q: g.q, chosen: g.chosen, correct: g.correct })),
          startedAt: new Date(startedAt.current).toISOString(), completedAt: new Date().toISOString(), durationSec,
        });
        if (lessonId) {
          const list = d.progress[user.id] || (d.progress[user.id] = []);
          const p = list.find(x => x.lessonId === lessonId);
          if (p) {
            p.attempts += 1;
            p.bestScore = Math.max(p.bestScore, data.score);
            if (data.score >= PASS_MARK) { p.completed = true; p.completedAt = new Date().toISOString(); }
            p.timeSpentSec += durationSec;
          } else {
            list.push({ lessonId, completed: data.score >= PASS_MARK, bestScore: data.score, attempts: 1, completedAt: data.score >= PASS_MARK ? new Date().toISOString() : undefined, timeSpentSec: durationSec });
          }
        }
        if (d.profiles.find(p => p.id === user.id)?.notifyPrefs?.results !== false) {
          notify(d, user.id, `Assessment result: ${data.score}%`, `You scored ${data.correct} out of ${data.total} (${data.score}%) on “${title}”.${data.score >= PASS_MARK ? ' Well done — you passed!' : ' Keep practising — retake it to improve.'}`, 'result', '/app/assessments');
        }
        return d;
      });
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
          {result.serverValidated && <p className="text-xs muted mt-2">Score graded by the server from the official question bank — not calculated in your browser.</p>}
        </div>
        <div className="flex flex-col gap-3">
          {result.graded.map((g, i) => (
            <div key={i} className={`glass p-4 border-l-4 ${g.chosen === g.correct ? '!border-l-accent' : '!border-l-danger'}`}>
              <p className="font-medium">Q{i + 1}. {g.q}</p>
              <p className="text-sm mt-2">Your answer: <strong>{g.chosen >= 0 ? g.options[g.chosen] : 'No answer'}</strong> {g.chosen === g.correct ? '✓ Correct' : '✗ Incorrect'}</p>
              {g.chosen !== g.correct && <p className="text-sm mt-1 text-accent">Correct answer: {g.options[g.correct]}</p>}
              <p className="text-sm muted mt-1 leading-relaxed">Explanation: {g.explanation}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <button onClick={() => { setResult(null); setAnswers({}); submittedRef.current = false; startedAt.current = Date.now(); }} className="btn-primary">Retake this assessment</button>
          {passed && nextHref && <Link href={nextHref} className="btn-ghost">Continue to the next lesson →</Link>}
          <Link href="/app/assessments" className="btn-ghost">Assessment history</Link>
          <Link href="/app/dashboard" className="btn-ghost">Back to dashboard</Link>
        </div>
      </div>
    );
  }

  const answered = Object.keys(answers).length;
  const mm = Math.floor(secondsLeft / 60);
  const ss = String(secondsLeft % 60).padStart(2, '0');

  return (
    <div className="flex flex-col gap-4">
      <div className="glass p-5 flex flex-wrap items-center justify-between gap-3">
        <div><h1 className="text-xl font-bold">{title}</h1><p className="muted text-sm mt-0.5">{questions.length} questions · Pass mark {PASS_MARK}% · Answers are hidden until you submit</p></div>
        {timeLimitSec ? <p className={`font-bold text-lg ${secondsLeft < 120 ? 'text-danger' : ''}`}>⏱ {mm}:{ss} left</p> : <p className="text-sm muted">Answered {answered}/{questions.length}</p>}
      </div>
      {error && <p className="text-sm text-danger bg-danger/10 border border-danger/30 rounded-lg px-3 py-2">{error}</p>}
      {questions.map((q, i) => (
        <div key={q.ref} className="glass p-5">
          <p className="font-semibold">Q{i + 1}. {q.q}</p>
          <div className="grid gap-2 mt-3">
            {q.options.map((opt, oi) => {
              const sel = answers[i] === oi;
              return (
                <button key={oi} onClick={() => setAnswers(a => ({ ...a, [i]: oi }))}
                  className={`text-left p-3 rounded-xl border text-sm transition-colors ${sel ? 'bg-accent/15 border-accent/50' : 'bg-ink/5 border-ink/10 hover:bg-ink/10'}`}>
                  <span className="font-bold mr-2">{'ABCD'[oi]}.</span>{opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <button onClick={() => submit(false)} disabled={submitting || answered < questions.length} className="btn-primary w-full md:w-auto self-start">
        {submitting ? 'Grading…' : answered < questions.length ? `Answer all questions to submit (${answered}/${questions.length})` : 'Submit assessment'}
      </button>
      {timeLimitSec ? <p className="text-xs muted">The assessment submits automatically when the timer reaches zero.</p> : null}
    </div>
  );
}

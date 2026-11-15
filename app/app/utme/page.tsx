'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useDb } from '@/components/db-context';
import { QuizRunner, type RunnerQ } from '@/components/QuizRunner';
import { getSubject, getSubjectLessons } from '@/lib/curriculum';
import { SCIENCE_SUBJECTS } from '@/lib/store';
import { GlassCard } from '@/components/ui';

function pick<T>(items: T[], count: number): T[] {
  const pool = [...items];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

export default function UTMEPage() {
  const { user } = useDb();
  const [questions, setQuestions] = useState<RunnerQ[] | null>(null);
  const [error, setError] = useState('');

  if (!user) return null;

  const selected = user.subjects || [];
  const optionalSubjects = selected.filter(id => id !== 'english');
  const subjectOrder = ['english', ...optionalSubjects];

  const startExam = () => {
    setError('');
    if (!selected.includes('english') || optionalSubjects.length !== 3 || new Set(subjectOrder).size !== 4
      || optionalSubjects.some(id => !SCIENCE_SUBJECTS.includes(id)) || subjectOrder.some(id => !getSubject(id))) {
      setError('Your profile must contain Use of English and exactly three valid science subjects. Please review your subject selection in your profile.');
      return;
    }

    const exam: RunnerQ[] = [];
    for (const subjectId of subjectOrder) {
      const required = subjectId === 'english' ? 60 : 40;
      const pool: RunnerQ[] = getSubjectLessons(subjectId).flatMap(lesson =>
        lesson.quiz.map((item, index) => ({
          ref: `${lesson.id}:${index}`,
          q: item.q,
          options: [...item.options],
          subjectId,
        }))
      );
      if (pool.length < required) {
        setError(`The ${getSubject(subjectId)?.name || subjectId} question bank currently has ${pool.length} questions; ${required} are required. The examination was not started.`);
        return;
      }
      exam.push(...pick(pool, required));
    }
    setQuestions(exam);
  };

  if (questions) {
    return <QuizRunner
      questions={questions}
      title="Full UTME Simulation"
      kind="utme"
      subjectId="mixed"
      timeLimitSec={120 * 60}
      examMode
    />;
  }

  return (
    <div className="max-w-3xl flex flex-col gap-5">
      <div>
        <p className="text-xs font-bold tracking-[0.18em] uppercase text-accent">Official Darax · Examination Centre</p>
        <h1 className="text-2xl md:text-3xl font-bold mt-2">Full UTME Simulation</h1>
        <p className="muted text-sm mt-2">A complete, timed CBT sitting based on your registered subject combination.</p>
      </div>
      <GlassCard>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div><p className="text-sm muted">Examination format</p><p className="text-3xl font-extrabold mt-1">180 <span className="text-base muted font-medium">questions</span></p></div>
          <div className="text-right"><p className="text-sm muted">Total duration</p><p className="text-3xl font-extrabold mt-1">2:00 <span className="text-base muted font-medium">hours</span></p></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-5">
          {subjectOrder.map(id => <div key={id} className="glass-soft rounded-xl p-3"><p className="text-xs muted">{getSubject(id)?.name || id}</p><p className="text-xl font-bold">{id === 'english' ? 60 : 40} <span className="text-xs muted">questions</span></p></div>)}
        </div>
        <div className="border-t border-ink/10 mt-5 pt-4">
          <h2 className="font-bold">Before you begin</h2>
          <ul className="list-disc pl-5 mt-2 flex flex-col gap-2 text-sm muted leading-relaxed">
            <li>One continuous 120-minute timer covers all four subjects.</li>
            <li>Use the question palette to jump between questions. Your selected answers remain saved while you navigate.</li>
            <li>You may leave questions unanswered and submit, but unanswered questions receive no marks. The exam submits automatically when time expires.</li>
            <li>Questions and answer options are shuffled for each sitting. Correct answers and explanations appear only after submission.</li>
            <li>Results are server-graded and contribute to your DARAX Top Scorers and Top Scholars calculations.</li>
          </ul>
        </div>
        <div className="mt-4 rounded-xl border border-ink/10 p-3 text-xs muted leading-relaxed">
          Question-bank notice: this first release uses original DARAX JAMB-standard practice questions from the platform curriculum. They are not represented as copied historical JAMB past questions. Authorized/licensed historical papers can be added separately.
        </div>
        {error && <p role="alert" className="text-sm text-danger bg-danger/10 border border-danger/20 rounded-xl p-3 mt-4">{error}</p>}
        <button onClick={startExam} className="btn-primary w-full mt-5">Start full examination</button>
      </GlassCard>
      <Link href="/app/assessments" className="text-sm text-accent underline">← Back to assessments</Link>
    </div>
  );
}

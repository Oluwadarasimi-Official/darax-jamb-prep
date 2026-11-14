'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useDb } from '@/components/db-context';
import { getSubjectLessons } from '@/lib/curriculum';
import { QuizRunner, type RunnerQ } from '@/components/QuizRunner';
import { GlassCard } from '@/components/ui';

function pick<T>(arr: T[], n: number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a.slice(0, n);
}

export default function MockPage() {
  const { user } = useDb();
  const [started, setStarted] = useState(false);
  const [qs, setQs] = useState<RunnerQ[] | null>(null);
  if (!user) return null;

  const start = () => {
    const pool: RunnerQ[] = [];
    for (const sid of user.subjects) {
      for (const l of getSubjectLessons(sid)) l.quiz.forEach((q, i) => pool.push({ ref: `${l.id}:${i}`, q: q.q, options: [...q.options] }));
    }
    setQs(pick(pool, 20));
    setStarted(true);
  };

  if (started && qs) {
    return <QuizRunner questions={qs} title="JAMB-Style Mock Examination" kind="mock" subjectId={user.subjects[0]} timeLimitSec={30 * 60} />;
  }

  return (
    <div className="flex flex-col gap-5 max-w-2xl">
      <h1 className="text-2xl font-bold">Timed JAMB-Style Mock Examination</h1>
      <GlassCard>
        <h2 className="font-bold text-lg">Before you start</h2>
        <ul className="list-disc pl-5 mt-2 flex flex-col gap-1.5 text-sm leading-relaxed">
          <li>20 questions drawn at random from all four of your subjects.</li>
          <li>30 minutes on the clock. The exam submits automatically when time expires.</li>
          <li>Pass mark is 70%. Your result is graded by the server and saved to your assessment history.</li>
          <li>These are original practice questions written for this platform — they are not official JAMB past questions.</li>
        </ul>
        <button onClick={start} className="btn-primary mt-5">Start mock exam — 30 minutes</button>
        <p className="text-xs muted mt-3">Make sure you have a stable connection and 30 uninterrupted minutes.</p>
      </GlassCard>
      <Link href="/app/assessments" className="text-sm text-emerald-300 underline">← Back to assessments</Link>
    </div>
  );
}

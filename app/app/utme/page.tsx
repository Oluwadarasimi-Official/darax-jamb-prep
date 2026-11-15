'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useDb } from '@/components/db-context';
import { QuizRunner, type RunnerQ } from '@/components/QuizRunner';
import { getSubject, getSubjectLessons } from '@/lib/curriculum';
import { GlassCard } from '@/components/ui';

const OPTIONAL = [
  { id: 'mathematics', label: 'Mathematics' },
  { id: 'physics', label: 'Physics' },
  { id: 'chemistry', label: 'Chemistry' },
  { id: 'biology', label: 'Biology' },
] as const;

type OptionalSubject = typeof OPTIONAL[number]['id'];

function seededShuffle<T>(items: T[], seed: number): T[] {
  const out = [...items];
  let state = seed >>> 0;
  const random = () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export default function UTMEPage() {
  const { user } = useDb();
  const [year, setYear] = useState('2026');
  const [duration, setDuration] = useState('120');
  const [selected, setSelected] = useState<OptionalSubject[]>(['mathematics', 'physics', 'chemistry']);
  const [questions, setQuestions] = useState<RunnerQ[] | null>(null);
  const [error, setError] = useState('');

  const subjectOrder = useMemo(() => ['english', ...selected], [selected]);

  if (!user) return null;

  const toggleSubject = (id: OptionalSubject) => {
    setSelected(current => current.includes(id)
      ? current.filter(item => item !== id)
      : current.length < 3 ? [...current, id] : current);
  };

  const startExam = () => {
    setError('');
    if (selected.length !== 3) {
      setError('Select exactly three optional science subjects. Use of English is compulsory.');
      return;
    }

    const exam: RunnerQ[] = [];
    const seedBase = Number(year) * 7919;
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
        setError(`The ${getSubject(subjectId)?.name || subjectId} bank has ${pool.length} available questions; ${required} are required. The exam has not started.`);
        return;
      }
      const subjectSeed = seedBase + subjectOrder.indexOf(subjectId) * 104729;
      exam.push(...seededShuffle(pool, subjectSeed).slice(0, required));
    }

    if (exam.length !== 180 || new Set(exam.map(item => item.ref)).size !== 180) {
      setError('The exam could not be assembled with 180 unique questions. Please try again.');
      return;
    }
    setQuestions(exam);
  };

  if (questions) {
    return <QuizRunner
      questions={questions}
      title={`${year} Year-organised Full UTME Practice`}
      kind="utme"
      subjectId="mixed"
      timeLimitSec={Number(duration) * 60}
      examMode
    />;
  }

  return (
    <div className="max-w-3xl flex flex-col gap-5">
      <div>
        <p className="text-xs font-bold tracking-[0.18em] uppercase text-accent">Official Darax · Examination Centre</p>
        <h1 className="text-2xl md:text-3xl font-bold mt-2">Full UTME Practice Session</h1>
        <p className="muted text-sm mt-2">Configure your sitting, confirm your subjects and begin a full 180-question CBT session.</p>
      </div>

      <GlassCard>
        <div className="flex items-center justify-between gap-3">
          <div><p className="text-sm muted">Full examination</p><p className="text-3xl font-extrabold mt-1">180 <span className="text-base muted font-medium">questions</span></p></div>
          <div className="text-right"><p className="text-sm muted">Standard structure</p><p className="text-2xl font-extrabold mt-1">60 + 40×3</p></div>
        </div>

        <div className="mt-6">
          <label htmlFor="practice-year" className="block text-sm font-semibold mb-2">Select practice year</label>
          <select id="practice-year" value={year} onChange={event => setYear(event.target.value)} className="w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm outline-none focus:border-accent">
            {Array.from({ length: 17 }, (_, index) => 2026 - index).map(value => <option key={value} value={value}>{value}</option>)}
          </select>
        </div>

        <div className="mt-5">
          <p className="text-sm font-semibold mb-2">Compulsory subject</p>
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-4 flex items-center justify-between">
            <div><p className="font-semibold">Use of English</p><p className="text-xs muted mt-1">Compulsory · 60 questions</p></div>
            <span className="text-accent font-bold">Included ✓</span>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between gap-2 mb-2"><p className="text-sm font-semibold">Choose exactly three other subjects</p><span className="text-xs muted">{selected.length}/3 selected</span></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {OPTIONAL.map(subject => {
              const active = selected.includes(subject.id);
              const disabled = !active && selected.length === 3;
              return <button key={subject.id} type="button" disabled={disabled} onClick={() => toggleSubject(subject.id)} aria-pressed={active}
                className={`rounded-xl border p-4 text-left flex items-center justify-between gap-3 transition-colors ${active ? 'border-accent bg-accent/10' : 'border-ink/10 bg-white/50 hover:border-accent/40'} ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}>
                <span className="font-semibold text-sm">{subject.label}</span>
                <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs ${active ? 'bg-accent text-white border-accent' : 'border-ink/25'}`}>{active ? '✓' : ''}</span>
              </button>;
            })}
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="exam-duration" className="block text-sm font-semibold mb-2">Choose examination duration</label>
          <select id="exam-duration" value={duration} onChange={event => setDuration(event.target.value)} className="w-full rounded-xl border border-ink/15 bg-white/70 px-4 py-3 text-sm outline-none focus:border-accent">
            <option value="90">1 hour 30 minutes</option>
            <option value="100">1 hour 40 minutes</option>
            <option value="110">1 hour 50 minutes</option>
            <option value="120">2 hours · Standard</option>
            <option value="150">2 hours 30 minutes</option>
            <option value="180">3 hours</option>
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5">
          {subjectOrder.map(id => <div key={id} className="glass-soft rounded-xl p-3"><p className="text-xs muted">{getSubject(id)?.name || id}</p><p className="text-xl font-bold">{id === 'english' ? 60 : 40} <span className="text-xs muted">questions</span></p></div>)}
        </div>

        <div className="border-t border-ink/10 mt-5 pt-4">
          <h2 className="font-bold">Exam rules and features</h2>
          <ul className="list-disc pl-5 mt-2 flex flex-col gap-2 text-sm muted leading-relaxed">
            <li>180 questions: 60 Use of English and 40 from each of your three selected subjects.</li>
            <li>One continuous timer. Your answers are kept as you move between questions.</li>
            <li>Use the question palette to navigate, review unanswered questions and return to any item.</li>
            <li>Submit when ready; the exam submits automatically when the timer reaches zero.</li>
            <li>Correct answers, explanations and subject performance are shown after submission.</li>
          </ul>
        </div>

        <div className="mt-4 rounded-xl border border-amber-500/25 bg-amber-500/5 p-3 text-xs muted leading-relaxed">
          Year selection creates a year-organised practice sitting; it does not mean these are authenticated JAMB papers from that year. Questions are original curriculum practice questions. Each sitting contains 180 distinct question references, but the same curriculum pool may be sampled in another year's sitting.
        </div>

        {error && <p role="alert" className="text-sm text-danger bg-danger/10 border border-danger/20 rounded-xl p-3 mt-4">{error}</p>}
        <button onClick={startExam} disabled={selected.length !== 3} className="btn-primary w-full mt-5 disabled:opacity-40">Start full examination</button>
      </GlassCard>
      <Link href="/app/assessments" className="text-sm text-accent underline">← Back to assessments</Link>
    </div>
  );
}

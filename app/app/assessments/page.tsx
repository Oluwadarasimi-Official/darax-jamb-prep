'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useDb } from '@/components/db-context';
import { ALL_LESSONS, getSubject, getSubjectLessons, isCustomLesson } from '@/lib/curriculum';
import { QuizRunner, type RunnerQ } from '@/components/QuizRunner';
import { GlassCard, EmptyState } from '@/components/ui';
import { BackLink } from '@/components/BackLink';

type Mode = 'menu' | 'topic' | 'subject' | 'mixed';

function pick<T>(arr: T[], n: number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a.slice(0, n);
}

export default function AssessmentsPage() {
  const { db, user } = useDb();
  const [mode, setMode] = useState<Mode>('menu');
  const [run, setRun] = useState<{ questions: RunnerQ[]; title: string; kind: 'topic' | 'subject' | 'mixed'; subjectId: string } | null>(null);
  const [topicSubject, setTopicSubject] = useState('english');
  const [topic, setTopic] = useState('');
  if (!user) return null;

  const attempts = db.attempts.filter(a => a.userId === user.id).sort((a, b) => b.completedAt.localeCompare(a.completedAt));
  const bySubject: Record<string, { n: number; avg: number }> = {};
  for (const a of attempts) {
    const e = bySubject[a.subjectId] || { n: 0, avg: 0 };
    e.avg = (e.avg * e.n + a.score) / (e.n + 1); e.n += 1;
    bySubject[a.subjectId] = e;
  }

  // Build a pool from lessons, attaching the answer key ONLY for custom
  // lessons (built-in questions are graded from the server bank).
  const poolFrom = (lessons: { id: string; quiz: { q: string; options: readonly string[]; answer: number; explanation: string }[] }[]): RunnerQ[] => {
    const qs: RunnerQ[] = [];
    for (const l of lessons) {
      const custom = isCustomLesson(db, l.id);
      l.quiz.forEach((q, i) => qs.push({
        ref: `${l.id}:${i}`, q: q.q, options: [...q.options],
        ...(custom ? { answer: q.answer, explanation: q.explanation } : {}),
      }));
    }
    return qs;
  };

  const startTopic = () => {
    const lessons = getSubjectLessons(topicSubject, db).filter(l => l.topic === topic);
    setRun({ questions: pick(poolFrom(lessons), 10), title: `${getSubject(topicSubject)!.name} — ${topic} Test`, kind: 'topic', subjectId: topicSubject });
  };
  const startSubject = (sid: string) => {
    setRun({ questions: pick(poolFrom(getSubjectLessons(sid, db)), 20), title: `${getSubject(sid)!.name} — Practice Examination`, kind: 'subject', subjectId: sid });
  };
  const startMixed = () => {
    const qs: RunnerQ[] = [];
    for (const sid of user.subjects) qs.push(...poolFrom(getSubjectLessons(sid, db)));
    setRun({ questions: pick(qs, 20), title: 'Mixed-Subject Revision Test', kind: 'mixed', subjectId: user.subjects[0] });
  };

  if (run) {
    return (
      <div>
        <button onClick={() => { setRun(null); setMode('menu'); }} className="btn-ghost text-sm mb-4">← Back to assessments</button>
        <QuizRunner questions={run.questions} title={run.title} kind={run.kind} subjectId={run.subjectId} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <BackLink href="/app/subjects" crumb="/app/subjects" crumbLabel="My subjects" />
      <div>
        <h1 className="text-2xl font-bold">Assessments</h1>
        <p className="muted text-sm mt-1">Lesson quizzes, topic tests, subject practice exams, mixed revision tests and timed JAMB-style mocks. Every score is graded by the server and saved to your history.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <GlassCard>
          <h2 className="font-bold text-lg">Topic test</h2>
          <p className="muted text-sm mt-1">10 questions drawn from one topic.</p>
          <select className="glass-input mt-3" value={topicSubject} onChange={e => { setTopicSubject(e.target.value); setTopic(''); }}>
            {user.subjects.map(s => <option key={s} value={s}>{getSubject(s)!.name}</option>)}
          </select>
          <select className="glass-input mt-2" value={topic} onChange={e => setTopic(e.target.value)}>
            <option value="">— Choose a topic —</option>
            {getSubject(topicSubject)!.topics.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <button onClick={startTopic} disabled={!topic} className="btn-primary w-full mt-3 text-sm">Start topic test</button>
        </GlassCard>
        <GlassCard>
          <h2 className="font-bold text-lg">Subject practice exam</h2>
          <p className="muted text-sm mt-1">20 questions across a whole subject.</p>
          <div className="flex flex-col gap-2 mt-3">
            {user.subjects.map(s => <button key={s} onClick={() => startSubject(s)} className="btn-ghost text-sm text-left">{getSubject(s)!.name} →</button>)}
          </div>
        </GlassCard>
        <GlassCard>
          <h2 className="font-bold text-lg">Mixed-subject revision</h2>
          <p className="muted text-sm mt-1">20 questions across all four of your subjects.</p>
          <button onClick={startMixed} className="btn-primary w-full mt-3 text-sm">Start mixed test</button>
          <div className="border-t border-ink/10 mt-4 pt-4">
            <h3 className="font-bold">Timed JAMB-style mock</h3>
            <p className="muted text-sm mt-1">20 questions · 30 minutes · auto-submits when time expires.</p>
            <Link href="/app/mock" className="btn-primary inline-block mt-3 text-sm">Open mock exam →</Link>
            <div className="border-t border-ink/10 mt-4 pt-4">
              <h3 className="font-bold">Full UTME simulation</h3>
              <p className="muted text-sm mt-1">180 questions · 2 hours · your selected four subjects.</p>
              <Link href="/app/utme" className="btn-primary inline-block mt-3 text-sm">Start full UTME →</Link>
            </div>
          </div>
        </GlassCard>
      </div>

      <GlassCard>
        <h2 className="font-bold text-lg mb-3">Performance by subject</h2>
        {Object.keys(bySubject).length === 0 ? (
          <p className="muted text-sm">No assessments yet. Your per-subject averages will appear here.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(bySubject).map(([sid, v]) => (
              <div key={sid} className="glass-soft p-3 text-center">
                <p className="text-xl font-extrabold">{Math.round(v.avg)}%</p>
                <p className="text-xs muted">{getSubject(sid)?.name || sid} · {v.n} assessment{v.n === 1 ? '' : 's'}</p>
              </div>
            ))}
          </div>
        )}
      </GlassCard>

      <GlassCard>
        <h2 className="font-bold text-lg mb-3">Assessment history</h2>
        {attempts.length === 0 ? (
          <EmptyState title="No assessments yet" body="Take a lesson quiz or start a topic test — your full history with scores will be listed here." />
        ) : (
          <div className="flex flex-col gap-2">
            {attempts.slice(0, 15).map(a => (
              <div key={a.id} className="glass-soft p-3 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-medium truncate">{a.title}</p>
                  <p className="text-xs muted">{new Date(a.completedAt).toLocaleString()} · {a.kind} · {a.correct}/{a.total} correct</p>
                </div>
                <span className={`font-bold shrink-0 ${a.score >= 70 ? 'text-accent' : 'text-warn'}`}>{a.score}%</span>
              </div>
            ))}
          </div>
        )}
      </GlassCard>
    </div>
  );
}

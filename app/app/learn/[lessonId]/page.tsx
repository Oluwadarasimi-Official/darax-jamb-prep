'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDb } from '@/components/db-context';
import { getLessonById } from '@/lib/curriculum';
import { isLessonUnlocked, orderedLessons } from '@/lib/progression';
import { GlassCard, EmptyState } from '@/components/ui';

export default function LearnPage() {
  const params = useParams();
  const id = String(params.lessonId);
  const { db, user, setDb } = useDb();
  const router = useRouter();
  const [startedAt] = useState(() => Date.now());
  const [showQuizLink, setShowQuizLink] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowQuizLink(true), 3000);
    return () => clearTimeout(t);
  }, []);

  if (!user) return null;
  const lesson = getLessonById(id);
  if (!lesson) return <EmptyState title="Lesson not found" body="This lesson does not exist." action={<Link href="/app/subjects" className="btn-primary">Back to subjects</Link>} />;
  const unlocked = isLessonUnlocked(db, user.id, id);
  if (!unlocked) {
    return (
      <EmptyState title="This lesson is locked" body="Score at least 70% on the previous lesson's quiz to unlock this lesson. You cannot skip ahead — the 70% rule is checked on every lesson." action={<Link href={`/app/subjects/${lesson.subjectId}`} className="btn-primary">Back to subject</Link>} />
    );
  }
  const lessons = orderedLessons(db, lesson.subjectId);
  const idx = lessons.findIndex(l => l.id === id);
  const prev = idx > 0 ? lessons[idx - 1] : null;
  const next = idx < lessons.length - 1 ? lessons[idx + 1] : null;
  const prog = (db.progress[user.id] || []).find(p => p.lessonId === id);
  const timeSpent = Math.max(1, Math.round((Date.now() - startedAt) / 1000));

  const recordTime = () => {
    setDb(d => {
      const list = d.progress[user.id] || (d.progress[user.id] = []);
      const p = list.find(x => x.lessonId === id);
      if (p) p.timeSpentSec += timeSpent;
      else list.push({ lessonId: id, completed: false, bestScore: 0, attempts: 0, timeSpentSec: timeSpent });
      return d;
    });
  };

  return (
    <div className="flex flex-col gap-5 max-w-4xl">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <Link href={`/app/subjects/${lesson.subjectId}`} className="text-sm text-accent underline">← Back to subject</Link>
        <span className="chip">{lesson.topic} · Lesson {lesson.order} of {lessons.length}</span>
      </div>
      <GlassCard>
        <h1 className="text-2xl font-bold">{lesson.title}</h1>
        <p className="muted text-sm mt-1">{lesson.subtopic}</p>
        {prog?.completed && <p className="text-sm text-accent mt-2">✓ Completed — best score {prog.bestScore}% · You can revisit this lesson anytime.</p>}
        <div className="prose-glass mt-4"><p>{lesson.introduction}</p></div>
      </GlassCard>

      <GlassCard>
        <h2 className="font-bold text-lg mb-2">Learning objectives</h2>
        <ul className="list-disc pl-5 flex flex-col gap-1 text-sm leading-relaxed">
          {lesson.objectives.map((o, i) => <li key={i}>{o}</li>)}
        </ul>
      </GlassCard>

      {lesson.sections.map((s, i) => (
        <GlassCard key={i}>
          <h2 className="font-bold text-lg mb-2">{s.heading}</h2>
          <div className="prose-glass">{s.body.split('\n\n').map((para, j) => <p key={j}>{para}</p>)}</div>
        </GlassCard>
      ))}

      <GlassCard>
        <h2 className="font-bold text-lg mb-3">Important definitions</h2>
        <div className="flex flex-col gap-2">
          {lesson.definitions.map((d, i) => (
            <div key={i} className="glass-soft p-3"><p className="font-semibold text-sm">{d.term}</p><p className="text-sm muted mt-0.5 leading-relaxed">{d.meaning}</p></div>
          ))}
        </div>
      </GlassCard>

      {lesson.formulas && lesson.formulas.length > 0 && (
        <GlassCard>
          <h2 className="font-bold text-lg mb-3">Formulas, laws and principles</h2>
          <div className="flex flex-col gap-2">
            {lesson.formulas.map((f, i) => <p key={i} className="glass-soft p-3 font-mono text-sm">{f}</p>)}
          </div>
        </GlassCard>
      )}

      <GlassCard>
        <h2 className="font-bold text-lg mb-3">Worked examples</h2>
        <div className="flex flex-col gap-4">
          {lesson.examples.map((ex, i) => (
            <div key={i} className="glass-soft p-4">
              <p className="font-semibold">{ex.title}</p>
              <p className="text-sm mt-1 leading-relaxed">{ex.problem}</p>
              <ol className="list-decimal pl-5 mt-2 flex flex-col gap-1 text-sm leading-relaxed">
                {ex.steps.map((s, j) => <li key={j}>{s}</li>)}
              </ol>
              <p className="text-sm mt-2 text-accent font-semibold">Answer: {ex.answer}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      <div className="grid md:grid-cols-2 gap-5">
        <GlassCard>
          <h2 className="font-bold text-lg mb-2">JAMB tips</h2>
          <ul className="list-disc pl-5 flex flex-col gap-1.5 text-sm leading-relaxed">{lesson.tips.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </GlassCard>
        <GlassCard>
          <h2 className="font-bold text-lg mb-2">Common mistakes</h2>
          <ul className="list-disc pl-5 flex flex-col gap-1.5 text-sm leading-relaxed">{lesson.mistakes.map((t, i) => <li key={i}>{t}</li>)}</ul>
        </GlassCard>
      </div>

      <GlassCard>
        <h2 className="font-bold text-lg mb-2">Key facts to remember</h2>
        <ul className="list-disc pl-5 flex flex-col gap-1.5 text-sm leading-relaxed">{lesson.facts.map((t, i) => <li key={i}>{t}</li>)}</ul>
      </GlassCard>

      <GlassCard>
        <h2 className="font-bold text-lg">Lesson assessment</h2>
        <p className="muted text-sm mt-1">5 questions. Score at least 70% to unlock the next lesson. You can retake as many times as you need.</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href={`/app/quiz/${lesson.id}`} onClick={recordTime} className="btn-primary">Take the lesson quiz →</Link>
          {prev && <Link href={`/app/learn/${prev.id}`} className="btn-ghost">← Previous lesson</Link>}
          {next && <span className="btn-ghost opacity-60 cursor-not-allowed">Next lesson 🔒 (pass the quiz first)</span>}
        </div>
        {!showQuizLink && <p className="text-xs muted mt-3">Take your time with the notes above — lessons completed in under 60 seconds do not count toward scholar rankings.</p>}
      </GlassCard>
    </div>
  );
}

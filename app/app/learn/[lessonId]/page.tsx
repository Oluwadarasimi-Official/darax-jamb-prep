'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDb } from '@/components/db-context';
import { getLessonById } from '@/lib/curriculum';
import { isLessonUnlocked, orderedLessons } from '@/lib/progression';
import { GlassCard, EmptyState } from '@/components/ui';

export default function LearnPage() {
  const params = useParams();
  const id = String(params.lessonId);
  const { db, user, setDb } = useDb();
  const [startedAt] = useState(() => Date.now());
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => { setSlideIndex(0); }, [id]);

  if (!user) return null;
  const lesson = getLessonById(id);
  if (!lesson) return <EmptyState title="Lesson not found" body="This lesson does not exist." action={<Link href="/app/subjects" className="btn-primary">Back to subjects</Link>} />;
  if (!isLessonUnlocked(db, user.id, id)) {
    return <EmptyState title="This lesson is locked" body="Score at least 70% on the previous lesson's quiz to unlock this lesson. You cannot skip ahead — the 70% rule is checked on every lesson." action={<Link href={'/app/subjects/' + lesson.subjectId} className="btn-primary">Back to subject</Link>} />;
  }

  const lessons = orderedLessons(db, lesson.subjectId);
  const idx = lessons.findIndex(l => l.id === id);
  const prev = idx > 0 ? lessons[idx - 1] : null;
  const next = idx < lessons.length - 1 ? lessons[idx + 1] : null;
  const prog = (db.progress[user.id] || []).find(p => p.lessonId === id);
  const timeSpent = Math.max(1, Math.round((Date.now() - startedAt) / 1000));

  const slides: { title: string; eyebrow: string; content: React.ReactNode }[] = [
    { title: 'Introduction', eyebrow: 'START HERE', content: <p className="text-sm leading-7">{lesson.introduction}</p> },
    { title: 'Learning objectives', eyebrow: 'WHAT YOU WILL LEARN', content: <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">{lesson.objectives.map((o, i) => <li key={i}>{o}</li>)}</ul> },
  ];
  lesson.sections.forEach((section, i) => slides.push({
    title: section.heading,
    eyebrow: 'LESSON NOTES · ' + (i + 1) + ' OF ' + lesson.sections.length,
    content: <div className="prose-glass space-y-3">{section.body.split('\n\n').map((para, j) => <p key={j} className="text-sm leading-7">{para}</p>)}</div>,
  }));
  if (lesson.definitions.length) slides.push({
    title: 'Important definitions', eyebrow: 'KEY TERMINOLOGY',
    content: <div className="grid gap-3 sm:grid-cols-2">{lesson.definitions.map((d, i) => <div key={i} className="glass-soft p-3"><p className="font-semibold text-sm">{d.term}</p><p className="text-sm muted mt-1 leading-relaxed">{d.meaning}</p></div>)}</div>,
  });
  if (lesson.formulas && lesson.formulas.length) slides.push({
    title: 'Formulas, laws and principles', eyebrow: 'QUICK REFERENCE',
    content: <div className="grid gap-2">{lesson.formulas.map((f, i) => <p key={i} className="glass-soft p-3 font-mono text-sm break-words">{f}</p>)}</div>,
  });
  lesson.examples.forEach((example, i) => slides.push({
    title: example.title, eyebrow: 'WORKED EXAMPLE · ' + (i + 1) + ' OF ' + lesson.examples.length,
    content: <div className="space-y-3"><div className="glass-soft p-3"><p className="text-xs font-semibold muted uppercase tracking-wide">Problem</p><p className="text-sm mt-1 leading-relaxed">{example.problem}</p></div><div><p className="text-xs font-semibold muted uppercase tracking-wide mb-2">Step-by-step solution</p><ol className="list-decimal pl-5 space-y-2 text-sm leading-relaxed">{example.steps.map((step, j) => <li key={j}>{step}</li>)}</ol></div><p className="rounded-xl bg-accent/10 border border-accent/20 p-3 text-sm font-semibold">Answer: {example.answer}</p></div>,
  }));
  if (lesson.tips.length) slides.push({ title: 'JAMB tips', eyebrow: 'EXAM SMARTER', content: <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">{lesson.tips.map((tip, i) => <li key={i}>{tip}</li>)}</ul> });
  if (lesson.mistakes.length) slides.push({ title: 'Common mistakes', eyebrow: 'WATCH OUT', content: <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">{lesson.mistakes.map((mistake, i) => <li key={i}>{mistake}</li>)}</ul> });
  if (lesson.facts.length) slides.push({ title: 'Key facts to remember', eyebrow: 'REVISION CHECKPOINT', content: <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">{lesson.facts.map((fact, i) => <li key={i}>{fact}</li>)}</ul> });
  slides.push({
    title: 'Lesson assessment', eyebrow: 'READY TO TEST YOURSELF',
    content: <div className="space-y-3"><p className="text-sm leading-relaxed">5 original practice questions. Score at least 70% to unlock the next lesson. You can retake the quiz as many times as you need.</p><p className="text-sm muted">Take your time with the notes. Lessons completed in under 60 seconds do not count toward scholar rankings.</p></div>,
  });

  const currentIndex = Math.min(slideIndex, slides.length - 1);
  const currentSlide = slides[currentIndex];
  const progress = Math.round(((currentIndex + 1) / slides.length) * 100);
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
        <Link href={'/app/subjects/' + lesson.subjectId} className="text-sm text-accent underline">← Back to subject</Link>
        <span className="chip">{lesson.topic} · Lesson {lesson.order} of {lessons.length}</span>
      </div>
      <GlassCard className="!p-4 sm:!p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0"><p className="text-xs font-semibold tracking-[0.14em] text-accent">{currentSlide.eyebrow}</p><h1 className="text-xl sm:text-2xl font-bold mt-2">{lesson.title}</h1><p className="muted text-sm mt-1">{lesson.subtopic}</p></div>
          {prog?.completed && <span className="chip shrink-0">✓ Completed · {prog.bestScore}%</span>}
        </div>
        <div className="mt-5 flex items-center justify-between gap-3"><span className="text-xs muted">Slide {currentIndex + 1} of {slides.length}</span><span className="text-xs muted tabular-nums">{progress}% complete</span></div>
        <div className="h-1.5 rounded-full bg-ink/10 overflow-hidden mt-2"><div className="h-full rounded-full bg-accent transition-all duration-300" style={{ width: progress + '%' }} /></div>
        <div className="glass-soft rounded-2xl p-4 sm:p-6 mt-5 min-h-[250px] flex flex-col justify-center gap-4">
          <h2 className="text-lg sm:text-xl font-bold">{currentSlide.title}</h2>
          {currentSlide.content}
        </div>
        <div className="flex items-center justify-between gap-3 mt-5">
          <button type="button" onClick={() => setSlideIndex(v => Math.max(0, v - 1))} disabled={currentIndex === 0} className="btn-ghost disabled:opacity-40 disabled:cursor-not-allowed">← Previous</button>
          {currentIndex < slides.length - 1 ? <button type="button" onClick={() => setSlideIndex(v => Math.min(slides.length - 1, v + 1))} className="btn-primary">Next slide →</button> : <Link href={'/app/quiz/' + lesson.id} onClick={recordTime} className="btn-primary">Take lesson quiz →</Link>}
        </div>
      </GlassCard>
      <div className="flex flex-wrap items-center justify-between gap-3">
        {prev ? <Link href={'/app/learn/' + prev.id} className="btn-ghost text-sm">← Previous lesson</Link> : <span />}
        {next && <span className="text-xs muted">Next lesson unlocks after a quiz score of 70% or higher.</span>}
      </div>
    </div>
  );
}

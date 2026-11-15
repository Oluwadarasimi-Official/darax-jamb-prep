'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDb } from '@/components/db-context';
import { getLessonById } from '@/lib/curriculum';
import { isLessonUnlocked, orderedLessons } from '@/lib/progression';
import { GlassCard, EmptyState, ProgressBar } from '@/components/ui';

type Slide =
  | { kind: 'intro'; label: string }
  | { kind: 'objectives'; label: string }
  | { kind: 'section'; label: string; index: number }
  | { kind: 'definitions'; label: string }
  | { kind: 'formulas'; label: string }
  | { kind: 'example'; label: string; index: number }
  | { kind: 'tips'; label: string }
  | { kind: 'mistakes'; label: string }
  | { kind: 'facts'; label: string }
  | { kind: 'quiz'; label: string };

export default function LearnPage() {
  const params = useParams();
  const id = String(params.lessonId);
  const { db, user, setDb } = useDb();
  const [startedAt] = useState(() => Date.now());
  const [slide, setSlide] = useState(0);
  const touchX = useRef<number | null>(null);

  const lesson = useMemo(() => getLessonById(id, db), [id, db]);
  const unlocked = useMemo(() => (user && lesson ? isLessonUnlocked(db, user.id, id) : false), [db, user, lesson, id]);

  const slides: Slide[] = useMemo(() => {
    if (!lesson) return [];
    const s: Slide[] = [
      { kind: 'intro', label: 'Introduction' },
      { kind: 'objectives', label: 'Objectives' },
      ...lesson.sections.map((sec, i): Slide => ({ kind: 'section', label: sec.heading, index: i })),
      { kind: 'definitions', label: 'Definitions' },
    ];
    if (lesson.formulas && lesson.formulas.length > 0) s.push({ kind: 'formulas', label: 'Formulas & Laws' });
    lesson.examples.forEach((ex, i) => s.push({ kind: 'example', label: ex.title, index: i }));
    s.push(
      { kind: 'tips', label: 'JAMB Tips' },
      { kind: 'mistakes', label: 'Common Mistakes' },
      { kind: 'facts', label: 'Key Facts' },
      { kind: 'quiz', label: 'Quiz' },
    );
    return s;
  }, [lesson]);

  const total = slides.length;
  const go = useCallback((n: number) => setSlide(s => Math.min(total - 1, Math.max(0, n))), [total]);
  const next = useCallback(() => go(slide + 1), [go, slide]);
  const prev = useCallback(() => go(slide - 1), [go, slide]);

  // Keyboard navigation.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  // Reset to the first slide when the lesson changes.
  useEffect(() => { setSlide(0); }, [id]);

  if (!user) return null;
  if (!lesson) return <EmptyState title="Lesson not found" body="This lesson does not exist." action={<Link href="/app/subjects" className="btn-primary">Back to subjects</Link>} />;
  if (!unlocked) {
    return (
      <EmptyState title="This lesson is locked" body="Score at least 70% on the previous lesson's quiz to unlock this lesson. You cannot skip ahead — the 70% rule is checked on every lesson." action={<Link href={`/app/subjects/${lesson.subjectId}`} className="btn-primary">Back to subject</Link>} />
    );
  }
  const lessons = orderedLessons(db, lesson.subjectId);
  const idx = lessons.findIndex(l => l.id === id);
  const prevLesson = idx > 0 ? lessons[idx - 1] : null;
  const nextLesson = idx < lessons.length - 1 ? lessons[idx + 1] : null;
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

  const current = slides[slide];
  const onTouchStart = (e: React.TouchEvent) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (dx < -50) next();
    else if (dx > 50) prev();
  };

  return (
    <div className="flex flex-col gap-5 max-w-4xl">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <Link href={`/app/subjects/${lesson.subjectId}`} className="text-sm text-accent underline">← Back to subject</Link>
        <span className="chip">{lesson.topic} · Lesson {lesson.order} of {lessons.length}</span>
      </div>

      <GlassCard>
        <h1 className="text-2xl font-bold break-words">{lesson.title}</h1>
        <p className="muted text-sm mt-1 break-words">{lesson.subtopic}</p>
        {prog?.completed && <p className="text-sm text-accent mt-2">✓ Completed — best score {prog.bestScore}% · You can revisit this lesson anytime.</p>}
      </GlassCard>

      {/* Slide progress */}
      <div className="glass p-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <p className="text-sm font-semibold min-w-0 break-words">Slide {slide + 1} of {total}: {current?.label}</p>
          <span className="text-sm muted shrink-0">{slide + 1}/{total}</span>
        </div>
        <ProgressBar value={((slide + 1) / total) * 100} className="mt-3" />
        <div className="flex flex-wrap gap-1.5 mt-3" role="tablist" aria-label="Lesson slides">
          {slides.map((s, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === slide}
              aria-label={`Go to slide ${i + 1}: ${s.label}`}
              onClick={() => go(i)}
              className={`min-w-0 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors break-words ${i === slide ? 'bg-accent/20 border-accent/50 text-ink' : 'bg-ink/5 border-ink/10 muted hover:bg-ink/10'}`}
            >
              {i + 1}. {s.label.length > 22 ? `${s.label.slice(0, 22)}…` : s.label}
            </button>
          ))}
        </div>
      </div>

      {/* One slide at a time */}
      <div
        key={slide}
        className="slide-enter"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <GlassCard>
          {current?.kind === 'intro' && (
            <div>
              <h2 className="font-bold text-lg mb-2">Introduction</h2>
              <div className="prose-glass"><p className="break-words">{lesson.introduction}</p></div>
            </div>
          )}
          {current?.kind === 'objectives' && (
            <div>
              <h2 className="font-bold text-lg mb-2">Learning objectives</h2>
              <p className="text-sm muted mb-3">By the end of this lesson, you should be able to:</p>
              <ul className="list-disc pl-5 flex flex-col gap-2 text-sm leading-relaxed">
                {lesson.objectives.map((o, i) => <li key={i} className="break-words">{o}</li>)}
              </ul>
            </div>
          )}
          {current?.kind === 'section' && (
            <div>
              <h2 className="font-bold text-lg mb-2 break-words">{lesson.sections[current.index].heading}</h2>
              <div className="prose-glass">{lesson.sections[current.index].body.split('\n\n').map((para, j) => <p key={j} className="break-words">{para}</p>)}</div>
            </div>
          )}
          {current?.kind === 'definitions' && (
            <div>
              <h2 className="font-bold text-lg mb-3">Important definitions</h2>
              <div className="flex flex-col gap-2">
                {lesson.definitions.map((d, i) => (
                  <div key={i} className="glass-soft p-3"><p className="font-semibold text-sm break-words">{d.term}</p><p className="text-sm muted mt-0.5 leading-relaxed break-words">{d.meaning}</p></div>
                ))}
              </div>
            </div>
          )}
          {current?.kind === 'formulas' && (
            <div>
              <h2 className="font-bold text-lg mb-3">Formulas, laws and principles</h2>
              <div className="flex flex-col gap-2">
                {(lesson.formulas || []).map((f, i) => <p key={i} className="glass-soft p-3 font-mono text-sm break-words overflow-x-auto">{f}</p>)}
              </div>
            </div>
          )}
          {current?.kind === 'example' && (
            <div>
              <h2 className="font-bold text-lg mb-2 break-words">Worked example {current.index + 1} of {lesson.examples.length}</h2>
              <div className="glass-soft p-4">
                <p className="font-semibold break-words">{lesson.examples[current.index].title}</p>
                <p className="text-sm mt-1 leading-relaxed break-words">{lesson.examples[current.index].problem}</p>
                <ol className="list-decimal pl-5 mt-2 flex flex-col gap-1 text-sm leading-relaxed">
                  {lesson.examples[current.index].steps.map((s, j) => <li key={j} className="break-words">{s}</li>)}
                </ol>
                <p className="text-sm mt-2 text-accent font-semibold break-words">Answer: {lesson.examples[current.index].answer}</p>
              </div>
            </div>
          )}
          {current?.kind === 'tips' && (
            <div>
              <h2 className="font-bold text-lg mb-2">JAMB tips</h2>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 text-sm leading-relaxed">{lesson.tips.map((t, i) => <li key={i} className="break-words">{t}</li>)}</ul>
            </div>
          )}
          {current?.kind === 'mistakes' && (
            <div>
              <h2 className="font-bold text-lg mb-2">Common mistakes</h2>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 text-sm leading-relaxed">{lesson.mistakes.map((t, i) => <li key={i} className="break-words">{t}</li>)}</ul>
            </div>
          )}
          {current?.kind === 'facts' && (
            <div>
              <h2 className="font-bold text-lg mb-2">Key facts to remember</h2>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 text-sm leading-relaxed">{lesson.facts.map((t, i) => <li key={i} className="break-words">{t}</li>)}</ul>
            </div>
          )}
          {current?.kind === 'quiz' && (
            <div>
              <h2 className="font-bold text-lg">Lesson assessment</h2>
              <p className="muted text-sm mt-1">15 questions. Score at least 70% to unlock the next lesson. You can retake as many times as you need — questions and answer options reshuffle on every retake.</p>
              <p className="text-xs muted mt-2">Take your time with the notes — lessons completed in under 60 seconds do not count toward scholar rankings.</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Link href={`/app/quiz/${lesson.id}`} onClick={recordTime} className="btn-primary">Take the lesson quiz →</Link>
                {prevLesson && <Link href={`/app/learn/${prevLesson.id}`} className="btn-ghost">← Previous lesson</Link>}
                {nextLesson && <span className="btn-ghost opacity-60 cursor-not-allowed">Next lesson 🔒 (pass the quiz first)</span>}
              </div>
            </div>
          )}
        </GlassCard>
      </div>

      {/* Slide controls */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <button onClick={prev} disabled={slide === 0} className="btn-ghost text-sm disabled:opacity-40">← Previous</button>
        <p className="text-xs muted text-center">Swipe left/right, or use ← → on your keyboard.</p>
        {slide < total - 1 ? (
          <button onClick={next} className="btn-primary text-sm">Next →</button>
        ) : (
          <Link href={`/app/quiz/${lesson.id}`} onClick={recordTime} className="btn-primary text-sm">Take the lesson quiz →</Link>
        )}
      </div>
    </div>
  );
}

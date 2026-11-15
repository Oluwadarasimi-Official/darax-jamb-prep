'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useDb } from '@/components/db-context';
import { getLessonById, isCustomLesson } from '@/lib/curriculum';
import { isLessonUnlocked, orderedLessons } from '@/lib/progression';
import { QuizRunner } from '@/components/QuizRunner';
import { EmptyState } from '@/components/ui';

export default function QuizPage() {
  const params = useParams();
  const id = String(params.lessonId);
  const { db, user } = useDb();
  if (!user) return null;
  const lesson = getLessonById(id, db);
  if (!lesson) return <EmptyState title="Quiz not found" body="This lesson does not exist." action={<Link href="/app/subjects" className="btn-primary">Back to subjects</Link>} />;
  if (!isLessonUnlocked(db, user.id, id)) {
    return <EmptyState title="This quiz is locked" body="Score at least 70% on the previous lesson's quiz to unlock this lesson and its quiz." action={<Link href={`/app/subjects/${lesson.subjectId}`} className="btn-primary">Back to subject</Link>} />;
  }
  const lessons = orderedLessons(db, lesson.subjectId);
  const idx = lessons.findIndex(l => l.id === id);
  const next = idx < lessons.length - 1 ? lessons[idx + 1] : null;
  const custom = isCustomLesson(db, id);
  const questions = lesson.quiz.map((q, i) => ({
    ref: `${lesson.id}:${i}`, q: q.q, options: [...q.options],
    // Custom lessons carry their answer key (no server bank exists for them);
    // built-in lessons are graded from the server bank and send no key.
    ...(custom ? { answer: q.answer, explanation: q.explanation } : {}),
  }));
  return (
    <QuizRunner
      questions={questions}
      title={`${lesson.title} — Lesson Quiz`}
      kind="lesson"
      subjectId={lesson.subjectId}
      lessonId={lesson.id}
      nextHref={next ? `/app/learn/${next.id}` : undefined}
    />
  );
}

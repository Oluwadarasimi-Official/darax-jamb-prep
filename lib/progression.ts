// Progression: the single shared 70% unlock rule, used by the UI AND by /api/attempts.
// A lesson is unlocked when it is the first lesson of a subject, or the previous
// lesson in that subject has a completed attempt scoring >= 70%.
import type { DB } from './store';
import { getLessonById, getSubjectLessons, type Lesson } from './curriculum';

export const PASS_MARK = 70;

/** Subject lessons with any admin reorder override applied (db.lessonOrder). */
export function orderedLessons(db: DB, subjectId: string): Lesson[] {
  const base = getSubjectLessons(subjectId);
  const order = db.lessonOrder?.[subjectId];
  if (!order || order.length === 0) return base;
  const byId = new Map(base.map(l => [l.id, l]));
  const out: Lesson[] = [];
  for (const id of order) { const l = byId.get(id); if (l) out.push(l); }
  for (const l of base) if (!order.includes(l.id)) out.push(l);
  return out;
}

export function isLessonUnlocked(db: DB, userId: string, lessonId: string): boolean {
  const lesson = getLessonById(lessonId);
  if (!lesson) return false;
  if (db.publishedOverrides[lessonId] === false) return false;
  const lessons = orderedLessons(db, lesson.subjectId);
  const idx = lessons.findIndex(l => l.id === lessonId);
  if (idx <= 0) return true;
  const prev = lessons[idx - 1];
  const prog = (db.progress[userId] || []).find(p => p.lessonId === prev.id);
  return !!prog?.completed && prog.bestScore >= PASS_MARK;
}

export function nextLessonFor(db: DB, userId: string, subjectId: string) {
  const lessons = orderedLessons(db, subjectId);
  for (const l of lessons) if (isLessonUnlocked(db, userId, l.id)) {
    const prog = (db.progress[userId] || []).find(p => p.lessonId === l.id);
    if (!prog?.completed) return l;
  }
  return lessons[lessons.length - 1] || null;
}

export function subjectProgress(db: DB, userId: string, subjectId: string) {
  const lessons = orderedLessons(db, subjectId);
  const mine = db.progress[userId] || [];
  const done = lessons.filter(l => mine.find(p => p.lessonId === l.id)?.completed).length;
  const unlocked = lessons.filter(l => isLessonUnlocked(db, userId, l.id)).length;
  return { total: lessons.length, completed: done, unlocked, percent: lessons.length ? Math.round((done / lessons.length) * 100) : 0 };
}

export function overallProgress(db: DB, userId: string, subjectIds: string[]) {
  let done = 0, total = 0;
  for (const s of subjectIds) { const p = subjectProgress(db, userId, s); done += p.completed; total += p.total; }
  return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
}

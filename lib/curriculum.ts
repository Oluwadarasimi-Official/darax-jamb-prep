// Curriculum index — aggregates the 8 per-subject files (112 lessons total).
import type { Lesson, SubjectDef } from './curriculum/types';
import type { DB } from './store';
import { SUBJECT as ENGLISH, LESSONS as ENGLISH_LESSONS } from './curriculum/english';
import { SUBJECT as MATHS, LESSONS as MATHS_LESSONS } from './curriculum/mathematics';
import { SUBJECT as PHYSICS, LESSONS as PHYSICS_LESSONS } from './curriculum/physics';
import { SUBJECT as CHEMISTRY, LESSONS as CHEMISTRY_LESSONS } from './curriculum/chemistry';
import { SUBJECT as BIOLOGY, LESSONS as BIOLOGY_LESSONS } from './curriculum/biology';
import { SUBJECT as AGRIC, LESSONS as AGRIC_LESSONS } from './curriculum/agricultural-science';
import { SUBJECT as GEOGRAPHY, LESSONS as GEOGRAPHY_LESSONS } from './curriculum/geography';
import { SUBJECT as COMPUTER, LESSONS as COMPUTER_LESSONS } from './curriculum/computer-studies';

export const SUBJECTS: SubjectDef[] = [ENGLISH, MATHS, PHYSICS, CHEMISTRY, BIOLOGY, AGRIC, GEOGRAPHY, COMPUTER];
export const ALL_LESSONS: Lesson[] = [
  ...ENGLISH_LESSONS, ...MATHS_LESSONS, ...PHYSICS_LESSONS, ...CHEMISTRY_LESSONS,
  ...BIOLOGY_LESSONS, ...AGRIC_LESSONS, ...GEOGRAPHY_LESSONS, ...COMPUTER_LESSONS,
];

export function getSubject(id: string): SubjectDef | undefined { return SUBJECTS.find(s => s.id === id); }
export function getLessonById(id: string, db?: DB | null): Lesson | undefined {
  return getAllLessons(db).find(l => l.id === id);
}
export function getSubjectLessons(subjectId: string, db?: DB | null): Lesson[] {
  return getAllLessons(db).filter(l => l.subjectId === subjectId).sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}
export function getTopicLessons(subjectId: string, topic: string, db?: DB | null): Lesson[] {
  return getSubjectLessons(subjectId, db).filter(l => l.topic === topic);
}

/** Admin-published custom lessons (Content Studio). Only `published` ones are
 *  visible to students; `draft` ones stay hidden until published. The base
 *  curriculum is untouched — custom lessons are merged on top. */
export function getCustomLessons(db?: DB | null): Lesson[] {
  if (!db) return [];
  return (db.customLessons || [])
    .filter(l => l.status === 'published' && db.publishedOverrides[l.id] !== false)
    .map(l => ({ ...l, formulas: l.formulas || [] }));
}
/** Full lesson list for a device: built-in curriculum + published custom lessons. */
export function getAllLessons(db?: DB | null): Lesson[] {
  return [...ALL_LESSONS, ...getCustomLessons(db)];
}
/** Is this lesson an admin-published custom lesson (not part of the built-in bank)? */
export function isCustomLesson(db: DB | null | undefined, lessonId: string): boolean {
  return !!db && (db.customLessons || []).some(l => l.id === lessonId);
}
export { type Lesson, type SubjectDef, type QuizQ } from './curriculum/types';

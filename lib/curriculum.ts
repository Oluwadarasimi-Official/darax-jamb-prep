// Curriculum index — aggregates the 8 per-subject files (80 lessons total).
import type { Lesson, SubjectDef } from './curriculum/types';
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
export function getLessonById(id: string): Lesson | undefined { return ALL_LESSONS.find(l => l.id === id); }
export function getSubjectLessons(subjectId: string): Lesson[] {
  return ALL_LESSONS.filter(l => l.subjectId === subjectId).sort((a, b) => a.order - b.order);
}
export function getTopicLessons(subjectId: string, topic: string): Lesson[] {
  return getSubjectLessons(subjectId).filter(l => l.topic === topic);
}
export { type Lesson, type SubjectDef, type QuizQ } from './curriculum/types';

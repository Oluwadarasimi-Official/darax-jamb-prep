export interface UtmeGradedItem { subjectId?: string; chosen: number; correct: number; }
export interface UtmeSubjectScore { correct: number; total: number; score: number; }
export interface UtmeScoreResult {
  subjectScores: Record<string, UtmeSubjectScore>;
  utmeScore400: number;
  utmeScore400Exact: number;
  normalizedScore: number;
}
export const UTME_EXAM_SPEC = {
  englishQuestions: 60, otherSubjectQuestions: 40, subjectCount: 4,
  totalQuestions: 180, durationSeconds: 7200, marksPerSubject: 100, totalMarks: 400,
} as const;

/**
 * Transparent DARAX practice benchmark: each subject's raw accuracy is scaled
 * to 100, then the four subject scores are added. JAMB's 2026 officials' manual
 * confirms the paper structure and duration, but does not publish a complete
 * raw-answer conversion algorithm. Never call this JAMB's proprietary scaling.
 */
export function calculateUtmeScore(graded: UtmeGradedItem[], allowedOtherSubjects: string[]): UtmeScoreResult {
  const counts: Record<string, number> = {};
  const correct: Record<string, number> = {};
  for (const item of graded) {
    const id = item.subjectId || 'unknown';
    counts[id] = (counts[id] || 0) + 1;
    if (item.chosen >= 0 && item.chosen === item.correct) correct[id] = (correct[id] || 0) + 1;
  }
  const subjects = Object.keys(counts);
  const others = subjects.filter(id => id !== 'english');
  const valid = graded.length === UTME_EXAM_SPEC.totalQuestions
    && subjects.length === UTME_EXAM_SPEC.subjectCount
    && counts.english === UTME_EXAM_SPEC.englishQuestions
    && others.length === 3
    && others.every(id => allowedOtherSubjects.includes(id) && counts[id] === UTME_EXAM_SPEC.otherSubjectQuestions);
  if (!valid) throw new Error('UTME structure invalid: use 60 English questions and 40 questions from each of exactly three supported subjects.');
  const subjectScores: Record<string, UtmeSubjectScore> = {};
  let exactTotal = 0;
  for (const id of subjects) {
    const total = counts[id];
    const right = correct[id] || 0;
    const rawScore = (right / total) * UTME_EXAM_SPEC.marksPerSubject;
    subjectScores[id] = { correct: right, total, score: Number(rawScore.toFixed(2)) };
    exactTotal += rawScore;
  }
  const exact = Number(exactTotal.toFixed(2));
  return {
    subjectScores,
    utmeScore400: Math.round(exact),
    utmeScore400Exact: exact,
    normalizedScore: Number((exact / UTME_EXAM_SPEC.subjectCount).toFixed(2)),
  };
}

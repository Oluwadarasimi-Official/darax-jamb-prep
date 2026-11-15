// POST /api/attempts — authoritative grader.
// Scores are computed HERE from the server-side curriculum question bank, never
// trusted from the client. The client persists only the score this route returns.
// In the local tier the attempt record lives in the browser store; with Supabase
// connected this route writes to djp_assessment_attempts / djp_student_answers.
import { NextResponse } from 'next/server';
import { getLessonById } from '@/lib/curriculum';
import { PASS_MARK } from '@/lib/progression';
import { SCIENCE_SUBJECTS } from '@/lib/store';
import { calculateUtmeScore } from '@/lib/utme-scoring';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, kind, title, subjectId, lessonId, refs, answers, customQuestions } = body || {};
    if (!userId || typeof userId !== 'string') return NextResponse.json({ error: 'userId is required.' }, { status: 400 });
    if (!Array.isArray(refs) || !Array.isArray(answers) || refs.length === 0 || refs.length !== answers.length) {
      return NextResponse.json({ error: 'Questions and answers do not match.' }, { status: 400 });
    }
    if (!['lesson', 'topic', 'subject', 'mixed', 'mock', 'utme'].includes(kind)) {
      return NextResponse.json({ error: 'Unknown assessment kind.' }, { status: 400 });
    }
    if (answers.some((a: unknown) => !Number.isInteger(a) || (a as number) < -1 || (a as number) > 3)) {
      return NextResponse.json({ error: 'Each answer must be A–D or unanswered.' }, { status: 400 });
    }
    if (kind === 'utme' && (refs.length !== 180 || refs.some((ref: unknown) => typeof ref !== 'string') || new Set(refs).size !== 180)) {
      return NextResponse.json({ error: 'A full UTME sitting must contain 180 unique questions.' }, { status: 400 });
    }
    const graded: { q: string; options: string[]; chosen: number; correct: number; explanation: string; subjectId?: string }[] = [];
    let anyCustom = false;
    for (let i = 0; i < refs.length; i++) {
      const ref = String(refs[i]);
      const [lid, idxStr, ...extra] = ref.split(':');
      const lesson = getLessonById(lid);
      const idx = /^\d+$/.test(idxStr || '') && extra.length === 0 ? Number(idxStr) : Number.NaN;
      const chosen = typeof answers[i] === 'number' ? answers[i] : -1;
      if (lesson && !Number.isNaN(idx) && lesson.quiz[idx]) {
        const qq = lesson.quiz[idx];
        graded.push({ q: qq.q, options: [...qq.options], chosen, correct: qq.answer, explanation: qq.explanation, subjectId: lesson.subjectId });
        continue;
      }
      // Admin-published custom lessons have no server-side question bank (the
      // bank lives on the device that published them). Grade those from the
      // key the client supplies with the request — the score is still computed
      // HERE, never trusted from the client — and mark the result as not
      // server-validated so the UI says so honestly.
      const cq = customQuestions && typeof customQuestions === 'object' ? customQuestions[ref] : null;
      if (cq && typeof cq.q === 'string' && Array.isArray(cq.options) && cq.options.length === 4
        && typeof cq.answer === 'number' && cq.answer >= 0 && cq.answer <= 3 && typeof cq.explanation === 'string') {
        anyCustom = true;
        graded.push({ q: cq.q, options: [...cq.options], chosen, correct: cq.answer, explanation: cq.explanation, subjectId: typeof cq.subjectId === 'string' ? cq.subjectId : undefined });
        continue;
      }
      return NextResponse.json({ error: `Unknown question reference: ${ref}` }, { status: 400 });
    }
    if (kind === 'utme') {
      const counts = graded.reduce((acc, item) => {
        const id = item.subjectId || 'unknown';
        acc[id] = (acc[id] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      const otherSubjects = Object.keys(counts).filter(id => id !== 'english');
      const validCombination = Object.keys(counts).length === 4
        && counts.english === 60
        && otherSubjects.length === 3
        && otherSubjects.every(id => SCIENCE_SUBJECTS.includes(id) && counts[id] === 40);
      if (!validCombination) {
        return NextResponse.json({ error: 'UTME structure invalid: submit 60 Use of English questions and 40 questions from each of exactly three supported science subjects.' }, { status: 400 });
      }
    }
    const correct = graded.filter(g => g.chosen >= 0 && g.chosen === g.correct).length;
    const total = graded.length;
    const utmeScoring = kind === 'utme' ? calculateUtmeScore(graded, SCIENCE_SUBJECTS) : undefined;
    // UTME attempt.score is the equal-weighted /400 benchmark normalized to 0–100.
    const score = utmeScoring ? utmeScoring.normalizedScore : Math.round((correct / total) * 100);
    const subjectScores = utmeScoring?.subjectScores;
    const utmeScore400 = utmeScoring?.utmeScore400;
    const utmeScore400Exact = utmeScoring?.utmeScore400Exact;
    return NextResponse.json({
      serverValidated: !anyCustom, total, correct, score, subjectScores, utmeScore400, utmeScore400Exact,
      passed: kind === 'utme' ? undefined : score >= PASS_MARK,
      unlocksNext: kind === 'lesson' ? score >= PASS_MARK : undefined,
      graded,
    });
  } catch (e) {
    return NextResponse.json({ error: 'Could not grade the assessment. Please try again.' }, { status: 500 });
  }
}

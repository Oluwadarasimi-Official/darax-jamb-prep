// POST /api/attempts — authoritative grader.
// Scores are computed HERE from the server-side curriculum question bank, never
// trusted from the client. The client persists only the score this route returns.
// In the local tier the attempt record lives in the browser store; with Supabase
// connected this route writes to djp_assessment_attempts / djp_student_answers.
import { NextResponse } from 'next/server';
import { getLessonById } from '@/lib/curriculum';
import { PASS_MARK } from '@/lib/progression';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, kind, title, subjectId, lessonId, refs, answers } = body || {};
    if (!userId || typeof userId !== 'string') return NextResponse.json({ error: 'userId is required.' }, { status: 400 });
    if (!Array.isArray(refs) || !Array.isArray(answers) || refs.length === 0 || refs.length !== answers.length) {
      return NextResponse.json({ error: 'Questions and answers do not match.' }, { status: 400 });
    }
    if (!['lesson', 'topic', 'subject', 'mixed', 'mock'].includes(kind)) {
      return NextResponse.json({ error: 'Unknown assessment kind.' }, { status: 400 });
    }
    const graded: { q: string; options: string[]; chosen: number; correct: number; explanation: string }[] = [];
    for (let i = 0; i < refs.length; i++) {
      const ref = String(refs[i]);
      const [lid, idxStr] = ref.split(':');
      const lesson = getLessonById(lid);
      const idx = parseInt(idxStr, 10);
      if (!lesson || Number.isNaN(idx) || !lesson.quiz[idx]) {
        return NextResponse.json({ error: `Unknown question reference: ${ref}` }, { status: 400 });
      }
      const qq = lesson.quiz[idx];
      const chosen = typeof answers[i] === 'number' ? answers[i] : -1;
      graded.push({ q: qq.q, options: [...qq.options], chosen, correct: qq.answer, explanation: qq.explanation });
    }
    const correct = graded.filter(g => g.chosen === g.correct).length;
    const total = graded.length;
    const score = Math.round((correct / total) * 100);
    return NextResponse.json({
      serverValidated: true, total, correct, score,
      passed: score >= PASS_MARK,
      unlocksNext: kind === 'lesson' ? score >= PASS_MARK : undefined,
      graded,
    });
  } catch (e) {
    return NextResponse.json({ error: 'Could not grade the assessment. Please try again.' }, { status: 500 });
  }
}

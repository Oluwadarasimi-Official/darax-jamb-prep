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
    const { userId, kind, title, subjectId, lessonId, refs, answers, customQuestions } = body || {};
    if (!userId || typeof userId !== 'string') return NextResponse.json({ error: 'userId is required.' }, { status: 400 });
    if (!Array.isArray(refs) || !Array.isArray(answers) || refs.length === 0 || refs.length !== answers.length) {
      return NextResponse.json({ error: 'Questions and answers do not match.' }, { status: 400 });
    }
    if (!['lesson', 'topic', 'subject', 'mixed', 'mock'].includes(kind)) {
      return NextResponse.json({ error: 'Unknown assessment kind.' }, { status: 400 });
    }
    const graded: { q: string; options: string[]; chosen: number; correct: number; explanation: string }[] = [];
    let anyCustom = false;
    for (let i = 0; i < refs.length; i++) {
      const ref = String(refs[i]);
      const [lid, idxStr] = ref.split(':');
      const lesson = getLessonById(lid);
      const idx = parseInt(idxStr, 10);
      const chosen = typeof answers[i] === 'number' ? answers[i] : -1;
      if (lesson && !Number.isNaN(idx) && lesson.quiz[idx]) {
        const qq = lesson.quiz[idx];
        graded.push({ q: qq.q, options: [...qq.options], chosen, correct: qq.answer, explanation: qq.explanation });
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
        graded.push({ q: cq.q, options: [...cq.options], chosen, correct: cq.answer, explanation: cq.explanation });
        continue;
      }
      return NextResponse.json({ error: `Unknown question reference: ${ref}` }, { status: 400 });
    }
    const correct = graded.filter(g => g.chosen === g.correct).length;
    const total = graded.length;
    const score = Math.round((correct / total) * 100);
    return NextResponse.json({
      serverValidated: !anyCustom, total, correct, score,
      passed: score >= PASS_MARK,
      unlocksNext: kind === 'lesson' ? score >= PASS_MARK : undefined,
      graded,
    });
  } catch (e) {
    return NextResponse.json({ error: 'Could not grade the assessment. Please try again.' }, { status: 500 });
  }
}

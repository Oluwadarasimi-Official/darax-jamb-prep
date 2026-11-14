// POST /api/admin/generate-lesson — AI-assisted lesson authoring (Groq).
// Reads the Groq key ONLY from process.env.GROQ_API_KEY (set on Vercel at deploy
// time). Never hardcoded, never logged, never committed. Returns a DRAFT only —
// the admin must review and approve it in Content Studio before it is published.
// Never auto-publishes AI-generated educational content.
import { NextResponse } from 'next/server';

const MODEL = 'openai/gpt-oss-120b';

export async function POST(req: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'AI_NOT_CONFIGURED', message: 'Lesson generation is not connected yet — the administrator needs to add the Groq API key.' },
      { status: 503 },
    );
  }
  try {
    const body = await req.json();
    const { role, subjectId, topic, title, objectives } = body || {};
    // Role check: in the local tier the client sends the signed-in profile's role.
    // Full server-side enforcement (Supabase Auth + RLS) activates with Supabase —
    // see README and supabase/migrations/001_djp_schema.sql.
    if (role !== 'admin') return NextResponse.json({ error: 'Only administrators can generate lessons.' }, { status: 403 });
    if (!subjectId || !topic || !title) return NextResponse.json({ error: 'subjectId, topic and title are required.' }, { status: 400 });

    const prompt = `You are drafting a JAMB-standard lesson for Nigerian science students for The Official Darax Free JAMB Prep. Subject: ${subjectId}. Topic: ${topic}. Lesson title: ${title}. Objectives: ${(Array.isArray(objectives) ? objectives : []).join('; ') || 'As appropriate for the topic.'} Write a comprehensive lesson as JSON ONLY, no markdown fences, with this exact shape: {"introduction":"...","objectives":["..."],"sections":[{"heading":"...","body":"... (100-150 words)"}],"definitions":[{"term":"...","meaning":"..."}],"formulas":["..."],"examples":[{"title":"...","problem":"...","steps":["..."],"answer":"..."}],"tips":["..."],"mistakes":["..."],"facts":["..."],"quiz":[{"q":"...","options":["...","...","...","..."],"answer":0,"explanation":"..."}]}. Sections: 3-4. Definitions: 3-5. Examples: 2 with real step-by-step working. Quiz: exactly 5 ORIGINAL practice questions with 4 options each — never label them as past questions and never invent a JAMB year. Keep everything accurate to the current JAMB syllabus; if unsure about a syllabus point, say so in the text rather than inventing it.`;

    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: 'You write accurate JAMB-standard lesson content as strict JSON. Output JSON only.' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.5, max_tokens: 4000,
      }),
    });
    if (!res.ok) return NextResponse.json({ error: 'GROQ_ERROR', message: 'Lesson generation failed. Please try again.' }, { status: 502 });
    const data = await res.json();
    let text = (data?.choices?.[0]?.message?.content || '').trim();
    text = text.replace(/^```json\s*/i, '').replace(/```$/i, '').trim();
    let draft;
    try { draft = JSON.parse(text); } catch {
      return NextResponse.json({ error: 'PARSE_ERROR', message: 'The AI returned a draft that could not be parsed. Please try again.' }, { status: 502 });
    }
    return NextResponse.json({ draft, status: 'draft', model: MODEL, note: 'Draft only — review and approve in Content Studio before publishing.' });
  } catch {
    return NextResponse.json({ error: 'GENERATION_FAILED', message: 'Lesson generation failed. Please try again.' }, { status: 500 });
  }
}

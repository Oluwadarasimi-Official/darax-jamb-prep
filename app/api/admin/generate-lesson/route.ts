// POST /api/admin/generate-lesson — authenticated AI-assisted lesson drafting.
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const MODEL = 'openai/gpt-oss-120b';

export async function POST(req: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return NextResponse.json(
    { error: 'AI_NOT_CONFIGURED', message: 'Lesson generation is not connected yet — the administrator needs to add the Groq API key.' },
    { status: 503 },
  );

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const bearer = req.headers.get('authorization') || '';
  const accessToken = bearer.replace(/^Bearer\s+/i, '').trim();
  if (!supabaseUrl || !anonKey || !accessToken) {
    return NextResponse.json({ error: 'UNAUTHENTICATED', message: 'Sign in with an administrator account before generating content.' }, { status: 401 });
  }

  try {
    const authClient = createClient(supabaseUrl, anonKey, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: { headers: { Authorization: `Bearer ${accessToken}` } },
    });
    const { data: authData, error: authError } = await authClient.auth.getUser(accessToken);
    if (authError || !authData.user) return NextResponse.json({ error: 'UNAUTHENTICATED' }, { status: 401 });

    const { data: profile, error: profileError } = await authClient
      .from('djp_profiles').select('id')
      .eq('auth_id', authData.user.id).eq('role', 'admin').eq('active', true).maybeSingle();
    if (profileError || !profile) return NextResponse.json({ error: 'FORBIDDEN', message: 'Active administrator access is required.' }, { status: 403 });

    const body = await req.json();
    const { subjectId, topic, title, objectives } = body || {};
    if (typeof subjectId !== 'string' || typeof topic !== 'string' || typeof title !== 'string' || !subjectId.trim() || !topic.trim() || !title.trim()) {
      return NextResponse.json({ error: 'INVALID_INPUT', message: 'Subject, topic and lesson title are required.' }, { status: 400 });
    }

    const prompt = `You are drafting a JAMB-standard lesson for Nigerian JAMB students for The Official Darax Free JAMB Prep. Subject: ${subjectId}. Topic: ${topic}. Lesson title: ${title}. Objectives: ${(Array.isArray(objectives) ? objectives : []).join('; ') || 'As appropriate for the topic.'} Write a comprehensive lesson as JSON ONLY, no markdown fences, with this exact shape: {"introduction":"...","objectives":["..."],"sections":[{"heading":"...","body":"... (100-150 words)"}],"definitions":[{"term":"...","meaning":"..."}],"formulas":["..."],"examples":[{"title":"...","problem":"...","steps":["..."],"answer":"..."}],"tips":["..."],"mistakes":["..."],"facts":["..."],"quiz":[{"q":"...","options":["...","...","...","..."],"answer":0,"explanation":"..."}]}. Sections: 3-4. Definitions: 3-5. Examples: 2 with real step-by-step working. Quiz: exactly 15 ORIGINAL practice questions with 4 options each — never label them as past questions and never invent a JAMB year. Keep everything accurate to the current JAMB syllabus; if unsure about a syllabus point, say so in the text rather than inventing it.`;

    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: 'You write accurate JAMB-standard lesson content as strict JSON. Output JSON only.' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.5, max_tokens: 8000,
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
    if (!draft || typeof draft !== 'object' || !Array.isArray(draft.quiz) || draft.quiz.length !== 15) {
      return NextResponse.json({ error: 'INVALID_DRAFT', message: 'The generated draft did not contain the required 15-question quiz. Generate it again.' }, { status: 502 });
    }
    return NextResponse.json({ draft, status: 'draft', model: MODEL, note: 'Draft only — review and approve in Content Studio before publishing.' });
  } catch {
    return NextResponse.json({ error: 'GENERATION_FAILED', message: 'Lesson generation failed. Please try again.' }, { status: 500 });
  }
}

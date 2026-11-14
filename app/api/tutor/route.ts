// POST /api/tutor — Darax AI Tutor via Groq.
// The Groq API key is read ONLY from process.env.GROQ_API_KEY (set on Vercel at
// deploy time). It is never hardcoded, never logged, never sent to the browser.
// If the key is absent the route returns an honest 503 and the UI explains that
// the administrator still needs to add the key — no fake AI answers, ever.
import { NextResponse } from 'next/server';

const MODEL = 'openai/gpt-oss-120b';
const MAX_PER_HOUR = 20;
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const list = (hits.get(key) || []).filter(t => now - t < 3600_000);
  if (list.length >= MAX_PER_HOUR) return true;
  list.push(now);
  hits.set(key, list);
  return false;
}

const SYSTEM_PROMPT = `You are the Darax AI Tutor, the educational tutor of The Official Darax Free JAMB Prep, a free JAMB preparation platform for Nigerian science students. Your ONLY job is education: explain JAMB syllabus topics, solve academic problems step by step, explain Maths calculations, Physics principles, Chemistry reactions, Biology concepts, Geography and Agricultural Science, and English Language (comprehension, lexis and structure, oral English, grammar, vocabulary, sentence interpretation). Adapt explanations to a secondary-school student's level, use clear steps, give worked examples, and offer short practice questions when useful. Use plain, readable formatting and simple mathematical notation (e.g. x^2, sqrt, fractions written as a/b) since answers render as plain text. If a student asks about anything non-educational (entertainment, gossip, cheating on a live exam, personal advice unrelated to study, or anything outside learning), politely redirect them to an educational topic. Never claim to be a human. Never invent official JAMB past-question years. Keep answers focused and reasonably concise.`;

export async function POST(req: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: 'AI_TUTOR_NOT_CONFIGURED', message: 'AI tutor is not connected yet — the administrator needs to add the Groq API key.' },
      { status: 503 },
    );
  }
  try {
    const body = await req.json();
    const { userId, subject, message, history } = body || {};
    if (!userId || typeof userId !== 'string') return NextResponse.json({ error: 'userId is required.' }, { status: 400 });
    if (!message || typeof message !== 'string' || message.trim().length < 2 || message.length > 2000) {
      return NextResponse.json({ error: 'Message must be between 2 and 2000 characters.' }, { status: 400 });
    }
    if (rateLimited(`tutor:${userId}`)) {
      return NextResponse.json({ error: 'RATE_LIMITED', message: 'You have reached 20 tutor messages per hour. Please try again later.' }, { status: 429 });
    }
    const messages: { role: string; content: string }[] = [{ role: 'system', content: SYSTEM_PROMPT }];
    if (subject) messages.push({ role: 'system', content: `The student is asking about the subject: ${subject}.` });
    if (Array.isArray(history)) {
      for (const m of history.slice(-8)) {
        if (m && (m.role === 'user' || m.role === 'assistant') && typeof m.text === 'string') {
          messages.push({ role: m.role, content: m.text.slice(0, 1500) });
        }
      }
    }
    messages.push({ role: 'user', content: message.trim() });

    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ model: MODEL, messages, temperature: 0.6, max_tokens: 1200 }),
    });
    if (!res.ok) {
      return NextResponse.json({ error: 'GROQ_ERROR', message: 'The AI tutor could not answer right now. Please try again in a moment.' }, { status: 502 });
    }
    const data = await res.json();
    const text = data?.choices?.[0]?.message?.content?.trim();
    if (!text) return NextResponse.json({ error: 'GROQ_EMPTY', message: 'The AI tutor returned an empty answer. Please try again.' }, { status: 502 });
    return NextResponse.json({ reply: text, model: MODEL });
  } catch {
    return NextResponse.json({ error: 'TUTOR_FAILED', message: 'The AI tutor could not be reached. Check your connection and try again.' }, { status: 500 });
  }
}

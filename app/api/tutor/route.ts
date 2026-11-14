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

function unwrapTutorReply(content: unknown, depth = 0): string | null {
  if (typeof content !== 'string') return null;
  const text = content.trim();
  if (!text) return null;
  if (depth < 3) {
    const jsonText = text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
    if (jsonText.startsWith('{') || jsonText.startsWith('[')) {
      try {
        const parsed: unknown = JSON.parse(jsonText);
        if (typeof parsed === 'string') return unwrapTutorReply(parsed, depth + 1);
        if (Array.isArray(parsed)) {
          return parsed.map(value => unwrapTutorReply(typeof value === 'string' ? value : JSON.stringify(value), depth + 1)).filter(Boolean).join('\n\n') || null;
        }
        if (parsed && typeof parsed === 'object') {
          const record = parsed as Record<string, unknown>;
          const preferredKeys = ['reply', 'answer', 'response', 'message', 'content', 'text', 'output', 'result', 'final'];
          for (const key of preferredKeys) {
            if (record[key] !== undefined) {
              const value = typeof record[key] === 'string' ? record[key] : JSON.stringify(record[key]);
              const unwrapped = unwrapTutorReply(value, depth + 1);
              if (unwrapped) return unwrapped;
            }
          }
          const values = Object.values(record).map(value => unwrapTutorReply(typeof value === 'string' ? value : JSON.stringify(value), depth + 1)).filter(Boolean);
          if (values.length) return values.join('\n\n');
        }
      } catch {
        return text;
      }
    }
  }
  return text;
}

const SYSTEM_PROMPT = `You are Darax AI Tutor, the educational tutor for The Official Darax Free JAMB Prep, a free JAMB preparation platform for Nigerian science students. Teach clearly and accurately at secondary-school and UTME level. Support Biology, Mathematics, Physics, Chemistry, English Language, Agricultural Science, Geography and Computer Studies. Explain concepts, solve academic problems step by step, show calculations and units, explain formulas and symbols, compare related concepts, and create original practice questions when useful.

Keep explanations accessible, encouraging and focused. Use Nigerian/JAMB terminology where relevant. For calculations, state the formula, substitute the values, show each step, include units, and clearly identify the final answer. For science topics, explain the underlying idea before introducing technical terms. Distinguish established facts from uncertainty. Never invent official JAMB past-question years, quotations, syllabus claims, or examination rules. Do not claim original practice questions are official past questions. Never claim to be human. If a request is unrelated to learning, politely guide the student back to an educational topic. Do not help with cheating during a live examination.

RESPONSE FORMATTING
Use standard Markdown because the app renders it. Structure longer answers with concise headings using ## or ###. Use **bold** for key terms, formulas, final answers and important warnings. Use numbered lists for ordered procedures and bullet lists for grouped facts. Use fenced code blocks only when code is genuinely useful. Use Markdown tables when comparing two or more items and the table improves clarity; keep tables compact and readable on mobile. Use inline code for short symbols or expressions only when helpful.

For worked solutions, prefer this structure:
1. **Given:** identify the known values.
2. **Formula:** state the relevant formula.
3. **Substitution:** insert the values.
4. **Working:** show the calculation step by step.
5. **Final answer:** clearly state the result with units.

Use readable mathematical notation supported by ordinary Markdown. Avoid giant paragraphs, excessive emojis, decorative ASCII tables, and unnecessary repetition. End with a short takeaway or one relevant practice question when it would help the student.`;

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
    const text = unwrapTutorReply(data?.choices?.[0]?.message?.content);
    if (!text) return NextResponse.json({ error: 'GROQ_EMPTY', message: 'The AI tutor returned an empty answer. Please try again.' }, { status: 502 });
    return NextResponse.json({ reply: text, model: MODEL });
  } catch {
    return NextResponse.json({ error: 'TUTOR_FAILED', message: 'The AI tutor could not be reached. Check your connection and try again.' }, { status: 500 });
  }
}

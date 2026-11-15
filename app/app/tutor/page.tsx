'use client';
import { useEffect, useRef, useState } from 'react';
import { useDb } from '@/components/db-context';
import { getSubject } from '@/lib/curriculum';
import { uid } from '@/lib/store';
import { GlassCard, EmptyState } from '@/components/ui';
import { Markdown } from '@/components/Markdown';

export default function TutorPage() {
  const { db, user, setDb } = useDb();
  const [subject, setSubject] = useState('mathematics');
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [activeId, setActiveId] = useState<string | null>(null);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  if (!user) return null;

  const convs = db.conversations.filter(c => c.userId === user.id).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const active = convs.find(c => c.id === activeId) || convs[0] || null;

  // Keep the latest reply in view.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [active?.messages.length, busy]);

  const newConversation = () => {
    const id = uid('conv');
    setDb(d => {
      d.conversations.push({ id, userId: user.id, subject, title: 'New conversation', createdAt: new Date().toISOString(), messages: [] });
      return d;
    });
    setActiveId(id);
    setError('');
  };

  const clearConversation = () => {
    if (!active) return;
    setDb(d => {
      const c = d.conversations.find(x => x.id === active.id);
      if (c) c.messages = [];
      return d;
    });
  };

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    setError(''); setBusy(true); setInput('');
    let convId = active?.id;
    if (!convId) {
      convId = uid('conv');
      setDb(d => {
        d.conversations.push({ id: convId!, userId: user.id, subject, title: text.slice(0, 40), createdAt: new Date().toISOString(), messages: [] });
        return d;
      });
      setActiveId(convId);
    }
    const history = (active?.messages || []).slice(-8);
    setDb(d => {
      const c = d.conversations.find(x => x.id === convId);
      if (c) {
        if (c.messages.length === 0) c.title = text.slice(0, 40);
        c.messages.push({ role: 'user', text, at: new Date().toISOString() });
      }
      return d;
    });
    try {
      const res = await fetch('/api/tutor', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, subject: getSubject(subject)?.name || subject, message: text, history }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || data.error || 'Tutor request failed.');
      setDb(d => {
        const c = d.conversations.find(x => x.id === convId);
        if (c) c.messages.push({ role: 'assistant', text: data.reply, at: new Date().toISOString() });
        d.aiUsage.push({ id: uid('aiu'), userId: user.id, at: new Date().toISOString(), subject, ok: true });
        return d;
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'The tutor could not answer right now.';
      setError(msg);
      setDb(d => {
        d.aiUsage.push({ id: uid('aiu'), userId: user.id, at: new Date().toISOString(), subject, ok: false });
        return d;
      });
    } finally { setBusy(false); }
  };

  const copy = async (text: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(cur => (cur === idx ? null : cur)), 2500);
    } catch { /* clipboard unavailable */ }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold">Darax AI Tutor</h1>
          <p className="muted text-sm mt-1">Ask about any JAMB topic — every answer gives you the direct answer first, then step-by-step working, a worked example and one practice question. Educational questions only.</p>
        </div>
        <button onClick={newConversation} className="btn-primary text-sm shrink-0">+ New conversation</button>
      </div>

      <div className="grid lg:grid-cols-[240px_1fr] gap-5 items-start">
        <GlassCard className="!p-3">
          <h2 className="font-bold text-sm px-2 pt-1 pb-2">Conversation history</h2>
          {convs.length === 0 && <p className="text-xs muted px-2 pb-2">No conversations yet.</p>}
          <div className="flex flex-col gap-1 max-h-72 overflow-y-auto">
            {convs.map(c => (
              <button key={c.id} onClick={() => setActiveId(c.id)}
                className={`text-left text-sm p-2.5 rounded-lg border min-w-0 ${active?.id === c.id ? 'bg-accent/15 border-accent/40' : 'bg-ink/5 border-ink/10 hover:bg-ink/10'}`}>
                <span className="block truncate font-medium">{c.title}</span>
                <span className="text-xs muted">{getSubject(c.subject)?.name || c.subject} · {c.messages.length} message{c.messages.length === 1 ? '' : 's'}</span>
              </button>
            ))}
          </div>
          {active && <button onClick={clearConversation} className="btn-ghost text-sm w-full mt-3">Clear this conversation</button>}
        </GlassCard>

        <GlassCard className="flex flex-col min-h-[480px] !p-4 sm:!p-5">
          <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-ink/10">
            <label htmlFor="tutor-subject" className="text-sm font-medium shrink-0">Subject:</label>
            <select id="tutor-subject" className="glass-input !w-auto min-w-0" value={subject} onChange={e => setSubject(e.target.value)}>
              {user.subjects.map(s => <option key={s} value={s}>{getSubject(s)!.name}</option>)}
            </select>
            <span className="text-xs muted ml-auto">Max 20 messages per hour</span>
          </div>
          <div className="flex flex-wrap gap-1.5 pt-3" aria-label="Quick subject picker">
            {user.subjects.map(s => (
              <button key={s} onClick={() => setSubject(s)}
                className={`chip !py-1 !px-2.5 cursor-pointer ${subject === s ? '!bg-accent/25 font-bold' : 'opacity-75 hover:opacity-100'}`}>
                {getSubject(s)!.name}
              </button>
            ))}
          </div>

          <div ref={scrollRef} className="flex-1 py-4 flex flex-col gap-3 overflow-y-auto min-h-[280px] max-h-[60vh]">
            {!active || active.messages.length === 0 ? (
              <EmptyState title="Ask your first question" body="Try: “Explain quadratic equations step by step”, “What is the difference between speed and velocity?”, or “Give me 3 practice questions on photosynthesis.”" />
            ) : (
              active.messages.map((m, i) => (
                <div key={i} className={`p-3.5 rounded-2xl max-w-[92%] min-w-0 break-words ${m.role === 'user' ? 'ml-auto bg-accent/20 border border-accent/30 rounded-br-md' : 'bg-ink/5 border border-ink/10 rounded-bl-md'}`}>
                  <p className="text-[11px] font-semibold uppercase tracking-wide muted mb-1.5">{m.role === 'user' ? 'You' : '✦ Darax AI Tutor'}</p>
                  {m.role === 'assistant' ? (
                    <div className="text-sm leading-relaxed"><Markdown text={m.text} /></div>
                  ) : (
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{m.text}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="text-[11px] muted">{new Date(m.at).toLocaleTimeString()}</span>
                    {m.role === 'assistant' && (
                      <button onClick={() => copy(m.text, i)} className="text-[11px] text-accent underline">
                        {copiedIdx === i ? '✓ Copied' : 'Copy answer'}
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
            {busy && (
              <div className="bg-ink/5 border border-ink/10 p-3.5 rounded-2xl rounded-bl-md w-44" aria-live="polite">
                <div className="flex items-center gap-2">
                  <span className="typing-dots" aria-hidden><span /><span /><span /></span>
                  <span className="text-xs muted">Darax AI Tutor is thinking…</span>
                </div>
              </div>
            )}
          </div>

          {error && (
            <div className="text-sm text-warn bg-warn/10 border border-warn/30 rounded-lg px-3 py-2 mb-3 flex items-start justify-between gap-3">
              <span className="break-words min-w-0">{error}</span>
              <button onClick={() => setError('')} className="shrink-0 underline text-xs">Dismiss</button>
            </div>
          )}

          <form onSubmit={send} className="flex gap-2 pt-3 border-t border-ink/10">
            <input className="glass-input flex-1 min-w-0" value={input} onChange={e => setInput(e.target.value)} placeholder={`Ask about ${getSubject(subject)?.name || 'your subject'}…`} maxLength={2000} aria-label="Ask the tutor a question" />
            <button className="btn-primary shrink-0" disabled={busy || !input.trim()}>{busy ? '…' : 'Send'}</button>
          </form>
          <p className="text-[11px] muted mt-2">Answers follow one structure: direct answer → step by step → worked example → one practice question. The tutor only answers educational questions.</p>
        </GlassCard>
      </div>
    </div>
  );
}

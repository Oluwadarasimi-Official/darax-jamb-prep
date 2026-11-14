'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import { useDb } from '@/components/db-context';
import { getSubject } from '@/lib/curriculum';
import { uid } from '@/lib/store';
import { TutorMarkdown } from '@/components/TutorMarkdown';

export default function TutorPage() {
  const { db, user, setDb } = useDb();
  const [subject, setSubject] = useState('mathematics');
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [activeId, setActiveId] = useState<string | null>(null);
  const [historyOpen, setHistoryOpen] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const convs = useMemo(() => user
    ? db.conversations.filter(c => c.userId === user.id).sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    : [], [db.conversations, user]);
  const active = convs.find(c => c.id === activeId) || convs[0] || null;

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' }); }, [active?.messages.length, busy]);
  if (!user) return null;

  const newConversation = () => {
    const id = uid('conv');
    setDb(d => {
      d.conversations.push({ id, userId: user.id, subject, title: 'New conversation', createdAt: new Date().toISOString(), messages: [] });
      return d;
    });
    setActiveId(id);
    setHistoryOpen(false);
    setError('');
    inputRef.current?.focus();
  };

  const clearConversation = () => {
    if (!active || !window.confirm('Clear all messages in this conversation?')) return;
    setDb(d => {
      const c = d.conversations.find(x => x.id === active.id);
      if (c) c.messages = [];
      return d;
    });
    setError('');
  };

  const send = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    setError('');
    setBusy(true);
    setInput('');
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
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  };

  const copy = async (text: string) => {
    try { await navigator.clipboard.writeText(text); } catch { setError('Copy is unavailable in this browser.'); }
  };

  const conversationList = (
    <div className="flex flex-col gap-1">
      {convs.length === 0 && <p className="px-3 py-4 text-sm text-slate-400">Your conversations will appear here.</p>}
      {convs.map(c => (
        <button key={c.id} onClick={() => { setActiveId(c.id); setHistoryOpen(false); }}
          className={'w-full rounded-xl px-3 py-3 text-left transition ' + (active?.id === c.id ? 'bg-white/12 text-white ring-1 ring-white/15' : 'text-slate-300 hover:bg-white/7')}>
          <span className="block truncate text-sm font-medium">{c.title || 'New conversation'}</span>
          <span className="mt-1 block text-xs text-slate-400">{getSubject(c.subject)?.name || c.subject} · {c.messages.length} messages</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="fixed inset-0 z-[60] flex min-h-0 flex-col overflow-hidden bg-[#0b1220] text-slate-100">
      <Script id="mathjax-config" strategy="beforeInteractive">{`window.MathJax = { tex: { inlineMath: [['\\\\(', '\\\\)']], displayMath: [['\\\\[', '\\\\]'], ['$$', '$$']], processEscapes: true }, options: { skipHtmlTags: ['script','noscript','style','textarea','pre','code'] }, startup: { typeset: false } };`}</Script>
      <Script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" strategy="afterInteractive" onLoad={() => window.dispatchEvent(new Event('mathjax-ready'))} />
      <header className="flex h-[68px] shrink-0 items-center justify-between border-b border-white/10 bg-[#101a2b]/95 px-3 backdrop-blur-xl sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <Link href="/app/dashboard" aria-label="Back to dashboard" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-xl hover:bg-white/10">‹</Link>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold tracking-wide sm:text-base">Darax AI</p>
            <p className="text-[11px] text-emerald-300">JAMB learning assistant</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setHistoryOpen(v => !v)} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-white/10 lg:hidden">Chats</button>
          <button onClick={newConversation} className="rounded-xl bg-emerald-400 px-3 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-300 sm:px-4 sm:text-sm">＋ New chat</button>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-[290px] shrink-0 flex-col border-r border-white/10 bg-[#0e1727] p-3 lg:flex">
          <div className="mb-3 flex items-center justify-between px-2 py-2">
            <span className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">Your chats</span>
            <span className="text-xs text-slate-500">{convs.length}</span>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto">{conversationList}</div>
          <div className="mt-3 border-t border-white/10 px-2 pt-3 text-xs text-slate-500">20 messages per hour · Official Darax</div>
        </aside>

        {historyOpen && <div className="absolute inset-0 top-[68px] z-20 bg-black/60 lg:hidden" onClick={() => setHistoryOpen(false)}>
          <aside className="h-full w-[min(86vw,340px)] overflow-y-auto border-r border-white/10 bg-[#101a2b] p-3 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between px-2 py-2"><span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Conversation history</span><button onClick={() => setHistoryOpen(false)} aria-label="Close history">✕</button></div>
            {conversationList}
          </aside>
        </div>}

        <main className="flex min-w-0 flex-1 flex-col">
          <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-white/10 bg-[#101a2b]/60 px-3 py-2.5 sm:px-6">
            <label className="flex items-center gap-2 text-xs text-slate-400">
              Subject
              <select className="max-w-[190px] rounded-lg border border-white/10 bg-[#1a2940] px-2.5 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400/60" value={subject} onChange={e => setSubject(e.target.value)}>
                {user.subjects.map(s => <option key={s} value={s}>{getSubject(s)?.name || s}</option>)}
              </select>
            </label>
            <div className="flex items-center gap-3">
              {active && <button onClick={clearConversation} className="text-xs text-slate-400 hover:text-white">Clear chat</button>}
              <span className="hidden text-[11px] text-slate-500 sm:inline">Responses may need checking against your syllabus</span>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-3 py-5 sm:px-6">
            <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
              {(!active || active.messages.length === 0) && (
                <div className="flex min-h-[55vh] flex-col items-center justify-center text-center">
                  <div className="mb-5 grid h-16 w-16 place-items-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-3xl text-emerald-200">✦</div>
                  <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">What are we learning today?</h1>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">Ask a question, work through a calculation, or explore a JAMB science topic step by step.</p>
                  <div className="mt-6 grid w-full max-w-2xl gap-2 sm:grid-cols-2">
                    {['Explain electrolysis with electrode reactions', 'Solve a quadratic equation step by step', 'Compare mitosis and meiosis', 'Explain Newton’s laws with examples'].map(q => <button key={q} onClick={() => setInput(q)} className="rounded-xl border border-white/10 bg-white/[.035] p-3 text-left text-sm text-slate-300 transition hover:border-emerald-300/30 hover:bg-white/[.07]">{q}</button>)}
                  </div>
                </div>
              )}

              {active?.messages.map((m, i) => (
                <article key={i} className={'flex gap-3 ' + (m.role === 'user' ? 'justify-end' : 'justify-start')}>
                  {m.role === 'assistant' && <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-sm text-emerald-200">✦</div>}
                  <div className={'min-w-0 max-w-[92%] sm:max-w-[86%] ' + (m.role === 'user' ? 'rounded-2xl rounded-br-md border border-emerald-300/20 bg-emerald-300/10 px-4 py-3' : 'rounded-2xl rounded-tl-md border border-white/10 bg-[#142137] px-4 py-4 sm:px-5')}>
                    {m.role === 'assistant' ? <TutorMarkdown content={m.text} /> : <p className="whitespace-pre-wrap text-sm leading-7 text-slate-100">{m.text}</p>}
                    <div className="mt-3 flex items-center gap-3 border-t border-white/5 pt-2">
                      <span className="text-[10px] text-slate-500">{m.role === 'user' ? 'You' : 'Darax AI'} · {new Date(m.at).toLocaleTimeString()}</span>
                      {m.role === 'assistant' && <button onClick={() => copy(m.text)} className="text-[11px] text-emerald-300 hover:text-emerald-200">Copy</button>}
                    </div>
                  </div>
                  {m.role === 'user' && <div className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/10 text-xs font-semibold">You</div>}
                </article>
              ))}
              {busy && <div className="flex items-start gap-3"><div className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-300/10 text-emerald-200">✦</div><div className="rounded-2xl border border-white/10 bg-[#142137] px-4 py-3 text-sm text-slate-400">Darax is preparing your explanation…</div></div>}
              <div ref={endRef} />
            </div>
          </div>

          <div className="shrink-0 border-t border-white/10 bg-[#101a2b]/95 px-3 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl sm:px-6">
            <div className="mx-auto max-w-4xl">
              {error && <div role="alert" className="mb-2 rounded-xl border border-rose-400/20 bg-rose-400/10 px-3 py-2 text-sm text-rose-200">{error}</div>}
              <form onSubmit={send} className="flex items-end gap-2 rounded-2xl border border-white/15 bg-[#17253a] p-2 shadow-[0_12px_40px_rgba(0,0,0,.24)] focus-within:border-emerald-300/40">
                <textarea ref={inputRef} value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); void send(); } }} rows={1} maxLength={2000} placeholder="Message Darax AI…" className="max-h-36 min-h-[44px] flex-1 resize-y bg-transparent px-2 py-3 text-sm leading-6 text-white outline-none placeholder:text-slate-500" />
                <button type="submit" disabled={busy || !input.trim()} className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-400 text-lg font-bold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-40" aria-label="Send message">{busy ? '…' : '↑'}</button>
              </form>
              <p className="mt-2 text-center text-[10px] text-slate-500">Darax AI can make mistakes. Verify important formulas and answers. · Enter to send, Shift + Enter for a new line.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

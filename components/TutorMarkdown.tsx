'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

declare global {
  interface Window {
    MathJax?: {
      typesetPromise?: (elements?: HTMLElement[]) => Promise<void>;
      startup?: { promise?: Promise<void> };
    };
  }
}

function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*')) return <em key={index}>{part.slice(1, -1)}</em>;
    return part;
  });
}

export function TutorMarkdown({ content }: { content: string }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const renderMath = async () => {
      const mathJax = window.MathJax;
      if (!mathJax?.typesetPromise || !rootRef.current || cancelled) return;
      try {
        await mathJax.startup?.promise;
        if (!cancelled && rootRef.current) await mathJax.typesetPromise([rootRef.current]);
      } catch {
        // Keep the original LaTeX visible if the renderer cannot load.
      }
    };
    const onReady = () => { void renderMath(); };
    window.addEventListener('mathjax-ready', onReady);
    void renderMath();
    return () => {
      cancelled = true;
      window.removeEventListener('mathjax-ready', onReady);
      if (window.MathJax?.typesetPromise && rootRef.current) {
        // MathJax owns only its generated presentation nodes.
        rootRef.current.querySelectorAll('mjx-container').forEach(node => node.remove());
      }
    };
  }, [content]);

  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const fence = String.fromCharCode(96).repeat(3);
  const blocks: ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i += 1; continue; }

    if (line.startsWith(fence)) {
      const code: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i].trim().startsWith(fence)) { code.push(lines[i]); i += 1; }
      if (i < lines.length) i += 1;
      blocks.push(<pre key={blocks.length} className="overflow-x-auto rounded-xl border border-ink/15 bg-ink/10 p-4 text-xs leading-relaxed sm:text-sm"><code>{code.join('\n')}</code></pre>);
      continue;
    }

    if (line.includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-{3,}/.test(lines[i + 1])) {
      const headers = line.replace(/^\|/, '').replace(/\|$/, '').split('|').map(v => v.trim());
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes('|') && lines[i].trim()) {
        rows.push(lines[i].trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(v => v.trim()));
        i += 1;
      }
      blocks.push(<div key={blocks.length} className="overflow-x-auto rounded-xl border border-ink/15"><table className="w-full text-left text-sm"><thead className="bg-ink/5"><tr>{headers.map((h, n) => <th key={n} className="px-3 py-2 font-semibold">{inline(h)}</th>)}</tr></thead><tbody>{rows.map((row, n) => <tr key={n} className="border-t border-ink/10">{headers.map((_, c) => <td key={c} className="px-3 py-2 align-top">{inline(row[c] || '')}</td>)}</tr>)}</tbody></table></div>);
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      blocks.push(<h3 key={blocks.length} className="text-base font-semibold tracking-tight text-ink sm:text-lg">{inline(heading[2])}</h3>);
      i += 1;
      continue;
    }

    if (/^[-*]\s+/.test(line) || /^\d+\.\s+/.test(line)) {
      const ordered = /^\d+\.\s+/.test(line);
      const items: string[] = [];
      while (i < lines.length && (ordered ? /^\d+\.\s+/.test(lines[i].trim()) : /^[-*]\s+/.test(lines[i].trim()))) {
        items.push(lines[i].trim().replace(ordered ? /^\d+\.\s+/ : /^[-*]\s+/, ''));
        i += 1;
      }
      const List = ordered ? 'ol' : 'ul';
      blocks.push(<List key={blocks.length} className={ordered ? 'list-decimal space-y-2 pl-5 text-sm leading-7' : 'list-disc space-y-2 pl-5 text-sm leading-7'}>{items.map((item, n) => <li key={n}>{inline(item)}</li>)}</List>);
      continue;
    }

    const paragraph: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(#{1,3}\s|[-*]\s|\d+\.\s)/.test(lines[i].trim()) && !lines[i].trim().startsWith(fence)) {
      paragraph.push(lines[i].trim());
      i += 1;
    }
    if (!paragraph.length) { paragraph.push(line); i += 1; }
    blocks.push(<p key={blocks.length} className="min-w-0 break-words whitespace-pre-wrap text-sm leading-7 text-ink/90">{inline(paragraph.join(' '))}</p>);
  }

  return <div ref={rootRef} className="tutor-markdown flex min-w-0 flex-col gap-4 break-words [&_strong]:font-semibold [&_strong]:text-ink [&_mjx-container]:max-w-full [&_mjx-container]:overflow-x-auto">{blocks}</div>;
}

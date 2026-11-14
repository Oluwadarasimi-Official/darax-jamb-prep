import type { ReactNode } from 'react';

function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*')) return <em key={index}>{part.slice(1, -1)}</em>;
    return part;
  });
}

export function TutorMarkdown({ content }: { content: string }) {
  const lines = content.replace(/\r\n/g, '\n').split('\n');
  const blocks: ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i += 1; continue; }
    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      blocks.push(<h3 key={blocks.length} className="text-base font-bold">{inline(heading[2])}</h3>);
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
      blocks.push(<List key={blocks.length} className={ordered ? 'list-decimal pl-5 space-y-1.5 text-sm' : 'list-disc pl-5 space-y-1.5 text-sm'}>{items.map((item, n) => <li key={n}>{inline(item)}</li>)}</List>);
      continue;
    }
    const paragraph: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(#{1,3}\s|[-*]\s|\d+\.\s)/.test(lines[i].trim())) {
      paragraph.push(lines[i].trim());
      i += 1;
    }
    if (!paragraph.length) { paragraph.push(line); i += 1; }
    blocks.push(<p key={blocks.length} className="text-sm leading-7 whitespace-pre-wrap">{inline(paragraph.join(' '))}</p>);
  }
  return <div className="flex flex-col gap-3 min-w-0 break-words">{blocks}</div>;
}

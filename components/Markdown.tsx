// Small built-in Markdown renderer — no new dependency.
// Supports: # / ## / ### headings, bold, italic, inline code, fenced code
// blocks, ordered + unordered lists, tables, horizontal rules, paragraphs,
// and [text](url) links. Raw HTML in the source is never rendered.
import type { ReactNode } from 'react';

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  // Split on **bold**, *italic*, `code`, [link](url) — in that priority order.
  const re = /(\*\*[^*\n]+\*\*|\*[^*\n]+\*|`[^`\n]+`|\[[^\]\n]+\]\([^)\n]+\))/g;
  const parts = text.split(re);
  return parts.map((part, i) => {
    const key = `${keyPrefix}-${i}`;
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <strong key={key}>{renderInline(part.slice(2, -2), `${key}b`)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return <em key={key}>{renderInline(part.slice(1, -1), `${key}i`)}</em>;
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      return <code key={key} className="md-code">{part.slice(1, -1)}</code>;
    }
    const link = /^\[([^\]\n]+)\]\(([^)\n]+)\)$/.exec(part);
    if (link) {
      const href = link[2];
      if (/^(https?:|mailto:)/.test(href)) {
        return <a key={key} href={href} target="_blank" rel="noopener noreferrer" className="text-accent underline break-all">{link[1]}</a>;
      }
      return <span key={key}>{link[1]}</span>;
    }
    return <span key={key}>{part}</span>;
  });
}

interface TableRow { cells: string[]; header: boolean; }

function splitTableRow(line: string): string[] {
  return line.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
}
function isTableDivider(line: string): boolean {
  const cells = splitTableRow(line);
  return cells.length > 0 && cells.every(c => /^:?-{3,}:?$/.test(c));
}

export function Markdown({ text, className = '' }: { text: string; className?: string }) {
  const lines = (text || '').replace(/\r\n?/g, '\n').split('\n');
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  const flushList = (items: { ordered: boolean; text: string }[], startKey: number) => {
    if (items.length === 0) return;
    const ordered = items[0].ordered;
    const ListTag = ordered ? 'ol' : 'ul';
    blocks.push(
      <ListTag key={`b${startKey}`} className={ordered ? 'md-ol' : 'md-ul'}>
        {items.map((it, j) => <li key={j}>{renderInline(it.text, `li${startKey}-${j}`)}</li>)}
      </ListTag>,
    );
  };

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    key += 1;

    // Fenced code block
    if (trimmed.startsWith('```')) {
      const lang = trimmed.slice(3).trim();
      const buf: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i].trim().startsWith('```')) { buf.push(lines[i]); i += 1; }
      i += 1; // skip closing fence
      blocks.push(
        <div key={`b${key}`} className="md-pre-wrap">
          {lang ? <p className="md-pre-lang">{lang}</p> : null}
          <pre className="md-pre"><code>{buf.join('\n')}</code></pre>
        </div>,
      );
      continue;
    }
    // Heading
    const h = /^(#{1,3})\s+(.*)$/.exec(trimmed);
    if (h) {
      const Tag = `h${h[1].length}` as 'h1' | 'h2' | 'h3';
      blocks.push(<Tag key={`b${key}`} className={`md-h${h[1].length}`}>{renderInline(h[2], `h${key}`)}</Tag>);
      i += 1;
      continue;
    }
    // Horizontal rule
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      blocks.push(<hr key={`b${key}`} className="md-hr" />);
      i += 1;
      continue;
    }
    // Table: header row + divider row, then body rows
    if (trimmed.startsWith('|') && i + 1 < lines.length && isTableDivider(lines[i + 1].trim())) {
      const header = splitTableRow(trimmed);
      const rows: TableRow[] = [{ cells: header, header: true }];
      i += 2;
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        rows.push({ cells: splitTableRow(lines[i].trim()), header: false });
        i += 1;
      }
      blocks.push(
        <div key={`b${key}`} className="md-table-wrap">
          <table className="md-table">
            <thead><tr>{rows[0].cells.map((c, j) => <th key={j}>{renderInline(c, `th${key}-${j}`)}</th>)}</tr></thead>
            <tbody>
              {rows.slice(1).map((r, ri) => (
                <tr key={ri}>{r.cells.map((c, j) => <td key={j}>{renderInline(c, `td${key}-${ri}-${j}`)}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }
    // Lists (consecutive items, ordered or unordered)
    const ul = /^[-*]\s+(.*)$/.exec(trimmed);
    const ol = /^\d+[.)]\s+(.*)$/.exec(trimmed);
    if (ul || ol) {
      const items: { ordered: boolean; text: string }[] = [];
      const ordered = !!ol;
      while (i < lines.length) {
        const t = lines[i].trim();
        const mU = /^[-*]\s+(.*)$/.exec(t);
        const mO = /^\d+[.)]\s+(.*)$/.exec(t);
        if (ordered ? !mO : !mU) break;
        items.push({ ordered, text: (ordered ? mO![1] : mU![1]) });
        i += 1;
      }
      flushList(items, key);
      continue;
    }
    // Blank line — paragraph break
    if (trimmed === '') { i += 1; continue; }
    // Paragraph: gather consecutive non-blank, non-block lines
    const buf: string[] = [trimmed];
    i += 1;
    while (i < lines.length) {
      const t = lines[i].trim();
      if (t === '' || t.startsWith('#') || t.startsWith('```') || /^(-{3,}|\*{3,}|_{3,})$/.test(t)
        || /^[-*]\s+/.test(t) || /^\d+[.)]\s+/.test(t)
        || (t.startsWith('|') && i + 1 < lines.length && isTableDivider(lines[i + 1].trim()))) break;
      buf.push(t);
      i += 1;
    }
    blocks.push(<p key={`b${key}`} className="md-p">{renderInline(buf.join(' '), `p${key}`)}</p>);
  }

  return <div className={`md-body ${className}`}>{blocks}</div>;
}

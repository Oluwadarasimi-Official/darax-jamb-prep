'use client';

import { useMemo, useState } from 'react';
import bank from '@/lib/darax-practice-bank.json';

const SUBJECTS = [
  { id: 'all', label: 'All subjects' },
  { id: 'english', label: 'Use of English' },
  { id: 'mathematics', label: 'Mathematics' },
  { id: 'physics', label: 'Physics' },
  { id: 'chemistry', label: 'Chemistry' },
  { id: 'biology', label: 'Biology' },
] as const;

type Subject = typeof SUBJECTS[number]['id'];

type Question = {
  id: string;
  subject: string;
  topic: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

function stableOrder(id: string, options: string[], answer: number) {
  const offset = [...id].reduce((sum, char) => sum + char.charCodeAt(0), 0) % 4;
  const order = options.map((_, index) => index).sort((a, b) => ((a + offset) % 4) - ((b + offset) % 4));
  return { options: order.map(index => options[index].replace(/^[A-D]\.\s*/, '')), answer: order.indexOf(answer) };
}

const subjectLabel = (id: string) => SUBJECTS.find(s => s.id === id)?.label || id;

export default function QuestionLibrary() {
  const [subject, setSubject] = useState<Subject>('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const [index, setIndex] = useState(0);

  const questions = useMemo(
    () =>
      (bank.questions as Question[]).filter(
        item =>
          (subject === 'all' || item.subject === subject) &&
          (query.trim() === '' ||
            (item.question + ' ' + item.topic).toLowerCase().includes(query.trim().toLowerCase()))
      ),
    [subject, query]
  );

  // Filters can shrink the list under the current cursor — clamp instead of
  // rendering an undefined question.
  const safeIndex = Math.min(index, Math.max(0, questions.length - 1));
  const item = questions[safeIndex];

  const attempted = questions.filter(q => revealed[q.id]).length;
  const correct = questions.filter(q => {
    if (!revealed[q.id]) return false;
    return selected[q.id] === stableOrder(q.id, q.options, q.answer).answer;
  }).length;

  const goTo = (next: number) => setIndex(Math.max(0, Math.min(questions.length - 1, next)));

  const changeSubject = (next: Subject) => {
    setSubject(next);
    setIndex(0);
  };

  const changeQuery = (next: string) => {
    setQuery(next);
    setIndex(0);
  };

  const arranged = item ? stableOrder(item.id, item.options as string[], item.answer) : null;
  const isRevealed = item ? !!revealed[item.id] : false;

  return (
    <div className="flex flex-col gap-5">
      <header>
        <p className="text-xs font-bold tracking-[0.18em] uppercase text-accent">Official Darax · Study Library</p>
        <h1 className="text-2xl md:text-3xl font-bold mt-2">Question Library</h1>
        <p className="muted text-sm mt-2 max-w-3xl leading-relaxed">
          One question at a time, the way you will meet them in the exam. Answer, check the worked solution, then move on.
        </p>
      </header>

      <section className="glass rounded-2xl p-4 md:p-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {SUBJECTS.map(entry => (
            <button
              key={entry.id}
              onClick={() => changeSubject(entry.id)}
              aria-pressed={subject === entry.id}
              className={`rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold border transition-colors ${
                subject === entry.id ? 'bg-accent/25 border-accent text-ink' : 'bg-ink/5 border-ink/15 hover:border-accent/40'
              }`}
            >
              {entry.label}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={event => changeQuery(event.target.value)}
          placeholder="Search a question or topic..."
          aria-label="Search questions"
          className="glass-input mt-3"
        />
        <div className="flex items-center justify-between gap-3 mt-4 text-xs muted">
          <span>{questions.length.toLocaleString()} questions</span>
          <span>{attempted} checked · {correct} correct</span>
        </div>
      </section>

      {!item || !arranged ? (
        <div className="glass rounded-2xl p-8 text-center muted text-sm">
          No matching questions. Try another subject or search term.
        </div>
      ) : (
        <>
          {/* -------------------------------------------------- progress */}
          <section className="glass rounded-2xl px-4 py-3 md:px-5">
            <div className="flex items-center justify-between gap-3 text-xs font-semibold">
              <span className="text-accent">Question {safeIndex + 1} of {questions.length.toLocaleString()}</span>
              <span className="muted">{item.topic}</span>
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-ink/10 overflow-hidden" role="presentation">
              <div
                className="h-full rounded-full bg-accent transition-[width]"
                style={{ width: `${((safeIndex + 1) / Math.max(1, questions.length)) * 100}%` }}
              />
            </div>
          </section>

          {/* --------------------------------------------------- question */}
          <article className="glass rounded-2xl p-4 md:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip !py-1 !px-2.5 text-[11px]">{subjectLabel(item.subject)}</span>
              <span className="chip chip-blue !py-1 !px-2.5 text-[11px]">{item.topic}</span>
            </div>

            <h2 className="font-semibold text-[16px] md:text-[17px] leading-relaxed mt-4">{item.question}</h2>

            <div className="grid gap-2 mt-4">
              {arranged.options.map((option, optionIndex) => {
                const active = selected[item.id] === optionIndex;
                const isCorrect = optionIndex === arranged.answer;
                const style = isRevealed
                  ? isCorrect
                    ? 'border-accent bg-accent/15'
                    : active
                      ? 'border-danger bg-danger/10'
                      : 'border-ink/15 bg-ink/5'
                  : active
                    ? 'border-accent bg-accent/15'
                    : 'border-ink/15 bg-ink/5 hover:border-accent/40';
                return (
                  <button
                    key={optionIndex}
                    disabled={isRevealed}
                    onClick={() => setSelected(current => ({ ...current, [item.id]: optionIndex }))}
                    aria-pressed={active}
                    className={`w-full text-left rounded-xl border px-3.5 py-3 text-sm flex items-start gap-3 transition-colors disabled:cursor-default ${style}`}
                  >
                    <span
                      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border text-[12px] font-bold ${
                        isRevealed && isCorrect
                          ? 'border-accent bg-accent text-white'
                          : active
                            ? 'border-accent text-accent'
                            : 'border-ink/25 text-ink/70'
                      }`}
                    >
                      {String.fromCharCode(65 + optionIndex)}
                    </span>
                    <span className="leading-relaxed">{option}</span>
                    {isRevealed && isCorrect && <span className="ml-auto text-accent font-bold">✓</span>}
                  </button>
                );
              })}
            </div>

            {!isRevealed ? (
              <button
                disabled={selected[item.id] === undefined}
                onClick={() => setRevealed(current => ({ ...current, [item.id]: true }))}
                className="btn-primary mt-4 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Check answer
              </button>
            ) : (
              <div className="mt-4 rounded-xl bg-accent/10 border border-accent/15 p-4 text-sm">
                <p className="font-bold">
                  {selected[item.id] === arranged.answer ? 'Correct' : 'Correct option'}: {String.fromCharCode(65 + arranged.answer)} —{' '}
                  {arranged.options[arranged.answer]}
                </p>
                <p className="muted mt-2 leading-relaxed">{item.explanation}</p>
              </div>
            )}

            {/* -------------------------------------------- step controls */}
            <div className="flex items-center gap-2 mt-5 pt-4 border-t border-ink/10">
              <button
                onClick={() => goTo(safeIndex - 1)}
                disabled={safeIndex === 0}
                className="btn-ghost text-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ‹ Previous
              </button>
              <span className="text-xs muted mx-auto tabular-nums">{safeIndex + 1} / {questions.length.toLocaleString()}</span>
              <button
                onClick={() => goTo(safeIndex + 1)}
                disabled={safeIndex >= questions.length - 1}
                className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next ›
              </button>
            </div>
          </article>

          {/* -------------------------------------------- jump to question */}
          <details className="glass rounded-2xl px-4 py-3 md:px-5 group">
            <summary className="flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className="font-bold text-sm">Jump to question</span>
              <span className="text-xs muted">{questions.length.toLocaleString()} in this set</span>
            </summary>
            <div className="mt-3 max-h-56 overflow-y-auto grid grid-cols-8 sm:grid-cols-12 gap-1.5 pr-1">
              {questions.map((q, qIndex) => {
                const done = !!revealed[q.id];
                const right = done && selected[q.id] === stableOrder(q.id, q.options as string[], q.answer).answer;
                const isCurrent = qIndex === safeIndex;
                const tone = isCurrent
                  ? 'bg-[#8BB4E7] text-white border-[#8BB4E7]'
                  : done
                    ? right
                      ? 'bg-[#1D943B] text-white border-[#1D943B]'
                      : 'bg-[#B22222] text-white border-[#B22222]'
                    : 'bg-ink/5 text-ink/70 border-ink/15 hover:border-accent/50';
                return (
                  <button
                    key={q.id}
                    onClick={() => goTo(qIndex)}
                    aria-label={`Go to question ${qIndex + 1}`}
                    aria-current={isCurrent ? 'true' : undefined}
                    className={`h-7 rounded-md border text-[11px] font-semibold tabular-nums transition-colors ${tone}`}
                  >
                    {qIndex + 1}
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] muted mt-3">
              <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#1D943B] align-middle" /> correct ·{' '}
              <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#B22222] align-middle" /> incorrect ·{' '}
              <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#8BB4E7] align-middle" /> current
            </p>
          </details>
        </>
      )}
    </div>
  );
}

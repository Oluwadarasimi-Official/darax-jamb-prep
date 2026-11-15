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

function stableOrder(id: string, options: string[], answer: number) {
  const offset = [...id].reduce((sum, char) => sum + char.charCodeAt(0), 0) % 4;
  const order = options.map((_, index) => index).sort((a, b) => ((a + offset) % 4) - ((b + offset) % 4));
  return { options: order.map(index => options[index].replace(/^[A-D]\.\s*/, '')), answer: order.indexOf(answer) };
}

export default function QuestionLibrary() {
  const [subject, setSubject] = useState<Subject>('all');
  const [year, setYear] = useState('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Record<string, number>>({});
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const questions = useMemo(() => bank.questions.filter(item =>
    (subject === 'all' || item.subject === subject) &&
    (year === 'all' || item.year === Number(year)) &&
    (query.trim() === '' || (item.question + ' ' + item.topic).toLowerCase().includes(query.trim().toLowerCase()))
  ), [subject, year, query]);

  const correct = questions.filter(item => revealed[item.id] && selected[item.id] === stableOrder(item.id, item.options, item.answer).answer).length;
  const attempted = questions.filter(item => revealed[item.id]).length;

  return (
    <div className="flex flex-col gap-5">
      <header>
        <p className="text-xs font-bold tracking-[0.18em] uppercase text-accent">Official Darax · Study Library</p>
        <h1 className="text-2xl md:text-3xl font-bold mt-2">Question Library</h1>
        <p className="muted text-sm mt-2 max-w-3xl leading-relaxed">Practise by subject, search topics, choose an answer and reveal the worked solution when ready.</p>
      </header>

      <section className="glass rounded-2xl p-4 md:p-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
          {SUBJECTS.map(item => (
            <button key={item.id} onClick={() => setSubject(item.id)} className={`rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold border transition-colors ${subject === item.id ? 'bg-accent text-white border-accent' : 'bg-white/60 border-ink/10 hover:border-accent/40'}`}>
              {item.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
          <select aria-label="Filter by year" value={year} onChange={event => setYear(event.target.value)} className="w-full rounded-xl border border-ink/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-accent">
            <option value="all">All years</option>
            {Array.from({ length: 17 }, (_, index) => 2010 + index).map(value => <option key={value} value={value}>{value}</option>)}
          </select>
          <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search a question or topic..." className="w-full rounded-xl border border-ink/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-accent" />
        <div className="flex items-center justify-between gap-3 mt-4 text-xs muted">
          <span>{questions.length} questions</span>
          <span>{attempted} checked · {correct} correct</span>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        {questions.map((item, index) => {
          const arranged = stableOrder(item.id, item.options, item.answer);
          const isRevealed = !!revealed[item.id];
          return (
            <article key={item.id} className="glass rounded-2xl p-4 md:p-5">
              <div className="flex items-start justify-between gap-3">
                <span className="text-xs font-bold text-accent">{index + 1} / {questions.length}</span>
                <span className="text-xs muted">{item.topic}</span>
              </div>
              <h2 className="font-semibold text-[15px] leading-relaxed mt-3">{item.question}</h2>
              <div className="grid gap-2 mt-4">
                {arranged.options.map((option, optionIndex) => {
                  const active = selected[item.id] === optionIndex;
                  const isCorrect = optionIndex === arranged.answer;
                  const style = isRevealed
                    ? isCorrect ? 'border-emerald-500 bg-emerald-500/10' : active ? 'border-rose-400 bg-rose-400/10' : 'border-ink/10 bg-white/40'
                    : active ? 'border-accent bg-accent/10' : 'border-ink/10 bg-white/50 hover:border-accent/40';
                  return (
                    <button key={optionIndex} disabled={isRevealed} onClick={() => setSelected(current => ({ ...current, [item.id]: optionIndex }))} className={`w-full text-left rounded-xl border px-3.5 py-3 text-sm flex items-start gap-3 transition-colors ${style}`}>
                      <span className="font-bold shrink-0">{String.fromCharCode(65 + optionIndex)}.</span>
                      <span>{option}</span>
                      {isRevealed && isCorrect && <span className="ml-auto text-emerald-700 font-bold">✓</span>}
                    </button>
                  );
                })}
              </div>
              {!isRevealed ? (
                <button disabled={selected[item.id] === undefined} onClick={() => setRevealed(current => ({ ...current, [item.id]: true }))} className="btn-primary mt-4 disabled:opacity-40 disabled:cursor-not-allowed">Check answer</button>
              ) : (
                <div className="mt-4 rounded-xl bg-accent/10 border border-accent/15 p-4 text-sm">
                  <p className="font-bold">{selected[item.id] === arranged.answer ? 'Correct answer' : 'Correct option'}: {String.fromCharCode(65 + arranged.answer)} — {arranged.options[arranged.answer]}</p>
                  <p className="muted mt-2 leading-relaxed">{item.explanation}</p>
                </div>
              )}
            </article>
          );
        })}
        {questions.length === 0 && <div className="glass rounded-2xl p-8 text-center muted text-sm">No matching questions. Try another subject or search term.</div>}
      </section>
    </div>
  );
}

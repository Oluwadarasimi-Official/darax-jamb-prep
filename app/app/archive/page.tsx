import Link from 'next/link';
import { HISTORICAL_PREVIEW_2000 } from '@/lib/historical-preview';

const YEARS = Array.from({ length: 27 }, (_, i) => 2000 + i);
const SUBJECTS = [
  { id: 'english', name: 'Use of English', years: YEARS, source: 'https://studentfirst.ng/jamb/english', note: 'Compulsory UTME subject' },
  { id: 'mathematics', name: 'Mathematics', years: YEARS.filter(year => year <= 2025), source: 'https://studentfirst.ng/jamb/mathematics', note: '2026 is not listed' },
  { id: 'physics', name: 'Physics', years: YEARS, source: 'https://studentfirst.ng/jamb/physics', note: 'Science subject' },
  { id: 'chemistry', name: 'Chemistry', years: YEARS.filter(year => year <= 2004 || year >= 2010), source: 'https://studentfirst.ng/jamb/chemistry', note: '2005–2009 are not listed in the year index' },
  { id: 'biology', name: 'Biology', years: YEARS.filter(year => year >= 2010), source: 'https://studentfirst.ng/jamb/biology', note: '2000–2009 are not listed' },
];

export default function ArchivePage() {
  return (
    <div className="max-w-5xl flex flex-col gap-5">
      <header>
        <p className="text-xs font-bold tracking-[0.18em] uppercase text-accent">Official Darax · Question Library</p>
        <h1 className="text-2xl md:text-3xl font-bold mt-2">JAMB Past Questions Archive</h1>
        <p className="muted text-sm mt-2 max-w-3xl leading-relaxed">Browse the requested 2000–2026 years by subject. Historical source papers are kept separate from original DARAX practice questions.</p>
      </header>

      <section className="glass p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div><p className="font-bold text-lg">Historical paper directory</p><p className="text-sm muted mt-1">Tap a year to open that paper on StudentFirst. These links do not mean the paper has been copied into DARAX.</p></div>
          <span className="rounded-full px-3 py-1 text-xs font-semibold bg-amber-500/10 text-amber-700 border border-amber-500/20">Source-linked · Import pending</span>
        </div>
        <div className="grid gap-3 mt-5">
          {SUBJECTS.map(subject => (
            <article key={subject.id} className="glass-soft rounded-xl p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div><h2 className="font-semibold">{subject.name}</h2><p className="text-xs muted mt-1">{subject.note}</p></div>
                <span className="text-xs font-semibold rounded-full px-2.5 py-1 bg-ink/5 border border-ink/10">{subject.years.length} years listed</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {YEARS.map(year => {
                  const listed = subject.years.includes(year);
                  return listed
                    ? <a key={year} href={subject.source + '/' + year + '/objective'} target="_blank" rel="noreferrer" title={'Open ' + subject.name + ' ' + year + ' source paper'} className="text-[11px] rounded-md px-2 py-1 border border-accent/30 bg-accent/10 text-ink hover:bg-accent/20 underline-offset-2 hover:underline">{year} ↗</a>
                    : <span key={year} title="No paper for this year is listed on the source index" className="text-[11px] rounded-md px-2 py-1 border border-ink/10 bg-ink/5 text-ink/35 line-through">{year}</span>;
                })}
              </div>
              <a href={subject.source} target="_blank" rel="noreferrer" className="inline-flex mt-3 text-sm text-accent underline underline-offset-4">View all {subject.name} years on StudentFirst ↗</a>
            </article>
          ))}
        </div>
        <p className="text-xs muted mt-4 leading-relaxed">Coverage is transcribed from the StudentFirst year indexes and reflects which years are listed there, not a completed DARAX import. Some papers show only a short preview until the visitor signs in. No missing historical paper is fabricated.</p>
      </section>

      <section className="glass p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="font-bold text-lg">Imported historical questions</h2>
            <p className="muted text-sm mt-1">Verified public previews · 2000 papers</p>
          </div>
          <span className="text-xs font-semibold rounded-full px-3 py-1 bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">{HISTORICAL_PREVIEW_2000.length} questions imported</span>
        </div>
        <p className="muted text-xs mt-3 leading-relaxed">These are the questions visible in the public previews. Each answer below was independently worked out. They are not the complete 2000 papers.</p>
        <div className="grid gap-3 mt-4">
          {HISTORICAL_PREVIEW_2000.map((item, index) => (
            <article key={item.id} className="glass-soft rounded-xl p-4">
              <div className="flex flex-wrap items-center gap-2 text-xs muted">
                <span className="font-semibold uppercase">{item.subject}</span>
                <span>·</span><span>{item.year}</span><span>·</span><span>{item.topic}</span>
              </div>
              <p className="font-medium mt-2 leading-relaxed">{index + 1}. {item.question}</p>
              <div className="grid gap-2 mt-3">
                {item.options.map((option, optionIndex) => (
                  <div key={optionIndex} className={`rounded-lg border px-3 py-2 text-sm ${optionIndex === item.answer ? 'border-emerald-500/40 bg-emerald-500/10' : 'border-ink/10 bg-ink/[0.02]'}`}>
                    <span className="font-semibold mr-2">{String.fromCharCode(65 + optionIndex)}.</span>{option}
                    {optionIndex === item.answer && <span className="ml-2 text-xs font-semibold text-emerald-700">Correct answer</span>}
                  </div>
                ))}
              </div>
              <details className="mt-3 text-sm">
                <summary className="cursor-pointer font-semibold text-accent">View worked explanation</summary>
                <p className="muted mt-2 leading-relaxed">{item.explanation}</p>
                <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex mt-2 text-xs text-accent underline underline-offset-4">View source paper ↗</a>
              </details>
            </article>
          ))}
        </div>
      </section>

      <section className="glass p-5 md:p-6">
        <h2 className="font-bold text-lg">DARAX original JAMB-standard practice</h2>
        <p className="muted text-sm mt-1 leading-relaxed">Use the existing curriculum question bank for original practice while historical papers are being imported. These questions are written for DARAX and are not labelled as past JAMB questions.</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/app/assessments" className="btn-primary">Open practice assessments</Link>
          <Link href="/app/utme" className="btn-ghost">Full UTME simulation</Link>
        </div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import practiceBank from '@/lib/darax-practice-bank.json';

const YEARS = Array.from({ length: 17 }, (_, i) => 2010 + i);
const SUBJECTS = [
  { id: 'english', name: 'Use of English', years: YEARS, source: 'https://studentfirst.ng/jamb/english', count: '2010–2026', note: 'Compulsory · year-by-year papers listed' },
  { id: 'mathematics', name: 'Mathematics', years: YEARS.filter(year => year <= 2025), source: 'https://studentfirst.ng/jamb/mathematics', count: '2010–2025', note: '2026 paper is not listed on the source index' },
  { id: 'physics', name: 'Physics', years: YEARS, source: 'https://studentfirst.ng/jamb/physics', count: '2010–2026', note: 'Year-by-year papers listed' },
  { id: 'chemistry', name: 'Chemistry', years: YEARS, source: 'https://studentfirst.ng/jamb/chemistry', count: '2010–2026', note: 'Year-by-year papers listed' },
  { id: 'biology', name: 'Biology', years: YEARS, source: 'https://studentfirst.ng/jamb/biology', count: '2010–2026', note: 'Year-by-year papers listed' },
];

export default function ArchivePage() {
  return (
    <div className="max-w-5xl flex flex-col gap-5">
      <header>
        <p className="text-xs font-bold tracking-[0.18em] uppercase text-accent">Official Darax · Question Library</p>
        <h1 className="text-2xl md:text-3xl font-bold mt-2">JAMB Past Questions Archive</h1>
        <p className="muted text-sm mt-2 max-w-3xl leading-relaxed">The archive scope is now focused on 2010–2026 for Use of English, Mathematics, Physics, Chemistry and Biology. Historical papers remain separate from original DARAX practice material.</p>
      </header>

      <section className="glass p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-bold text-lg">2010–2026 source directory</p>
            <p className="text-sm muted mt-1">Choose a subject and year to open the corresponding StudentFirst paper.</p>
          </div>
          <span className="rounded-full px-3 py-1 text-xs font-semibold bg-amber-500/10 text-amber-700 border border-amber-500/20">Source-linked · DARAX import in progress</span>
        </div>
        <div className="grid gap-3 mt-5">
          {SUBJECTS.map(subject => (
            <article key={subject.id} className="glass-soft rounded-xl p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h2 className="font-semibold">{subject.name}</h2>
                  <p className="text-xs muted mt-1">{subject.note}</p>
                </div>
                <span className="text-xs font-semibold rounded-full px-2.5 py-1 bg-ink/5 border border-ink/10">{subject.count}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {YEARS.map(year => {
                  const listed = subject.years.includes(year);
                  return listed
                    ? <a key={year} href={subject.source + '/' + year + '/objective'} target="_blank" rel="noreferrer" title={'Open ' + subject.name + ' ' + year + ' source paper'} className="text-[11px] rounded-md px-2 py-1 border border-accent/30 bg-accent/10 text-ink hover:bg-accent/20 underline-offset-2 hover:underline">{year} ↗</a>
                    : <span key={year} title="This year is not listed by the source" className="text-[11px] rounded-md px-2 py-1 border border-ink/10 bg-ink/5 text-ink/35 line-through">{year}</span>;
                })}
              </div>
              <a href={subject.source} target="_blank" rel="noreferrer" className="inline-flex mt-3 text-sm text-accent underline underline-offset-4">View {subject.name} archive ↗</a>
            </article>
          ))}
        </div>
        <p className="text-xs muted mt-4 leading-relaxed">The year chips reflect papers listed on the source indexes; they do not claim that the complete papers have already been imported into DARAX. StudentFirst currently shows a short public preview for some papers and requires sign-in to access the complete question set and worked solutions. No missing paper or answer is fabricated.</p>
      </section>

      <section className="glass p-5 md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold tracking-[0.16em] uppercase text-accent">DARAX original practice</p>
            <h2 className="font-bold text-xl mt-1">JAMB-standard practice questions</h2>
            <p className="muted text-sm mt-2">25 original questions across all five subjects, each with four options, an answer key and a worked explanation. Correct-option positions vary.</p>
          </div>
          <span className="rounded-full px-3 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">25 questions · 5 subjects</span>
        </div>
        <p className="text-xs muted mt-3 leading-relaxed">{practiceBank.notice}</p>
        <div className="grid md:grid-cols-2 gap-3 mt-4">
          {(['english','mathematics','physics','chemistry','biology'] as const).map(subject => (
            <article key={subject} className="glass-soft rounded-xl p-4">
              <h3 className="font-semibold capitalize">{subject === 'english' ? 'Use of English' : subject}</h3>
              <div className="flex flex-col gap-3 mt-3">
                {practiceBank.questions.filter(item => item.subject === subject).map((item, index) => (
                  <details key={item.id} className="rounded-lg border border-ink/10 bg-white/40 p-3">
                    <summary className="cursor-pointer text-sm font-medium leading-relaxed">{index + 1}. {item.question}</summary>
                    <ul className="pl-0 mt-3 text-sm flex flex-col gap-1.5 list-none">
                      {item.options.map((option, optionIndex) => <li key={optionIndex}>{option}</li>)}
                    </ul>
                    <div className="mt-3 rounded-lg bg-accent/10 p-3 text-sm">
                      <p className="font-semibold">Correct answer: {String.fromCharCode(65 + item.answer)} — {item.options[item.answer].replace(/^[A-D]\.\s*/, '')}</p>
                      <p className="muted mt-1 leading-relaxed">{item.explanation}</p>
                    </div>
                    <p className="text-[11px] muted mt-2">{item.topic} · Original DARAX practice</p>
                  </details>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="glass p-5 md:p-6">
        <h2 className="font-bold text-lg">DARAX question-bank integrity</h2>
        <p className="muted text-sm mt-2 leading-relaxed">Every historical question added to the in-app bank must retain its year, subject, source reference, four-option structure where applicable, verified answer and explanation. Questions that are only linked to an external source are not counted as imported questions. Original DARAX practice questions remain clearly labelled as original practice.</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link href="/app/assessments" className="btn-primary">Open practice assessments</Link>
          <Link href="/app/utme" className="btn-ghost">Full UTME simulation</Link>
        </div>
      </section>
    </div>
  );
}

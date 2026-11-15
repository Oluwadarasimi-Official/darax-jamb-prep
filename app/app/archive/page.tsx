import Link from 'next/link';

const YEARS = Array.from({ length: 27 }, (_, i) => 2000 + i);
const SUBJECTS = [
  { id: 'english', name: 'Use of English', from: 2000, to: 2026, source: 'https://studentfirst.ng/jamb/english', note: 'Compulsory UTME subject' },
  { id: 'mathematics', name: 'Mathematics', from: 2000, to: 2025, source: 'https://studentfirst.ng/jamb/mathematics', note: '2026 is not listed in the source index' },
  { id: 'physics', name: 'Physics', from: 2000, to: 2026, source: 'https://studentfirst.ng/jamb/physics', note: 'Science subject' },
  { id: 'chemistry', name: 'Chemistry', from: 2000, to: 2026, source: 'https://studentfirst.ng/jamb/chemistry', note: 'Science subject' },
  { id: 'biology', name: 'Biology', from: 2010, to: 2026, source: 'https://studentfirst.ng/jamb/biology', note: '2000–2009 are not listed in the source index' },
];

export default function ArchivePage() {
  return (
    <div className="max-w-5xl flex flex-col gap-5">
      <header>
        <p className="text-xs font-bold tracking-[0.18em] uppercase text-accent">Official Darax · Question Library</p>
        <h1 className="text-2xl md:text-3xl font-bold mt-2">JAMB Past Questions Archive</h1>
        <p className="muted text-sm mt-2 max-w-3xl leading-relaxed">Historical coverage tracker for 2000–2026. Historical papers are kept separate from original DARAX practice questions so students can always tell which material they are using.</p>
      </header>

      <section className="glass p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div><p className="font-bold text-lg">Historical archive import</p><p className="text-sm muted mt-1">Coverage below reflects the StudentFirst subject index. A listed paper is not yet an imported paper in DARAX.</p></div>
          <span className="rounded-full px-3 py-1 text-xs font-semibold bg-amber-500/10 text-amber-700 border border-amber-500/20">Import in progress</span>
        </div>
        <div className="grid gap-3 mt-5">
          {SUBJECTS.map(subject => (
            <article key={subject.id} className="glass-soft rounded-xl p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div><h2 className="font-semibold">{subject.name}</h2><p className="text-xs muted mt-1">{subject.note}</p></div>
                <span className="text-xs font-semibold rounded-full px-2.5 py-1 bg-ink/5 border border-ink/10">{subject.from}–{subject.to} listed</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {YEARS.map(year => {
                  const listed = year >= subject.from && year <= subject.to;
                  return <span key={year} title={listed ? 'Listed in StudentFirst index; not yet imported into DARAX' : 'Not listed in the StudentFirst subject index'} className={'text-[11px] rounded-md px-2 py-1 border ' + (listed ? 'border-accent/30 bg-accent/10 text-ink' : 'border-ink/10 bg-ink/5 text-ink/35 line-through')}>{year}</span>;
                })}
              </div>
              <p className="text-xs muted mt-3">{subject.from === 2000 && subject.to === 2026 ? 'All years in the requested range are listed.' : 'Years outside the listed range are left as gaps; no historical questions are fabricated.'}</p>
              <a href={subject.source} target="_blank" rel="noreferrer" className="inline-flex mt-3 text-sm text-accent underline underline-offset-4">View source subject index ↗</a>
            </article>
          ))}
        </div>
        <p className="text-xs muted mt-4 leading-relaxed">Source: StudentFirst JAMB subject index. “Listed” means the source advertises that year; it does not mean the paper has been extracted, independently checked or published inside this app. Some papers require sign-in to view in full.</p>
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

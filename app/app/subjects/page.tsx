'use client';
import Link from 'next/link';
import { useDb } from '@/components/db-context';
import { getSubject, getSubjectLessons, SUBJECTS } from '@/lib/curriculum';
import { DEPARTMENTS, DEPARTMENT_SUBJECTS } from '@/lib/store';
import { subjectProgress } from '@/lib/progression';
import { GlassCard, ProgressBar } from '@/components/ui';

export default function SubjectsPage() {
  const { db, user } = useDb();
  if (!user) return null;
  const dept = user.department || 'science';
  const deptName = DEPARTMENTS.find(d => d.id === dept)?.name || 'Science';
  const deptSubjectIds = ['english', ...DEPARTMENT_SUBJECTS[dept]];
  const deptSubjects = SUBJECTS.filter(s => deptSubjectIds.includes(s.id));
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-bold">My Subjects</h1>
        <p className="muted text-sm mt-1">Your four JAMB subjects. English Language is compulsory. Change subjects in <Link href="/app/profile" className="text-accent underline">My Profile</Link>.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {user.subjects.map(id => {
          const s = getSubject(id)!;
          const lessons = getSubjectLessons(id, db);
          return (
            <GlassCard key={id}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-lg flex items-center gap-2"><span className="w-3 h-3 rounded-full inline-block" style={{ background: s.colour }} />{s.name}</p>
                  <p className="muted text-sm mt-1">{s.description}</p>
                  <p className="text-xs muted mt-2">{s.topics.length} topics · {lessons.length} lessons</p>
                </div>
              </div>
              <Link href={`/app/subjects/${id}`} className="btn-primary inline-block mt-4 text-sm">Open subject →</Link>
            </GlassCard>
          );
        })}
      </div>

      {/* Practice lives with the subjects it tests — this is where the
          Assessments, UTME Simulation and Past Questions destinations live on
          mobile, where the sidebar is not available. */}
      <GlassCard>
        <h2 className="font-bold text-lg">Practice &amp; revise</h2>
        <p className="muted text-sm mt-1">Everything that tests you, outside of your lessons.</p>
        <div className="grid sm:grid-cols-3 gap-3 mt-4">
          {[
            { href: '/app/assessments', title: 'Assessments', body: 'Topic tests and full subject practice exams, graded instantly.' },
            { href: '/app/utme', title: 'Full UTME Simulation', body: 'A 180-question timed paper with the real CBT question map.' },
            { href: '/app/archive', title: 'Past Questions', body: 'The study library — one question at a time, with worked solutions.' },
          ].map(entry => (
            <Link key={entry.href} href={entry.href} className="glass-soft p-4 border border-ink/10 hover:border-accent/50 transition-colors">
              <p className="font-semibold text-sm">{entry.title}</p>
              <p className="text-xs muted mt-1 leading-relaxed">{entry.body}</p>
              <p className="text-xs font-semibold text-accent mt-3">Open →</p>
            </Link>
          ))}
        </div>
      </GlassCard>

      <GlassCard>
        <h2 className="font-bold text-lg mb-3">All {deptName} subjects</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {deptSubjects.map(s => {
            const enrolled = user.subjects.includes(s.id);
            return (
              <div key={s.id} className="glass-soft p-3">
                <p className="font-medium text-sm">{s.name}</p>
                <p className="text-xs muted mt-1">{enrolled ? '✓ Enrolled' : s.tagline}</p>
              </div>
            );
          })}
        </div>
      </GlassCard>
    </div>
  );
}

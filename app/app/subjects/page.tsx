'use client';
import Link from 'next/link';
import { useDb } from '@/components/db-context';
import { getSubject, getSubjectLessons, SUBJECTS } from '@/lib/curriculum';
import { subjectProgress } from '@/lib/progression';
import { GlassCard, ProgressBar } from '@/components/ui';

export default function SubjectsPage() {
  const { user } = useDb();
  if (!user) return null;
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-bold">My Subjects</h1>
        <p className="muted text-sm mt-1">Your four JAMB subjects. English Language is compulsory. Change subjects in <Link href="/app/profile" className="text-accent underline">My Profile</Link>.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {user.subjects.map(id => {
          const s = getSubject(id)!;
          const lessons = getSubjectLessons(id);
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
      <GlassCard>
        <h2 className="font-bold text-lg mb-3">All available subjects</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {SUBJECTS.map(s => {
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

'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useDb } from '@/components/db-context';
import { getSubject, getSubjectLessons } from '@/lib/curriculum';
import { isLessonUnlocked, subjectProgress } from '@/lib/progression';
import { GlassCard, ProgressBar, EmptyState } from '@/components/ui';

export default function SubjectDetailPage() {
  const params = useParams();
  const id = String(params.id);
  const { db, user } = useDb();
  if (!user) return null;
  const subject = getSubject(id);
  if (!subject) return <EmptyState title="Subject not found" body="This subject does not exist on the platform." action={<Link href="/app/subjects" className="btn-primary">Back to subjects</Link>} />;
  const lessons = getSubjectLessons(id, db);
  const prog = subjectProgress(db, user.id, id);
  const enrolled = user.subjects.includes(id);

  return (
    <div className="flex flex-col gap-5">
      <GlassCard>
        <p className="font-bold text-2xl flex items-center gap-2"><span className="w-3.5 h-3.5 rounded-full inline-block" style={{ background: subject.colour }} />{subject.name}</p>
        <p className="muted text-sm mt-1">{subject.description}</p>
        <p className="text-sm mt-2">{enrolled ? `Progress: ${prog.percent}% · ${prog.completed}/${prog.total} lessons completed · ${prog.unlocked - prog.completed} unlocked` : 'You are not enrolled in this subject. Enrol from My Profile to study it.'}</p>
        <ProgressBar value={prog.percent} className="mt-3" />
      </GlassCard>
      {[...subject.topics, ...lessons.map(l => l.topic).filter(t => !subject.topics.includes(t))].map(topic => {
        const topicLessons = lessons.filter(l => l.topic === topic);
        return (
          <GlassCard key={topic}>
            <h2 className="font-bold text-lg mb-3">{topic}</h2>
            <div className="flex flex-col gap-2">
              {topicLessons.map(l => {
                const unpublished = db.publishedOverrides[l.id] === false;
                const unlocked = enrolled && !unpublished && isLessonUnlocked(db, user.id, l.id);
                const p = (db.progress[user.id] || []).find(x => x.lessonId === l.id);
                const done = !!p?.completed;
                return (
                  <div key={l.id} className="glass-soft p-3 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-medium">{l.title}</p>
                      <p className="text-xs muted">{l.subtopic}{done ? ` · Best score ${p!.bestScore}%` : ''}</p>
                    </div>
                    {done ? (
                      <Link href={`/app/learn/${l.id}`} className="btn-ghost text-sm shrink-0">Review ✓</Link>
                    ) : unlocked ? (
                      <Link href={`/app/learn/${l.id}`} className="btn-primary text-sm shrink-0">Start →</Link>
                    ) : unpublished ? (
                      <span className="text-xs muted shrink-0 border border-ink/15 rounded-lg px-3 py-2">Not published yet</span>
                    ) : (
                      <span className="text-xs muted shrink-0 border border-ink/15 rounded-lg px-3 py-2">🔒 Locked — score 70%+ on the previous lesson</span>
                    )}
                  </div>
                );
              })}
            </div>
          </GlassCard>
        );
      })}
    </div>
  );
}

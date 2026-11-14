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
  const lessons = getSubjectLessons(id);
  const prog = subjectProgress(db, user.id, id);
  const enrolled = user.subjects.includes(id);

  return (
    <div className="flex flex-col gap-5">
      <GlassCard className="!p-5 sm:!p-6">
        <p className="font-bold text-2xl sm:text-[1.75rem] flex items-center gap-3 tracking-tight"><span className="w-3 h-3 rounded-full inline-block shrink-0" style={{ background: subject.colour }} />{subject.name}</p>
        <p className="muted text-sm sm:text-[.95rem] mt-2 leading-7 max-w-3xl">{subject.description}</p>
        <p className="text-sm mt-3">{enrolled ? <>Progress: <strong>{prog.percent}%</strong> · {prog.completed}/{prog.total} lessons completed · {prog.unlocked - prog.completed} unlocked</> : 'You are not enrolled in this subject. Enrol from My Profile to study it.'}</p>
        <ProgressBar value={prog.percent} className="mt-3" />
      </GlassCard>
      {subject.topics.map(topic => {
        const topicLessons = lessons.filter(l => l.topic === topic);
        return (
          <GlassCard key={topic} className="!p-4 sm:!p-5">
            <div className="flex items-center justify-between gap-3 mb-4">
              <h2 className="font-bold text-lg tracking-tight">{topic}</h2>
              <span className="text-xs muted shrink-0">{topicLessons.length} lessons</span>
            </div>
            <div className="flex flex-col gap-3">
              {topicLessons.map((l, index) => {
                const unpublished = db.publishedOverrides[l.id] === false;
                const unlocked = enrolled && !unpublished && isLessonUnlocked(db, user.id, l.id);
                const p = (db.progress[user.id] || []).find(x => x.lessonId === l.id);
                const done = !!p?.completed;
                return (
                  <div key={l.id} className="glass-soft p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 min-w-0">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start gap-2">
                        <span className="text-xs muted tabular-nums mt-1 shrink-0">{String(index + 1).padStart(2, '0')}</span>
                        <div className="min-w-0">
                          <p className="font-semibold text-[.95rem] leading-6 break-words">{l.title}</p>
                          <p className="text-xs muted mt-1 leading-5 break-words">{l.subtopic}{done ? ' · Best score ' + p!.bestScore + '%' : ''}</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full sm:w-auto sm:max-w-[240px] shrink-0">
                      {done ? (
                        <Link href={'/app/learn/' + l.id} className="btn-ghost text-sm w-full sm:w-auto inline-flex justify-center">Review lesson <span className="ml-1">✓</span></Link>
                      ) : unlocked ? (
                        <Link href={'/app/learn/' + l.id} className="btn-primary text-sm w-full sm:w-auto inline-flex justify-center">Start lesson <span className="ml-1">→</span></Link>
                      ) : unpublished ? (
                        <span className="block text-xs muted border border-ink/15 rounded-xl px-3 py-2.5 text-center leading-5">Not published yet</span>
                      ) : (
                        <span className="block text-xs muted border border-ink/15 rounded-xl px-3 py-2.5 text-center leading-5 whitespace-normal">🔒 Locked · Score 70%+ on the previous lesson</span>
                      )}
                    </div>
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

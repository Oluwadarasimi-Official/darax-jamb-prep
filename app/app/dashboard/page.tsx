'use client';
import Link from 'next/link';
import { useDb } from '@/components/db-context';
import { getSubject, getSubjectLessons } from '@/lib/curriculum';
import { overallProgress, subjectProgress, nextLessonFor } from '@/lib/progression';
import { computeScorers, computeScholars, weekKey } from '@/lib/weekly';
import { GlassCard, ProgressBar, EmptyState, Avatar } from '@/components/ui';

export default function DashboardPage() {
  const { db, user } = useDb();
  if (!user) return null;
  const overall = overallProgress(db, user.id, user.subjects);
  const attempts = db.attempts.filter(a => a.userId === user.id).sort((a, b) => b.completedAt.localeCompare(a.completedAt));
  const recent = attempts.slice(0, 4);
  const pending = user.subjects.flatMap(s => getSubjectLessons(s).filter(l => {
    const p = (db.progress[user.id] || []).find(x => x.lessonId === l.id);
    return !p?.completed;
  })).length;
  const notifs = db.notifications.filter(n => n.userId === user.id).slice(0, 4);
  const myBadges = db.badges.filter(b => b.userId === user.id);
  const wk = weekKey().week;
  const scorers = computeScorers(db, wk);
  const scholars = computeScholars(db, wk);
  const scorerRank = scorers.findIndex(r => r.userId === user.id) + 1;
  const scholarRank = scholars.findIndex(r => r.userId === user.id) + 1;
  const continueLesson = user.subjects.map(s => nextLessonFor(db, user.id, s)).find(Boolean);
  const firstName = user.fullName.split(' ')[0];
  const hour = new Date().getHours();
  const greet = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="flex flex-col gap-5">
      <GlassCard>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar name={user.fullName} size={56} />
            <div>
              <h1 className="text-2xl font-bold">{greet}, {firstName} 👋</h1>
              <p className="muted text-sm">@{user.username}{user.intendedCourse ? ` · Aiming for ${user.intendedCourse}` : ''}{user.isDemo ? ' · Demo account (test data)' : ''}</p>
              <p className="text-sm mt-1">Overall progress: <strong>{overall.percent}%</strong> · {overall.done} of {overall.total} lessons completed</p>
            </div>
          </div>
          {continueLesson ? (
            <Link href={`/app/learn/${continueLesson.id}`} className="btn-primary">Continue Learning →</Link>
          ) : (
            <Link href="/app/subjects" className="btn-primary">Browse subjects →</Link>
          )}
        </div>
        <ProgressBar value={overall.percent} className="mt-4" />
      </GlassCard>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: 'Lessons completed', value: String(overall.done) },
          { label: 'Lessons remaining', value: String(overall.total - overall.done) },
          { label: 'Assessments taken', value: String(attempts.length) },
          { label: 'Average score', value: attempts.length ? `${Math.round(attempts.reduce((s, a) => s + a.score, 0) / attempts.length)}%` : '—' },
        ].map(s => (
          <GlassCard key={s.label} className="!p-4">
            <p className="text-2xl font-extrabold">{s.value}</p>
            <p className="text-xs muted mt-0.5">{s.label}</p>
          </GlassCard>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5 min-w-0">
          <GlassCard>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-lg">My Subjects</h2>
              <Link href="/app/subjects" className="text-sm text-emerald-300 underline">View all</Link>
            </div>
            <div className="flex flex-col gap-3">
              {user.subjects.map(id => {
                const s = getSubject(id)!;
                const p = subjectProgress(db, user.id, id);
                return (
                  <Link key={id} href={`/app/subjects/${id}`} className="glass-soft p-3 block hover:bg-white/10">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: s.colour }} />{s.name}</span>
                      <span className="text-sm muted">{p.completed}/{p.total} · {p.percent}%</span>
                    </div>
                    <ProgressBar value={p.percent} className="mt-2" />
                    <p className="text-xs muted mt-1.5">{p.unlocked - p.completed} lesson{p.unlocked - p.completed === 1 ? '' : 's'} unlocked and waiting · {p.total - p.unlocked} locked</p>
                  </Link>
                );
              })}
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-lg">Recent quiz scores</h2>
              <Link href="/app/assessments" className="text-sm text-emerald-300 underline">All assessments</Link>
            </div>
            {recent.length === 0 ? (
              <EmptyState title="No assessments yet" body="Take your first lesson quiz and your scores will appear here." action={<Link href="/app/subjects" className="btn-primary">Start a lesson</Link>} />
            ) : (
              <div className="flex flex-col gap-2">
                {recent.map(a => (
                  <div key={a.id} className="glass-soft p-3 flex items-center justify-between gap-3">
                    <div className="min-w-0"><p className="font-medium truncate">{a.title}</p><p className="text-xs muted">{new Date(a.completedAt).toLocaleString()} · {a.kind}</p></div>
                    <span className={`font-bold shrink-0 ${a.score >= 70 ? 'text-emerald-300' : 'text-amber-300'}`}>{a.score}%</span>
                  </div>
                ))}
              </div>
            )}
            <p className="text-sm muted mt-3">Pending assessments: <strong className="text-white">{pending}</strong> lessons still to complete.</p>
          </GlassCard>
        </div>

        <div className="flex flex-col gap-5 min-w-0">
          <GlassCard>
            <h2 className="font-bold text-lg mb-3">This week — {wk}</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-soft p-3 text-center">
                <p className="text-2xl font-extrabold">{scorerRank ? `#${scorerRank}` : '—'}</p>
                <p className="text-xs muted">Top Scorers rank</p>
              </div>
              <div className="glass-soft p-3 text-center">
                <p className="text-2xl font-extrabold">{scholarRank ? `#${scholarRank}` : '—'}</p>
                <p className="text-xs muted">Top Scholars rank</p>
              </div>
            </div>
            <p className="text-xs muted mt-3">Ranks use only real assessment records from this week (minimum 3 assessments for Scorers, 2 for Scholars). Demo accounts are excluded.</p>
            <Link href="/app/leaderboards" className="btn-ghost inline-block mt-3 text-sm">View leaderboards →</Link>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-lg">Achievement badges</h2>
              <Link href="/app/achievements" className="text-sm text-emerald-300 underline">View all</Link>
            </div>
            {myBadges.length === 0 ? (
              <p className="muted text-sm">No badges yet. Finish in the weekly Top 10 to earn an official Official Darax badge.</p>
            ) : (
              <div className="flex flex-col gap-2">
                {myBadges.slice(0, 3).map(b => (
                  <Link key={b.id} href={`/app/achievements/${b.id}`} className="glass-soft p-3 flex items-center justify-between">
                    <span><span className="font-medium">{b.title}</span><span className="muted text-sm block">{b.week} · Position #{b.position}</span></span>
                    <span className="text-amber-300">★</span>
                  </Link>
                ))}
              </div>
            )}
          </GlassCard>

          <GlassCard>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-lg">Recent notifications</h2>
              <Link href="/app/notifications" className="text-sm text-emerald-300 underline">View all</Link>
            </div>
            {notifs.length === 0 ? (
              <p className="muted text-sm">No notifications yet.</p>
            ) : (
              <div className="flex flex-col gap-2">
                {notifs.map(n => (
                  <Link key={n.id} href={n.link || '/app/notifications'} className="glass-soft p-3 block">
                    <p className="font-medium text-sm">{n.title}</p>
                    <p className="text-xs muted mt-0.5 line-clamp-2">{n.body}</p>
                  </Link>
                ))}
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

'use client';
import Link from 'next/link';
import { useDb } from '@/components/db-context';
import { GlassCard, EmptyState } from '@/components/ui';
import { VerifiedBadge } from '@/components/Logo';

export default function AchievementsPage() {
  const { user, db } = useDb();
  if (!user) return null;
  const mine = db.badges.filter(b => b.userId === user.id).sort((a, b) => b.issueDate.localeCompare(a.issueDate));
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-2xl font-bold">My Achievements</h1>
        <p className="muted text-sm mt-1">Official Darax badges earned by finishing in the weekly Top 10. Each badge is verifiable by its unique ID.</p>
      </div>
      {mine.length === 0 ? (
        <EmptyState title="No badges yet" body="Finish in the Top 10 of the Weekly Top Scorers or Weekly Top Scholars leaderboard to earn your first official badge, signed by Official Darax." action={<Link href="/app/leaderboards" className="btn-primary">View leaderboards</Link>} />
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {mine.map(b => (
            <GlassCard key={b.id}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-warn text-2xl">★</p>
                  <p className="font-bold text-lg mt-1">{b.title}</p>
                  <p className="text-sm muted">Position #{b.position} · Week {b.week} · {b.year}</p>
                  <p className="text-xs muted mt-2 font-mono">{b.id}</p>
                </div>
                <VerifiedBadge size={26} />
              </div>
              <p className="text-xs muted mt-3">Issued {new Date(b.issueDate).toLocaleDateString()} · Signed by Official Darax</p>
              <div className="flex gap-2 mt-4">
                <Link href={`/app/achievements/${b.id}`} className="btn-primary text-sm">View badge →</Link>
                <Link href={`/verify/${b.id}`} className="btn-ghost text-sm">Verify</Link>
              </div>
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}

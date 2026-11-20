'use client';
import Link from 'next/link';
import { useDb } from '@/components/db-context';
import { GlassCard, EmptyState } from '@/components/ui';
import { BackLink } from '@/components/BackLink';

export default function NotificationsPage() {
  const { db, user, setDb } = useDb();
  if (!user) return null;
  const mine = db.notifications.filter(n => n.userId === user.id).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const unread = mine.filter(n => !n.read).length;

  const markRead = (id: string) => setDb(d => { const n = d.notifications.find(x => x.id === id); if (n) n.read = true; return d; });
  const markAll = () => setDb(d => { d.notifications.forEach(n => { if (n.userId === user.id) n.read = true; }); return d; });

  return (
    <div className="flex flex-col gap-5">
      <BackLink href="/app/profile" />
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div>
          <h1 className="text-2xl font-bold">Notifications</h1>
          <p className="muted text-sm mt-1">{unread} unread · {mine.length} total</p>
        </div>
        {unread > 0 && <button onClick={markAll} className="btn-ghost text-sm">Mark all as read</button>}
      </div>
      {mine.length === 0 ? (
        <EmptyState title="No notifications yet" body="Leaderboard wins, new badges, assessment results and platform announcements will appear here." />
      ) : (
        <div className="flex flex-col gap-2">
          {mine.map(n => (
            <GlassCard key={n.id} className={`!p-4 ${n.read ? 'opacity-70' : ''}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-semibold">{!n.read && <span className="text-accent mr-1">●</span>}{n.title}</p>
                  <p className="text-sm muted mt-1 leading-relaxed">{n.body}</p>
                  <p className="text-xs muted mt-2">{new Date(n.createdAt).toLocaleString()} · {n.kind}</p>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  {n.link && <Link href={n.link} className="btn-ghost text-xs">Open →</Link>}
                  {!n.read && <button onClick={() => markRead(n.id)} className="btn-ghost text-xs">Mark read</button>}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      )}
    </div>
  );
}

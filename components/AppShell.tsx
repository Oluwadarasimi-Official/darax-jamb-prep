'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDb } from './db-context';
import { logout as signOut } from '../lib/auth';
import { Logo } from './Logo';
import { Avatar } from './ui';
import { ThemeToggle } from './ThemeToggle';

const NAV = [
  { href: '/app/dashboard', label: 'Dashboard', icon: '▦' },
  { href: '/app/subjects', label: 'My Subjects', icon: '▤' },
  { href: '/app/assessments', label: 'Assessments', icon: '✎' },
  { href: '/app/tutor', label: 'Darax AI Tutor', icon: '✦' },
  { href: '/app/leaderboards', label: 'Leaderboards', icon: '♛' },
  { href: '/app/achievements', label: 'My Achievements', icon: '★' },
  { href: '/app/notifications', label: 'Notifications', icon: '◉' },
  { href: '/app/profile', label: 'My Profile', icon: '◍' },
  { href: '/app/settings', label: 'Settings', icon: '⚙' },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const { db, user, setDb } = useDb();
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!user) { router.replace('/login'); return; }
    if (!user.onboarded && pathname !== '/onboarding') router.replace('/onboarding');
  }, [user, pathname, router]);

  if (!user) return <div className="min-h-screen flex items-center justify-center"><p className="muted">Redirecting to login…</p></div>;
  if (!user.onboarded) return <>{children}</>;

  const unread = db.notifications.filter(n => n.userId === user.id && !n.read).length;
  const logout = () => { signOut(db).finally(() => { setDb(d => { d.sessionUserId = null; return d; }); router.replace('/login'); }); };

  const navList = (onNavigate?: () => void) => (
    <nav className="flex flex-col gap-1 mt-2">
      {NAV.map(item => {
        const active = pathname === item.href || (item.href !== '/app/dashboard' && pathname.startsWith(item.href));
        return (
          <Link key={item.href} href={item.href} onClick={onNavigate}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${active ? 'bg-ink/10 text-ink border border-ink/15' : 'text-ink/70 hover:bg-ink/5 hover:text-ink'}`}>
            <span className="text-base w-6 text-center" aria-hidden>{item.icon}</span>
            {!collapsed && <span className="truncate">{item.label}</span>}
            {!collapsed && item.href === '/app/notifications' && unread > 0 && (
              <span className="ml-auto bg-brand text-white text-[11px] font-bold rounded-full px-2 py-0.5">{unread}</span>
            )}
          </Link>
        );
      })}
      {user.role === 'admin' && (
        <Link href="/admin" className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium mt-2 border border-warn/30 bg-warn/10 text-warn`}>
          <span className="text-base w-6 text-center" aria-hidden>⬢</span>
          {!collapsed && <span>Admin Panel</span>}
        </Link>
      )}
    </nav>
  );

  return (
    <div className="min-h-screen flex">
      {/* Desktop sidebar */}
      <aside className={`hidden md:flex flex-col glass !rounded-none border-y-0 border-l-0 sticky top-0 h-screen shrink-0 transition-all ${collapsed ? 'w-[76px]' : 'w-64'} p-4`}>
        <div className="flex items-center justify-between">
          {collapsed ? <Logo size={36} withWordmark={false} /> : <Logo />}
          <button onClick={() => setCollapsed(c => !c)} className="btn-ghost !px-2 !py-1 text-sm" aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>{collapsed ? '»' : '«'}</button>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar">{navList()}</div>
        <div className="pt-3 border-t border-ink/10">
          <div className="flex items-center gap-2.5 px-1">
            <Avatar name={user.fullName} size={36} />
            {!collapsed && (
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">{user.fullName}</p>
                <p className="text-xs muted truncate">@{user.username}</p>
              </div>
            )}
          </div>
          <div className="mt-3 px-1">
            <ThemeToggle className={collapsed ? 'w-full !px-1' : 'w-full'} />
          </div>
          {!collapsed && <p className="text-[11px] muted mt-3 px-1">Official Darax Free JAMB Prep · v1.0.0</p>}
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        {/* Mobile top bar */}
        <header className="md:hidden sticky top-0 z-40 glass !rounded-none border-x-0 border-t-0 px-4 py-3 flex items-center justify-between">
          <Logo size={32} />
          <div className="flex items-center gap-2">
            <Link href="/app/notifications" className="btn-ghost !px-3 !py-2 relative" aria-label="Notifications">
              ◉{unread > 0 && <span className="absolute -top-1 -right-1 bg-brand text-white text-[10px] font-bold rounded-full px-1.5">{unread}</span>}
            </Link>
            <button onClick={() => setMobileOpen(true)} className="btn-ghost !px-3 !py-2" aria-label="Open menu">☰</button>
          </div>
        </header>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-label="Menu">
            <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
            <div className="absolute left-0 top-0 bottom-0 w-72 glass !rounded-none border-y-0 border-l-0 p-4 flex flex-col">
              <div className="flex items-center justify-between"><Logo /><button onClick={() => setMobileOpen(false)} className="btn-ghost !px-2 !py-1" aria-label="Close menu">✕</button></div>
              <div className="flex-1 overflow-y-auto">{navList(() => setMobileOpen(false))}</div>
              <div className="flex gap-2 mt-3">
                <ThemeToggle className="flex-1" />
                <button onClick={logout} className="btn-ghost flex-1">Log out</button>
              </div>
              <p className="text-[11px] muted mt-3">v1.0.0 · Official Darax</p>
            </div>
          </div>
        )}

        {/* Desktop top bar */}
        <header className="hidden md:flex items-center justify-between px-6 py-4">
          <p className="text-sm muted">LEARN. PRACTICE. IMPROVE. EXCEL.</p>
          <div className="flex items-center gap-3">
            <Link href="/app/notifications" className="btn-ghost relative">Notifications{unread > 0 && <span className="ml-2 bg-brand text-white text-[11px] font-bold rounded-full px-2 py-0.5">{unread}</span>}</Link>
            <button onClick={logout} className="btn-ghost">Log out</button>
          </div>
        </header>

        <main className="flex-1 min-w-0 px-4 md:px-6 pb-24 md:pb-10 max-w-6xl w-full mx-auto">{children}</main>

        {/* Mobile bottom nav */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 glass !rounded-none border-x-0 border-b-0 flex justify-around py-2" aria-label="Primary">
          {[
            { href: '/app/dashboard', label: 'Home', icon: '▦' },
            { href: '/app/subjects', label: 'Subjects', icon: '▤' },
            { href: '/app/assessments', label: 'Tests', icon: '✎' },
            { href: '/app/tutor', label: 'Tutor', icon: '✦' },
            { href: '/app/leaderboards', label: 'Ranks', icon: '♛' },
          ].map(i => {
            const active = pathname === i.href || pathname.startsWith(i.href + '/');
            return (
              <Link key={i.href} href={i.href} className={`flex flex-col items-center text-[11px] px-2 py-1 ${active ? 'text-accent font-semibold' : 'text-ink/60'}`}>
                <span className="text-lg leading-none">{i.icon}</span>{i.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

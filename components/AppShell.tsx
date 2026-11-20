'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDb } from './db-context';
import { logout as signOut } from '../lib/auth';
import { Logo } from './Logo';
import { Avatar } from './ui';
import { APP_VERSION } from '../lib/version';
import { MascotTour, hasSeenTour, markTourSeen, type TourStep } from './MascotTour';
import { MobileTabBar } from './MobileTabBar';

const NAV = [
  { href: '/app/dashboard', label: 'Dashboard', icon: 'dashboard' },
  { href: '/app/subjects', label: 'My Subjects', icon: 'book' },
  { href: '/app/assessments', label: 'Assessments', icon: 'clipboard' },
  { href: '/app/utme', label: 'Full UTME Simulation', icon: 'clipboard' },
  { href: '/app/archive', label: 'Past Questions Archive', icon: 'book' },
  { href: '/app/tutor', label: 'Darax AI Tutor', icon: 'sparkles' },
  { href: '/app/leaderboards', label: 'Leaderboards', icon: 'trophy' },
  { href: '/app/achievements', label: 'My Achievements', icon: 'award' },
  { href: '/app/notifications', label: 'Notifications', icon: 'bell' },
  { href: '/app/profile', label: 'My Profile', icon: 'user' },
  { href: '/app/settings', label: 'Settings', icon: 'settings' },
];

// Only these ids are added to the existing links so the tour can point at them.
// The navigation itself (items, order, labels) is unchanged.
const TOUR_TARGETS: Record<string, string> = {
  '/app/subjects': 'nav-subjects',
  '/app/assessments': 'nav-assessments',
  '/app/utme': 'nav-utme',
  '/app/tutor': 'nav-tutor',
};

const TOUR_STEPS: TourStep[] = [
  {
    title: "Hi, I'm Dara 👋",
    body: 'I am your study guide. This 30-second tour shows you exactly where to start. Use Next to continue, or Skip tutorial to go straight in.',
  },
  {
    title: 'Start with My Subjects',
    body: 'My Subjects holds your four JAMB subjects and the full lesson roadmap. Each lesson unlocks the next one once you score 70% on its quiz.',
    target: '[data-tour="nav-subjects"]',
  },
  {
    title: 'Then test yourself',
    body: 'Assessments gives you topic tests, full subject practice exams and mixed revision — all graded instantly.',
    target: '[data-tour="nav-assessments"]',
  },
  {
    title: 'Practise the real CBT',
    body: 'Full UTME Simulation is a 180-question paper with a live timer and the same green / blue / red question map JAMB uses on exam day.',
    target: '[data-tour="nav-utme"]',
  },
  {
    title: 'Ask Darax AI anything',
    body: 'Stuck on a topic? The Darax AI Tutor explains it step by step, with worked examples.',
    target: '[data-tour="nav-tutor"]',
  },
  {
    title: 'Watch your progress',
    body: 'This panel tracks your completed lessons, average score and weekly rank. Come back daily — consistency is what moves the number.',
    target: '[data-tour="tour-progress"]',
  },
  {
    title: "You're ready 🎉",
    body: 'That is everything. Pick your first subject, finish the lesson, then take the quiz. Learn. Practice. Improve. Excel.',
  },
];

function NavIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    dashboard: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22z" /><path d="M4 5.5v16.5M8 7h8M8 11h8" /></>,
    clipboard: <><rect x="5" y="5" width="14" height="16" rx="2" /><path d="M9 5V3h6v2M8 10h8M8 14h8M8 18h5" /></>,
    sparkles: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" /></>,
    trophy: <><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z" /><path d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4" /></>,
    award: <><circle cx="12" cy="8" r="5" /><path d="m8.5 12-1 9 4.5-2.5 4.5 2.5-1-9" /></>,
    bell: <><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="m19 13 2 1-2 4-2-1-2 1v2h-5v-2l-2-1-2 1-2-4 2-1v-2l-2-1 2-4 2 1 2-1V4h5v2l2 1 2-1 2 4-2 1z" /></>,
    admin: <><path d="M12 3 20 7v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V7z" /><path d="m9 12 2 2 4-4" /></>,
  };
  return <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] || paths.book}</svg>;
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const { db, user, setDb } = useDb();
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);

  useEffect(() => {
    if (!user) { router.replace('/login'); return; }
    if (!user.onboarded && pathname !== '/onboarding') router.replace('/onboarding');
  }, [user, pathname, router]);

  // First-timer tour: only inside the dashboard, only once per account.
  useEffect(() => {
    if (!user || !user.onboarded || pathname !== '/app/dashboard') return;
    if (hasSeenTour(user.id)) return;
    const t = setTimeout(() => setTourOpen(true), 800);
    return () => clearTimeout(t);
  }, [user, pathname]);

  const endTour = () => {
    setTourOpen(false);
    if (user) markTourSeen(user.id);
  };

  if (!user) return <div className="min-h-screen flex items-center justify-center"><p className="muted">Redirecting to login…</p></div>;
  if (!user.onboarded) return <>{children}</>;
  if (pathname === '/app/tutor') return <>{children}</>;

  const unread = db.notifications.filter(n => n.userId === user.id && !n.read).length;
  const logout = () => { signOut(db).finally(() => { setDb(d => { d.sessionUserId = null; return d; }); router.replace('/login'); }); };
  const navList = (onNavigate?: () => void, isCollapsed = collapsed) => (
    <nav className="flex flex-col gap-1 mt-2" aria-label="Main navigation">
      {NAV.map(item => {
        const active = pathname === item.href || (item.href !== '/app/dashboard' && pathname.startsWith(item.href));
        return <Link key={item.href} href={item.href} onClick={onNavigate} title={isCollapsed ? item.label : undefined} data-tour={TOUR_TARGETS[item.href]}
          className={'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ' + (active ? 'bg-ink/10 text-ink border border-ink/15' : 'text-ink/70 hover:bg-ink/5 hover:text-ink')}>
          <span className="w-6 shrink-0 flex justify-center"><NavIcon name={item.icon} /></span>
          {!isCollapsed && <span className="truncate">{item.label}</span>}
          {item.href === '/app/notifications' && unread > 0 && (isCollapsed
            ? <span className="ml-auto h-2 w-2 shrink-0 rounded-full bg-accent" role="img" aria-label={`${unread} unread notifications`} title={`${unread} unread notifications`} />
            : <span className="ml-auto bg-accent text-white text-[11px] font-bold rounded-full px-2 py-0.5">{unread}</span>)}
        </Link>;
      })}
    </nav>
  );

  return (
    <div className="min-h-screen flex">
      <aside className={'hidden md:flex flex-col glass !rounded-none border-y-0 border-l-0 sticky top-0 h-screen shrink-0 transition-all ' + (collapsed ? 'w-[76px]' : 'w-64') + ' p-4'}>
        <div className="flex items-center justify-between">
          {collapsed ? <Logo size={36} withWordmark={false} /> : <Logo />}
          <button onClick={() => setCollapsed(c => !c)} className="btn-ghost !px-2 !py-1 text-sm" aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>{collapsed ? '»' : '«'}</button>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar">{navList()}</div>
        <div className="pt-3 border-t border-ink/10">
          <div className="flex items-center gap-2.5 px-1"><Avatar name={user.fullName} size={36} />{!collapsed && <div className="min-w-0"><p className="text-sm font-semibold truncate">{user.fullName}</p><p className="text-xs muted truncate">@{user.username}</p></div>}</div>
          {!collapsed && <p className="text-[11px] muted mt-3 px-1">Official Darax Free JAMB Prep · v{APP_VERSION}</p>}
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="md:hidden sticky top-0 z-40 glass !rounded-none border-x-0 border-t-0 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] min-h-[64px] flex items-center justify-between">
          <Logo size={32} />
          <div className="flex items-center gap-2">
            <Link href="/app/notifications" className="btn-ghost !px-3 !py-2 relative flex items-center" aria-label="Notifications"><NavIcon name="bell" />{unread > 0 && <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] font-bold rounded-full px-1.5">{unread}</span>}</Link>
          </div>
        </header>
        <header className="hidden md:flex items-center justify-between px-6 py-4">
          <p className="text-sm muted">LEARN. PRACTICE. IMPROVE. EXCEL.</p>
          <div className="flex items-center gap-3"><Link href="/app/notifications" className="btn-ghost relative">Notifications{unread > 0 && <span className="ml-2 bg-accent text-white text-[11px] font-bold rounded-full px-2 py-0.5">{unread}</span>}</Link><button onClick={logout} className="btn-ghost">Log out</button></div>
        </header>
        <main className="flex-1 min-w-0 px-4 md:px-6 pt-5 md:pt-2 pb-[calc(6.25rem_+_env(safe-area-inset-bottom))] md:pb-10 max-w-6xl w-full mx-auto">{children}</main>
      </div>
      <MobileTabBar />
      <MascotTour steps={TOUR_STEPS} open={tourOpen} onClose={endTour} finishHref="/app/subjects" />
    </div>
  );
}

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Mobile primary navigation.
 *
 * Five destinations only — the things a student actually moves between while
 * studying. Everything else (Assessments, UTME Simulation, Past Questions,
 * Achievements, Notifications, Settings) is reached from inside the page it
 * belongs to, so the bar never grows into a second sidebar.
 *
 * Rendered by AppShell for viewports below `md`; the desktop sidebar is
 * unaffected.
 */

type TabIcon = 'home' | 'book' | 'sparkles' | 'trophy' | 'user';

const TABS: { href: string; label: string; icon: TabIcon; tour?: string }[] = [
  { href: '/app/dashboard', label: 'Home', icon: 'home' },
  { href: '/app/subjects', label: 'Subjects', icon: 'book', tour: 'nav-subjects' },
  { href: '/app/tutor', label: 'AI Tutor', icon: 'sparkles', tour: 'nav-tutor' },
  { href: '/app/leaderboards', label: 'Leaderboard', icon: 'trophy' },
  { href: '/app/profile', label: 'Profile', icon: 'user' },
];

const PATHS: Record<TabIcon, React.ReactNode> = {
  home: <><path d="M4 10.5 12 4l8 6.5" /><path d="M6 9.5V20h12V9.5" /><path d="M10 20v-5h4v5" /></>,
  book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22z" /><path d="M4 5.5v16.5M8 7h8M8 11h8" /></>,
  sparkles: <><path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" /><path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" /></>,
  trophy: <><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z" /><path d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
};

function TabIconSvg({ name, active }: { name: TabIcon; active: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth={active ? 2.1 : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

export function MobileTabBar() {
  const pathname = usePathname() || '';

  const isActive = (href: string) =>
    href === '/app/dashboard' ? pathname === href : pathname === href || pathname.startsWith(href + '/');

  return (
    <nav
      aria-label="Mobile navigation"
      className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-white/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(16,36,26,0.06)]"
    >
      <ul className="grid grid-cols-5">
        {TABS.map(tab => {
          const active = isActive(tab.href);
          return (
            <li key={tab.href} className="min-w-0">
              <Link
                href={tab.href}
                data-tour={tab.tour}
                aria-current={active ? 'page' : undefined}
                className={
                  'flex flex-col items-center gap-1 pt-2 pb-2.5 text-[10.5px] font-semibold tracking-tight transition-colors ' +
                  (active ? 'text-accent' : 'text-ink/55 hover:text-ink')
                }
              >
                <span className={'grid h-8 w-11 place-items-center rounded-xl transition-colors ' + (active ? 'bg-accent/10' : '')}>
                  <TabIconSvg name={tab.icon} active={active} />
                </span>
                <span className="max-w-full truncate px-0.5">{tab.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

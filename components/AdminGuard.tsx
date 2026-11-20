'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDb } from './db-context';
import { Logo } from './Logo';
import { APP_VERSION } from '../lib/version';

export function AdminGuard({ children }: { children: React.ReactNode }) {
  const { user } = useDb();
  const router = useRouter();

  if (!user) return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass p-7 w-full max-w-md text-center">
        <Logo />
        <p className="muted text-sm mt-5">Sign in with an administrator account to continue.</p>
        <button onClick={() => router.replace('/login')} className="btn-primary mt-4">Go to login</button>
      </div>
    </div>
  );

  if (user.role !== 'admin' || user.active === false) return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="glass p-7 w-full max-w-md">
        <Logo />
        <h1 className="text-2xl font-bold mt-5">Administrator access required</h1>
        <p className="muted text-sm mt-2">This account does not have an active administrator role. For security, administrator access can only be granted by the platform owner through the protected database controls. A browser-side setup code cannot grant administrator privileges.</p>
        <button onClick={() => router.replace('/app/dashboard')} className="btn-ghost w-full mt-4">Back to dashboard</button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-4 md:p-6 max-w-6xl mx-auto">
      <header className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <Logo />
        <nav className="flex gap-2 flex-wrap">
          <Link href="/admin" className="btn-ghost text-sm">Admin dashboard</Link>
          <Link href="/admin/content" className="btn-ghost text-sm">Content Studio</Link>
          <Link href="/app/dashboard" className="btn-ghost text-sm">← Student app</Link>
        </nav>
      </header>
      {children}
      <p className="text-xs muted text-center mt-8">Admin Panel · Official Darax Free JAMB Prep · v{APP_VERSION}</p>
    </div>
  );
}

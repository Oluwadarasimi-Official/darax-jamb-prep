import Link from 'next/link';

/** Replaces Next's bare 404 so a mistyped link still lands somewhere useful. */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="glass w-full max-w-md p-7 text-center">
        <p className="text-xs font-bold tracking-[0.18em] uppercase text-accent">404</p>
        <h1 className="text-xl font-bold mt-2">We couldn&apos;t find that page</h1>
        <p className="muted text-sm mt-2 leading-relaxed">
          The link may be out of date. Head back to your dashboard and pick up where you stopped.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          <Link href="/app/dashboard" className="btn-primary text-sm">My dashboard</Link>
          <Link href="/app/subjects" className="btn-ghost text-sm">My subjects</Link>
        </div>
      </div>
    </div>
  );
}

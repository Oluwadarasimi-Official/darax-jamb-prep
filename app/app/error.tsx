'use client';
import Link from 'next/link';
import { useEffect } from 'react';

/**
 * Error boundary for the signed-in app.
 *
 * Rendered inside AppShell, so a crash in one page never strips the student of
 * navigation — the sidebar and the mobile tab bar stay put and they can simply
 * step to another section. Without this file Next shows its bare default error
 * screen, which looks like the platform itself is down.
 */
export default function AppError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error('[darax] page error:', error); }, [error]);

  return (
    <div className="flex flex-col items-start gap-4 rounded-card border border-danger/25 bg-danger/5 p-6">
      <div>
        <h1 className="text-xl font-bold">That page didn&apos;t load</h1>
        <p className="muted text-sm mt-1 max-w-xl leading-relaxed">
          Something went wrong on this screen — your lessons, scores and streak are safe. Try again, or move on to
          another section using the menu.
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={reset} className="btn-primary text-sm">Try again</button>
        <Link href="/app/dashboard" className="btn-ghost text-sm">Go to dashboard</Link>
        <Link href="/app/subjects" className="btn-ghost text-sm">My subjects</Link>
      </div>
      {error.digest && <p className="text-[11px] muted">Reference: {error.digest}</p>}
    </div>
  );
}

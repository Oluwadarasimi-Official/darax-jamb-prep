'use client';
import Link from 'next/link';
import { useEffect } from 'react';

/** Last line of defence for routes outside the signed-in app (login, signup, landing). */
export default function RootError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error('[darax] route error:', error); }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="glass w-full max-w-md p-7 text-center">
        <h1 className="text-xl font-bold">Something went wrong</h1>
        <p className="muted text-sm mt-2 leading-relaxed">
          This screen hit an unexpected problem. Your saved progress on this device is untouched.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          <button type="button" onClick={reset} className="btn-primary text-sm">Try again</button>
          <Link href="/" className="btn-ghost text-sm">Back to home</Link>
        </div>
        {error.digest && <p className="text-[11px] muted mt-4">Reference: {error.digest}</p>}
      </div>
    </div>
  );
}

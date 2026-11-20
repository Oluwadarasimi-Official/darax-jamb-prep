'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

/**
 * One predictable way back from a secondary page.
 *
 * Uses real browser history when there is any (so you return to the page you
 * actually came from), and falls back to a known-good route when the student
 * arrived by deep link, QR code or a fresh tab — where `history.back()` would
 * otherwise throw them out of the app entirely.
 */
export function BackLink({
  href,
  label = 'Back',
  crumb,
  crumbLabel,
}: {
  /** Fallback destination when there is no in-app history. */
  href: string;
  label?: string;
  /** Optional secondary link to a parent section. */
  crumb?: string;
  crumbLabel?: string;
}) {
  const router = useRouter();

  const goBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) router.back();
    else router.push(href);
  };

  return (
    <div className="flex w-fit flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={goBack}
        aria-label="Go back to the previous page"
        className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-ink/5 px-3 py-1.5 text-xs font-semibold text-ink/70 transition-colors hover:bg-ink/10 hover:text-ink"
      >
        <span aria-hidden="true">←</span> {label}
      </button>
      {/* Only show a second link when it leads somewhere the Back button doesn't. */}
      {crumb && crumb !== href && (
        <Link href={crumb} className="rounded-full px-2 py-1.5 text-xs font-semibold text-accent hover:underline">
          {crumbLabel || 'Open section'}
        </Link>
      )}
    </div>
  );
}

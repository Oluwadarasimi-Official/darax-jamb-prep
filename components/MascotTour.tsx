'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Mascot } from './Mascot';

export interface TourStep {
  /** Human-readable title shown on the card. */
  title: string;
  /** What the student should notice / do. */
  body: string;
  /** CSS selector for the element to spotlight. Omit for a centred card. */
  target?: string;
}

const CARD_W = 340;
const TOUR_KEY = 'darax-tour-v1';

/** Has this student already finished (or skipped) the guided tour? */
export function hasSeenTour(userId: string): boolean {
  try { return localStorage.getItem(`${TOUR_KEY}:${userId}`) === 'done'; } catch { return true; }
}
/** Record that the tour was completed or skipped. */
export function markTourSeen(userId: string): void {
  try { localStorage.setItem(`${TOUR_KEY}:${userId}`, 'done'); } catch { /* storage unavailable */ }
}
/** Forget the tour so it plays again (used by "Replay tutorial"). */
export function resetTour(userId: string): void {
  try { localStorage.removeItem(`${TOUR_KEY}:${userId}`); } catch { /* storage unavailable */ }
}

/**
 * First-run guided tour for new students.
 *
 * Highlights real UI (via `data-tour` hooks in AppShell / dashboard) with a
 * spotlight, and walks through where to start. Degrades gracefully: if a target
 * is missing or hidden — e.g. the desktop sidebar on a phone — that step is
 * shown as a centred card instead of failing.
 */
export function MascotTour({ steps, open, onClose, finishHref }: { steps: TourStep[]; open: boolean; onClose: () => void; finishHref?: string }) {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [spot, setSpot] = useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const step = steps[index];
  const isLast = index === steps.length - 1;

  // ---- measure the current target -----------------------------------------
  const measure = useCallback(() => {
    if (!open || !step?.target) { setSpot(null); return; }
    // A target can exist yet be invisible — the desktop sidebar on a phone,
    // for example. Prefer the first match that is actually on screen, so the
    // tour points at the mobile tab bar instead of giving up.
    const matches = Array.from(document.querySelectorAll(step.target)) as HTMLElement[];
    const el = matches.find(node => {
      const box = node.getBoundingClientRect();
      return box.width > 0 && box.height > 0;
    }) || null;
    if (!el) { setSpot(null); return; }
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) { setSpot(null); return; }
    const pad = 6;
    setSpot({ top: r.top - pad, left: r.left - pad, width: r.width + pad * 2, height: r.height + pad * 2 });
  }, [open, step?.target]);

  useEffect(() => { measure(); }, [measure, index]);
  useEffect(() => {
    if (!open) return;
    const onScrollOrResize = () => measure();
    window.addEventListener('resize', onScrollOrResize);
    window.addEventListener('scroll', onScrollOrResize, true);
    return () => {
      window.removeEventListener('resize', onScrollOrResize);
      window.removeEventListener('scroll', onScrollOrResize, true);
    };
  }, [open, measure]);

  // ---- reset + focus + keyboard -------------------------------------------
  useEffect(() => { if (open) { setIndex(0); } }, [open]);
  useEffect(() => { if (open) nextRef.current?.focus({ preventScroll: true }); }, [open, index]);

  const finish = useCallback(() => { onClose(); }, [onClose]);
  const next = useCallback(() => {
    if (isLast) { finish(); if (finishHref) router.push(finishHref); }
    else setIndex(i => Math.min(steps.length - 1, i + 1));
  }, [isLast, finish, steps.length, finishHref, router]);
  const back = useCallback(() => setIndex(i => Math.max(0, i - 1)), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); finish(); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); back(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, finish, next, back]);

  // ---- card placement ------------------------------------------------------
  const cardBox = useMemo(() => {
    if (typeof window === 'undefined') return { top: 0, left: 0 };
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const w = Math.min(CARD_W, vw - 24);
    if (!spot) return { top: Math.max(12, (vh - 300) / 2), left: Math.max(12, (vw - w) / 2), width: w };

    const gap = 14;
    let left: number;
    let top: number;

    // Prefer the right of the spotlight (sidebar), then below, then above.
    if (spot.left + spot.width + gap + w <= vw - 12) {
      left = spot.left + spot.width + gap;
      top = spot.top;
    } else if (spot.top + spot.height + gap + 240 <= vh) {
      left = Math.min(Math.max(12, spot.left), vw - w - 12);
      top = spot.top + spot.height + gap;
    } else {
      left = Math.min(Math.max(12, spot.left), vw - w - 12);
      top = Math.max(12, spot.top - gap - 260);
    }
    return { top, left, width: w };
  }, [spot, open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]" role="dialog" aria-modal="true" aria-labelledby="tour-title">
      {/* click blocker — the tour owns the screen until skipped or finished */}
      <div className="absolute inset-0" />

      {spot && (
        <div
          className="tour-spotlight"
          style={{ top: spot.top, left: spot.left, width: spot.width, height: spot.height }}
          aria-hidden="true"
        />
      )}

      <div
        ref={cardRef}
        className="tour-card absolute glass p-4 shadow-lift sm:p-5"
        style={{ top: cardBox.top, left: cardBox.left, width: cardBox.width }}
      >
        <div className="flex items-start gap-3">
          <div className="shrink-0">
            <Mascot size={54} wave className="mascot-float" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <span className="chip">Dara&apos;s guide</span>
              <span className="text-[11px] font-semibold muted tabular-nums">{index + 1} of {steps.length}</span>
            </div>
            <h2 id="tour-title" className="mt-2 text-base font-bold leading-snug">{step.title}</h2>
            <p className="mt-1 text-sm leading-relaxed muted">{step.body}</p>
          </div>
        </div>

        {/* step dots */}
        <div className="mt-3 flex items-center gap-1.5" aria-hidden="true">
          {steps.map((_, i) => (
            <span
              key={i}
              className={'h-1.5 rounded-full transition-all ' + (i === index ? 'w-5 bg-accent' : i < index ? 'w-1.5 bg-accent/40' : 'w-1.5 bg-ink/15')}
            />
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-2">
          <button type="button" onClick={finish} className="text-sm font-medium muted underline underline-offset-2 hover:text-ink">
            Skip tutorial
          </button>
          <div className="flex items-center gap-2">
            {index > 0 && (
              <button type="button" onClick={back} className="btn-ghost !px-3 !py-2 text-sm">Back</button>
            )}
            <button ref={nextRef} type="button" onClick={next} className="btn-primary !px-4 !py-2 text-sm">
              {isLast ? 'Start learning' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

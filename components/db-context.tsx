'use client';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { emptyDB, saveDB, type DB, type Profile } from '../lib/store';
import { loadSeededDB } from '../lib/auth';
import { SUPABASE_CONFIGURED, getSb } from '../lib/supabase';
import { restoreSupabaseSession } from '../lib/sync';

interface Ctx { db: DB; setDb: (fn: (db: DB) => DB) => void; user: Profile | null; ready: boolean; }
const DbCtx = createContext<Ctx | null>(null);

/** Hard ceiling for boot. The app must ALWAYS open, even if the network stalls. */
const BOOT_TIMEOUT_MS = 8000;
/** When to admit that boot is taking longer than usual and offer an escape hatch. */
const SLOW_BOOT_MS = 2500;

export function DbProvider({ children }: { children: ReactNode }) {
  const [db, setDbState] = useState<DB | null>(null);
  const [ready, setReady] = useState(false);
  const [slowBoot, setSlowBoot] = useState(false);

  useEffect(() => {
    let alive = true;
    let safety: ReturnType<typeof setTimeout> | undefined;
    let slow: ReturnType<typeof setTimeout> | undefined;

    // 1) Local tier first: synchronous, and never allowed to throw. If storage
    // is unavailable (blocked iframe, quota, private mode) we boot an empty
    // database rather than leaving the app stuck on the loading screen.
    let initial: DB;
    try {
      initial = loadSeededDB();
    } catch (error) {
      console.warn('[darax-store] could not read local data, starting fresh:', error);
      initial = emptyDB();
    }
    setDbState(initial);

    safety = setTimeout(() => { if (alive) setReady(true); }, BOOT_TIMEOUT_MS);
    slow = setTimeout(() => { if (alive) setSlowBoot(true); }, SLOW_BOOT_MS);

    const stopTimers = () => { if (safety) clearTimeout(safety); if (slow) clearTimeout(slow); };

    if (!SUPABASE_CONFIGURED) {
      // The local account/session is already restored synchronously from
      // localStorage by loadSeededDB().
      setReady(true);
      stopTimers();
      return () => { alive = false; stopTimers(); };
    }

    const sb = getSb();
    const sub = sb?.auth.onAuthStateChange(event => {
      if (event === 'SIGNED_OUT') {
        setDbState(prev => {
          if (!prev) return prev;
          const next = structuredClone(prev);
          next.sessionUserId = null;
          saveDB(next);
          return next;
        });
      }
    });

    // Do not render protected routes until Supabase has had a chance to
    // restore its persisted browser session. Otherwise AppShell can redirect
    // a returning user to /login before their profile has been hydrated.
    //
    // Supabase calls are NOT given an unguarded path to the UI: if the project
    // is paused, the host is unreachable, or the auth lock never releases, the
    // BOOT_TIMEOUT_MS safety timer above opens the local tier regardless. The
    // restore still completes in the background and swaps in server records
    // when it lands, so nothing is lost.
    restoreSupabaseSession(structuredClone(initial))
      .then(next => {
        if (next && alive) {
          saveDB(next);
          setDbState(next);
        }
      })
      .catch(error => {
        console.warn('[darax-auth] session restoration failed:', error);
      })
      .finally(() => {
        if (alive) { setReady(true); stopTimers(); }
      });

    return () => {
      alive = false;
      stopTimers();
      sub?.data.subscription.unsubscribe();
    };
  }, []);

  const setDb = (fn: (db: DB) => DB) => {
    setDbState(prev => {
      if (!prev) return prev;
      const next = fn(structuredClone(prev));
      saveDB(next);
      return next;
    });
  };

  if (!db || !ready) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="glass p-8 text-center w-full max-w-sm">
          <div className="skeleton h-6 w-48 mx-auto mb-3" />
          <div className="skeleton h-4 w-32 mx-auto mb-4" />
          <p className="muted text-sm">Restoring your session…</p>
          {slowBoot && (
            <>
              <p className="muted text-xs mt-2 leading-relaxed">
                Still connecting to your account. This can take a moment on a slow connection.
              </p>
              {db && (
                <button
                  type="button"
                  onClick={() => setReady(true)}
                  className="btn-ghost text-sm mt-3 w-full"
                >
                  Continue with local data
                </button>
              )}
            </>
          )}
        </div>
      </div>
    );
  }

  const user = db.sessionUserId ? db.profiles.find(p => p.id === db.sessionUserId) || null : null;
  return <DbCtx.Provider value={{ db, setDb, user, ready }}>{children}</DbCtx.Provider>;
}

export function useDb(): Ctx {
  const ctx = useContext(DbCtx);
  if (!ctx) throw new Error('useDb must be used inside DbProvider');
  return ctx;
}

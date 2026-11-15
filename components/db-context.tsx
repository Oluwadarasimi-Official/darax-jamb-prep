'use client';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { saveDB, type DB, type Profile } from '../lib/store';
import { loadSeededDB } from '../lib/auth';
import { SUPABASE_CONFIGURED, getSb } from '../lib/supabase';
import { restoreSupabaseSession } from '../lib/sync';

interface Ctx { db: DB; setDb: (fn: (db: DB) => DB) => void; user: Profile | null; ready: boolean; }
const DbCtx = createContext<Ctx | null>(null);

export function DbProvider({ children }: { children: ReactNode }) {
  const [db, setDbState] = useState<DB | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let alive = true;
    const initial = loadSeededDB();
    setDbState(initial);

    if (!SUPABASE_CONFIGURED) {
      // The local account/session is already restored synchronously from
      // localStorage by loadSeededDB().
      setReady(true);
      return () => { alive = false; };
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
        if (alive) setReady(true);
      });

    return () => {
      alive = false;
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

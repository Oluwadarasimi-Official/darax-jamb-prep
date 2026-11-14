'use client';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { saveDB, type DB, type Profile } from '../lib/store';
import { loadSeededDB } from '../lib/auth';

interface Ctx { db: DB; setDb: (fn: (db: DB) => DB) => void; user: Profile | null; ready: boolean; }
const DbCtx = createContext<Ctx | null>(null);

export function DbProvider({ children }: { children: ReactNode }) {
  const [db, setDbState] = useState<DB | null>(null);
  useEffect(() => { setDbState(loadSeededDB()); }, []);
  const setDb = (fn: (db: DB) => DB) => {
    setDbState(prev => {
      if (!prev) return prev;
      const next = fn(structuredClone(prev));
      saveDB(next);
      return next;
    });
  };
  if (!db) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="glass p-8 text-center w-full max-w-sm">
          <div className="skeleton h-6 w-48 mx-auto mb-3" />
          <div className="skeleton h-4 w-32 mx-auto mb-4" />
          <p className="muted text-sm">Loading Darax JAMB Prep…</p>
        </div>
      </div>
    );
  }
  const user = db.sessionUserId ? db.profiles.find(p => p.id === db.sessionUserId) || null : null;
  return <DbCtx.Provider value={{ db, setDb, user, ready: true }}>{children}</DbCtx.Provider>;
}

export function useDb(): Ctx {
  const ctx = useContext(DbCtx);
  if (!ctx) throw new Error('useDb must be used inside DbProvider');
  return ctx;
}

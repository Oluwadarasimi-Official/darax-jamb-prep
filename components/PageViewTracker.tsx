'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getSb } from '@/lib/supabase';

const VISITOR_KEY = 'djp-analytics-visitor-v1';

function visitorId(): string | null {
  try {
    let id = window.localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id = window.crypto.randomUUID();
      window.localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    return null;
  }
}

export function PageViewTracker() {
  const pathname = usePathname();
  useEffect(() => {
    const sb = getSb();
    const id = visitorId();
    if (!sb || !id || !pathname) return;
    void sb.from('djp_page_views').insert({ visitor_id: id, path: pathname })
      .then(({ error }) => {
        if (error && process.env.NODE_ENV !== 'production') {
          console.warn('[darax-analytics] page view was not recorded:', error.message);
        }
      });
  }, [pathname]);
  return null;
}

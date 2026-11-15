'use client';
import { useCallback, useEffect, useState } from 'react';
import { getSb, SUPABASE_CONFIGURED } from '@/lib/supabase';
import { GlassCard } from '@/components/ui';

type Metrics = {
  registered_users: number;
  active_users_7d: number;
  total_page_views: number;
  unique_visitors: number;
  views_24h: number;
  views_7d: number;
  views_30d: number;
  last_updated: string;
};

const number = (n: number) => new Intl.NumberFormat().format(n || 0);

export function AdminAnalytics() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async (quiet = false) => {
    if (!SUPABASE_CONFIGURED) {
      setError('Shared analytics are unavailable because Supabase is not configured in this deployment.');
      setLoading(false);
      return;
    }
    if (quiet) setRefreshing(true); else setLoading(true);
    setError('');
    const sb = getSb();
    if (!sb) {
      setError('Could not connect to the analytics database.');
      setLoading(false);
      setRefreshing(false);
      return;
    }
    const { data, error: queryError } = await sb.rpc('djp_admin_analytics');
    if (queryError) {
      setError(queryError.message.includes('djp_admin_analytics')
        ? 'Analytics database setup is incomplete. Apply migration 002_platform_analytics.sql in Supabase.'
        : queryError.message);
      setMetrics(null);
    } else {
      setMetrics(data as Metrics);
    }
    setLoading(false);
    setRefreshing(false);
  }, []);

  useEffect(() => { void load(); }, [load]);

  return (
    <GlassCard>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h2 className="font-bold text-lg">Live platform analytics</h2>
          <p className="text-xs muted mt-1">Server-recorded visits and real registered accounts · demo accounts excluded</p>
        </div>
        <button onClick={() => void load(true)} disabled={loading || refreshing} className="btn-ghost text-sm">
          {refreshing ? 'Refreshing…' : 'Refresh metrics'}
        </button>
      </div>
      {loading ? <p className="muted text-sm">Loading verified platform metrics…</p> : error ? (
        <div className="glass-soft p-3 text-sm">
          <p className="font-semibold">Live analytics not connected</p>
          <p className="muted mt-1 break-words">{error}</p>
        </div>
      ) : metrics ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              ['Registered students', metrics.registered_users],
              ['Active students · 7d', metrics.active_users_7d],
              ['Unique browsers', metrics.unique_visitors],
              ['Total page views', metrics.total_page_views],
              ['Views · 24 hours', metrics.views_24h],
              ['Views · 7 days', metrics.views_7d],
              ['Views · 30 days', metrics.views_30d],
            ].map(([label, value]) => (
              <div key={String(label)} className="glass-soft p-3">
                <p className="text-xl font-extrabold tabular-nums">{number(Number(value))}</p>
                <p className="text-xs muted mt-1">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-[11px] muted mt-3">Last refreshed: {new Date(metrics.last_updated).toLocaleString()} · Unique browsers are estimated using an anonymous browser ID, not personal identity.</p>
        </>
      ) : null}
    </GlassCard>
  );
}

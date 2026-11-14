// POST /api/weekly/run — automated weekly ranking (admin-triggered + cron).
// In the local tier, weekly data lives in the browser store, so this endpoint
// validates the request and documents the run; the actual idempotent computation
// runs in the Admin Panel from the same shared lib/weekly.ts (keyed by week
// string, e.g. 2026-W46 — re-running a week never duplicates badges or
// notifications). With Supabase connected, this endpoint performs the same
// computation server-side against djp_* tables.
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { role, week } = body || {};
    if (role !== 'admin') return NextResponse.json({ error: 'Only administrators can run the weekly calculation.' }, { status: 403 });
    if (week && !/^\d{4}-W\d{2}$/.test(week)) return NextResponse.json({ error: 'Week must look like 2026-W46.' }, { status: 400 });
    return NextResponse.json({
      ok: false,
      tier: 'local',
      week: week || 'current',
      message: 'Supabase is not connected in this build, so weekly results are computed in the Admin Panel from the local store (lib/weekly.ts, idempotent by week key). With Supabase connected, this endpoint computes both leaderboards server-side, issues badges and notifications, and never duplicates a week.',
    });
  } catch {
    return NextResponse.json({ error: 'Weekly run failed.' }, { status: 500 });
  }
}

'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useDb } from '@/components/db-context';
import { GlassCard, EmptyState } from '@/components/ui';
import { Logo, VerifiedBadge } from '@/components/Logo';

export default function VerifyPage() {
  const params = useParams();
  const id = String(params.id);
  const { db } = useDb();
  const badge = db.badges.find(b => b.id === id);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <div className="flex justify-center mb-5"><Logo size={48} /></div>
        {badge ? (
          <GlassCard className="text-center !p-8">
            <p className="text-accent font-bold">✓ VERIFIED ACHIEVEMENT</p>
            <p className="text-warn text-5xl mt-4">★</p>
            <h1 className="text-3xl font-extrabold mt-3">{badge.title}</h1>
            <p className="muted mt-2">Awarded to</p>
            <p className="text-2xl font-bold mt-1">{badge.fullName}</p>
            <p className="mt-3">Position <strong className="text-accent">#{badge.position}</strong> · Week <strong>{badge.week}</strong> · {badge.year}</p>
            <p className="text-sm muted mt-4 font-mono">{badge.id}</p>
            <p className="text-sm muted">Issued {new Date(badge.issueDate).toLocaleDateString()}</p>
            <div className="flex items-center justify-center gap-2 mt-5">
              <span className="font-semibold">Signed by Official Darax</span>
              <VerifiedBadge size={22} />
            </div>
            <p className="text-xs muted mt-4">This badge traces to a genuine achievement record on The Official Darax Free JAMB Prep. The verified mark is a platform-issued brand signature, not a claim of external certification.</p>
            <Link href="/" className="btn-primary inline-block mt-6">Visit Darax JAMB Prep</Link>
          </GlassCard>
        ) : (
          <EmptyState title="Badge not found" body="No achievement badge with this ID exists on The Official Darax Free JAMB Prep. The link may be mistyped, or the badge may never have been issued." action={<Link href="/" className="btn-primary">Go to Darax JAMB Prep</Link>} />
        )}
      </div>
    </div>
  );
}

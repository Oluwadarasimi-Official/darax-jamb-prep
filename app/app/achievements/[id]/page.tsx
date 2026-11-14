'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRef, useState } from 'react';
import { useDb } from '@/components/db-context';
import { GlassCard, EmptyState } from '@/components/ui';
import { Logo, VerifiedBadge } from '@/components/Logo';

export default function BadgeDetailPage() {
  const params = useParams();
  const id = String(params.id);
  const { db } = useDb();
  const svgRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState('');
  const badge = db.badges.find(b => b.id === id);

  if (!badge) return <EmptyState title="Badge not found" body="No achievement badge with this ID exists. Check the link and try again." action={<Link href="/app/achievements" className="btn-primary">My achievements</Link>} />;

  const verifyUrl = typeof window !== 'undefined' ? `${window.location.origin}/verify/${badge.id}` : `/verify/${badge.id}`;

  const copy = async (text: string, what: string) => {
    try { await navigator.clipboard.writeText(text); setCopied(what); setTimeout(() => setCopied(''), 2500); } catch { /* clipboard unavailable */ }
  };

  const downloadPng = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1080; canvas.height = 1080;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#173b78'; ctx.fillRect(0, 0, 1080, 1080);
    ctx.strokeStyle = 'rgba(30,158,80,0.7)'; ctx.lineWidth = 6; ctx.strokeRect(36, 36, 1008, 1008);
    ctx.fillStyle = '#3367c1'; ctx.font = 'bold 44px system-ui'; ctx.textAlign = 'center';
    ctx.fillText('★ OFFICIAL DARAX ★', 540, 150);
    ctx.fillStyle = '#fff'; ctx.font = 'bold 64px system-ui';
    ctx.fillText(badge.title, 540, 300);
    ctx.font = '40px system-ui'; ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.fillText('Awarded to', 540, 420);
    ctx.font = 'bold 56px system-ui'; ctx.fillStyle = '#fff';
    ctx.fillText(badge.fullName, 540, 500);
    ctx.font = '40px system-ui'; ctx.fillStyle = '#b9d0f7';
    ctx.fillText(`Position #${badge.position} · Week ${badge.week} · ${badge.year}`, 540, 600);
    ctx.fillStyle = 'rgba(255,255,255,0.75)'; ctx.font = '32px system-ui';
    ctx.fillText(`Badge ID: ${badge.id}`, 540, 700);
    ctx.fillText(`Issued: ${new Date(badge.issueDate).toLocaleDateString()}`, 540, 750);
    ctx.font = 'bold 36px system-ui'; ctx.fillStyle = '#fff';
    ctx.fillText('Signed by Official Darax ✓ Verified', 540, 880);
    ctx.font = '30px system-ui'; ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillText('LEARN. PRACTICE. IMPROVE. EXCEL.', 540, 950);
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = `${badge.id}.png`;
    a.click();
  };

  const share = async () => {
    const text = `I earned the ${badge.title} badge (Position #${badge.position}, week ${badge.week}) on The Official Darax Free JAMB Prep! Verify it here: ${verifyUrl}`;
    if (navigator.share) {
      try { await navigator.share({ title: 'Official Darax Achievement', text, url: verifyUrl }); return; } catch { /* user cancelled */ }
    }
    copy(text, 'Badge text copied — paste it into WhatsApp, Instagram, Facebook or X.');
  };

  return (
    <div className="flex flex-col gap-5 max-w-2xl">
      <Link href="/app/achievements" className="text-sm text-accent underline">← Back to achievements</Link>
      <div ref={svgRef} className="glass p-8 text-center relative overflow-hidden">
        <div className="flex justify-center"><Logo size={56} /></div>
        <p className="text-warn text-5xl mt-5">★</p>
        <p className="text-xs tracking-[0.25em] text-accent mt-3 font-semibold">OFFICIAL ACHIEVEMENT BADGE</p>
        <h1 className="text-3xl font-extrabold mt-2">{badge.title}</h1>
        <p className="muted mt-3">This badge is awarded to</p>
        <p className="text-2xl font-bold mt-1">{badge.fullName}</p>
        <p className="mt-3 text-lg">Position <strong className="text-accent">#{badge.position}</strong> · Week <strong>{badge.week}</strong> · {badge.year}</p>
        <p className="text-sm muted mt-4 font-mono">{badge.id}</p>
        <p className="text-sm muted">Issued {new Date(badge.issueDate).toLocaleDateString()}</p>
        <div className="flex items-center justify-center gap-2 mt-5">
          <span className="font-semibold">Signed by Official Darax</span>
          <VerifiedBadge size={22} />
        </div>
        <p className="text-xs muted mt-1">The verified mark is a platform-issued brand signature, not a claim of external certification.</p>
      </div>
      <GlassCard>
        <h2 className="font-bold text-lg mb-3">Share this badge</h2>
        <div className="flex flex-wrap gap-2">
          <button onClick={downloadPng} className="btn-primary text-sm">Download as PNG</button>
          <button onClick={share} className="btn-ghost text-sm">Share badge</button>
          <button onClick={() => copy(verifyUrl, 'Verification link copied.')} className="btn-ghost text-sm">Copy verification link</button>
        </div>
        {copied && <p className="text-sm text-accent mt-3">{copied}</p>}
        <p className="text-sm muted mt-3">Verification link: <span className="font-mono text-xs break-all">{verifyUrl}</span></p>
        <Link href={`/verify/${badge.id}`} className="text-sm text-accent underline">Open the public verification page →</Link>
      </GlassCard>
    </div>
  );
}

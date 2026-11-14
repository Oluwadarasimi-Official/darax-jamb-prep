import type { ReactNode } from 'react';

export function GlassCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`glass p-5 ${className}`}>{children}</div>;
}

export function ProgressBar({ value, className = '' }: { value: number; className?: string }) {
  return (
    <div className={`h-2.5 rounded-full bg-ink/10 overflow-hidden ${className}`} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(100, Math.max(0, value))}%`, background: 'linear-gradient(90deg,#3367c1,#173b78)' }} />
    </div>
  );
}

export function EmptyState({ title, body, action }: { title: string; body: string; action?: ReactNode }) {
  return (
    <div className="glass-soft p-8 text-center">
      <p className="font-semibold text-lg">{title}</p>
      <p className="muted text-sm mt-1 max-w-md mx-auto">{body}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`skeleton ${className}`} />;
}

export function initials(name: string) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]!.toUpperCase()).join('');
}

export function Avatar({ name, size = 40 }: { name: string; size?: number }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full font-bold text-white shrink-0"
      style={{ width: size, height: size, fontSize: size * 0.38, background: 'linear-gradient(135deg,#3367c1,#173b78)' }}>
      {initials(name)}
    </span>
  );
}

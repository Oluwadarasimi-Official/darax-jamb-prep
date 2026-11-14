'use client';
import { useEffect, useState } from 'react';
import { applyTheme, getStoredTheme, resolveTheme, setStoredTheme, type ThemeChoice } from '@/lib/theme';

export function useThemeChoice(): [ThemeChoice, (c: ThemeChoice) => void] {
  const [choice, setChoice] = useState<ThemeChoice>('dark');
  useEffect(() => {
    const stored = getStoredTheme();
    setChoice(stored);
    applyTheme(stored);
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = () => { if (getStoredTheme() === 'system') applyTheme('system'); };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  const choose = (c: ThemeChoice) => { setChoice(c); setStoredTheme(c); };
  return [choice, choose];
}

// Quick sun/moon toggle for the sidebar footer (and landing header).
// Switches explicitly between Dark and Light; a System choice stays on System
// until the user picks one in Settings.
export function ThemeToggle({ className = '' }: { className?: string }) {
  const [choice, choose] = useThemeChoice();
  const [resolved, setResolved] = useState<'dark' | 'light'>('dark');
  useEffect(() => { setResolved(resolveTheme(choice)); }, [choice]);
  const next = resolved === 'dark' ? 'light' : 'dark';
  return (
    <button
      type="button"
      onClick={() => choose(next)}
      className={`btn-ghost !py-2 ${className}`}
      aria-label={resolved === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title={resolved === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {resolved === 'dark' ? '☀' : '☾'} <span className="hidden sm:inline">{resolved === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  );
}

export const THEME_OPTIONS: { value: ThemeChoice; label: string; hint: string }[] = [
  { value: 'dark', label: 'Dark', hint: 'Deep Roemichs blue' },
  { value: 'light', label: 'Light', hint: 'Bright blue-tinted white' },
  { value: 'system', label: 'System', hint: 'Follow your device setting' },
];

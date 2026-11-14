// App theme (Light / Dark / System), persisted in localStorage.
// Applied via a `data-theme` attribute on <html>; CSS variables in globals.css
// drive both themes. Default is Dark (the current Roemichs blue look).
export type ThemeChoice = 'dark' | 'light' | 'system';

export const THEME_KEY = 'darax-theme';

export function resolveTheme(choice: ThemeChoice): 'dark' | 'light' {
  if (choice === 'system') {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
    return 'dark';
  }
  return choice;
}

export function applyTheme(choice: ThemeChoice): void {
  if (typeof document === 'undefined') return;
  const resolved = resolveTheme(choice);
  document.documentElement.setAttribute('data-theme', resolved);
  document.documentElement.style.colorScheme = resolved;
}

export function getStoredTheme(): ThemeChoice {
  try {
    const v = localStorage.getItem(THEME_KEY);
    if (v === 'light' || v === 'dark' || v === 'system') return v;
  } catch { /* storage unavailable — fall through to default */ }
  return 'dark';
}

export function setStoredTheme(choice: ThemeChoice): void {
  try { localStorage.setItem(THEME_KEY, choice); } catch { /* ignore */ }
  applyTheme(choice);
}

// Runs before first paint (inlined in <head> by the root layout) so a stored
// light/dark choice applies immediately — no white flash for dark users.
export const THEME_BOOT_SCRIPT = `(function(){try{var t=localStorage.getItem('darax-theme')||'dark';var r=t==='system'?(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'):t;document.documentElement.setAttribute('data-theme',r);document.documentElement.style.colorScheme=r;}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

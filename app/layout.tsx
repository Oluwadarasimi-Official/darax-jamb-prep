import type { Metadata } from 'next';
import './globals.css';
import { DbProvider } from '@/components/db-context';
import { THEME_BOOT_SCRIPT } from '@/lib/theme';

export const metadata: Metadata = {
  title: 'The Official Darax Free JAMB Prep — Learn. Practice. Improve. Excel.',
  description: 'Free JAMB preparation for science students, powered by Official Darax. Structured lessons, quizzes, mock exams, AI tutor, leaderboards and achievement badges.',
  metadataBase: new URL('https://daraxjambprep.vercel.app'),
  icons: { icon: '/logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // data-theme="dark" is the default; the boot script in <head> swaps it to the
    // stored choice before first paint (no white flash). suppressHydrationWarning
    // because the script may change the attribute before React hydrates.
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
      </head>
      <body>
        <DbProvider>{children}</DbProvider>
      </body>
    </html>
  );
}

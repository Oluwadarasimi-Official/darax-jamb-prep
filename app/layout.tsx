import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { DbProvider } from '@/components/db-context';
import { THEME_BOOT_SCRIPT } from '@/lib/theme';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export const metadata: Metadata = {
  title: 'The Official Darax Free JAMB Prep — Learn. Practice. Improve. Excel.',
  description: 'Free JAMB preparation for science students, powered by Official Darax. Structured lessons, quizzes, mock exams, AI tutor, leaderboards and achievement badges.',
  metadataBase: new URL('https://daraxjambprep.vercel.app'),
  icons: { icon: '/logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: "window.MathJax = { loader: { load: ['[tex]/mhchem'] }, tex: { packages: { '[+]': ['mhchem'] }, inlineMath: [['\\(', '\\)']], displayMath: [['\\[', '\\]'], ['$$', '$$']], processEscapes: true }, options: { skipHtmlTags: ['script','noscript','style','textarea','pre','code'] }, startup: { typeset: false } };" }} />
      </head>
      <body className={dmSans.variable}>
        <DbProvider>{children}</DbProvider>
      </body>
    </html>
  );
}

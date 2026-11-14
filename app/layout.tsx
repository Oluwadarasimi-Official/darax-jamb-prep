import type { Metadata } from 'next';
import './globals.css';
import { DbProvider } from '@/components/db-context';

export const metadata: Metadata = {
  title: 'The Official Darax Free JAMB Prep — Learn. Practice. Improve. Excel.',
  description: 'Free JAMB preparation for science students, powered by Official Darax. Structured lessons, quizzes, mock exams, AI tutor, leaderboards and achievement badges.',
  metadataBase: new URL('https://daraxjambprep.vercel.app'),
  icons: { icon: '/logo.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <DbProvider>{children}</DbProvider>
      </body>
    </html>
  );
}

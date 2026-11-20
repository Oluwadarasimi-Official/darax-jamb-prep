import QuestionLibrary from '@/components/QuestionLibrary';
import { BackLink } from '@/components/BackLink';

export default function ArchivePage() {
  return (
    <main className="max-w-5xl">
      <div className="mb-4">
        <BackLink href="/app/subjects" crumb="/app/subjects" crumbLabel="My subjects" />
      </div>
      <QuestionLibrary />
    </main>
  );
}

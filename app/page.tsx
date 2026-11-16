import { redirect } from 'next/navigation';

// Send visitors straight into the app. AppShell restores an existing session
// before deciding whether the visitor needs to sign in or complete onboarding.
export default function Home() {
  redirect('/app/dashboard');
}

export const dynamic = 'force-dynamic';

import { redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';

import { LoginForm } from '@/components/auth/login-form';

export default async function LoginPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('is_admin')
      .eq('id', user.id)
      .single();

    if (profile?.is_admin) {
      redirect('/admin');
    }

    redirect('/profile');
  }

  return <LoginForm />;
}

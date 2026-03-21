// import { redirect } from 'next/navigation';

// import { createClient } from '@/lib/supabase/server';

import { ProjectForm } from '@/components/admin/project-form';

export default async function NewProjectPage() {
  // const supabase = await createClient();

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // if (!user) {
  //   redirect('/auth/login');
  // }

  // const { data: profile } = await supabase.from('profiles').select('is_admin').eq('id', user.id).single();

  // if (!profile?.is_admin) {
  //   redirect('/dashboard');
  // }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl mt-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Add New Project</h1>
        <p className="text-muted-foreground">Create a new project listing</p>
      </div>

      <ProjectForm />
    </div>
  );
}

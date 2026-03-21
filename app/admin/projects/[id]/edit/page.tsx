import { notFound, redirect } from 'next/navigation';

import { createClient } from '@/lib/supabase/server';

import { ProjectForm } from '@/components/admin/project-form';

interface EditProjectPageProps {
  params: Promise<{ id: string }>
}

export default async function EditProjectPage({ params }: EditProjectPageProps) {
  const { id } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login');
  }

  const { data: profile } = await supabase.from('profiles').select('is_admin').eq('id', user.id).single();

  if (!profile?.is_admin) {
    redirect('/dashboard');
  }

  const { data: project } = await supabase.from('projects').select('*').eq('id', id).single();

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl mt-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Edit Project</h1>
        <p className="text-muted-foreground">Update project details</p>
      </div>

      <ProjectForm project={project} />
    </div>
  );
}

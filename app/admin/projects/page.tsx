export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { redirect } from 'next/navigation';

import { Pencil, Plus } from 'lucide-react';

import { createClient } from '@/lib/supabase/server';

import { DeleteProjectButton } from '@/components/admin/delete-project-button';
import { Badge, Button } from '@/components/ui';
import { Card, CardContent } from '@/components/ui/card';

export default async function AdminProjectsPage() {
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

  const { data: projects } = await supabase.from('projects').select('*').order('created_at', { ascending: false });

  return (
    <div className="container mx-auto px-4 py-12 mt-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manage Projects</h1>
          <p className="text-muted-foreground">Add, edit, or remove projects</p>
        </div>
        <Button asChild>
          <Link href="/admin/projects/new" className="inline-flex items-center">
            <Plus className="mr-2 h-4 w-4" />
            Add Project
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects?.length ? (
          projects.map((project) => (
            <Card
              key={project.id}
              className="relative border-black/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold truncate">{project.title}</h3>
                      <Badge variant="secondary" className="shrink-0">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.tech_stack.slice(0, 4).map((tech: string) => (
                        <Badge key={tech} variant="outline" className="text-xs font-mono">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button variant="outline" size="sm" className="py-2" asChild>
                      <Link href={`/admin/projects/${project.id}/edit`}>
                        <Pencil className="h-4 w-4" />
                      </Link>
                    </Button>
                    <DeleteProjectButton projectId={project.id} projectTitle={project.title} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="text-center py-12">
            <CardContent>
              <p className="text-muted-foreground mb-4">No projects yet</p>
              <Button asChild>
                <Link href="/admin/projects/new">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Your First Project
                </Link>
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

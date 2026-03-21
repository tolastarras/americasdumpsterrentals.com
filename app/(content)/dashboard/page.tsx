export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { redirect } from 'next/navigation';

import { ArrowRight, Download, Package } from 'lucide-react';

import { createClient } from '@/lib/supabase/server';

import { PageHeader } from '@/components/layout/page-header';
import { Badge, Button } from '@/components/ui';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login');
  }

  // Get user's purchases with project details
  const { data: purchases } = await supabase
    .from('purchases')
    .select(`
      *,
      projects (*)
    `)
    .eq('user_id', user.id)
    // .eq("status", "completed")
    .order('created_at', { ascending: false });

  return (
    <>
      {/* Hero Header */}
      <PageHeader
        title="My Downloads"
        description="Access all the projects you&apos;ve supported"
      />

      {purchases && purchases.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {purchases.map((purchase) => (
            <Card key={purchase.id} className="group hover:border-primary/30 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{purchase.projects?.title}</CardTitle>
                    <CardDescription className="mt-1 h-10 overflow-y-scroll">
                      {purchase.projects?.description}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="shrink-0 bg-blue-50 text-blue-700 border-blue-200 mt-1">
                    ${(purchase.amount_cents / 100).toFixed(0)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex flex-wrap gap-1">
                    {purchase.projects?.tech_stack?.slice(0, 3).map((tech: string) => (
                      <Badge key={tech} variant="outline" className="text-xs font-mono">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 py-3" asChild>
                    <Link href={purchase.projects?.file_url} download className="inline-flex">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/projects/${purchase.project_id}`}>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Purchased {new Date(purchase.created_at).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="mx-auto text-center">
          <CardContent className="py-12">
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No downloads yet</h3>
            <p className="text-muted-foreground mb-6">
              Support developers and get access to amazing programming projects
            </p>
            <Button asChild>
              <Link href="/projects">Browse Projects</Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </>
  );
}

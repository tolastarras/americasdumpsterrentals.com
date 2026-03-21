export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { redirect } from 'next/navigation';

import { DollarSign, Package, Plus, TrendingUp, Users } from 'lucide-react';

import { createClient } from '@/lib/supabase/server';

import { Button } from '@/components/ui';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login');
  }

  // Check if user is admin
  const { data: profile } = await supabase.from('profiles').select('is_admin').eq('id', user.id).single();

  if (!profile?.is_admin) {
    redirect('/dashboard');
  }

  // Get stats
  const { count: projectCount } = await supabase.from('projects').select('*', { count: 'exact', head: true });

  const { data: purchases } = await supabase.from('purchases').select('amount_cents').eq('status', 'completed');

  const { count: messageCount } = await supabase.from('contact_messages').select('*', { count: 'exact' }).eq('status', 'new');

  const totalRevenue = purchases?.reduce((acc, p) => acc + p.amount_cents, 0) || 0;

  const { count: userCount } = await supabase.from('profiles').select('*', { count: 'exact', head: true });

  const stats = [
    { label: 'Total Projects', value: projectCount || 0, icon: Package, color: 'text-primary' },
    {
      label: 'Total Revenue',
      value: `$${(totalRevenue / 100).toLocaleString()}`,
      icon: DollarSign,
      color: 'text-chart-2',
    },
    { label: 'Total Users', value: userCount || 0, icon: Users, color: 'text-chart-3' },
    { label: 'Downloads', value: purchases?.length || 0, icon: TrendingUp, color: 'text-chart-4' },
  ];

  // Get recent purchases
  const { data: recentPurchases } = await supabase
    .from('purchases')
    .select(`
      *,
      projects (title),
      profiles (email, display_name)
    `)
    .eq('status', 'completed')
    .order('created_at', { ascending: false })
    .limit(5);

  return (
    <div className="container mx-auto px-4 py-12 mt-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your projects and view sales</p>
        </div>
        <Button asChild>
          <Link href="/admin/projects/new" className="inline-flex items-center">
            <Plus className="mr-2 h-4 w-4" />
            Add Project
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center gap-2">
                <stat.icon className={`h-8 w-8 ${stat.color} opacity-80`} />
                <h2 className="text-xl font-semibold text-muted-foreground">{stat.label}</h2>
              </div>
              <div className="flex items-center justify-center mt-4">
                <p className="text-4xl font-bold text-muted-foreground">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-2">
              <CardTitle>Projects</CardTitle>
              <CardDescription>Manage your project listings</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/admin/projects">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              You have {projectCount} project{projectCount !== 1 ? 's' : ''} listed.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="space-y-2">
              <CardTitle>Contact Messages</CardTitle>
              <CardDescription>Manage your contact messages</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/admin/messages">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              You have {messageCount} new message{messageCount !== 1 ? 's' : ''} in your inbox.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>Latest donations and purchases</CardDescription>
          </CardHeader>
          <CardContent>
            {recentPurchases && recentPurchases.length > 0 ? (
              <div className="space-y-4">
                {recentPurchases.map((purchase) => (
                  <div key={purchase.id} className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-medium">{purchase.projects?.title}</p>
                      <p className="text-muted-foreground">{purchase.profiles?.email}</p>
                    </div>
                    <span className="font-semibold text-primary">${(purchase.amount_cents / 100).toFixed(0)}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">No sales yet</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

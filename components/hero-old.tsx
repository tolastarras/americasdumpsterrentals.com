'use client';

import Link from 'next/link';

import type { User as SupabaseUser } from '@supabase/supabase-js';
import { ArrowRight, Code2, Download, Sparkles, Star, Terminal, Users, Zap } from 'lucide-react';

import { Button } from '@/components/ui';

export function Hero({ user }: { user: SupabaseUser | null }) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-accent/15 via-transparent to-transparent" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow animation-delay-200" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-chart-3/15 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(217_91%_60%/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(217_91%_60%/0.03)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="container max-w-6xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6 backdrop-blur-sm animate-fade-in font-semibold">
              <Sparkles className="h-4 w-4 animate-pulse" />
              Premium Source Code for Developers
              <ArrowRight className="h-3 w-3" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              Build Faster with
              <span className="bg-linear-to-r from-primary via-accent to-chart-3 bg-clip-text text-transparent animate-fade-in animation-delay-200">
                {' '}
                Production-Ready
              </span>{' '}
              Code
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty max-w-xl mx-auto lg:mx-0 animate-fade-in animation-delay-400">
              Access high-quality programming projects and source code. Support indie developers with donations and
              download complete, well-documented codebases.
            </p>
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-in animation-delay-600">
              <Button
                size="lg"
                className="bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
                asChild
              >
                <Link href="/projects" className="flex items-center gap-2 py-3 w-full md:w-fit">
                  <Code2 className="h-5 w-5" />
                  Browse Projects
                </Link>
              </Button>

              {!user &&<Button
                size="lg"
                variant="outline"
                className="border-primary/50 md:border-black/50 backdrop-blur-sm hover:bg-card/50 md:bg-transparent transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:text-primary"
                asChild
              >
                <Link href="/auth/sign-up" className="flex items-center gap-2 py-3 w-full md:w-fit">
                  <Download className="h-5 w-5" />
                  Get Started Free
                </Link>
              </Button>}
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 mt-10 pt-10 border-t border-black/30">
              {[
                { value: '500+', label: 'Projects', icon: Code2 },
                { value: '10K+', label: 'Downloads', icon: Users },
                { value: '4.9', label: 'Rating', icon: Star },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center group animate-fade-in"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="flex items-center justify-center gap-1.5 text-2xl md:text-3xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-md text-muted-foreground flex items-center justify-center gap-2">
                    <stat.icon className="h-4 w-4" />
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative animate-float">
            <div className="absolute -inset-4 bg-linear-to-r from-primary/30 via-accent/30 to-chart-3/30 rounded-3xl blur-2xl animate-pulse-glow" />

            {/* Main code card */}
            <div className="relative bg-card/90 backdrop-blur-xl border border-black/50 rounded-2xl p-6 shadow-2xl transition-all duration-500 hover:shadow-primary/20 hover:border-primary/30">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse animation-delay-200" />
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse animation-delay-400" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">project.tsx</span>
              </div>
              <pre className="text-sm text-muted-foreground overflow-hidden">
                <code>{`import { stripe } from '@/lib/stripe'
export async function purchaseProject(
  projectId: string,
  amount: number
) {
  const session = await stripe.checkout
    .sessions.create({
      mode: 'payment',
      success_url: \`/download/\${projectId}\`,
      line_items: [{
        price_data: {
          currency: 'usd',
          unit_amount: amount * 100,
        },
        quantity: 1,
      }],
    })

  return { url: session.url }
}`}</code>
              </pre>
            </div>

            {/* Floating feature cards */}
            <div className="absolute -top-4 -right-4 bg-linear-to-br from-primary to-accent text-primary-foreground p-4 rounded-xl shadow-lg shadow-primary/30 animate-float-delayed hover:scale-110 transition-transform">
              <Terminal className="h-6 w-6 mb-2" />
              <div className="text-sm font-medium">Full Source</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-linear-to-br from-chart-3 to-chart-5 text-white p-4 rounded-xl shadow-lg shadow-chart-3/30 animate-float hover:scale-110 transition-transform">
              <Zap className="h-6 w-6 mb-2" />
              <div className="text-sm font-medium">Instant Access</div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
          {[
            {
              title: 'Quality Code',
              description: 'Production-ready, well-tested source code with documentation',
              icon: Code2,
              gradient: 'from-primary/20 to-primary/5',
              borderHover: 'hover:border-primary/50',
            },
            {
              title: 'Support Devs',
              description: 'Your donation directly supports independent creators',
              icon: Sparkles,
              gradient: 'from-accent/20 to-accent/5',
              borderHover: 'hover:border-accent/50',
            },
            {
              title: 'Instant Access',
              description: 'Download immediately after your contribution',
              icon: Download,
              gradient: 'from-chart-3/20 to-chart-3/5',
              borderHover: 'hover:border-chart-3/50',
            },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative text-center p-8 rounded-2xl bg-linear-to-b ${feature.gradient} border border-black/30 backdrop-blur-sm ${feature.borderHover} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-slide-up`}
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-card border border-black/50 mb-4 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <feature.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-md text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';

import { AlertCircle } from 'lucide-react';

import { Button } from '@/components/ui';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ErrorPageProps {
  searchParams: Promise<{ error?: string }>
}

export default async function ErrorPage({ searchParams }: ErrorPageProps) {
  const params = await searchParams;

  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card className="border-destructive/30">
            <CardHeader className="text-center">
              <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-2" />
              <CardTitle className="text-2xl">Something went wrong</CardTitle>
              <CardDescription>{params.error || 'An unexpected error occurred during authentication'}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Button className="w-full" asChild>
                <Link href="/auth/login">Try Again</Link>
              </Button>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/">Go Home</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

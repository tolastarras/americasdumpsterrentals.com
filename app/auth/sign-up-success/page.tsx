import Link from 'next/link';

import { Mail } from 'lucide-react';

import { Button } from '@/components/ui';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] w-full items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader className="text-center">
              <Mail className="h-12 w-12 text-primary mx-auto mb-2" />
              <CardTitle className="text-2xl">Check your email</CardTitle>
              <CardDescription>We&apos;ve sent you a confirmation link</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground text-center">
                Click the link in the email to verify your account and start exploring amazing programming projects.
              </p>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/auth/login">Back to Sign In</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

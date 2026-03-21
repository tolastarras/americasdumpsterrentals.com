'use client';

// import { useCallback, useState } from 'react';
import Link from 'next/link';

// import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import { AlertCircle, CheckCircle, Download, Loader2, Lock } from 'lucide-react';

import { Button } from '@/components/ui';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// import { startCheckoutSession } from '@/app/actions/stripe';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CheckoutFormProps {
  projectId: string
  amountCents: number
  projectTitle: string
}

export function CheckoutForm({ projectId, amountCents, projectTitle }: CheckoutFormProps) {
  console.error('amountCents', amountCents);
  // const [status, setStatus] = useState<'checkout' | 'processing' | 'success' | 'error'>('checkout');
  // const [errorMessage, setErrorMessage] = useState<string>('');

  // const fetchClientSecret = useCallback(async (): Promise<string> => {
  //   const secret = null; // await startCheckoutSession(projectId, amountCents);
  //   if (!secret) {
  //     throw new Error('Failed to create checkout session');
  //   }
  //   return secret;
  // }, [projectId, amountCents]);

  // const handleComplete = useCallback(async () => {
  //   setStatus('processing');
  //   try {
  //     // Get the session from URL or wherever Stripe provides it
  //     // For embedded checkout, we need to handle this differently
  //     setStatus('success');
  //   } catch {
  //     setStatus('error');
  //     setErrorMessage('Failed to confirm your purchase. Please contact support.');
  //   }
  // }, []);

  if (status === 'success') {
    return (
      <Card className="bg-primary/10 border-primary/30">
        <CardHeader className="text-center">
          <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
          <CardTitle className="text-2xl">Thank You for Your Support!</CardTitle>
          <CardDescription className="text-base">
            Your donation has been processed successfully. You now have access to {projectTitle}.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button size="lg" className="py-2 w-full md:w-fit" asChild>
            <Link href={`/projects/${projectId}`}>
              <Download className="mr-2 h-5 w-5" />
              Download Source Code
            </Link>
          </Button>
          <Button variant="outline" className="w-full md:w-fit" asChild>
            <Link href="/dashboard">View My Downloads</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (status === 'error') {
    return (
      <Card className="bg-destructive/10 border-destructive/30">
        <CardHeader className="text-center">
          <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
          <CardTitle className="text-2xl">Something Went Wrong</CardTitle>
          {/* <CardDescription className="text-base">{errorMessage}</CardDescription> */}
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          {/* <Button onClick={() => setStatus('checkout')}>
            Try Again
          </Button> */}
          <Button variant="outline" asChild>
            <Link href={`/projects/${projectId}`}>Go Back</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (status === 'processing') {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-16">
          <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
          <p className="text-lg font-medium">Processing your payment...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <Lock className="h-5 w-5 text-gray-600" />
          <h2 className="text-xl font-semibold text-gray-900">Secure Checkout</h2>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Your payment is secured with 256-bit SSL encryption
        </p>
      </CardHeader>
      <CardContent>
        {/* <EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret, onComplete: handleComplete }}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider> */}
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          By completing this purchase, you agree to our{' '}
          <Link href="/terms" className="text-primary underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-primary underline">
            Privacy Policy
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}

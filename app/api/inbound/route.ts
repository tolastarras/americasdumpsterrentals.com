import { NextRequest, NextResponse } from 'next/server';

import { handleReceivedEmail } from '@/lib/email/handle-received';
import type { ReceivedEmailData } from '@/lib/email/types';
import { getResend, getWebhookSecret } from '@/lib/resend/client';
// import { replyToEmail } from '@/lib/email/reply-to-email';

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    // return new NextResponse('Method not allowed', { status: 405 });
    return new NextResponse('Not Found', { status: 404 });
  }

  const payload = await req.text();

  const id = req.headers.get('svix-id');
  const timestamp = req.headers.get('svix-timestamp');
  const signature = req.headers.get('svix-signature');

  if (!id || !timestamp || !signature) {
    // return new NextResponse('Missing webhook headers', { status: 400 });
    return new NextResponse('Not Found', { status: 404 });
  }

  // Create a plain object with non‑null strings
  const headers = { id, timestamp, signature };

  try {
    const resend = getResend();

    const secret = getWebhookSecret();
    const event = resend.webhooks.verify({
      payload,
      headers,
      webhookSecret: secret,
    }) as { type: string; data: ReceivedEmailData };

    if (event.type !== 'email.received') {
      return NextResponse.json({ message: 'Ignored event type' });
    }

    // Process the email
    await handleReceivedEmail(resend, event.data);

    // Optionally send an automated reply
    // await replyToEmail(resend, event.data, '<p>Thanks for your message!</p>');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook processing failed:', error);
    return new NextResponse(`Error: ${error}`, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  // Only handle browser navigation requests (those expecting HTML)
  const accept = req.headers.get('accept') || '';
  if (accept.includes('text/html')) {
    // Get the original host (e.g., macbookpro.tail6e278d.ts.net)
    const host = req.headers.get('host');
    if (host) {
      // Construct a full HTTPS URL to your 404 page
      const redirectUrl = `https://${host}/page-not-found`;
      return NextResponse.redirect(redirectUrl, 307); // 307 temporary redirect
    }
    // Fallback to a relative redirect (may break with tunnels)
    return NextResponse.redirect(new URL('/404', req.url));
  }

  // For API clients, return a plain 404 response
  return new NextResponse('Not Found', { status: 404 });
}

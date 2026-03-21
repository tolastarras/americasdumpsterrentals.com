'use server';

import { replyToEmail } from '@/lib/email/reply-to-email';
import { getResend } from '@/lib/resend/client';

export async function sendReplyAction({
  to,
  subject,
  replyBody,
  messageId,
}: {
  to: string;
  subject: string;
  replyBody: string;
  messageId: string;
}) {
  const resend = getResend();

  // Create an object that exactly matches the new ReplyEmailData type
  const eventData = {
    from: to,
    subject,
    message_id: messageId,
  };

  try {
    const result = await replyToEmail(
      resend,
      eventData,
      replyBody,
      'Tolastarras <contact@americasdumpsterrentals.com>',
    );
    return { success: true, data: result };
  } catch (error) {
    console.error('Send reply error:', error);
    // Narrow the error type
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return { success: false, error: errorMessage };
  }
}

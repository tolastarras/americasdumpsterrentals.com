import { Resend } from 'resend';

// Define a minimal interface for what replyToEmail actually needs
interface ReplyEmailData {
  from: string;
  subject: string;
  message_id: string;
}

export async function replyToEmail(
  resend: Resend,
  eventData: ReplyEmailData,
  replyBody: string,
  fromAddress: string = 'Your Name <contact@americasdumpsterrentals.com>',
) {
  const { from, subject, message_id } = eventData;

  const { data, error } = await resend.emails.send({
    from: fromAddress,
    to: [from],
    subject: `Re: ${subject}`,
    html: replyBody,
    headers: {
      'In-Reply-To': message_id,
      'References': message_id,
    },
  });

  if (error) throw error;
  return data;
}

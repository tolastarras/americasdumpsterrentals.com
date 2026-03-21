import { Resend } from 'resend';

import { createClient } from '@/lib/supabase/server';

import { ReceivedEmailData } from './types';

export async function handleReceivedEmail(
  resend: Resend,
  data: ReceivedEmailData,
) {
  const supabase = await createClient();
  const { email_id, from, to, subject, attachments: metaAttachments } = data;

  // Fetch full email content (body)
  const { data: email, error: emailError } = await resend.emails.receiving.get(email_id);
  if (emailError) throw new Error(`Failed to fetch email: ${emailError.message}`);

  // console.log('Email subject:', email.subject);
  // console.log('Email body (HTML):', email.html);
  // console.log('Email body (text):', email.text);

  // If there are attachments, fetch them
  if (metaAttachments && metaAttachments.length > 0) {
    const { data: attachmentsData } = await resend.emails.receiving.attachments.list({
      emailId: email_id,
    });
    const attachments = attachmentsData?.data || [];

    for (const attachment of attachments) {
      const response = await fetch(attachment.download_url);
      if (!response.ok) throw new Error(`Failed to download attachment: ${response.statusText}`);
      const buffer = Buffer.from(await response.arrayBuffer());
      const base64 = buffer.toString('base64');
      console.warn(`Attachment ${attachment.filename} downloaded (base64 length: ${base64.length})`);
      // console.log(`Attachment ${attachment.filename} downloaded`);
      // Here you would store the attachment (e.g., upload to cloud storage)
    }
  }

  const { error: insertError } = await supabase
    .from('emails')
    .insert({
      id: email_id,
      from_email: from,
      to_emails: to,
      subject: subject,
      html_body: email.html,
      text_body: email.text,
      received_at: email.created_at,
      // store metadata as JSON, or create a separate table
      attachments: metaAttachments,
    });

  if (insertError) throw insertError;

  // Return the processed email data for further use (e.g., storing in DB)
  return { email, attachments: metaAttachments };
}

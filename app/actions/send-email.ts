'use server';

import { getResend } from '@/lib/resend/client';
import { escapeHtml, textToHtml } from '@/lib/utils/email';

import { ContactFormEmail, ResendTestEmail } from '@/components/email-templates';

import { COMPANY } from '@/constants/';

export async function sendContactFormEmail(formData: {
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const resend = getResend();
  const { first_name, last_name, email, subject, message } = formData;

  const safeData = {
    name: escapeHtml(`${first_name} ${last_name}`),
    email,
    subject: escapeHtml(subject),
    message: textToHtml(message),
  };

  try {
    const { data, error } = await resend.emails.send({
      from: COMPANY.email,
      to: COMPANY.email,
      subject: `New message from ${safeData.name}`,
      react: ContactFormEmail(safeData),
    });

    if (error) {
      console.error(`Email failed: ${error.message}`);
      throw new Error('Unable to send email, please try again later.');
    }

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error('Failed to send test email');
  }
}

export async function sendTestEmail() {
  const resend = getResend();

  try {
    const { data, error } = await resend.emails.send({
      from: 'Test <onboarding@resend.dev>',
      to: COMPANY.email,
      subject: 'Test Email',
      react: ResendTestEmail({ username: 'admin' }),
    });

    if (error) {
      throw new Error(`Email failed: ${error.message}`);
    }

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error('Failed to send test email');
  }
}

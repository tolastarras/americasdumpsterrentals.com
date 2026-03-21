import { ContactMessage } from '@/app/types';

import { getResend } from '@/lib/resend/client';

export async function sendAdminEmailNotification(message: ContactMessage) {
  const resend = getResend();

  try {
    await resend.emails.send({
      from: 'Website Contact <notifications@yourdomain.com>',
      to: ['admin@yourdomain.com'],
      subject: `📩 New Contact: ${message.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${message.name} (${message.email})</p>
        <p><strong>Subject:</strong> ${message.subject}</p>
        <p><strong>Message:</strong></p>
        <blockquote>${message.html_body}</blockquote>
        <p><strong>Received:</strong> ${new Date(message.created_at).toLocaleString()}</p>
        <p><strong>ID:</strong> ${message.id}</p>
        <br/>
        <p><a href="${process.env.NEXTAUTH_URL}/admin/messages">View in Admin Panel</a></p>
      `,
    });
  } catch (error) {
    console.error('Failed to send admin notification:', error);
  }
}

export async function sendAutoReplyEmail(userEmail: string, userName: string) {
  const resend = getResend();

  try {
    await resend.emails.send({
      from: 'Your Name/Business <hello@yourdomain.com>',
      to: [userEmail],
      subject: 'Thanks for reaching out!',
      html: `
        <h2>Hi ${userName},</h2>
        <p>Thanks for contacting us! We've received your message and will get back to you within 24-48 hours.</p>
        <p>Best regards,<br/>Your Name/Business</p>
      `,
    });
  } catch (error) {
    console.error('Failed to send auto-reply:', error);
  }
}

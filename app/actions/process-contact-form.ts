'use server';

// import { createClient } from '@supabase/supabase-js';

import type { Contact } from '@/lib/types';
// import { sanitize } from '@/lib/utils/sanitize';
import { isValidEmail } from '@/lib/utils/validate';

// import { validateContactFormSubmission } from '@/app/actions/middleware/security/contact-form-security';
import { sendContactFormEmail } from '@/app/actions/send-email';
// import { FORM_LIMITS } from '@/constants';

// Initialize clients
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
// );

export async function processContactForm(
  contactDetails: Contact,
  // token: string,
) {
  // const maxInputLength = FORM_LIMITS.INPUT.MAX;

  try {
    // Security checks (delegated to separate file)
    // const securityResult = await validateContactFormSubmission(contactDetails, token);

    // if (!securityResult.allowed) {
    //   // Return success to appear normal to bots
    //   return { success: true, message: 'Message received' };
    // }

    // Form validation & processing
    for (const [, fieldValue] of Object.entries(contactDetails)) {
      if (!fieldValue) {
        throw new Error('All fields are required');
      }
    }

    // Validate email
    if (!isValidEmail(contactDetails.email)) {
      throw new Error('Invalid email address');
    }

    // const fullname = `${contactDetails.first_name} ${contactDetails.last_name}`;

    // Sanitize for db
    // const name = sanitize(fullname, maxInputLength);
    // const email = sanitize(contactDetails.email, maxInputLength);
    // const subject = sanitize(contactDetails.subject, maxInputLength);
    // const message = sanitize(contactDetails.message, FORM_LIMITS.TEXTAREA.MAX);

    // 1. Save to Supabase
    // const { data, error } = await supabase
    //   .from('contact_messages')
    //   .insert([{
    //     name,
    //     email,
    //     subject,
    //     message,
    //     status: 'new',
    //     created_at: new Date().toISOString(),
    //   }])
    //   .select();

    // if (error) {
    //   console.warn(`Database error: ${error.message}`);
    //   throw new Error('Failed to save message to database');
    // }

    // console.log('✅ Saved to Supabase:', data);

    // const savedMessage = data[0];
    // console.log('✅ Saved to Supabase:', savedMessage);

    // 2. Send an email notification to admin
    const result = await sendContactFormEmail(contactDetails);

    // Promise.all([
      // Email notification
      // sendAdminEmailNotification(savedMessage),
      // await sendContactFormEmail(contactDetails),

    //   // Optional: SMS notification (if you have Twilio/etc)
    //   sendAdminSMSNotification(savedMessage),

    //   // Optional: Slack/Discord webhook
    //   sendSlackNotification(savedMessage)
    // ]).catch(console.error);

    // // 3. Send auto-reply to user
    // sendAutoReplyEmail(email, name).catch(console.error);

    return {
      success: true,
      messageId: result.id,
      message: 'Your message has been received!',
    };

  } catch (error: unknown) {
    if (error instanceof Error) {
      // console.error('❌ Error saving contact message:', error);
      throw new Error(error.message || 'Failed to save message');
    }

    throw new Error('An unexpected error occurred');
  }
}

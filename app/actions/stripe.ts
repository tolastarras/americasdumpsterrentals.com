'use server';

// import { stripe } from '@/lib/stripe';

// import { createClient } from '@/lib/supabase/server';
import { DONATION_AMOUNTS } from '@/constants/donations';

export async function startCheckoutSession(projectId: string, amountCents: number) {
  // const supabase = await createClient();

  // Verify user is logged in
  // const {
    //   data: { user },
    // } = await supabase.auth.getUser();
    const user = null;

  if (!user) {
    throw new Error('You must be logged in to make a purchase');
  }

  // Verify the amount is valid
  const validAmount = DONATION_AMOUNTS.find((a) => a.value === amountCents);
  if (!validAmount) {
    throw new Error('Invalid donation amount');
  }

  // Get project details
  // const { data: project } = await supabase.from('projects').select('*').eq('id', projectId).single();

  // if (!project) {
  //   throw new Error('Project not found');
  // }

  // Check if user already purchased
  // const { data: existingPurchase } = await supabase
  //   .from('purchases')
  //   .select('id')
  //   .eq('user_id', user.id)
  //   .eq('project_id', projectId)
  //   .eq('status', 'completed')
  //   .single();

  // if (existingPurchase) {
  //   throw new Error('You have already purchased this project');
  // }

  // Create Stripe checkout session
  // const session = await stripe.checkout.sessions.create({
  //   ui_mode: 'embedded',
  //   redirect_on_completion: 'never',
  //   customer_email: user.email,
  //   metadata: {
  //     user_id: user.id,
  //     project_id: projectId,
  //   },
  //   line_items: [
  //     {
  //       price_data: {
  //         currency: 'usd',
  //         product_data: {
  //           name: project.title,
  //           description: `Donation to access ${project.title} source code`,
  //         },
  //         unit_amount: amountCents,
  //       },
  //       quantity: 1,
  //     },
  //   ],
  //   mode: 'payment',
  // });

  // Create pending purchase record
  // await supabase.from('purchases').upsert(
  //   {
  //     user_id: user.id,
  //     project_id: projectId,
  //     amount_cents: amountCents,
  //     stripe_session_id: session.id,
  //     status: 'pending',
  //   },
  //   {
  //     onConflict: 'user_id,project_id',
  //   },
  // );

  return null; // session.client_secret;
}

export async function confirmPurchase(sessionId: string) {
  // const supabase = await createClient();
  console.error('sessionId', sessionId);

  // Verify the session is paid
  // const session = await stripe.checkout.sessions.retrieve(sessionId);

  // if (session.payment_status !== 'paid') {
  //   throw new Error('Payment not completed');
  // }

  // Update purchase record
  // const { error } = await supabase.from('purchases').update({ status: 'completed' }).eq('stripe_session_id', sessionId);

  // if (error) {
  //   throw new Error('Failed to confirm purchase');
  // }

  // return { success: true, projectId: session.metadata?.project_id };
  return null;
}

import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

// import { createClient } from '@supabase/supabase-js';

// import { stripe } from '@/lib/stripe';

// Use service role key for webhook to bypass RLS
// const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

export async function POST(request: Request) {
  const body = await request.text();
  console.error('Webhook body:', body);
  const headersList = await headers();
  const signature = headersList.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  // delete this
  let event;

  try {
    // event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);
    event = {
      type: null,
      data: {
        object: null,
      },
    };
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (!event) {
    return NextResponse.json({ error: 'Invalid event' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object || { payment_status: null, metadata: null };

    if (!session) {
      return NextResponse.json({ error: 'No session' }, { status: 400 });
    }

    if (session.payment_status === 'paid' && session.metadata) {
      // const { user_id, project_id } = session.metadata;

      // Update purchase to completed
    //   await supabaseAdmin
    //     .from('purchases')
    //     .update({ status: 'completed' })
    //     .eq('user_id', user_id)
    //     .eq('project_id', project_id);
    }
  }

  return NextResponse.json({ received: true });
};

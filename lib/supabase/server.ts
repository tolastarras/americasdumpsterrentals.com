import { cookies } from 'next/headers';

import { createServerClient } from '@supabase/ssr';

import { config } from '@/lib/config';

export async function createClient() {
  const { supabase } = config;
  const cookieStore = await cookies();

  return createServerClient(supabase.url!, supabase.anonKey!, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // Called from Server Component - can be ignored with middleware refresh
        }
      },
    },
  });
}

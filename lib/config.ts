const publicEnvVars = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
] as const;

const serverEnvVars = [
  'RESEND_API_KEY',
  'RESEND_WEBHOOK_SECRET',
] as const;

function validateEnv(vars: readonly string[], context: string) {
  for (const envVar of vars) {
    if (!process.env[envVar]) {
      throw new Error(`Missing ${context} environment variable: ${envVar}`);
    }
  }
}

export const config = {
  get supabase() {
    // Only validate on the server – at build time this runs in Node, on the client it's skipped
    if (typeof window === 'undefined') {
      validateEnv(publicEnvVars, 'public');
    }
    return {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL,
      anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    };
  },
  get resend() {
    if (typeof window === 'undefined') {
      validateEnv(serverEnvVars, 'server');
    }
    return {
      apiKey: process.env.RESEND_API_KEY,
      webhookSecret: process.env.RESEND_WEBHOOK_SECRET,
    };
  },
} as const;

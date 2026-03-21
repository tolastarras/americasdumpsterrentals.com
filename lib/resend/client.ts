import { Resend } from 'resend';

import { config } from '@/lib/config';

let resendInstance: Resend | null = null;

export function getResend(): Resend {
  if (!resendInstance) {
    const apiKey = config.resend.apiKey;
    if (!apiKey) {
      throw new Error('Resend API key is missing');
    }
    resendInstance = new Resend(apiKey);
  }
  return resendInstance;
}

export function getWebhookSecret(): string {
  const secret = config.resend.webhookSecret;
  if (!secret) {
    throw new Error('Missing RESEND_WEBHOOK_SECRET environment variable');
  }
  return secret;
}

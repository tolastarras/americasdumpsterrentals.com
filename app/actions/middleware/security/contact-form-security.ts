'use server';

import { headers } from 'next/headers';

import { SecurityService } from '@/lib/services/security.service';
import type { Contact } from '@/lib/types';

export interface SecurityCheckResult {
  allowed: boolean;
  clientIp: string;
  turnstileScore?: number;
  message?: string;
}

export async function validateContactFormSubmission(
  contact: Contact,
  turnstileToken: string,
): Promise<SecurityCheckResult> {
  const headersList = await headers();
  const clientIp = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown';
  const hostname = headersList.get('host') || '';

  try {
    // 1. Rate limiting
    const rateLimitCheck = SecurityService.checkRateLimit(
      `contact:${clientIp}`,
      3,  // max 3 requests
      15, // per 15 minutes
    );

    if (!rateLimitCheck.allowed) {
      // console.warn('Rate limit exceeded:', { ip: clientIp });
      return {
        allowed: false,
        clientIp,
        message: 'Rate limit exceeded',
      };
    }

    // 2. Turnstile verification
    // const turnstileToken = contact.turnstileToken as string;

    const turnstileCheck = await SecurityService.verifyTurnstile(turnstileToken, hostname);

    if (!turnstileCheck.allowed) {
      // console.warn('Turnstile failed:', {
      //   ip: clientIp,
      //   reason: turnstileCheck.reason,
      // });
      return {
        allowed: false,
        clientIp,
        message: 'Security check failed',
      };
    }

    return {
      allowed: true,
      clientIp,
      turnstileScore: turnstileCheck.details?.score,
    };

  } catch (error) {
    console.error('Security check error:', error);
    return {
      allowed: false,
      clientIp,
      message: 'Security service error',
    };
  }
}

export interface SecurityResult<T = Record<string, unknown>> {
  allowed: boolean;
  reason?: string;
  details?: T;
}

export interface TurnstileDetails {
  score?: number;
  hostname?: string;
  action?: string;
  challengeTimestamp?: string;
  errorCodes?: string[];
  isTest?: boolean;
}

export interface RateLimitDetails {
  current: number;
  remaining: number;
  resetTime: number;
}

export class SecurityService {
  private static rateLimitStore = new Map<string, { count: number; resetTime: number }>();

  /**
   * Verify Turnstile token
   */
  static async verifyTurnstile(token: string, hostname?: string): Promise<SecurityResult<TurnstileDetails>> {
    // console.log('🔧 verifyTurnstile() called with hostname:', hostname);

    if (!token) {
      return { allowed: false, reason: 'No token provided' };
    }

    // Check if we're on localhost (passed from server)
    const isLocalhost = hostname?.includes('localhost') || hostname?.includes('127.0.0.1');
    // console.log('🔧 isLocalhost:', isLocalhost);

    // 🚨 LOCALHOST OVERRIDE - Remove in production!
    if (isLocalhost) {
      // console.warn('🔧 LOCALHOST OVERRIDE: Accepting token for development');

      // Basic validation for development
      const isValid = token.length > 5;

      if (!isValid) {
        return {
          allowed: false,
          reason: 'Invalid development token',
          details: { isTest: true },
        };
      }

      return {
        allowed: true,
        details: {
          isTest: true,
          score: 0.9,
          hostname: 'localhost',
          action: 'contact-form',
          challengeTimestamp: new Date().toISOString(),
        },
      };
    }

    // Production
    try {
      const formData = new URLSearchParams();
      formData.append('secret', process.env.TURNSTILE_SECRET_KEY!);
      formData.append('response', token);

      const response = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        { method: 'POST', body: formData },
      );

      const data = await response.json();

      if (!data.success) {
        return {
          allowed: false,
          reason: data['error-codes']?.join(', ') || 'Verification failed',
          details: { errorCodes: data['error-codes'] },
        };
      }

      return {
        allowed: true,
        details: {
          score: data.score,
          hostname: data.hostname,
          action: data.action,
          challengeTimestamp: data.challenge_ts,
        },
      };
    } catch (error) {
      console.error('Turnstile error:', error);
      return {
        allowed: false,
        reason: 'Verification service unavailable',
      };
    }
  }

  /**
   * Simple rate limiting
   */
  static checkRateLimit(
    identifier: string,
    maxRequests = 5,
    windowMinutes = 15,
  ): SecurityResult<RateLimitDetails> {
    const now = Date.now();
    const key = `rl:${identifier}`;
    const windowMs = windowMinutes * 60 * 1000;

    // Clean up old entries occasionally
    if (Math.random() < 0.01) {
      for (const [k, v] of this.rateLimitStore.entries()) {
        if (now > v.resetTime) this.rateLimitStore.delete(k);
      }
    }

    const entry = this.rateLimitStore.get(key);

    if (entry) {
      if (now > entry.resetTime) {
        // Window expired, reset
        this.rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
        return {
          allowed: true,
          details: {
            current: 1,
            remaining: maxRequests - 1,
            resetTime: now + windowMs,
          },
        };
      }

      if (entry.count >= maxRequests) {
        return {
          allowed: false,
          reason: `Too many requests. Try again in ${Math.ceil((entry.resetTime - now) / 60000)} minutes`,
          details: {
            current: entry.count,
            remaining: 0,
            resetTime: entry.resetTime,
          },
        };
      }

      entry.count++;
      return {
        allowed: true,
        details: {
          current: entry.count,
          remaining: maxRequests - entry.count,
          resetTime: entry.resetTime,
        },
      };
    } else {
      this.rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
      return {
        allowed: true,
        details: {
          current: 1,
          remaining: maxRequests - 1,
          resetTime: now + windowMs,
        },
      };
    }
  }

  /**
   * Basic content validation
   */
  static validateContent(content: string): SecurityResult {
    if (!content?.trim()) {
      return { allowed: false, reason: 'Message is empty' };
    }

    if (content.length > 5000) {
      return { allowed: false, reason: 'Message too long' };
    }

    return { allowed: true };
  }
}

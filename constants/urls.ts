// app/constants/urls.ts

/**
 * Get the base URL for the application
 * Priority: NEXT_PUBLIC_APP_URL > VERCEL_URL > localhost
 */
export const BASE_URL = (() => {
  // 1. Check for explicit environment variable
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  // 2. Check for Vercel's automatic URL
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // 3. Default to localhost for development
  return 'http://localhost:3000';
})();

/**
 * Build a full URL from a path
 */
export const getFullUrl = (path: string = ''): string => {
  return `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};

/**
 * Email-specific URL generators
 */
export const EMAIL_URLS = {
  verifyEmail: (token: string): string =>
    getFullUrl(`/auth/verify?token=${token}`),

  resetPassword: (token: string): string =>
    getFullUrl(`/auth/reset-password?token=${token}`),

  contactForm: (): string => getFullUrl('/contact'),

  unsubscribe: (userId: string, listId?: string): string => {
    const url = getFullUrl(`/unsubscribe/${userId}`);
    return listId ? `${url}?list=${listId}` : url;
  },
} as const;

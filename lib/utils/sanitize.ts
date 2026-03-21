import { FORM_LIMITS } from '@/constants/validate';

export const sanitize = (input: string, maxLength: number): string =>
  input.trim().slice(0, maxLength);

export const sanitizeInput = (input: string, maxLength = FORM_LIMITS.INPUT.MAX): string =>
  sanitize(input, maxLength);

export const sanitizeText = (input: string, maxLength = FORM_LIMITS.TEXTAREA.MAX): string =>
  sanitize(input, maxLength);

import { FORM_LIMITS } from '@/constants/validate';

/**
 * Validate field:
 * - At least x characters
 * - No numbers
 * - Only letters, spaces, hyphens, apostrophes
 */
export const isValidName = (name: string, requireLastName = false): {
  isValid: boolean;
  requireLastName? : boolean;
  error?: string;
} => {
  const trimmedName = name.trim();

  if (!trimmedName) {
    return { isValid: false, error: `Field cannot be empty` };
  }

  if (trimmedName.length < FORM_LIMITS.INPUT.MIN) {
    return { isValid: false, error: `Field must be at least ${FORM_LIMITS.INPUT.MIN} characters` };
  }

  if (/\d/.test(trimmedName)) {
    return { isValid: false, error: 'Field cannot contain numbers' };
  }

  if (requireLastName) {
    const nameParts = trimmedName.split(/\s+/).filter(part => part.length > 0);
    if (nameParts.length < 2) {
      return { isValid: false, error: 'Please enter your full name' };
    }
  }

  // Allow letters, spaces, hyphens, apostrophes
  if (!/^[a-zA-Z\s\-']+$/.test(name)) {
    return { isValid: false, error: 'Field can only contain letters, spaces, hyphens, and apostrophes' };
  }

  return { isValid: true };
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): {
  isValid: boolean;
  error?: string;
} => {
  if (!email) {
    return { isValid: false, error: 'Email is required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  return { isValid: true };
};

/**
 * Validate subject:
 * - Not empty
 */
export const isValidSubject = (subject: string): {
  isValid: boolean;
  error?: string;
} => {
  if (!subject) {
    return { isValid: false, error: `Subject cannot be empty` };
  }

  return { isValid: true };
};

/**
 * Validate message:
 * - At least x characters
 * - Not empty
 */
export const isValidMessage = (message: string): {
  isValid: boolean;
  error?: string;
} => {
  if (!message || message.trim().length < FORM_LIMITS.TEXTAREA.MIN) {
    return { isValid: false, error: `Message must be at least ${FORM_LIMITS.TEXTAREA.MIN} characters` };
  }

  if (message.trim().length > FORM_LIMITS.TEXTAREA.MAX) {
    return { isValid: false, error: `Message must be less than ${FORM_LIMITS.TEXTAREA.MAX} characters` };
  }

  return { isValid: true };
};

/**
 * Validate all contact form fields at once
 */
export const validateContactForm = (data: {
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
}): {
  isValid: boolean;
  errors: Record<string, string>;
} => {
  const errors: Record<string, string> = {};

  const firstNameValidation = isValidName(data.first_name);
  if (!firstNameValidation.isValid && firstNameValidation.error) {
    errors.first_name = firstNameValidation.error;
  }

  const lastNameValidation = isValidName(data.last_name);
  if (!lastNameValidation.isValid && lastNameValidation.error) {
    errors.last_name = lastNameValidation.error;
  }

  const emailValidation = isValidEmail(data.email);
  if (!emailValidation.isValid && emailValidation.error) {
    errors.email = emailValidation.error;
  }

  const subjectValidation = isValidSubject(data.subject);
  if (!subjectValidation.isValid && subjectValidation.error) {
    errors.subject = subjectValidation.error;
  }

  const messageValidation = isValidMessage(data.message);
  if (!messageValidation.isValid && messageValidation.error) {
    errors.message = messageValidation.error;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

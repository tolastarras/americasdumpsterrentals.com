'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// import { Turnstile } from '@marsidev/react-turnstile';
import { Loader2, Send } from 'lucide-react';

import type { Contact } from '@/lib/types';
import {
  isValidEmail,
  isValidMessage,
  isValidName,
  isValidSubject,
  validateContactForm,
} from '@/lib/utils/validate';

import { useToast } from '@/hooks/use-toast';

// import { SecurityIntegrationButtonTest } from '@/components/mocks/security-integration-button-test';
// import { useAuth } from '@/hooks/use-auth';
import { Button } from '@/components/ui';
import { CustomInput, CustomSelect, CustomTextarea } from '@/components/ui/custom';

import { processContactForm } from '@/app/actions/process-contact-form';
import { SERVICE_OPTIONS as services } from '@/constants/site-data';
import { FORM_LIMITS } from '@/constants/validate';

interface ContactFormProps {
  contact?: Contact;
}

export function ContactForm({ contact }: ContactFormProps) {
  const { toast } = useToast();

  const initialFormState = {
    values: {
      first_name: contact?.first_name || '',
      last_name: contact?.last_name || '',
      email: contact?.email || '',
      subject: contact?.subject || '',
      message: contact?.message || '',
    },
    touched: {
      first_name: false,
      last_name: false,
      email: false,
      subject: false,
      message: false,
    },
    errors: {
      first_name: '',
      last_name: '',
      email: '',
      subject: '',
      message: '',
    },
    turnstile: {
      isHuman: false,
      token: '',
    },
    isLoading: false,
    acceptTerms: false,
  };

  const [formState, setFormState] = useState(initialFormState);

  useEffect(() => {
    // Auto-set mock token on localhost for testing
    if (process.env.NODE_ENV === 'development' && !formState.turnstile.token) {
      const mockToken = `localhost-mock-token-${Date.now()}`;
      updateFormState({
        turnstile: { token: mockToken, isHuman: true },
      });
    }
  }, []);

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case 'first_name': {
        return isValidName(value).error || '';
      }
      case 'last_name': {
        return isValidName(value).error || '';
      }
      case 'email': {
        return isValidEmail(value).error || '';
      }
      case 'subject': {
        return isValidSubject(value).error || '';
      }
      case 'message': {
        return isValidMessage(value).error || '';
      }
      default: {
        return '';
      }
    }
  };

  // Helper to update state
  const updateFormState = (updates: Partial<typeof formState>) => {
    setFormState((prev) => ({ ...prev, ...updates }));
  };

  // Update specific field value
  const handleChange = (field: keyof typeof formState.values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;

    updateFormState({
      values: { ...formState.values, [field]: value },
      errors: { ...formState.errors, [field]: '' },
    });
  };

  const handleBlur = (field: keyof typeof formState.values) => {
    updateFormState({
      touched: { ...formState.touched, [field]: true },
    });

    // Validate
    const error = validateField(field, formState.values[field]);
    if (error) {
      updateFormState({
        errors: { ...formState.errors, [field]: error },
      });
    }
  };

  const handleSelectChange = (field: keyof typeof formState.values) => (value: string) => {
    updateFormState({
      values: { ...formState.values, [field]: value },
      errors: { ...formState.errors, [field]: '' },
    });
  };

  const handlePrivacyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormState({ acceptTerms: e.target.checked });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    updateFormState({ isLoading: true });

    try {
      const result = await processContactForm(
        formState.values as Contact,
        // formState.turnstile.token as string,
      );
      if (result.success) {
        // Show success message
        toast({
          title: 'Message successfully sent!',
          variant: 'success',
        });

        // Clear form
        updateFormState(initialFormState);
      } else {
        // Handle server-side validation error
        toast({
          title: result.message || 'Failed to send message',
          variant: 'destructive',
        });
      }
    } catch (err) {
      console.error(err instanceof Error ? err.message : 'Failed to send message');
      toast({
        title: 'Failed to send message',
        variant: 'destructive',
      });
    } finally {
      updateFormState({ isLoading: false });
    }
  };

  const disableSendButton = () => {
    return (
      formState.isLoading ||
      !formState.acceptTerms ||
      !validateContactForm(formState.values).isValid
      // '!formState.turnstile.isHuman' ||
    );
  };

  return (
    <div className="bg-white/95 rounded-2xl shadow-2xl p-4 pt-6 md:p-8 lg:p-10">
      <div className="space-y-10">
        <div className="">
          <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight md:leading-relaxed">
            Send Us a Message
          </h3>
          <p className="text-gray-600 mb-8 leading-tight md:leading-relaxed">
            Fill out the form below and we will get back to you as soon as possible.
          </p>
        </div>

        <form className="relative space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 md:h-20 gap-6">
            <div className="">
              <CustomInput
                label="First Name"
                value={formState.values.first_name}
                onChange={handleChange('first_name')}
                onBlur={() => handleBlur('first_name')}
                error={formState.touched.first_name ? formState.errors.first_name : undefined}
                placeholder="John"
                maxLength={FORM_LIMITS.INPUT.MAX}
                required
              />
            </div>

            <div className="">
              <CustomInput
                label="Last Name"
                value={formState.values.last_name}
                onChange={handleChange('last_name')}
                onBlur={() => handleBlur('last_name')}
                error={formState.touched.last_name ? formState.errors.last_name : undefined}
                placeholder="Doe"
                maxLength={FORM_LIMITS.INPUT.MAX}
                required
              />
            </div>
          </div>

          <div className="md:h-20">
            <CustomInput
              label="Email"
              type="email"
              value={formState.values.email}
              onChange={handleChange('email')}
              onBlur={() => handleBlur('email')}
              placeholder="your.email@domain.com"
              maxLength={FORM_LIMITS.INPUT.MAX}
              error={formState.touched.email ? formState.errors.email : undefined}
              required
            />
          </div>

          <div className="md:h-20">
            <CustomSelect
              label="Service interested in"
              value={formState.values.subject}
              options={services}
              onValueChange={handleSelectChange('subject')}
              onBlur={() => handleBlur('subject')}
              error={formState.touched.subject ? formState.errors.subject : undefined}
              required
            />
          </div>

          <CustomTextarea
            label="Message"
            value={formState.values.message}
            onChange={handleChange('message')}
            onBlur={() => handleBlur('message')}
            placeholder="Tell us about your project, timeline, and budget..."
            maxLength={FORM_LIMITS.TEXTAREA.MAX}
            error={formState.touched.message ? formState.errors.message : undefined}
            className="resize-none"
            helperText={`Minimum ${FORM_LIMITS.TEXTAREA.MIN} characters. Please be specific about your inquiry.`}
            rows={6}
            required
          />

          <div className="flex items-start py-2">
            <input
              type="checkbox"
              id="privacy"
              checked={formState.acceptTerms}
              onChange={handlePrivacyChange}
              className="mt-1 w-4 h-4 mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="privacy" className="text-sm text-gray-600">
              I accept the{' '}
              <Link href="/privacy" className="text-blue-600 hover:underline font-medium">
                Privacy Policy
              </Link>{' '}
              and the{' '}
              <Link href="/terms" className="text-blue-600 hover:underline font-medium">
                Terms of Service
              </Link>
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 py-4 md:pb-0">
            <Button
              type="submit"
              disabled={disableSendButton()}
              onClick={handleSubmit}
              className="p-4 bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold w-full text-lg"
              >
              {formState.isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

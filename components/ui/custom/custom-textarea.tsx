import { useId } from 'react';

import { cn } from '@/lib/utils/class-names';

import { Textarea } from '@/components/ui';

interface CustomTextareaProps extends React.ComponentProps<typeof Textarea> {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  fullWidth?: boolean;
  containerClassName?: string;
}

export const CustomTextarea = ({
  label,
  error,
  helperText,
  required = false,
  fullWidth = true,
  containerClassName,
  id,
  className,
  ...textareaProps
}: CustomTextareaProps) => {
  const generatedId = useId();
  const textareaId = id || generatedId;
  const hasError = !!error;

  return (
    <div className={cn(
      'space-y-1',
      fullWidth && 'w-full',
      containerClassName,
    )}>
      {/* Label */}
      {label && (
        <label
          htmlFor={textareaId}
          className={`block text-sm font-medium ${hasError ? 'text-red-600' : 'text-gray-900 dark:text-gray-100'}`}
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1">*</span>
          )}
        </label>
      )}

      {/* The Textarea component */}
      <Textarea
        id={textareaId}
        className={cn('border-muted-foreground/20 placeholder:text-muted-foreground/70',
          hasError && 'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20',
          className,
        )}
        aria-invalid={hasError}
        aria-describedby={
          hasError
            ? `${textareaId}-error`
            : helperText
              ? `${textareaId}-helper`
              : undefined
        }
        {...textareaProps}
      />

      {/* Error message */}
      {hasError && (
        <p
          id={`${textareaId}-error`}
          className="text-xs text-red-600 dark:text-red-400 ml-1"
          role="alert"
        >
          {error}
        </p>
      )}

      {/* Helper text (only shows if no error) */}
      {helperText && !hasError && (
        <p
          id={`${textareaId}-helper`}
          className="text-xs text-gray-500 dark:text-gray-400 ml-1"
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

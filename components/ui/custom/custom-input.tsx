import { useId } from 'react';

import { cn } from '@/lib/utils/class-names';

import { Input } from '@/components/ui';

interface CustomInputProps extends React.ComponentProps<typeof Input> {
  type?: string;
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  fullWidth?: boolean;
  containerClassName?: string;
}

export const CustomInput = ({
  type = 'text',
  label,
  error,
  helperText,
  required = false,
  fullWidth = true,
  containerClassName,
  id,
  className,
  ...inputProps
}: CustomInputProps) => {
  const generatedId = useId();
  const inputId = id || generatedId;
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
          htmlFor={inputId}
          className={`block text-sm font-medium ${hasError ? 'text-red-600' : 'text-gray-900 dark:text-gray-100'}`}
        >
          {label}
          {required && (
            <span className="text-red-500 ml-1">*</span>
          )}
        </label>
      )}

      {/* The Input component */}
      <Input
        id={inputId}
        type={type}
        className={cn('border-muted-foreground/20 placeholder:text-muted-foreground/70',
          hasError && 'border-red-500 focus-visible:border-red-500',
          className,
        )}
        aria-invalid={hasError}
        aria-describedby={
          hasError
            ? `${inputId}-error`
            : helperText
              ? `${inputId}-helper`
              : undefined
        }
        {...inputProps}
      />

      {/* Error message */}
      {hasError && (
        <p
          id={`${inputId}-error`}
          className="text-xs text-red-600 dark:text-red-400 ml-1"
          role="alert"
        >
          {error}
        </p>
      )}

      {/* Helper text (only shows if no error) */}
      {helperText && !hasError && (
        <p
          id={`${inputId}-helper`}
          className="text-xs text-muted-foreground dark:text-gray-400 ml-1"
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

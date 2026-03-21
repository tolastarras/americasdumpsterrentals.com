import { useId, useRef } from 'react';

import { cn } from '@/lib/utils/class-names';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type SelectOption = { value: string; label: string };

interface CustomSelectProps extends React.ComponentProps<typeof Select> {
  id?: string;
  label?: string;
  error?: string;
  options: SelectOption[];
  value?: string;
  required?: boolean;
  fullWidth?: boolean;
  containerClassName?: string;
  className?: string;
  onValueChange: (value: string) => void;
  onBlur?: () => void;
};

export const CustomSelect = ({
  id,
  label,
  error,
  options = [],
  value,
  required = false,
  fullWidth = true,
  containerClassName,
  className,
  onValueChange,
  onBlur,
}: CustomSelectProps) => {
  const generatedId = useId();
  const inputId = id || generatedId;
  const hasError = !!error;
  const hasBeenOpened = useRef(false);

  return (
    <div className={cn(
      'space-y-1',
      fullWidth && 'w-full',
      containerClassName,
    )}>
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

      <Select
        name={inputId}
        value={value}
        onValueChange={onValueChange}
        onOpenChange={(open) => {
          if (open) {
            hasBeenOpened.current = true;
          } else {
            if (hasBeenOpened.current) {
              onBlur?.();
              hasBeenOpened.current = false;
            }
          }
        }}
      >
        <SelectTrigger
          id={inputId}
          aria-label={label || 'Select an option'}
          className={cn('w-full py-7 md:py-6 border-muted-foreground/20 placeholder:text-muted-foreground/70',
          hasError && 'border-red-500 focus-visible:border-red-500',
          className,
        )}
          // className={`w-full px-4 py-6 border rounded-md focus:ring-2 transition-all outline-none text-sm md:text-md ${hasError ? 'border-red-500 focus-visible:border-red-500' : 'border-gray-300 focus:ring-blue-500/20 focus:border-blue-500'}`}
          // hasError && 'border-red-500 focus-visible:border-red-500',
        >
          <SelectValue placeholder="Select a service" />{' '}
        </SelectTrigger>
        <SelectContent>
          {options.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

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
    </div>
  );
};

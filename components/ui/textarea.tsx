import * as React from 'react';

import { cn } from '@/lib/utils/class-names';

interface TextareaProps extends React.ComponentProps<'textarea'> {
  minLength?: number
  maxLength?: number
  showCounter?: boolean
}

function Textarea({
  className,
  maxLength = 500,
  showCounter = true,
  value,
  onChange,
  ...props
}: TextareaProps) {
  const [charCount, setCharCount] = React.useState(
    typeof value === 'string' ? value.length : 0,
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    // Enforce max length if specified
    if (maxLength && newValue.length > maxLength) {
      return;
    }

    setCharCount(newValue.length);

    // Call original onChange if provided
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="relative">
      <textarea
        data-slot="textarea"
        maxLength={maxLength}
        value={value}
        onChange={handleChange}
        className={cn(
          'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none',
          className,
        )}
        {...props}
      />

      {/* Character counter */}
      {showCounter && maxLength && (
        <div className="absolute bottom-2 right-2 flex items-center gap-1 text-xs">
          <span className={cn(
            'px-2 py-0.5 rounded bg-background/80 backdrop-blur-sm',
            charCount > maxLength * 0.95
              ? 'text-red-600'
              : charCount > maxLength * 0.75
                ? 'text-amber-600'
                : 'text-muted-foreground',
          )}>
            {charCount}/{maxLength}
          </span>
        </div>
      )}
    </div>
  );
}

export default Textarea;

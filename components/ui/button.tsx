import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils/class-names';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-blue-600 text-white font-semibold hover:bg-blue-700',
        outline: 'border border-gray-300 bg-white text-muted-foreground hover:bg-gray-50',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700',
        ghost: 'text-gray-700 hover:bg-gray-100',
        link: 'text-blue-600 underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-4 py-2 text-base',
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-base',
        icon: 'p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    loading = false,
    asChild = false,
    children,
    disabled,
    ...props
  }, ref) => {

    // Separate props for Slot vs button
    const commonProps = {
      ref,
      className: cn(buttonVariants({ variant, size, className })),
      ...props,
    };

    if (asChild) {
      const element = React.isValidElement(children)
        ? children
        : <span>{children}</span>;

      // For Slot, we can't pass disabled, so handle it via className
      const slotProps = {
        ...commonProps,
        className: cn(
          commonProps.className,
          (disabled || loading) && 'opacity-50 pointer-events-none',
        ),
      };

      return <Slot {...slotProps}>{element}</Slot>;
    }

    // Regular button - can use disabled prop
    return (
      <button
        {...commonProps}
        disabled={disabled || loading}
      >
        {loading && (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </button>
    );
  },
);

export { buttonVariants, Button as default };

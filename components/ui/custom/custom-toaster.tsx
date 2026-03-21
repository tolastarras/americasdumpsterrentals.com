'use client';

import { X } from 'lucide-react';

import { cn } from '@/lib/utils/class-names';

import { useToast } from '@/hooks/use-toast';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';

export function CustomToaster() {
  const { toasts } = useToast();

  const getVariantStyles = (variant?: string | null) => {
    switch (variant) {
      case 'success':
        return {
          toast: 'border-green-500 bg-green-50 text-green-600',
          icon: 'text-green-500',
        };
      case 'warning':
        return {
          toast: 'border-amber-500 bg-amber-50 text-amber-600',
          icon: 'text-amber-500',
        };
      case 'info':
        return {
          toast: 'border-blue-300 bg-blue-50 text-blue-500',
          icon: 'text-blue-500',
        };
      case 'error':
      case 'destructive':
        return {
          toast: 'border-red-500 bg-red-50 text-red-600',
          icon: 'text-red-500',
        };
      default:
        return {
          toast: 'border-gray-200 bg-white text-gray-700',
          icon: 'text-gray-400',
        };
    }
  };

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, className, ...props }) {
        const styles = getVariantStyles(props.variant);
        return (
          <Toast key={id} className={cn('border', styles.toast, className)} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className={cn('cursor-pointer', styles.icon)}>
              <X className='h-4 w-4' />
            </ToastClose>
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}

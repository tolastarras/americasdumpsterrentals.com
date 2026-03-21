'use client';

import { useEffect } from 'react';

import { X } from 'lucide-react';

import { CustomAlertProps } from '@/app/types';

import { cn } from '@/lib/utils/class-names';

import { Button } from '@/components/ui';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { ALERT_VARIANT_COLORS, ALERT_VARIANTS_MAP } from '@/constants/colors';

export const CustomAlert = ({
  title,
  description,
  variant = 'destructive',
  autoClose = 5000,
  onClose,
  className,
  position = 'top',
}: CustomAlertProps) => {

  const alertVariantClasses = ALERT_VARIANT_COLORS[variant];

  useEffect(() => {
    if (autoClose > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoClose);

      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  const handleClose = () => {
    onClose?.();
  };

  const alertContent = (
    <Alert
      variant={variant}
      className={cn(`relative pr-10 transition-all duration-300 border-2 ${alertVariantClasses} ${className}`)}
    >
      <Button
        variant="ghost"
        size="icon"
        className={`absolute right-2 top-2 h-6 w-6 p-0 ${ALERT_VARIANTS_MAP[variant].textDark} hover:bg-transparent hover:scale-130 transition duration-300 ease-in-out`}
        onClick={handleClose}
      >
        <X className={'h-4 w-4'} />
        <span className="sr-only">Close</span>
      </Button>
      <AlertTitle className="font-semibold text-xl">{title}</AlertTitle>
      <AlertDescription className={`font-medium text-lg ${ALERT_VARIANTS_MAP[variant].textDark}`}>
        {description}
      </AlertDescription>

      {/* Auto-close progress bar */}
      {autoClose > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-lg">
          <div
            className={cn(`h-full transition-all duration-1000 ease-linear ${ALERT_VARIANTS_MAP[variant].bgDark}`)}
            style={{
              width: '100%',
              animation: `shrink ${autoClose}ms linear forwards`,
            }}
          />
          <style jsx>{`
            @keyframes shrink {
              from { transform: translateX(0%); }
              to { transform: translateX(-100%); }
            }
          `}</style>
        </div>
      )}
    </Alert>
  );

  if (position === 'top') {
    return (
      <div className="fixed top-10 left-4 right-4 md:left-1/2 md:right-auto z-50 md:w-full md:max-w-2xl md:-translate-x-1/2 animate-in fade-in slide-in-from-top-5 duration-300">
        {alertContent}
      </div>
    );
  }

  return alertContent;
};

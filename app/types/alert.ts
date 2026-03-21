import type { ALERT_VALUES } from '@/constants/alerts';

export type AlertVariant = typeof ALERT_VALUES[number];

export interface AlertState {
  variant: AlertVariant;
  title: string;
  description: string;
}

export interface CustomAlertProps extends AlertState {
  autoClose?: number;
  onClose?: () => void;
  className?: string;
  position?: 'top' | 'inline';
}

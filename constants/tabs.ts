import { Ban, BookOpen, CreditCard, FileText, Gift, Scale, Settings, Shield, User } from 'lucide-react';

const TAB_STYLES = {
  primary: 'data-[state=active]:bg-primary hover:bg-primary/10',
  success: 'data-[state=active]:bg-green-600 hover:bg-green-500/10',
  amber: 'data-[state=active]:bg-amber-600 hover:bg-amber-500/10',
  purple: 'data-[state=active]:bg-purple-600 hover:bg-purple-500/10',
  blue: 'data-[state=active]:bg-blue-600 hover:bg-blue-500/10',
  danger: 'data-[state=active]:bg-red-600 hover:bg-red-500/10',
} as const;

export const TERMS_TABS = [
  {
    value: 'overview',
    label: 'Overview',
    icon: Scale,
    colorClass: TAB_STYLES.primary,
  },
  {
    value: 'usage-rights',
    label: 'Usage Rights',
    icon: BookOpen,
    colorClass: TAB_STYLES.success,
  },
  {
    value: 'liability',
    label: 'Liability',
    icon: Shield,
    colorClass: TAB_STYLES.amber,
  },
  {
    value: 'general-terms',
    label: 'General Terms',
    icon: FileText,
    colorClass: TAB_STYLES.purple,
  },
] as const;

export const REFUND_TABS = [
  {
    value: 'nature',
    label: 'Nature',
    icon: Gift,
    colorClass: TAB_STYLES.success,
  },
  {
    value: 'no-refunds',
    label: 'No Refunds',
    icon: Ban,
    colorClass: TAB_STYLES.danger,
  },
  {
    value: 'value',
    label: 'Value',
    icon: Scale,
    colorClass: TAB_STYLES.amber,
  },
  {
    value: 'agreement',
    label: 'Agreement',
    icon: FileText,
    colorClass: TAB_STYLES.purple,
  },
] as const;

export const PROFILE_TABS = [
  {
    value: 'personal',
    label: 'Personal',
    icon: User,
    colorClass: TAB_STYLES.primary,
  },
  {
    value: 'security',
    label: 'Security',
    icon: Shield,
    colorClass: TAB_STYLES.success,
  },
  {
    value: 'billing',
    label: 'Billing',
    icon: CreditCard,
    colorClass: TAB_STYLES.amber,
  },
  {
    value: 'settings',
    label: 'Settings',
    icon: Settings,
    colorClass: TAB_STYLES.purple,
  },
] as const;

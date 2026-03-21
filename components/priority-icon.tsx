'use client';

import { Battery, Flame, Zap } from 'lucide-react';

// import type { ContactMessage } from '@/app/types';
import { PRIORITY_COLORS } from '@/constants/colors';

// Include 'all' in the type
// type Priority = ContactMessage['priority'] | 'all'

type Priority = 'high' | 'medium' | 'low';

interface PriorityIconProps {
  priority?: Priority | 'all' | null;
  className?: string;
}

export function PriorityIcon({ priority, className = '' }: PriorityIconProps) {
  if (!priority || priority === 'all') return null;
  // TypeScript now knows priority is 'high' | 'medium' | 'low'
  const color = PRIORITY_COLORS[priority];
  const IconComponent = {
    high: Flame,
    medium: Zap,
    low: Battery,
  }[priority];

  return <IconComponent className={`h-4 w-4 ${color.text} ${className}`} />;
}

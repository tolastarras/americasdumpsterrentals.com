import type { PriorityValue } from '@/app/types';

type PriorityFilter = Exclude<PriorityValue, 'all'>

export const PRIORITY_ORDER: Record<PriorityFilter, number> = {
  high: 3,
  medium: 2,
  low: 1,
} as const;

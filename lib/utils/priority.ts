import type { ContactMessage } from '@/app/types';

import { PRIORITY_COLORS } from '@/constants/colors';

export type Priority = ContactMessage['priority']

export const getPriorityColor = (priority: Priority): string => {
  const priorityKey = priority in PRIORITY_COLORS
    ? priority as keyof typeof PRIORITY_COLORS
    : 'default';

  const { bg, text, border, hover } = PRIORITY_COLORS[priorityKey];
  return `${bg} ${text} border ${border} ${hover}`;
};

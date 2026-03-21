import { MESSAGE_STATUS_OPTIONS, PRIORITY_VALUES } from '@/constants/filters';

export type MessageStatus = typeof MESSAGE_STATUS_OPTIONS[number]
export type PriorityValue = typeof PRIORITY_VALUES[number]

export type StatusFilter = MessageStatus | 'all'
export type PriorityFilter = PriorityValue | 'all'

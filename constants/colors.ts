import { AlertVariant } from '@/app/types';

export type ColorPalette = {
  bg: string;
  bgDark: string;
  text: string;
  textDark: string;
  border: string;
  borderDark: string;
  hover: string;
  hoverDark: string;
  // icon: string;
  // iconLight: string;
};

const COLORS: Record<string, ColorPalette> = {
  green: {
    bg: 'bg-green-100 dark:bg-green-950/30',
    bgDark: 'bg-green-500 dark:bg-green-600',
    text: 'text-green-200 dark:text-green-800',
    textDark: 'text-green-600 dark:text-green-400',
    border: 'border-green-200 dark:border-green-800',
    borderDark: 'border-green-600 dark:border-green-400',
    hover: 'hover:bg-green-100 dark:hover:bg-green-900/50',
    hoverDark: 'hover:bg-green-500 dark:hover:bg-green-600',
    // icon: 'text-green-600 dark:text-green-400',
    // iconLight: 'text-green-400',
  },
  red: {
    bg: 'bg-red-100 dark:bg-red-950/30',
    bgDark: 'bg-red-500 dark:bg-red-600',
    text: 'text-red-200 dark:text-red-800',
    textDark: 'text-red-600 dark:text-red-400',
    border: 'border-red-200 dark:border-red-800',
    borderDark: 'border-red-600 dark:border-red-400',
    hover: 'hover:bg-red-100 dark:hover:bg-red-900/50',
    hoverDark: 'hover:bg-red-500 dark:hover:bg-red-600',
    // icon: 'text-red-600 dark:text-red-400',
    // iconLight: 'text-red-400',
  },
  amber: {
    bg: 'bg-amber-100 dark:bg-amber-950/30',
    bgDark: 'bg-amber-500 dark:bg-amber-600',
    text: 'text-amber-200 dark:text-amber-800',
    textDark: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-200 dark:border-amber-800',
    borderDark: 'border-amber-600 dark:border-amber-400',
    hover: 'hover:bg-amber-100 dark:hover:bg-amber-900/50',
    hoverDark: 'hover:bg-amber-500 dark:hover:bg-amber-600',
    // icon: 'text-amber-600 dark:text-amber-400',
    // iconLight: 'text-amber-400',
  },
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-950/30',
    bgDark: 'bg-blue-500 dark:bg-blue-600',
    text: 'text-blue-200 dark:text-blue-800',
    textDark: 'text-blue-600 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800',
    borderDark: 'border-blue-600 dark:border-blue-400',
    hover: 'hover:bg-blue-100 dark:hover:bg-blue-900/50',
    hoverDark: 'hover:bg-blue-500 dark:hover:bg-blue-600',
    // icon: 'text-blue-600 dark:text-blue-400',
    // iconLight: 'text-blue-400',
  },
  gray: {
    bg: 'bg-gray-100 dark:bg-gray-950/30',
    bgDark: 'bg-gray-500 dark:bg-gray-600',
    text: 'text-gray-200 dark:text-gray-800',
    textDark: 'text-gray-600 dark:text-gray-400',
    border: 'border-gray-200 dark:border-gray-800',
    borderDark: 'border-gray-600 dark:border-gray-400',
    hover: 'hover:bg-gray-100 dark:hover:bg-gray-900/50',
    hoverDark: 'hover:bg-gray-500 dark:hover:bg-gray-600',
    // icon: 'text-gray-600 dark:text-gray-400',
    // iconLight: 'text-gray-400',
  },
};

const { green, red, amber, blue, gray } = COLORS;

export const ALERT_VARIANTS_MAP: Record<AlertVariant, ColorPalette> = {
  success: green,
  destructive: red,
  warning: amber,
  info: blue,
};

export const ALERT_VARIANT_COLORS = {
  success: `${ green.bg } ${ green.textDark } ${ green.borderDark }`,
  destructive: `${ red.bg } ${ red.textDark } ${ red.borderDark }`,
  warning: `${ amber.bg } ${ amber.textDark } ${ amber.borderDark }`,
  info: `${ blue.bg } ${ blue.textDark } ${ blue.borderDark }`,
};

export const PRIORITY_VALUES = ['high', 'medium', 'low', 'default'] as const;

export const PRIORITY_COLORS_MAP = {
  high: red,
  medium: amber,
  low: green,
  default: gray,
};

export const PRIORITY_COLORS = {
  high: {
    bg: red.bg,
    text: red.text,
    border: 'border-red-200',
    hover: 'hover:bg-red-100',
  },
  medium: {
    bg: 'bg-amber-100',
    text: 'text-amber-800',
    border: 'border-amber-200',
    hover: 'hover:bg-amber-100',
  },
  low: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    border: 'border-green-200',
    hover: 'hover:bg-green-100',
  },
  default: {
    bg: 'bg-gray-100',
    text: 'text-gray-800',
    border: 'border-gray-200',
    hover: 'hover:bg-gray-100',
  },
} as const;

export const STATUS_COLORS = {
  new: {
    bg: 'bg-blue-100',
    text: 'text-blue-800',
    border: 'border-blue-200',
    dot: 'bg-blue-200 border border-blue-400',
  },
  read: {
    bg: 'bg-purple-100',
    text: 'text-purple-800',
    border: 'border-purple-200',
    dot: 'bg-purple-200 border border-purple-400',
  },
  replied: {
    bg: 'bg-green-100',
    text: 'text-green-800',
    border: 'border-green-200',
    dot: 'bg-green-200 border border-green-400',
  },
  archived: {
    bg: 'bg-gray-100',
    text: 'text-gray-800',
    border: 'border-gray-200',
    dot: 'bg-gray-200 border border-gray-400',
  },
};

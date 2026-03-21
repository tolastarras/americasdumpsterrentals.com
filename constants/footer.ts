import {
  Github,
  Instagram,
  // Linkedin,
  // Twitter,
  Youtube,
} from 'lucide-react';

export const USER_NAV = {
  title: 'Navigation',
  items: [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact Us' },
  ],
};

export const ACCOUNT_NAV = {
  title: 'Account',
  items: [
    { href: '/auth/login', label: 'Sign In' },
    { href: '/auth/sign-up', label: 'Create Account' },
  ],
};

export const AUTH_USER_NAV = {
  title: 'Account',
  items: [
    { href: '/profile', label: 'Profile' },
    { href: '/profile?tab=settings', label: 'Settings' },
    { href: '/dashboard', label: 'Dashboard' },
  ],
};

export const ADMIN_NAV = {
  title: 'Admin',
  items: [
    { href: '/admin', label: 'Dashboard' },
    { href: '/admin/projects', label: 'Projects' },
  ],
};

export const RESOURCES_NAV = {
  title: 'Resources',
    items: [
    { href: '/docs', label: 'Documentation' },
    { href: '/blog', label: 'Blog' },
    { href: '/tutorials', label: 'Tutorials' },
    { href: '/community', label: 'Community' },
    { href: '/support', label: 'Support' },
  ],
};

export const SITE_MAP = {
  title: 'Site Map',
  items: [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact Us' },
    // { href: '/auth/login', label: 'Sign In' },
    // { href: '/auth/sign-up', label: 'Create Account' },
    { href: '/profile', label: 'Profile' },
    { href: '/docs', label: 'Documentation' },
    // { href: '/blog', label: 'Blog' },
    // { href: '/tutorials', label: 'Tutorials' },
  ],
};

export const SOCIAL_MEDIA = [
  { icon: Github, href: 'https://github.com/americasdumpsterrentals', label: 'GitHub', color: 'text-white' },
  // { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'text-sky-400' },
  { icon: Instagram, href: 'https://instagram.com/americasdumpsterrentals', label: 'Instagram', color: 'text-pink-500' },
  // { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'text-blue-500' },
  { icon: Youtube, href: 'https://youtube.com/@americasdumpsterrentals', label: 'YouTube', color: 'text-red-500' },
];

export const LEGAL_PAGES = [
  { href: '/legal/privacy-policy', label: 'Privacy Policy' },
  { href: '/legal/terms-of-service', label: 'Terms of Service' },
];

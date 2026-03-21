export const NAVBAR_MENU_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'process', label: 'Process' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Let\'s Talk' },
] as const;

export const FOOTER_MENU_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
  { id: 'privacy', label: 'Privacy Policy', link: '/privacy' },
  { id: 'terms', label: 'Terms of Service', link: '/terms' },
] as const;

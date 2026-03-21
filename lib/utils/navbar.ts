export const getNavbarHeight = (): number => {
  if (typeof window === 'undefined') {
    return 0;
  }
  const height = getComputedStyle(document.documentElement)
    .getPropertyValue('--navbar-height')
    .trim();
  return height ? parseInt(height, 10) : 0;
};

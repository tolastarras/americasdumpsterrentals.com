import { useCallback } from 'react';

export const useScrollToSection = () => {
  const scrollToSection = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();

      const section = document.getElementById(sectionId);
      if (section) {
        // Read the current navbar height from the CSS variable
        const navbarHeight =
          parseInt(
            getComputedStyle(document.documentElement).getPropertyValue('--navbar-height'),
          ) || 0;

        // Use getBoundingClientRect for more reliable positioning
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth',
        });
      }
    },
    [],
  );

  return scrollToSection;
};

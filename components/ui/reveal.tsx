'use client';

import { useEffect, useRef, useState } from 'react';

export const Reveal = ({
  children,
  delay = 0,
  className = '',
  fromRight = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  fromRight?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translate(0,0)'
          : fromRight
            ? 'translateX(36px)'
            : 'translateY(24px)',
        transition: `opacity .75s cubic-bezier(.16,1,.3,1) ${delay}ms, transform .75s cubic-bezier(.16,1,.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

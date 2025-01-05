import React, { useEffect, useRef } from 'react';

interface ParallaxScrollProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxScroll({ children, speed = 0.5, className = '' }: ParallaxScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let requestId: number;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const deltaY = (scrollY - lastScrollY) * speed;
      
      requestId = requestAnimationFrame(() => {
        element.style.transform = `translate3d(0, ${-deltaY}px, 0)`;
      });

      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(requestId);
    };
  }, [speed]);

  return (
    <div ref={elementRef} className={`transform will-change-transform ${className}`}>
      {children}
    </div>
  );
}
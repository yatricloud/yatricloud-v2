import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface SlideInProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  duration?: number;
  delay?: number;
  className?: string;
}

export function SlideIn({
  children,
  direction = 'left',
  duration = 0.8,
  delay = 0,
  className = ''
}: SlideInProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'none' 
          : `translateX(${direction === 'left' ? '-100%' : '100%'})`,
        transition: `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}
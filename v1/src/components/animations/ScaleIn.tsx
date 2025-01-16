import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ScaleInProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  className?: string;
}

export function ScaleIn({
  children,
  duration = 0.8,
  delay = 0,
  className = ''
}: ScaleInProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : 'scale(0.8)',
        transition: `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}
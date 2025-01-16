import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  delay?: number;
  className?: string;
}

export function FadeIn({
  children,
  direction = 'up',
  duration = 0.8,
  delay = 0,
  className = ''
}: FadeInProps) {
  const { ref, isVisible } = useScrollAnimation();

  const getTransform = () => {
    const distance = '2rem';
    switch (direction) {
      case 'up': return `translateY(${distance})`;
      case 'down': return `translateY(-${distance})`;
      case 'left': return `translateX(${distance})`;
      case 'right': return `translateX(-${distance})`;
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getTransform(),
        transition: `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}
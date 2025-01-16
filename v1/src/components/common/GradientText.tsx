import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-gradient ${className}`}>
      {children}
    </span>
  );
}
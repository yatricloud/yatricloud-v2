import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`
      relative overflow-hidden rounded-xl
      card-gradient border border-primary/10
      ${hover ? 'transition-all duration-300 hover:border-primary/30 hover-glow' : ''}
      ${className}
    `}>
      <div className="absolute inset-0 bg-gradient-mesh opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">{children}</div>
    </div>
  );
}
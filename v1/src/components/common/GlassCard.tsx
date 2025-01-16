import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <div 
      className={`
        relative overflow-hidden rounded-xl
        bg-white/5 backdrop-blur-md
        border border-white/10
        ${hover ? 'transition-all duration-300 hover:border-white/20 hover:bg-white/10' : ''}
        ${className}
      `}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative">{children}</div>
      
      {/* Animated border */}
      {hover && (
        <div className="absolute inset-0 border border-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur" />
          </div>
        </div>
      )}
    </div>
  );
}
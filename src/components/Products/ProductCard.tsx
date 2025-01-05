import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  gradient: string;
}

export function ProductCard({ title, description, url, icon, gradient }: ProductCardProps) {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div 
      onClick={handleClick}
      className={`group relative p-6 rounded-xl backdrop-blur-sm border border-white/10 cursor-pointer 
        transition-all duration-500 hover:scale-[1.02] overflow-hidden ${gradient}`}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="text-white/80 w-10 h-10">
            {icon}
          </div>
          <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-white/80 transform transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-glow">
          {title}
        </h3>
        
        <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Animated border gradient */}
      <div className="absolute inset-0 border border-white/20 rounded-xl group-hover:border-transparent transition-colors duration-300">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur" />
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface PathCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  icon: LucideIcon;
  gradient: string;
  onClick: () => void;
}

export function PathCard({
  title,
  description,
  duration,
  level,
  icon: Icon,
  gradient,
  onClick
}: PathCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`group relative p-8 rounded-xl backdrop-blur-sm border border-white/10 
        transition-all duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 
        group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 rounded-lg bg-white/5 text-white">
            <Icon className="w-6 h-6" />
          </div>
          <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white/80 transform 
            transition-all duration-300 group-hover:translate-x-1" />
        </div>
        
        <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-glow">
          {title}
        </h3>
        
        <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
          {description}
        </p>
        
        <div className="flex items-center gap-4">
          <span className="px-3 py-1 rounded-full text-sm bg-white/5 text-gray-400 
            border border-white/10">
            {duration}
          </span>
          <span className="px-3 py-1 rounded-full text-sm bg-white/5 text-gray-400 
            border border-white/10">
            {level}
          </span>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
}

export function FeatureCard({ icon: Icon, title, description, onClick }: FeatureCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`group relative p-6 rounded-lg bg-[rgba(22,27,34,0.8)] backdrop-blur-sm border border-[#30363d] 
        hover:border-purple-500/50 transition-all duration-300 hover:glow 
        ${onClick ? 'cursor-pointer' : ''}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <Icon className="w-8 h-8 text-purple-400 mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-glow">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
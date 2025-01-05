import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface PathwayCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  certifications: string[];
  gradient: string;
  icon: LucideIcon;
  onClick: () => void;
}

export function PathwayCard({
  title,
  description,
  duration,
  level,
  certifications,
  gradient,
  icon: Icon,
  onClick
}: PathwayCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`group relative p-8 rounded-xl backdrop-blur-sm border border-white/10 
        transition-all duration-500 hover:scale-[1.02] overflow-hidden cursor-pointer`}
    >
      {/* Rest of the component remains the same */}
    </div>
  );
}
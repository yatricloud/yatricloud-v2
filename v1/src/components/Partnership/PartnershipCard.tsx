import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface PartnershipCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export function PartnershipCard({ title, description, icon: Icon, features }: PartnershipCardProps) {
  return (
    <div className="group relative p-8 rounded-xl backdrop-blur-sm border border-white/10 
      transition-all duration-500 hover:scale-[1.02] hover:glow overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-purple-500/10 opacity-0 
        group-hover:opacity-100 transition-all duration-500" />
      
      {/* Content */}
      <div className="relative">
        <div className="flex items-center mb-6">
          <div className="p-3 rounded-lg bg-sky-500/10 text-sky-400 mr-4 
            transition-colors group-hover:bg-sky-500/20">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-semibold text-white group-hover:text-glow">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-400 mb-8 group-hover:text-gray-300 transition-colors">
          {description}
        </p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-400 group-hover:text-gray-300">
              <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-2 
                transition-transform group-hover:scale-125" />
              {feature}
            </li>
          ))}
        </ul>
        
        <button className="inline-flex items-center text-sky-400 hover:text-sky-300 
          transition-colors group/btn">
          Learn more
          <ArrowRight className="w-4 h-4 ml-2 transform transition-transform 
            group-hover/btn:translate-x-1" />
        </button>
      </div>

      {/* Animated border gradient */}
      <div className="absolute inset-0 border border-white/20 rounded-xl 
        group-hover:border-transparent transition-colors duration-300">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
          transition-opacity duration-500 animate-spin-slow">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent 
            via-white/20 to-transparent blur" />
        </div>
      </div>
    </div>
  );
}
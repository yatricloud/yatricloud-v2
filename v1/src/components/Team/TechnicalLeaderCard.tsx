import React from 'react';
import { TechnicalLeader } from './types';

export function TechnicalLeaderCard({ title, logo, description, gradient }: TechnicalLeader) {
  return (
    <div className={`group relative p-8 rounded-xl backdrop-blur-sm border border-white/10 
      transition-all duration-500 hover:scale-[1.02] overflow-hidden ${gradient}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative flex flex-col items-center">
        <div className="h-24 w-24 mb-6">
          <img 
            src={logo} 
            alt={title}
            className="w-full h-full object-contain filter group-hover:brightness-125 transition-all duration-300"
          />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-glow">
          {title}
        </h3>
        
        <p className="text-white/60 text-center group-hover:text-white/80 transition-colors duration-300">
          {description}
        </p>
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
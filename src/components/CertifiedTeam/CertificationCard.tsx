import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Certification } from './types';

export function CertificationCard({ name, logo, description, certCount, gradient }: Certification) {
  return (
    <div className={`group relative p-6 rounded-xl backdrop-blur-sm border border-white/10 
      transition-all duration-500 hover:scale-[1.02] overflow-hidden ${gradient}`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative">
        <div className="h-12 w-12 mb-6">
          <img 
            src={logo} 
            alt={name}
            className="w-full h-full object-contain filter group-hover:brightness-125 transition-all duration-300"
          />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-glow">
          {name}
        </h3>
        
        <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300 mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-white/80">
            {certCount}+ Certifications
          </span>
          <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white/80 
            transform transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
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
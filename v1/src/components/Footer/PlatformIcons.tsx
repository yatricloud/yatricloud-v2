import React from 'react';
import { platformData } from './platformData';

export function PlatformIcons() {
  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold text-white mb-8">
        Available on Your Favorite Platforms
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {platformData.map((platform, index) => (
          <div
            key={index}
            className="group relative w-20 h-20 flex items-center justify-center 
              rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 
              hover:border-sky-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 
              to-purple-500/5 opacity-0 group-hover:opacity-100 
              transition-opacity duration-500 rounded-xl" />
            <img
              src={platform.icon}
              alt={platform.name}
              className="w-12 h-12 object-contain filter grayscale group-hover:grayscale-0 
                transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
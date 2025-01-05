import React from 'react';
import { NavItem } from './navigationData';

interface WhyDropdownProps {
  items: NavItem[];
  onNavigate: (href: string) => void;
}

export function WhyDropdown({ items, onNavigate }: WhyDropdownProps) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
      <div className="w-[800px] p-6 bg-[rgba(22,27,34,0.98)] backdrop-blur-xl rounded-lg border border-white/10 shadow-2xl">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-20 animate-gradient rounded-lg" />
        
        <div className="relative grid grid-cols-2 gap-6">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => onNavigate(item.href)}
              className="group relative p-6 rounded-xl bg-white/5 border border-white/10 
                hover:border-sky-500/50 transition-all duration-300 text-left"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              
              <div className="relative flex items-start">
                {item.icon && (
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center 
                    rounded-lg bg-sky-500/10 text-sky-400 mr-4 
                    group-hover:scale-110 transition-transform">
                    {typeof item.icon === 'function' ? 
                      <item.icon /> : 
                      <item.icon className="w-6 h-6" />
                    }
                  </div>
                )}
                <div>
                  <div className="text-lg font-semibold text-white mb-2 
                    group-hover:text-sky-400 transition-colors">
                    {item.label}
                  </div>
                  {item.description && (
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 
                      transition-colors">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
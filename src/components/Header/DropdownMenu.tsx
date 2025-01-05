import React from 'react';
import { NavItem } from './navigationData';

interface DropdownMenuProps {
  items: NavItem[];
}

export function DropdownMenu({ items }: DropdownMenuProps) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
      <div className="w-[320px] bg-[rgba(22,27,34,0.98)] backdrop-blur-xl rounded-lg border border-white/10 shadow-2xl overflow-hidden">
        <div className="relative">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-mesh opacity-20 animate-gradient" />
          
          <div className="relative divide-y divide-white/5">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-start p-4 hover:bg-white/5 transition-colors group/item"
              >
                {item.icon && (
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-sky-500/10 text-sky-400 mr-4 group-hover/item:scale-110 transition-transform">
                    {typeof item.icon === 'function' ? 
                      <item.icon /> : 
                      <item.icon className="w-5 h-5" />
                    }
                  </div>
                )}
                <div>
                  <div className="text-white font-medium mb-1 group-hover/item:text-sky-400 transition-colors">
                    {item.label}
                  </div>
                  {item.description && (
                    <div className="text-sm text-white/60 group-hover/item:text-white/70 transition-colors">
                      {item.description}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
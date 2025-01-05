import React from 'react';
import { products } from '../Products/productsData';

interface ProductsDropdownProps {
  onNavigate: (href: string) => void;
}

export function ProductsDropdown({ onNavigate }: ProductsDropdownProps) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
      <div className="w-[600px] p-6 bg-[rgba(22,27,34,0.98)] backdrop-blur-xl rounded-lg border border-white/10 shadow-2xl">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-20 animate-gradient rounded-lg" />
        
        <div className="relative grid grid-cols-2 gap-6">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-xl bg-white/5 border border-white/10 
                hover:border-sky-500/50 transition-all duration-300"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center 
                  text-white/80 mr-3">
                  {product.icon}
                </div>
                <div>
                  <div className="text-base font-semibold text-white mb-1 
                    group-hover:text-sky-400 transition-colors">
                    {product.title}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 
                    transition-colors line-clamp-2">
                    {product.description}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
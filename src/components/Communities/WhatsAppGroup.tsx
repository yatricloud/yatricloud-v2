import React from 'react';
import { ExternalLink } from 'lucide-react';

interface WhatsAppGroupProps {
  name: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  image: string;
  gradient: string;
}

export function WhatsAppGroup({ name, description, link, icon, image, gradient }: WhatsAppGroupProps) {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.02]"
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`} />
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl group-hover:border-white/20 transition-all duration-300">
        {/* Group Image */}
        <div className="w-full pb-[75%] relative overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Text Content */}
        <div className="flex-grow p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg mr-3 
                group-hover:bg-white/20 transition-all duration-300 text-white">
                {icon}
              </div>
              <h4 className="text-xl font-semibold text-white group-hover:text-sky-400 
                transition-colors duration-300">
                {name}
              </h4>
            </div>
            <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-white/80 transform 
              transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>

      {/* Animated border gradient */}
      <div className="absolute inset-0 border border-white/20 rounded-xl group-hover:border-transparent transition-colors duration-300">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur" />
        </div>
      </div>
    </a>
  );
}
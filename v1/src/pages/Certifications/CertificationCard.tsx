import React from 'react';
import { Award } from 'lucide-react';

interface CertificationCardProps {
  code: string;
  name: string;
  level: string;
  description?: string;
}

export function CertificationCard({ code, name, level, description }: CertificationCardProps) {
  return (
    <div className="group relative p-6 rounded-xl bg-[rgba(22,27,34,0.8)] backdrop-blur-sm border border-white/10 
      hover:border-sky-500/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sky-400 font-mono">{code}</span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium 
            ${level === 'Fundamentals' ? 'bg-green-500/10 text-green-400' :
              level === 'Associate' ? 'bg-blue-500/10 text-blue-400' :
              level === 'Expert' ? 'bg-purple-500/10 text-purple-400' :
              'bg-orange-500/10 text-orange-400'}`}>
            {level}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sky-400 
          transition-colors">
          {name}
        </h3>
        
        {description && (
          <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
            {description}
          </p>
        )}
        
        <button className="inline-flex items-center text-sky-400 hover:text-sky-300 
          transition-colors group/btn">
          <Award className="w-4 h-4 mr-2" />
          Learn more
        </button>
      </div>
    </div>
  );
}
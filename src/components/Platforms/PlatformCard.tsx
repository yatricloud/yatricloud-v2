import React from 'react';

interface PlatformCardProps {
  title: string;
  description: string;
  actionText: string;
}

export function PlatformCard({ title, description, actionText }: PlatformCardProps) {
  return (
    <div className="group p-6 rounded-lg bg-[rgba(22,27,34,0.8)] backdrop-blur-sm border border-[#30363d] hover:border-purple-500/50 transition-all duration-300 hover:glow">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-glow">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors flex items-center">
        {actionText}
        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}
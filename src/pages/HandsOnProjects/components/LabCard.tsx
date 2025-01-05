import React from 'react';
import { Clock, Sparkles, Lock } from 'lucide-react';
import type { Lab } from '../types';

interface LabCardProps {
  lab: Lab;
  onClick: () => void;
}

export function LabCard({ lab, onClick }: LabCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`group relative p-6 rounded-xl backdrop-blur-sm border border-white/10 
        transition-all duration-500 hover:scale-[1.02] overflow-hidden 
        ${lab.status === 'Available' ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-400">
            <Clock className="w-4 h-4 mr-1" />
            {lab.duration}
          </div>
          {lab.status === 'Coming Soon' && (
            <span className="flex items-center px-2 py-1 rounded-full text-xs font-medium 
              bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
              <Lock className="w-3 h-3 mr-1" />
              Coming Soon
            </span>
          )}
        </div>

        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 
          transition-colors">
          {lab.title}
        </h3>
        
        <p className="text-gray-400 mb-4">{lab.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {lab.skills.map((skill, index) => (
            <span key={index} className="px-2 py-1 rounded-full text-xs font-medium 
              bg-purple-500/10 text-purple-400 border border-purple-500/20">
              {skill}
            </span>
          ))}
        </div>

        {lab.status === 'Available' && (
          <div className="flex items-center text-purple-400 group-hover:text-purple-300 
            transition-colors">
            <Sparkles className="w-4 h-4 mr-2" />
            Start Lab
          </div>
        )}
      </div>
    </div>
  );
}
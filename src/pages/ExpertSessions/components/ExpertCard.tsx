import React from 'react';
import { Award, Trophy, Target } from 'lucide-react';
import type { Expert } from '../types';

export function ExpertCard({ name, title, icon, certifications, achievements, specialization }: Expert) {
  return (
    <div className="group relative p-6 rounded-xl backdrop-blur-sm border border-white/10 
      transition-all duration-500 hover:scale-[1.02] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <span className="text-4xl">{icon}</span>
          <Target className="w-5 h-5 text-purple-400" />
        </div>
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-glow">
            {name}
          </h3>
          <p className="text-gray-400">{title}</p>
          <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm 
            bg-purple-500/10 text-purple-400 border border-purple-500/20">
            {specialization}
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <div className="flex items-center text-white mb-2">
              <Award className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-sm font-medium">Certifications</span>
            </div>
            <div className="space-y-1">
              {certifications.map((cert, index) => (
                <div key={index} className="text-sm text-gray-400 flex items-start">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  {cert}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center text-white mb-2">
              <Trophy className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-sm font-medium">Key Achievements</span>
            </div>
            <div className="space-y-1">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-sm text-gray-400 flex items-start">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
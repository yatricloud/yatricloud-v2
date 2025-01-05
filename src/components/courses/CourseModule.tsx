import React from 'react';
import { Book, Clock } from 'lucide-react';
import type { CourseModule } from '../../types/course';

interface CourseModuleProps {
  module: CourseModule;
}

export function CourseModule({ module }: CourseModuleProps) {
  return (
    <div className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
      hover:border-sky-500/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 
            transition-colors">
            {module.title}
          </h3>
          <div className="flex items-center text-gray-400">
            <Clock className="w-4 h-4 mr-1" />
            {module.duration}
          </div>
        </div>
        
        <div className="space-y-2">
          {module.topics.map((topic, index) => (
            <div key={index} className="flex items-start text-gray-400">
              <Book className="w-4 h-4 mr-2 mt-1 text-sky-400" />
              <span className="group-hover:text-gray-300 transition-colors">
                {topic}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
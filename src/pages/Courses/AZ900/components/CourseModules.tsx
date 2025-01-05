import React from 'react';
import { AZ900Module } from '../../../../types/az900';
import { Clock, BookOpen } from 'lucide-react';

interface CourseModulesProps {
  modules: AZ900Module[];
}

export function CourseModules({ modules }: CourseModulesProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-6">Course Modules</h2>
      <div className="space-y-6">
        {modules.map((module, index) => (
          <div 
            key={index}
            className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
              hover:border-sky-500/50 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5 
              opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
            
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

              <p className="text-gray-400 mb-4">{module.description}</p>

              <div className="space-y-3">
                <div className="flex items-center text-white mb-2">
                  <BookOpen className="w-4 h-4 mr-2 text-sky-400" />
                  <span className="text-sm font-medium">Topics Covered</span>
                </div>
                {module.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="flex items-start text-gray-400">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 mr-3" />
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
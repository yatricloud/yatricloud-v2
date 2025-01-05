import React from 'react';
import { Clock, BookOpen, Target } from 'lucide-react';
import type { AZ900Module } from '../../../types/az900';

interface ModuleCardProps {
  module: AZ900Module;
  index: number;
}

export function ModuleCard({ module, index }: ModuleCardProps) {
  return (
    <div className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
      hover:border-sky-500/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-sky-400">Module {index + 1}</span>
          <div className="flex items-center text-gray-400">
            <Clock className="w-4 h-4 mr-2" />
            {module.duration}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3">{module.title}</h3>
        <p className="text-gray-400 mb-6">{module.description}</p>

        <div className="space-y-6">
          <div>
            <div className="flex items-center text-white mb-3">
              <BookOpen className="w-5 h-5 text-sky-400 mr-2" />
              <h4 className="font-medium">Topics Covered</h4>
            </div>
            <ul className="space-y-2">
              {module.topics.map((topic, i) => (
                <li key={i} className="flex items-start text-gray-400">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center text-white mb-3">
              <Target className="w-5 h-5 text-sky-400 mr-2" />
              <h4 className="font-medium">Learning Objectives</h4>
            </div>
            <ul className="space-y-2">
              {module.learningObjectives.map((objective, i) => (
                <li key={i} className="flex items-start text-gray-400">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  {objective}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
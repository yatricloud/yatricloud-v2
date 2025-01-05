import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const milestones = [
  { title: 'Cloud Basics', completed: true },
  { title: 'Infrastructure as Code', completed: true },
  { title: 'CI/CD Pipelines', completed: false },
  { title: 'Cloud Architecture', completed: false }
];

export function ProgressTracker() {
  const progress = (milestones.filter(m => m.completed).length / milestones.length) * 100;

  return (
    <div className="relative p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
      <h3 className="text-2xl font-semibold text-white mb-8">Your Progress</h3>
      
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-gray-400">Progress</span>
          <span className="text-sky-400">{progress}%</span>
        </div>
        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-sky-400 to-sky-500 rounded-full transition-all duration-1000"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-6">
        {milestones.map((milestone, index) => (
          <div key={index} className="flex items-center">
            {milestone.completed ? (
              <CheckCircle className="w-6 h-6 text-sky-400" />
            ) : (
              <Circle className="w-6 h-6 text-gray-400" />
            )}
            <span className={`ml-3 ${milestone.completed ? 'text-white' : 'text-gray-400'}`}>
              {milestone.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
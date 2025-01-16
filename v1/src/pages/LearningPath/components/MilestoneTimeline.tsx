import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';

const milestones = [
  {
    title: 'Cloud Fundamentals',
    description: 'Learn core concepts and services',
    date: 'Week 1-4',
    completed: true
  },
  {
    title: 'Infrastructure as Code',
    description: 'Master Terraform and ARM templates',
    date: 'Week 5-8',
    completed: true
  },
  {
    title: 'CI/CD Implementation',
    description: 'Build automated pipelines',
    date: 'Week 9-12',
    completed: false
  },
  {
    title: 'Cloud Architecture',
    description: 'Design scalable solutions',
    date: 'Week 13-16',
    completed: false
  }
];

export function MilestoneTimeline() {
  return (
    <div className="relative">
      <h3 className="text-2xl font-semibold text-white mb-12">Learning Timeline</h3>
      
      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative flex items-start">
            <div className="flex items-center justify-center">
              {milestone.completed ? (
                <CheckCircle className="w-8 h-8 text-sky-400" />
              ) : (
                <Circle className="w-8 h-8 text-gray-400" />
              )}
            </div>
            
            <div className="ml-6">
              <div className={`text-lg font-medium ${milestone.completed ? 'text-white' : 'text-gray-400'}`}>
                {milestone.title}
              </div>
              <div className="text-gray-400 mt-1">{milestone.description}</div>
              <div className="text-sm text-sky-400 mt-2">{milestone.date}</div>
            </div>

            {index < milestones.length - 1 && (
              <div className="absolute top-8 left-4 w-px h-16 bg-gradient-to-b from-sky-400/50 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { Target } from 'lucide-react';

interface LearningObjectivesProps {
  objectives: string[];
}

export function LearningObjectives({ objectives }: LearningObjectivesProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Target className="w-6 h-6 text-sky-400 mr-3" />
        Learning Objectives
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {objectives.map((objective, index) => (
          <div key={index} className="flex items-start">
            <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3" />
            <p className="text-gray-400">{objective}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { Clock, Target, Award } from 'lucide-react';

interface ExamDetailsProps {
  examDetails: {
    questionCount: number;
    passingScore: number;
    duration: string;
  };
}

export function ExamDetails({ examDetails }: ExamDetailsProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white mb-6">Exam Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { 
            icon: Target,
            label: 'Questions',
            value: `${examDetails.questionCount} questions`
          },
          { 
            icon: Award,
            label: 'Passing Score',
            value: `${examDetails.passingScore}/1000`
          },
          { 
            icon: Clock,
            label: 'Duration',
            value: examDetails.duration
          }
        ].map((item, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <item.icon className="w-6 h-6 text-sky-400 mb-2" />
            <div className="text-sm text-gray-400">{item.label}</div>
            <div className="text-lg font-medium text-white">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
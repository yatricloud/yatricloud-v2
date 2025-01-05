import React from 'react';
import { Award, Clock, BookOpen, Target } from 'lucide-react';
import type { ExamPrep } from '../types';

interface ExamCardProps {
  exam: ExamPrep;
  onClick: () => void;
}

export function ExamCard({ exam, onClick }: ExamCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group relative p-6 rounded-xl overflow-hidden cursor-pointer 
        transform transition-all duration-500 hover:scale-[1.02]"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-sky-500/10 to-pink-500/10 
        opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-xy" />
      
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6
        group-hover:border-sky-500/50 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Award className="w-6 h-6 text-sky-400" />
            <span className="text-lg font-semibold text-white">{exam.code}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium 
            ${exam.level === 'Beginner' ? 'bg-green-500/10 text-green-400' :
              exam.level === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400' :
              'bg-purple-500/10 text-purple-400'}`}>
            {exam.level}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sky-400 
          transition-colors">
          {exam.title}
        </h3>

        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-400">
            <Clock className="w-4 h-4 mr-2 text-sky-400" />
            {exam.duration}
          </div>
          <div className="flex items-center text-gray-400">
            <BookOpen className="w-4 h-4 mr-2 text-sky-400" />
            {exam.questionsCount} Questions
          </div>
          <div className="flex items-center text-gray-400">
            <Target className="w-4 h-4 mr-2 text-sky-400" />
            {exam.passingScore}% Passing Score
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-400">
            Last Updated: {exam.lastUpdated}
          </div>
          <button className="px-4 py-2 rounded-lg bg-sky-500/10 text-sky-400 
            hover:bg-sky-500/20 transition-colors">
            Start Prep
          </button>
        </div>
      </div>
    </div>
  );
}
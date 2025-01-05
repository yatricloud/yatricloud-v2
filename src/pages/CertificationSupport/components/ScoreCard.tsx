import React from 'react';
import { PieChart, CheckCircle, XCircle } from 'lucide-react';

interface ScoreCardProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
}

export function ScoreCard({ score, totalQuestions, correctAnswers, incorrectAnswers }: ScoreCardProps) {
  return (
    <div className="relative p-6 rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-purple-500/10 to-pink-500/10 
        animate-gradient-xy opacity-30" />
      
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Your Performance</h3>
          <PieChart className="w-6 h-6 text-sky-400" />
        </div>

        <div className="text-center mb-8">
          <div className="text-5xl font-bold text-white mb-2">{score}%</div>
          <div className="text-gray-400">Overall Score</div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-500/10 rounded-lg p-4">
            <div className="flex items-center text-green-400 mb-2">
              <CheckCircle className="w-5 h-5 mr-2" />
              Correct
            </div>
            <div className="text-2xl font-bold text-white">{correctAnswers}</div>
            <div className="text-sm text-gray-400">Questions</div>
          </div>
          
          <div className="bg-red-500/10 rounded-lg p-4">
            <div className="flex items-center text-red-400 mb-2">
              <XCircle className="w-5 h-5 mr-2" />
              Incorrect
            </div>
            <div className="text-2xl font-bold text-white">{incorrectAnswers}</div>
            <div className="text-sm text-gray-400">Questions</div>
          </div>
        </div>
      </div>
    </div>
  );
}
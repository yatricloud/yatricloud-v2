import React from 'react';
import { ArrowLeft, Clock, BookOpen } from 'lucide-react';
import type { PathwayDetails } from '../types';

interface PathwayDetailsProps {
  pathway: PathwayDetails;
  onBack: () => void;
}

export function PathwayDetails({ pathway, onBack }: PathwayDetailsProps) {
  return (
    <div className="min-h-screen bg-[#040d21] pt-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
            bg-gradient-radial from-sky-500/20 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button 
            onClick={onBack}
            className="flex items-center text-sky-400 hover:text-sky-300 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Learning Paths
          </button>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-4 text-glow">{pathway.title}</h1>
            <p className="text-xl text-gray-400 mb-6">{pathway.description}</p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <Clock className="w-5 h-5 text-sky-400 mr-2" />
                <span className="text-white">{pathway.duration}</span>
              </div>
              <div className="flex items-center px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <BookOpen className="w-5 h-5 text-sky-400 mr-2" />
                <span className="text-white">{pathway.level}</span>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {pathway.modules.map((module, index) => (
              <div 
                key={index}
                className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
                  hover:border-sky-500/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{module.title}</h3>
                  <p className="text-gray-400">{module.description}</p>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-sky-400">{module.duration}</div>
                </div>

                <div className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <div 
                      key={topicIndex}
                      className="flex items-center text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-3" />
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
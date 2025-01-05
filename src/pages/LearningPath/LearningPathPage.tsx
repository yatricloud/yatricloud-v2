import React from 'react';
import { Compass } from 'lucide-react';
import { PathCard } from './components/PathCard';
import { learningPaths } from './data/pathsData';

export function LearningPathPage() {
  return (
    <div className="min-h-screen bg-[#040d21] pt-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
            bg-gradient-radial from-sky-500/20 via-transparent to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-sky-500/10 text-sky-400 px-4 py-2 rounded-full mb-4">
              <Compass className="w-4 h-4 mr-2" />
              <span>Learning Paths</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow">
              Choose Your Path to
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-400">
                Cloud Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Follow our structured learning paths designed to take you from beginner to expert
              in cloud computing and DevOps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningPaths.map((path) => (
              <PathCard
                key={path.id}
                {...path}
                onClick={() => console.log(`Selected path: ${path.id}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
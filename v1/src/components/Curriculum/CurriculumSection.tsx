import React from 'react';
import { Book } from 'lucide-react';
import { Module } from './Module';
import { curriculumData } from './curriculumData';

export function CurriculumSection() {
  return (
    <section className="relative bg-[#0d1117] py-24">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-sky-500/10 text-sky-400 px-4 py-2 rounded-full mb-4">
            <Book className="w-4 h-4 mr-2" />
            <span>Comprehensive Curriculum</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 text-glow">
            Course Modules
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Master cloud computing and DevOps with our structured learning path
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {curriculumData.map((module, index) => (
            <Module key={index} {...module} />
          ))}
        </div>
      </div>
    </section>
  );
}

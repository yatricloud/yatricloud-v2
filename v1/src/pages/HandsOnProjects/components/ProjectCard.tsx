import React from 'react';
import { Clock, Code, ArrowRight } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group relative rounded-xl overflow-hidden cursor-pointer 
        transform transition-all duration-500 hover:scale-[1.02]"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-purple-500/10 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Project image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform 
            duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative p-6 bg-[#0f172a]">
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium 
            ${project.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-400' :
              project.difficulty === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400' :
              'bg-red-500/10 text-red-400'}`}>
            {project.difficulty}
          </span>
          <div className="flex items-center text-gray-400">
            <Clock className="w-4 h-4 mr-1" />
            {project.duration}
          </div>
        </div>

        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-sky-400 
          transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 rounded-full text-xs font-medium 
              bg-sky-500/10 text-sky-400 border border-sky-500/20">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center text-sky-400 group-hover:text-sky-300 transition-colors">
          <Code className="w-4 h-4 mr-2" />
          Start Project
          <ArrowRight className="w-4 h-4 ml-2 transform transition-transform 
            group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { Course } from '../../types/course';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

export function CourseCard({ course, onClick }: CourseCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`group relative p-6 rounded-xl backdrop-blur-sm border border-white/10 
        transition-all duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden 
        ${course.status === 'coming_soon' ? 'opacity-90' : ''}`}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-10 
        group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12">
            <img 
              src={course.icon} 
              alt={course.title}
              className="w-full h-full object-contain filter group-hover:brightness-125 
                transition-all duration-300"
            />
          </div>
          <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white/80 transform 
            transition-all duration-300 group-hover:translate-x-1" />
        </div>
        
        <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-glow">
          {course.title}
        </h3>
        
        <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
          {course.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {course.certifications.slice(0, 2).map((cert, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-sm font-medium bg-white/5 text-white/60
                border border-white/10 group-hover:border-white/20 transition-colors"
            >
              {cert.code}
            </span>
          ))}
          {course.certifications.length > 2 && (
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/5 text-white/60">
              +{course.certifications.length - 2} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import { Course } from '../../types/course';
import { CourseRequestModal } from './CourseRequestModal';

interface CourseCardProps {
  course: Course;
  onClick: () => void;
}

export function CourseCard({ course, onClick }: CourseCardProps) {
  const [showRequestModal, setShowRequestModal] = useState(false);

  const handleClick = () => {
    if (course.status === 'coming_soon') {
      setShowRequestModal(true);
    } else {
      onClick();
    }
  };

  return (
    <>
      <div 
        onClick={handleClick}
        className={`group relative p-6 rounded-xl backdrop-blur-sm border border-white/10 cursor-pointer 
          transition-all duration-500 hover:scale-[1.02] overflow-hidden ${course.status === 'coming_soon' ? 'opacity-90' : ''}`}
      >
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-5 
          group-hover:opacity-10 transition-opacity duration-500`} />
        
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <img 
              src={course.icon} 
              alt={course.title}
              className="w-12 h-12 object-contain"
            />
            {course.status === 'coming_soon' ? (
              <span className="flex items-center px-3 py-1 rounded-full text-sm font-medium 
                bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">
                <Lock className="w-4 h-4 mr-1" />
                Coming Soon
              </span>
            ) : (
              <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white/80 transform 
                transition-all duration-300 group-hover:translate-x-1" />
            )}
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-glow">
            {course.title}
          </h3>
          
          <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
            {course.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {course.certifications.slice(0, 2).map((cert, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-full text-xs font-medium bg-white/5 text-white/60
                  border border-white/10 group-hover:border-white/20 transition-colors"
              >
                {cert.code}
              </span>
            ))}
            {course.certifications.length > 2 && (
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/5 text-white/60">
                +{course.certifications.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Animated border gradient */}
        <div className="absolute inset-0 border border-white/20 rounded-xl 
          group-hover:border-transparent transition-colors duration-300">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
            transition-opacity duration-500 animate-spin-slow">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent 
              via-white/20 to-transparent blur" />
          </div>
        </div>
      </div>

      {course.status === 'coming_soon' && (
        <CourseRequestModal
          isOpen={showRequestModal}
          onClose={() => setShowRequestModal(false)}
          courseName={course.title}
        />
      )}
    </>
  );
}
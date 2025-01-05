import React from 'react';
import { X } from 'lucide-react';
import { Course } from '../../types/course';
import { CertificationCard } from './CertificationCard';

interface CourseDetailModalProps {
  course: Course;
  onClose: () => void;
}

export function CourseDetailModal({ course, onClose }: CourseDetailModalProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        
        <div className="relative w-full max-w-4xl bg-[#161b22] rounded-xl shadow-xl">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <img 
                  src={course.logo || course.icon} 
                  alt={course.title}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h2 className="text-2xl font-bold text-white">{course.title}</h2>
                  <p className="text-gray-400">by {course.provider}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                <X className="w-6 h-6 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Certifications Grid */}
            <div className="space-y-6">
              {course.certifications.map((cert, index) => (
                <CertificationCard key={index} certification={cert} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
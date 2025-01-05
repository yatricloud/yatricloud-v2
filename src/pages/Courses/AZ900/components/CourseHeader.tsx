import React from 'react';
import { AZ900Course } from '../../../../types/az900';

interface CourseHeaderProps {
  course: AZ900Course;
  onEnroll: () => void;
}

export function CourseHeader({ course, onEnroll }: CourseHeaderProps) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-4 mb-4">
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
          {course.code}
        </span>
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20">
          {course.level}
        </span>
      </div>

      <h1 className="text-4xl font-bold text-white mb-4 text-glow">{course.title}</h1>
      <p className="text-xl text-gray-400 mb-8 max-w-3xl">{course.description}</p>

      <button
        onClick={onEnroll}
        className="bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 
          text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 
          hover:scale-[1.02] flex items-center justify-center"
      >
        Enroll Now - ${course.price}
      </button>
    </div>
  );
}
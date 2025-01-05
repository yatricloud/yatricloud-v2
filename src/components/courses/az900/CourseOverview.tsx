import React from 'react';
import { Clock, Award, BookOpen, Target } from 'lucide-react';
import type { AZ900Course } from '../../../types/az900';

interface CourseOverviewProps {
  course: AZ900Course;
}

export function CourseOverview({ course }: CourseOverviewProps) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: Clock, label: 'Duration', value: course.duration },
          { icon: Award, label: 'Level', value: course.level },
          { icon: BookOpen, label: 'Modules', value: `${course.modules.length} Modules` },
          { icon: Target, label: 'Exam Code', value: course.code }
        ].map((item, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-4">
            <item.icon className="w-5 h-5 text-sky-400 mb-2" />
            <div className="text-sm text-gray-400">{item.label}</div>
            <div className="text-white font-medium">{item.value}</div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">Prerequisites</h2>
        <ul className="space-y-2">
          {course.prerequisites.map((prerequisite, index) => (
            <li key={index} className="flex items-start text-gray-400">
              <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 mr-3" />
              {prerequisite}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">Exam Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Questions', value: `${course.examDetails.questionCount} questions` },
            { label: 'Passing Score', value: course.examDetails.passingScore },
            { label: 'Duration', value: course.examDetails.duration }
          ].map((item, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-1">{item.label}</div>
              <div className="text-lg font-medium text-white">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
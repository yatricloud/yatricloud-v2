import React from 'react';
import { Target, Book, Clock, Award } from 'lucide-react';
import type { CourseDetails } from '../../types/course';
import { CourseModule } from './CourseModule';

interface CourseOverviewProps {
  course: CourseDetails;
}

export function CourseOverview({ course }: CourseOverviewProps) {
  return (
    <div className="space-y-12">
      {/* Course Introduction */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 text-glow">{course.title}</h1>
        <p className="text-xl text-gray-400">{course.description}</p>
      </div>

      {/* Quick Info */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: Clock, label: 'Duration', value: course.duration },
          { icon: Target, label: 'Level', value: course.level },
          { icon: Book, label: 'Modules', value: `${course.modules.length} Modules` },
          { icon: Award, label: 'Exam Code', value: course.examDetails.code }
        ].map((item, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-4">
            <item.icon className="w-5 h-5 text-sky-400 mb-2" />
            <div className="text-sm text-gray-400">{item.label}</div>
            <div className="text-white font-medium">{item.value}</div>
          </div>
        ))}
      </div>

      {/* Learning Objectives */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-6">Learning Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course.learningObjectives.map((objective, index) => (
            <div key={index} className="flex items-start">
              <Target className="w-5 h-5 text-sky-400 mr-3 mt-1" />
              <span className="text-gray-400">{objective}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-6">Prerequisites</h2>
        <div className="space-y-3">
          {course.prerequisites.map((prerequisite, index) => (
            <div key={index} className="flex items-start">
              <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3" />
              <span className="text-gray-400">{prerequisite}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Course Modules */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-6">Course Modules</h2>
        <div className="space-y-6">
          {course.modules.map((module, index) => (
            <CourseModule key={index} module={module} />
          ))}
        </div>
      </div>

      {/* Exam Details */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-6">Exam Information</h2>
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Exam Code', value: course.examDetails.code },
              { label: 'Questions', value: `${course.examDetails.questionCount} questions` },
              { label: 'Passing Score', value: course.examDetails.passingScore },
              { label: 'Duration', value: course.examDetails.duration }
            ].map((item, index) => (
              <div key={index}>
                <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                <div className="text-lg font-medium text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
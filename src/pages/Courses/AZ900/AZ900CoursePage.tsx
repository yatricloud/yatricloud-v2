import React, { useState } from 'react';
import { Shield, Clock, Users, Award } from 'lucide-react';
import { az900CourseDetails } from '../../../data/courses/az900/courseDetails';
import { CourseHeader } from './components/CourseHeader';
import { CourseModules } from './components/CourseModules';
import { EnrollmentForm } from './components/EnrollmentForm';
import { ExamDetails } from './components/ExamDetails';

export function AZ900CoursePage() {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);

  return (
    <div className="min-h-screen bg-[#040d21] pt-24">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
          bg-gradient-radial from-sky-500/20 via-transparent to-transparent" />
      </div>

      {/* Floating orbs */}
      <div className="fixed top-20 left-20 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl animate-float" />
      <div className="fixed bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Header */}
        <CourseHeader 
          course={az900CourseDetails}
          onEnroll={() => setShowEnrollmentForm(true)}
        />

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Clock, label: 'Duration', value: az900CourseDetails.duration },
            { icon: Users, label: 'Batch Size', value: '25 Students' },
            { icon: Award, label: 'Level', value: az900CourseDetails.level },
            { icon: Shield, label: 'Certification', value: 'Industry Recognized' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <stat.icon className="w-6 h-6 text-sky-400 mb-2" />
              <div className="text-sm text-gray-400">{stat.label}</div>
              <div className="text-lg font-medium text-white">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Course Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            {/* Prerequisites */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Prerequisites</h2>
              <ul className="space-y-3">
                {az900CourseDetails.prerequisites.map((prerequisite, index) => (
                  <li key={index} className="flex items-start text-gray-400">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 mr-3" />
                    {prerequisite}
                  </li>
                ))}
              </ul>
            </div>

            {/* Course Modules */}
            <CourseModules modules={az900CourseDetails.modules} />

            {/* Exam Details */}
            <ExamDetails examDetails={az900CourseDetails.examDetails} />
          </div>

          {/* Enrollment Form */}
          <div className="lg:col-span-1">
            <EnrollmentForm 
              isOpen={showEnrollmentForm}
              onClose={() => setShowEnrollmentForm(false)}
              courseCode={az900CourseDetails.code}
              courseName={az900CourseDetails.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Sparkles, Search } from 'lucide-react';
import { CourseCard } from '../../components/Courses/CourseCard';
import { courses } from '../../data/coursesData';

interface CoursesPageProps {
  onCertificationsClick: () => void;
}

export function CoursesPage({ onCertificationsClick }: CoursesPageProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#040d21] pt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
            bg-gradient-radial from-sky-500/20 via-transparent to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="inline-flex items-center bg-sky-500/10 text-sky-400 px-4 py-2 
            rounded-full mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            <span>Professional Certifications</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-glow">
            Advance Your Career with
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r 
              from-sky-400 to-purple-400">
              Industry-Leading Certifications
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Choose from our comprehensive range of certification courses designed to help you
            excel in your cloud computing journey
          </p>

          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                text-white placeholder-gray-400 focus:border-sky-500 focus:ring-1 
                focus:ring-sky-500 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onClick={onCertificationsClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
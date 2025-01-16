import React from 'react';
import { BookOpen } from 'lucide-react';
import { CurriculumSection as CurriculumType } from '../../types/certification';

interface CurriculumSectionProps {
  curriculum: CurriculumType[];
}

export function CurriculumSection({ curriculum }: CurriculumSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <BookOpen className="w-6 h-6 text-sky-400 mr-3" />
        Course Curriculum
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {curriculum.map((section, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.topics.map((topic, topicIndex) => (
                <li key={topicIndex} className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 mr-2" />
                  <span className="text-gray-400">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { CERTIFICATION_DETAILS } from '../../data/certificationData';
import { CertificationHeader } from '../../components/Certifications/CertificationHeader';
import { EnrollmentCard } from '../../components/Certifications/EnrollmentCard';
import { LearningObjectives } from '../../components/Certifications/LearningObjectives';
import { CurriculumSection } from '../../components/Certifications/CurriculumSection';

interface CertificationDetailsProps {
  certificationCode: string;
  onBack: () => void;
}

export function CertificationDetails({ certificationCode, onBack }: CertificationDetailsProps) {
  const certification = CERTIFICATION_DETAILS[certificationCode];

  if (!certification) {
    return (
      <div className="min-h-screen bg-[#040d21] pt-24 px-4">
        <div className="max-w-7xl mx-auto">
          <button onClick={onBack} className="flex items-center text-sky-400 hover:text-sky-300 transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Certifications
          </button>
          <p className="text-white">Certification details not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#040d21] pt-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={onBack} className="flex items-center text-sky-400 hover:text-sky-300 transition-colors mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Certifications
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <CertificationHeader {...certification} />
            <EnrollmentCard 
              {...certification} 
              code={certification.code}
              name={certification.name}
            />
          </div>

          <LearningObjectives objectives={certification.learningObjectives} />
          <CurriculumSection curriculum={certification.curriculum} />
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Award } from 'lucide-react';
import { CertificationCard } from './CertificationCard';
import { CertificationDetails } from './CertificationDetails';
import { azureCertifications } from '../../data/certificationData';

interface CertificationsPageProps {
  onNavigate: (page: 'home' | 'blog' | 'success-stories' | 'courses' | 'certifications' | 'contact' | 'checkout') => void;
}

export function CertificationsPage({ onNavigate }: CertificationsPageProps) {
  const [selectedCertification, setSelectedCertification] = useState<string | null>(null);

  const handleEnroll = () => {
    onNavigate('checkout');
  };

  if (selectedCertification) {
    return (
      <CertificationDetails 
        certificationCode={selectedCertification}
        onBack={() => setSelectedCertification(null)}
        onEnroll={handleEnroll}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#040d21] pt-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
            bg-gradient-radial from-sky-500/20 via-transparent to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-sky-500/10 text-sky-400 px-4 py-2 rounded-full mb-4">
              <Award className="w-4 h-4 mr-2" />
              <span>Microsoft Azure Certifications</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow">
              Your Path to Azure Mastery
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose your certification path and take the next step in your cloud career
            </p>
          </div>
        </div>
      </div>

      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {azureCertifications.map((group, index) => (
              <div key={index}>
                <div className="mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">{group.title}</h2>
                  <p className="text-gray-400">{group.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.certifications.map((cert, certIndex) => (
                    <div 
                      key={certIndex} 
                      onClick={() => setSelectedCertification(cert.code)}
                      className="cursor-pointer"
                    >
                      <CertificationCard {...cert} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
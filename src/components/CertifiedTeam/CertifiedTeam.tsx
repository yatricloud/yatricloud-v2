import React from 'react';
import { Shield } from 'lucide-react';
import { CertificationCard } from './CertificationCard';
import { certifications } from './certificationData';

export function CertifiedTeam() {
  return (
    <section className="relative bg-[#040d21] py-24 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
          bg-gradient-radial from-sky-500/20 via-transparent to-transparent" />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-sky-500/10 text-sky-400 px-4 py-2 rounded-full mb-4">
            <Shield className="w-4 h-4 mr-2" />
            <span>Certified Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow">
            Backed by Industry Leaders
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our team holds certifications from leading technology providers, ensuring you receive expert guidance and support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
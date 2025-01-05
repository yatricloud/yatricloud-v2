import React from 'react';
import { Shield, Users, Award } from 'lucide-react';

export function TrustSection() {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Students' },
    { icon: Award, value: '500+', label: 'Certifications Achieved' },
    { icon: Shield, value: '95%', label: 'Success Rate' }
  ];

  return (
    <section className="relative bg-[#040d21] py-24">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <Icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2 text-glow">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
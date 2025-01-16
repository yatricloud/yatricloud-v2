import React from 'react';
import { Award, Github, Cloud, Database } from 'lucide-react';

const stats = [
  { icon: Github, label: 'GitHub Certified', count: '100+' },
  { icon: Cloud, label: 'Azure Certified', count: '250+' },
  { icon: Database, label: 'AWS Certified', count: '300+' },
  { icon: Cloud, label: 'GCP Certified', count: '150+' }
];

export function CertificationStats() {
  return (
    <div className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
                  hover:border-sky-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <Icon className="w-8 h-8 text-sky-400 mb-4" />
                  <div className="text-3xl font-bold text-white mb-2 text-glow">{stat.count}</div>
                  <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
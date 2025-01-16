import React from 'react';
import { Clock, Users, Award } from 'lucide-react';

interface CertificationHeaderProps {
  name: string;
  code: string;
  level: string;
  description: string;
  duration: string;
}

export function CertificationHeader({ name, code, level, description, duration }: CertificationHeaderProps) {
  return (
    <div className="lg:col-span-2">
      <div className="flex items-center gap-4 mb-4">
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
          {code}
        </span>
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-500/10 text-green-400 border border-green-500/20">
          {level}
        </span>
      </div>
      <h1 className="text-4xl font-bold text-white mb-4 text-glow">{name}</h1>
      <p className="text-xl text-gray-400 mb-6">{description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: Clock, label: 'Duration', value: duration },
          { icon: Users, label: 'Batch Size', value: '25 Students' },
          { icon: Award, label: 'Certificate', value: 'Industry Recognized' }
        ].map((item, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-4">
            <item.icon className="w-5 h-5 text-sky-400 mb-2" />
            <div className="text-sm text-gray-400">{item.label}</div>
            <div className="text-white font-medium">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
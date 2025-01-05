import React from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { Certification } from '../../types/course';

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  return (
    <div className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
      hover:border-sky-500/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      
      <div className="relative flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <img
            src={certification.credlyBadge}
            alt={`${certification.name} Badge`}
            className="w-full rounded-lg transform transition-transform duration-500 
              group-hover:scale-105"
          />
        </div>
        
        <div className="w-full md:w-2/3">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 
                transition-colors">
                {certification.name}
              </h3>
              <span className="text-sky-400 font-mono">{certification.code}</span>
            </div>
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-sky-500/10 
              text-sky-400 border border-sky-500/20">
              {certification.level}
            </span>
          </div>
          
          <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
            {certification.description}
          </p>
          
          <a
            href={certification.examUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sky-400 hover:text-sky-300 
              transition-colors group/link"
          >
            <Award className="w-4 h-4 mr-2" />
            Learn more about certification
            <ExternalLink className="w-4 h-4 ml-2 transform transition-transform 
              group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </a>
        </div>
      </div>
    </div>
  );
}
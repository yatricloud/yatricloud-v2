import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SuccessStoryProps {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  certifications: string[];
}

export function SuccessStory({ name, role, company, image, quote, certifications }: SuccessStoryProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden">
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 via-purple-500/20 to-sky-500/20 
        animate-gradient blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-8 bg-[rgba(22,27,34,0.8)] backdrop-blur-sm border border-white/10 
        group-hover:border-sky-500/50 transition-all duration-300 rounded-xl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <img 
              src={image} 
              alt={name}
              className="w-full aspect-square object-cover rounded-lg transform 
                transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          <div className="w-full md:w-2/3">
            <blockquote className="text-xl text-gray-300 mb-6 italic">"{quote}"</blockquote>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
              <p className="text-gray-400">{role} at {company}</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-sky-500/10 text-sky-400
                      border border-sky-500/20"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            
            <button className="mt-6 group/btn inline-flex items-center text-sky-400 
              hover:text-sky-300 transition-colors">
              Read full story
              <ArrowRight className="w-4 h-4 ml-2 transform transition-transform 
                group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
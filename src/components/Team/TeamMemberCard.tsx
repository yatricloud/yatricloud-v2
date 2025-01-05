import React from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';
import { TeamMember } from './types';

export function TeamMemberCard({ name, title, badges, image, bio, socialLinks }: TeamMember) {
  return (
    <div className="group relative p-6 rounded-xl backdrop-blur-sm border border-white/10 
      transition-all duration-500 hover:scale-[1.02] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-purple-500/10 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative">
        <div className="mb-6">
          <img 
            src={image} 
            alt={name}
            className="w-32 h-32 rounded-full mx-auto object-cover 
              transform transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-glow">
            {name}
          </h3>
          <p className="text-gray-400">{title}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 
                text-sky-400 border border-sky-500/20"
            >
              {badge}
            </span>
          ))}
        </div>
        
        <p className="text-gray-400 text-center mb-6 group-hover:text-gray-300 
          transition-colors line-clamp-3">
          {bio}
        </p>
        
        <div className="flex justify-center space-x-4">
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {socialLinks.website && (
            <a
              href={socialLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Globe className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Animated border gradient */}
      <div className="absolute inset-0 border border-white/20 rounded-xl 
        group-hover:border-transparent transition-colors duration-300">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
          transition-opacity duration-500 animate-spin-slow">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent 
            via-white/20 to-transparent blur" />
        </div>
      </div>
    </div>
  );
}
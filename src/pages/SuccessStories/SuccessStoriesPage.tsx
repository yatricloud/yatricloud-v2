import React from 'react';
import { Trophy } from 'lucide-react';
import { CertificationStats } from './CertificationStats';
import { SuccessStory } from './SuccessStory';

const successStories = [
  {
    name: 'Sarah Chen',
    role: 'Cloud Solutions Architect',
    company: 'Microsoft',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    quote: 'The structured learning path and hands-on projects at Yatri Cloud were instrumental in helping me achieve multiple Azure certifications and land my dream job.',
    certifications: ['AZ-900', 'AZ-104', 'AZ-305']
  },
  {
    name: 'James Rodriguez',
    role: 'DevOps Engineer',
    company: 'Amazon',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    quote: 'The practical approach to learning DevOps practices and AWS services gave me the confidence to tackle complex cloud infrastructure challenges.',
    certifications: ['AWS Solutions Architect', 'AWS DevOps Engineer', 'HashiCorp Terraform']
  },
  {
    name: 'Priya Patel',
    role: 'Cloud Security Engineer',
    company: 'Google',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800',
    quote: 'Yatri Cloud\'s comprehensive security modules and GCP certification preparation were key to my successful career transition into cloud security.',
    certifications: ['GCP Security Engineer', 'CISSP', 'CompTIA Security+']
  }
];

export function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-[#040d21] pt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
            bg-gradient-radial from-sky-500/20 via-transparent to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="inline-flex items-center bg-sky-500/10 text-sky-400 px-4 py-2 
            rounded-full mb-8">
            <Trophy className="w-4 h-4 mr-2" />
            <span>Success Stories</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-glow">
            Our Students' Journey to
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r 
              from-sky-400 to-purple-400">
              Excellence
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how our students transformed their careers and achieved their dreams
            through dedication, hard work, and our comprehensive learning programs.
          </p>
        </div>
      </div>

      {/* Certification Stats */}
      <CertificationStats />

      {/* Success Stories */}
      <div className="relative py-24">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {successStories.map((story, index) => (
              <SuccessStory key={index} {...story} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
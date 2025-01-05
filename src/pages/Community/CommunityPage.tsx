import React from 'react';
import { Users } from 'lucide-react';
import { CommunitySection } from '../../components/Communities/CommunitySection';

export function CommunityPage() {
  return (
    <div className="min-h-screen bg-[#040d21] pt-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
            bg-gradient-radial from-sky-500/20 via-transparent to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-sky-500/10 text-sky-400 px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4 mr-2" />
              <span>Join Our Community</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow">
              Connect with Fellow
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-400">
                Cloud Enthusiasts
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join our vibrant community of cloud professionals, share knowledge, and grow together
            </p>
          </div>
        </div>
      </div>

      <CommunitySection />
    </div>
  );
}
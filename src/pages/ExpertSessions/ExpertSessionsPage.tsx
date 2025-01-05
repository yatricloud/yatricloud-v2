import React from 'react';
import { Users, Award, Star, ArrowRight } from 'lucide-react';
import { ExpertCard } from './components/ExpertCard';
import { SessionCard } from './components/SessionCard';
import { experts, upcomingSessions } from './data/sessionsData';

export function ExpertSessionsPage() {
  return (
    <div className="min-h-screen bg-[#040d21] pt-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
            bg-gradient-radial from-purple-500/20 via-transparent to-transparent" />
        </div>
        
        {/* Animated orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full mb-4">
              <Award className="w-4 h-4 mr-2" />
              <span>Expert-Led Sessions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow">
              Learn from Industry
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Leading Experts
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join live sessions with Microsoft Certified Trainers and industry professionals
              to accelerate your cloud journey
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: Users, value: '50+', label: 'Expert Trainers' },
              { icon: Star, value: '4.9/5', label: 'Average Rating' },
              { icon: Award, value: '1000+', label: 'Sessions Conducted' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 
                    rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
                    group-hover:border-purple-500/50 transition-all duration-300">
                    <Icon className="w-8 h-8 text-purple-400 mb-4" />
                    <div className="text-3xl font-bold text-white mb-2 text-glow">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Our Experts */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Meet Our Experts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experts.map((expert, index) => (
                <ExpertCard key={index} {...expert} />
              ))}
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Upcoming Sessions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingSessions.map((session, index) => (
                <SessionCard key={index} {...session} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
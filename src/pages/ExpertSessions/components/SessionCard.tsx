import React from 'react';
import { Calendar, Clock, Users, ArrowRight, Award, Sparkles } from 'lucide-react';
import type { Session } from '../types';

export function SessionCard({ 
  title, expert, date, time, duration, attendees, level, topics, highlights 
}: Session) {
  return (
    <div className="group relative p-6 rounded-xl backdrop-blur-sm border border-white/10 
      transition-all duration-500 hover:scale-[1.02] overflow-hidden cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl">{expert.icon}</span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium 
            ${level === 'Beginner' ? 'bg-green-500/10 text-green-400' :
              level === 'Intermediate' ? 'bg-blue-500/10 text-blue-400' :
              level === 'Advanced' ? 'bg-purple-500/10 text-purple-400' :
              'bg-orange-500/10 text-orange-400'}`}>
            {level}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-glow">
          {title}
        </h3>
        
        <div className="mb-4">
          <div className="text-white font-medium">{expert.name}</div>
          <div className="text-gray-400">{expert.title}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-400">
            <Calendar className="w-5 h-5 mr-2 text-purple-400" />
            {date}
          </div>
          <div className="flex items-center text-gray-400">
            <Clock className="w-5 h-5 mr-2 text-purple-400" />
            {time}
          </div>
          <div className="flex items-center text-gray-400">
            <Clock className="w-5 h-5 mr-2 text-purple-400" />
            {duration}
          </div>
          <div className="flex items-center text-gray-400">
            <Users className="w-5 h-5 mr-2 text-purple-400" />
            {attendees} Attendees
          </div>
        </div>
        
        <div className="space-y-4 mb-6">
          <div>
            <div className="flex items-center text-white mb-2">
              <Award className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-sm font-medium">Topics Covered</span>
            </div>
            <div className="space-y-1">
              {topics.map((topic, index) => (
                <div key={index} className="text-sm text-gray-400 flex items-start">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  {topic}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center text-white mb-2">
              <Sparkles className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-sm font-medium">Session Highlights</span>
            </div>
            <div className="space-y-1">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-sm text-gray-400 flex items-start">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <button className="w-full flex items-center justify-center px-4 py-2 rounded-lg 
          bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium 
          transition-all duration-200 hover:scale-[1.02] group/btn">
          Register Now
          <ArrowRight className="w-4 h-4 ml-2 transform transition-transform 
            group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

interface ViewAllBlogsProps {
  onViewAll: () => void;
}

export function ViewAllBlogs({ onViewAll }: ViewAllBlogsProps) {
  return (
    <section className="relative bg-[#040d21] py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
          bg-gradient-radial from-sky-500/20 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center bg-sky-500/10 text-sky-400 px-4 py-2 rounded-full mb-8">
          <BookOpen className="w-4 h-4 mr-2" />
          <span>Explore More</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-glow">
          Discover Our Complete Blog Collection
        </h2>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Access our full library of articles, tutorials, and insights
        </p>

        <button
          onClick={onViewAll}
          className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r 
            from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 
            text-white font-medium transition-all duration-200 
            hover:scale-[1.02] group"
        >
          View All Blog Posts
          <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 
            group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
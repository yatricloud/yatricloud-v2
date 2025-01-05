import React from 'react';
import { Youtube } from 'lucide-react';
import { VideoGrid } from './VideoGrid';
import { VideoSkeleton } from './VideoSkeleton';
import { useVideos } from '../../hooks/useVideos';

export function LatestVideos() {
  const { videos, isLoading, error } = useVideos();

  return (
    <section className="relative bg-[#040d21] py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full mb-4">
            <Youtube className="w-4 h-4 mr-2" />
            <span>Latest Videos</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 text-glow">YouTube Channel</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch our latest videos on cloud computing, DevOps, and technology
          </p>
        </div>

        {error && (
          <div className="text-center text-red-400 mb-8">
            Failed to load videos. Please try again later.
          </div>
        )}

        {isLoading ? <VideoSkeleton /> : <VideoGrid videos={videos} />}
      </div>
    </section>
  );
}
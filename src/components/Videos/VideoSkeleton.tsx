import React from 'react';

interface VideoSkeletonProps {
  count?: number;
}

export function VideoSkeleton({ count = 6 }: VideoSkeletonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="rounded-lg overflow-hidden">
            <div className="aspect-video bg-white/5" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-white/5 rounded w-3/4" />
              <div className="h-4 bg-white/5 rounded w-1/2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
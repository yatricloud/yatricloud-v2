import React from 'react';

export function BlogSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="animate-pulse">
          <div className="bg-[#161b22] rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-700" />
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-6 w-20 bg-gray-700 rounded-full" />
                <div className="h-6 w-32 bg-gray-700 rounded-full" />
              </div>
              <div className="h-8 bg-gray-700 rounded mb-4" />
              <div className="space-y-2">
                <div className="h-4 bg-gray-700 rounded" />
                <div className="h-4 bg-gray-700 rounded" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
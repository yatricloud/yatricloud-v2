import React from 'react';
import { PlatformCard } from './PlatformCard';

export function Platforms() {
  const platforms = [
    {
      title: 'Dev Yatri',
      description:
        'Join our developer community on a journey of continuous learning and growth.',
      actionText: 'Join Dev Yatri',
    },
    {
      title: 'Blog Yatri',
      description:
        'Explore our insightful articles and stay updated with the latest trends in cloud and DevOps.',
      actionText: 'Read Blog Yatri',
    },
  ];

  return (
    <section className="bg-[#0d1117] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Our Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platform, index) => (
            <PlatformCard key={index} {...platform} />
          ))}
        </div>
      </div>
    </section>
  );
}

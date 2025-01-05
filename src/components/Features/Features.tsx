import React from 'react';
import { BookOpen, Users, Rocket, Award } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

interface FeaturesProps {
  onNavigate?: (page: string) => void;
}

export function Features({ onNavigate }: FeaturesProps) {
  const features = [
    {
      icon: BookOpen,
      title: 'Structured Learning Path',
      description:
        'Follow our carefully crafted curriculum designed for cloud and DevOps mastery.',
      // onClick: () => onNavigate?.('learning-path'),
    },
    {
      icon: Award,
      title: 'Certification Support',
      description:
        'Get comprehensive exam preparation with practice tests and detailed explanations.',
      // onClick: () => onNavigate?.('certification-support'),
    },
    {
      icon: Users,
      title: 'Expert-Led Sessions',
      description:
        'Learn from industry professionals with real-world experience in cloud technologies.',
      // onClick: () => onNavigate?.('expert-sessions'),
    },
    {
      icon: Rocket,
      title: 'Hands-on Projects',
      description:
        'Build real-world projects to strengthen your portfolio and practical skills.',
    },
  ];

  return (
    <section className="relative bg-[#0d1117] py-24">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 text-glow">
            Why Choose Yatri Cloud?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Start your cloud journey with our training.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} onClick={feature.onClick} />
          ))}
        </div>
      </div>
    </section>
  );
}

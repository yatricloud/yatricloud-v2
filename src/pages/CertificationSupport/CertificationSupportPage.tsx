import React from 'react';
import { Award, BookOpen, Target } from 'lucide-react';
import { ExamCard } from './components/ExamCard';

const exams = [
  {
    id: 'az-900',
    code: 'AZ-900',
    title: 'Microsoft Azure Fundamentals',
    level: 'Beginner',
    duration: '2 hours',
    questionsCount: 60,
    passingScore: 70,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'aws-ccp',
    code: 'CLF-C02',
    title: 'AWS Cloud Practitioner',
    level: 'Beginner',
    duration: '90 minutes',
    questionsCount: 65,
    passingScore: 70,
    lastUpdated: '2024-01-10'
  },
  {
    id: 'az-104',
    code: 'AZ-104',
    title: 'Microsoft Azure Administrator',
    level: 'Intermediate',
    duration: '3 hours',
    questionsCount: 55,
    passingScore: 70,
    lastUpdated: '2024-01-12'
  }
];

export function CertificationSupportPage() {
  return (
    <div className="min-h-screen bg-[#040d21] pt-24">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
          bg-gradient-radial from-sky-500/20 via-transparent to-transparent" />
      </div>

      {/* Floating orbs */}
      <div className="fixed top-20 left-20 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl animate-float" />
      <div className="fixed bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-sky-500/10 text-sky-400 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4 mr-2" />
            <span>Certification Support</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow">
            Master Your Cloud
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-purple-400">
              Certifications
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive exam preparation with practice tests, detailed explanations, and performance tracking
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: BookOpen,
              title: 'Practice Tests',
              description: 'Real exam-like questions with detailed explanations'
            },
            {
              icon: Target,
              title: 'Performance Tracking',
              description: 'Track your progress and identify improvement areas'
            },
            {
              icon: Award,
              title: 'Updated Content',
              description: 'Latest exam topics and patterns covered'
            }
          ].map((feature, index) => (
            <div key={index} className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm 
              border border-white/10 group hover:border-sky-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <feature.icon className="w-8 h-8 text-sky-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {exams.map((exam) => (
            <ExamCard
              key={exam.id}
              exam={exam}
              onClick={() => console.log(`Selected exam: ${exam.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
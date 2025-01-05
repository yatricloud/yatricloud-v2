import React from 'react';
import { Award, BookOpen, Target, Brain, Code, CheckCircle, Sparkles, Zap, Users } from 'lucide-react';
import { ExamCard } from './components/ExamCard';
import { exams } from './data/examData';

const features = [
  {
    icon: Brain,
    title: 'Real Exam Experience',
    description: 'Practice with questions that mirror the actual certification exams, complete with detailed explanations and references.'
  },
  {
    icon: Code,
    title: 'Hands-on Labs',
    description: 'Get practical experience with real-world scenarios and interactive lab environments.'
  },
  {
    icon: CheckCircle,
    title: 'Performance Analytics',
    description: 'Track your progress with detailed analytics and identify areas for improvement.'
  }
];

const benefits = [
  {
    title: 'Comprehensive Study Material',
    items: [
      'Detailed theory explanations with examples',
      'Visual learning aids and diagrams',
      'Real-world case studies',
      'Best practices and implementation guides'
    ]
  },
  {
    title: 'Practice Resources',
    items: [
      'Multiple practice tests per exam',
      'Question explanations with references',
      'Performance tracking and analytics',
      'Customizable mock exams'
    ]
  },
  {
    title: 'Expert Support',
    items: [
      '24/7 expert assistance',
      'Doubt clearing sessions',
      'Exam strategy guidance',
      'Study plan customization'
    ]
  }
];

export function CertificationSupportPage() {
  return (
    <div className="min-h-screen bg-[#040d21] pt-24">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] 
          bg-gradient-radial from-sky-500/20 via-purple-500/20 to-transparent" />
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
            Your Path to
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400">
              Certification Success
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive exam preparation with practice tests, detailed explanations, and hands-on labs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div key={index} className="group relative p-8 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-purple-500/10 to-pink-500/10 
                opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-xy" />
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6
                group-hover:border-sky-500/50 transition-all duration-300">
                <feature.icon className="w-10 h-10 text-sky-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What You Get Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative p-6 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-sky-500/10 to-pink-500/10 
                  opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-xy" />
                
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6
                  group-hover:border-purple-500/50 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                  <ul className="space-y-3">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-400">
                        <Sparkles className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: '10,000+', label: 'Students Certified' },
              { icon: Zap, value: '95%', label: 'Pass Rate' },
              { icon: BookOpen, value: '1000+', label: 'Practice Questions' },
              { icon: Target, value: '100%', label: 'Exam Coverage' }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-purple-500/10 
                  rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 
                  group-hover:border-sky-500/50 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-sky-400 mb-4" />
                  <div className="text-3xl font-bold text-white mb-2 text-glow">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Available Exams */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Available Certification Exams</h2>
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
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export function Greeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting('Good Morning');
    } else if (hour >= 12 && hour < 17) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements remain the same */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 via-purple-500/20 to-pink-500/20 animate-gradient" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-from)_0%,_var(--tw-gradient-to)_100%)] from-sky-500/20 to-transparent" />
      </div>

      <div className="absolute top-10 left-20 w-32 h-32 bg-sky-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-8 animate-pulse">
          <Sparkles className="w-4 h-4 mr-2 text-sky-400" />
          <span className="text-sky-400">Welcome to Yatri Cloud</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
          {greeting} Yatris
          <span
            className="inline-block ml-2 select-none pointer-events-none animate-wave"
            style={{ color: '#FFD700' }}
          >
            👋
          </span>
        </h1>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Join our community of cloud & DevOps and start your journey of
          continuous learning and growth. Let's build the future of cloud
          computing together.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {[
            { label: 'Students', value: '2000+' },
            { label: 'Certified', value: '1000+' },
            { label: 'Viewrs', value: '50k+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:border-sky-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-3xl font-bold text-white mb-1 text-glow">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

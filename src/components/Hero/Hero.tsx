import React from 'react';
import { Sparkles, ArrowRight, Users, Award, Rocket } from 'lucide-react';
import { ConsultationForm } from './ConsultationForm';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#040d21] pt-32 pb-20">
      {/* Background elements remain the same */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradient" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-radial from-primary/20 via-transparent to-transparent" />
      </div>

      <div className="absolute top-20 left-20 w-32 h-32 bg-sky-500/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-sky-500/10 text-sky-400 px-4 py-2 rounded-full mb-8 animate-pulse">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Welcome to Yatri Cloud</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight text-glow leading-tight">
              Start Your Journey
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-accent">
                Towards Success
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 mb-8">
              At Yatri Cloud, we believe in investing in your growth and
              delivering on our promises. Your career transformation starts
              here.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: Users, value: '100+', label: 'Trainers' },
                { icon: Award, value: '1000+', label: 'Certified' },
                { icon: Rocket, value: '50k+', label: 'Views' },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-4 rounded-lg bg-[rgba(22,27,34,0.5)] backdrop-blur-sm border border-[#30363d]"
                  >
                    <Icon className="w-6 h-6 text-primary-light mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white text-glow">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="w-full sm:w-auto bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 
                text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 
                hover:scale-[1.02] flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                className="w-full sm:w-auto px-6 py-3 rounded-lg font-medium border border-sky-500/20 hover:border-sky-500/40 
                text-white transition-all duration-200 hover:bg-sky-500/10"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:ml-auto mt-8 lg:mt-0">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </div>
  );
}

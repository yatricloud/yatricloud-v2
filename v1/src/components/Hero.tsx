import React from 'react';
import { Sparkles, Code2 } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#040d21] pt-32 pb-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-radial from-purple-500/20 via-transparent to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Your AI pair programmer
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            GitHub Copilot uses OpenAI Codex to suggest code and entire functions in real-time, right from your editor.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-[#238636] hover:bg-[#2ea043] text-white px-6 py-3 rounded-md font-semibold transition-all duration-200 flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              Start your free trial
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md font-semibold transition-all duration-200">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
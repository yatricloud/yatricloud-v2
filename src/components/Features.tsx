import React from 'react';
import { Brain, Zap, Lock, Globe } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-powered code suggestions",
      description: "Get suggestions for whole lines or entire functions right inside your editor."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning fast",
      description: "Instant suggestions as you type, powered by OpenAI Codex."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Secure and private",
      description: "Your code stays private. Suggestions are filtered for security."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Works everywhere",
      description: "Available in Visual Studio Code, Visual Studio, Neovim, and JetBrains IDEs."
    }
  ];

  return (
    <div className="bg-[#040d21] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-[#161b22] border border-[#30363d] hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="text-purple-400 mb-4">{feature.icon}</div>
              <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
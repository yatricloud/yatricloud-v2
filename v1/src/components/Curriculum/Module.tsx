import React from 'react';

interface ModuleProps {
  icon: () => JSX.Element;
  title: string;
  topics: string[];
  duration: string;
}

export function Module({ icon: Icon, title, topics, duration }: ModuleProps) {
  return (
    <div className="group relative p-6 rounded-lg bg-[rgba(22,27,34,0.8)] backdrop-blur-sm border border-[#30363d] hover:border-blue-500/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 mr-3">
            <Icon />
          </div>
          <h3 className="text-xl font-semibold text-white group-hover:text-glow">{title}</h3>
        </div>
        <ul className="space-y-2 mb-4">
          {topics.map((topic, index) => (
            <li key={index} className="flex items-center text-gray-400">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
              {topic}
            </li>
          ))}
        </ul>
        <div className="text-sm text-blue-400">{duration}</div>
      </div>
    </div>
  );
}
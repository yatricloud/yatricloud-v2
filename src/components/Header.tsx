import React from 'react';
import { Github, Code2 } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-[rgba(22,27,34,0.8)] backdrop-blur-md z-50 border-b border-[#30363d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Github className="w-8 h-8 text-white" />
            <span className="text-white font-semibold">GitHub Copilot</span>
          </div>
          <nav className="flex items-center space-x-4">
            <button className="text-white/70 hover:text-white transition-colors">Documentation</button>
            <button className="text-white/70 hover:text-white transition-colors">Pricing</button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-colors">
              Sign up
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
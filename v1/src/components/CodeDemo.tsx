import React from 'react';
import { Code2 } from 'lucide-react';

export function CodeDemo() {
  return (
    <div className="bg-[#0d1117] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-lg bg-[#161b22] p-6 border border-[#30363d] overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <pre className="text-[#e6edf3] font-mono text-sm overflow-x-auto">
            <code>{`function calculateFibonacci(n: number): number {
  if (n <= 1) return n;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

// GitHub Copilot suggests:
function fibonacciSequence(length: number): number[] {
  const sequence = [0, 1];
  for (let i = 2; i < length; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}`}</code>
          </pre>
          
          <div className="absolute top-2 right-2">
            <Code2 className="w-5 h-5 text-purple-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
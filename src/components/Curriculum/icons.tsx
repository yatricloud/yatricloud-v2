import React from 'react';
import { Terminal, Cloud, Code, Book } from 'lucide-react';

export const ModuleIcons = {
  Terminal: () => <Terminal className="w-5 h-5" />,
  Cloud: () => <Cloud className="w-5 h-5" />,
  Code: () => <Code className="w-5 h-5" />,
  Book: () => <Book className="w-5 h-5" />
} as const;
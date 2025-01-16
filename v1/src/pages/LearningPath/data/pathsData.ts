import { BookOpen, Code, Target } from 'lucide-react';
import type { LearningPath } from '../types';

export const learningPaths: LearningPath[] = [
  {
    id: 'cloud-fundamentals',
    title: 'Cloud Fundamentals',
    description: 'Master the core concepts of cloud computing and essential services',
    duration: '4-6 weeks',
    level: 'Beginner',
    icon: BookOpen,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'devops-essentials',
    title: 'DevOps Essentials',
    description: 'Learn infrastructure as code, CI/CD, and automation practices',
    duration: '8-10 weeks',
    level: 'Intermediate',
    icon: Code,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Architecture',
    description: 'Design and implement scalable cloud solutions',
    duration: '12-14 weeks',
    level: 'Advanced',
    icon: Target,
    gradient: 'from-amber-500 to-orange-500'
  }
];
import { LucideIcon } from 'lucide-react';

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  icon: LucideIcon;
  gradient: string;
}
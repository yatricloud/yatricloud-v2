import { CERTIFICATION_LOGOS } from '../../constants/certifications';
import type { TechnicalLeader } from './types';

export const technicalLeaders: TechnicalLeader[] = [
  {
    title: 'Microsoft Certified Trainer',
    logo: CERTIFICATION_LOGOS.mct,
    description: 'Expert instructors certified by Microsoft to deliver official training courses',
    gradient: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10'
  },
  {
    title: 'Microsoft MVP',
    logo: CERTIFICATION_LOGOS.mvp,
    description: 'Microsoft Most Valuable Professionals recognized for their technical expertise',
    gradient: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10'
  },
  {
    title: 'Gold Microsoft Learn Student Ambassador',
    logo: CERTIFICATION_LOGOS.goldMlsa,
    description: 'Elite student leaders fostering technical communities worldwide',
    gradient: 'bg-gradient-to-br from-amber-500/10 to-yellow-500/10'
  }
];
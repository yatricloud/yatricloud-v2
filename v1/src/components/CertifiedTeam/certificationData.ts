import type { Certification } from './types';

export const certifications: Certification[] = [
  {
    name: 'Microsoft Azure',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    description:
      'Expert-level cloud solutions and infrastructure management with Microsoft Azure',
    certCount: 25,
    gradient: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10',
  },
  {
    name: 'Amazon AWS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    description:
      'Advanced cloud computing and DevOps practices with Amazon Web Services',
    certCount: 30,
    gradient: 'bg-gradient-to-br from-orange-500/10 to-yellow-500/10',
  },
  {
    name: 'GitHub',
    logo: 'https://i.ibb.co/tbyKkFj/pngegg.png',
    description:
      'Version control, collaboration, and CI/CD expertise with GitHub',
    certCount: 20,
    gradient: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10',
  },
  {
    name: 'Salesforce',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg',
    description:
      'Customer relationship management and cloud solutions with Salesforce',
    certCount: 15,
    gradient: 'bg-gradient-to-br from-sky-500/10 to-indigo-500/10',
  },
];

import type { Expert, Session } from '../types';

export const experts: Expert[] = [
  {
    name: 'Cloud Architecture Master',
    title: 'Principal Cloud Architect & MCT',
    icon: '🏗️',
    certifications: [
      'Microsoft Certified Trainer',
      'Azure Solutions Architect Expert',
      'AWS Solutions Architect Professional'
    ],
    achievements: [
      'Architected solutions for Fortune 500 companies',
      'Led 100+ enterprise cloud migrations',
      'Published author on cloud architecture'
    ],
    specialization: 'Enterprise Cloud Transformation'
  },
  {
    name: 'Security Guardian',
    title: 'Cloud Security Architect & CISSP',
    icon: '🛡️',
    certifications: [
      'CISSP',
      'Azure Security Engineer Expert',
      'AWS Security Specialty'
    ],
    achievements: [
      'Protected $1B+ in cloud infrastructure',
      'Prevented 50+ major security breaches',
      'Industry-recognized security researcher'
    ],
    specialization: 'Zero Trust Architecture'
  },
  {
    name: 'DevOps Innovator',
    title: 'Principal DevOps Engineer',
    icon: '⚡',
    certifications: [
      'Azure DevOps Expert',
      'Kubernetes CKA & CKAD',
      'HashiCorp Certified'
    ],
    achievements: [
      'Reduced deployment time by 90%',
      'Implemented CI/CD for 200+ teams',
      'Open source contributor'
    ],
    specialization: 'DevOps Transformation'
  }
];

export const upcomingSessions: Session[] = [
  {
    title: 'Mastering Cloud Architecture Patterns',
    expert: experts[0],
    date: 'March 15, 2024',
    time: '10:00 AM EST',
    duration: '3 hours',
    attendees: 50,
    level: 'Advanced',
    topics: [
      'Event-Driven Architecture in Practice',
      'Microservices Communication Patterns',
      'Scalability Design Principles',
      'Cost-Effective Architecture Decisions'
    ],
    highlights: [
      'Live architecture reviews',
      'Real-world case studies',
      'Interactive Q&A',
      'Take-home architecture templates'
    ]
  },
  {
    title: 'Zero Trust Security Implementation',
    expert: experts[1],
    date: 'March 20, 2024',
    time: '2:00 PM EST',
    duration: '4 hours',
    attendees: 40,
    level: 'Expert',
    topics: [
      'Identity-First Security Model',
      'Multi-Cloud Security Patterns',
      'Advanced Threat Detection',
      'Automated Security Response'
    ],
    highlights: [
      'Security lab exercises',
      'Threat modeling workshop',
      'Security automation demos',
      'Compliance framework mapping'
    ]
  },
  {
    title: 'Enterprise DevOps Transformation',
    expert: experts[2],
    date: 'March 25, 2024',
    time: '11:00 AM EST',
    duration: '3 hours',
    attendees: 45,
    level: 'Intermediate',
    topics: [
      'GitOps Implementation',
      'Infrastructure as Code at Scale',
      'Container Orchestration Mastery',
      'DevSecOps Integration'
    ],
    highlights: [
      'Live coding sessions',
      'Pipeline optimization workshop',
      'Tool comparison deep-dive',
      'Best practices template pack'
    ]
  }
];
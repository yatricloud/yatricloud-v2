import { CourseDetails } from '../../types/course';
import { az900Modules } from './az900';

export const az900Details: CourseDetails = {
  id: 'az-900',
  title: 'Microsoft Azure Fundamentals',
  description: 'Build your foundation in cloud computing and get certified with Microsoft Azure Fundamentals. This course covers cloud concepts, Azure services, security, privacy, compliance, and trust.',
  level: 'Foundational',
  duration: '4 weeks',
  prerequisites: [
    'Basic understanding of cloud computing concepts',
    'Familiarity with web technologies',
    'No prior Azure experience required'
  ],
  modules: az900Modules,
  learningObjectives: [
    'Understand cloud computing and its value proposition',
    'Describe core Azure architectural components',
    'Explain key Azure services and solutions',
    'Understand Azure security, privacy, compliance, and trust',
    'Explain Azure pricing, service level agreements, and lifecycles'
  ],
  examDetails: {
    code: 'AZ-900',
    name: 'Microsoft Azure Fundamentals',
    questionCount: 40,
    passingScore: 700,
    duration: '65 minutes'
  }
};
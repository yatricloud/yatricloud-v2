import { AZ900Course } from '../../../types/az900';

export const az900CourseDetails: AZ900Course = {
  code: 'AZ-900',
  title: 'Microsoft Azure Fundamentals',
  description: 'Master the fundamentals of cloud computing and Microsoft Azure. This comprehensive course covers cloud concepts, core Azure services, security, privacy, compliance, and Azure pricing and support.',
  level: 'Foundational',
  duration: '4 weeks',
  price: 299,
  prerequisites: [
    'Basic understanding of cloud computing concepts',
    'Familiarity with web technologies',
    'No prior Azure experience required'
  ],
  examDetails: {
    questionCount: 40,
    passingScore: 700,
    duration: '65 minutes'
  },
  modules: [
    {
      title: 'Cloud Concepts',
      description: 'Understanding cloud computing and its service models',
      duration: '1 week',
      topics: [
        'Introduction to Cloud Computing',
        'Benefits of Cloud Services',
        'Cloud Service Types (IaaS, PaaS, SaaS)',
        'Cloud Deployment Models',
        'Economics of Cloud Computing'
      ],
      learningObjectives: [
        'Define cloud computing and its key characteristics',
        'Explain the benefits and considerations of using cloud services',
        'Describe the differences between IaaS, PaaS, and SaaS',
        'Identify the core architectural components of Azure'
      ]
    },
    {
      title: 'Azure Core Services',
      description: 'Explore fundamental Azure services and their use cases',
      duration: '1 week',
      topics: [
        'Azure Architectural Components',
        'Compute Services (VMs, App Services)',
        'Storage Solutions',
        'Networking Services',
        'Database Services'
      ],
      learningObjectives: [
        'Describe core Azure architectural components',
        'Explain key Azure compute and networking services',
        'Understand Azure storage options and their use cases',
        'Learn about Azure database services'
      ]
    },
    {
      title: 'Security and Compliance',
      description: 'Learn about Azure security features and compliance standards',
      duration: '1 week',
      topics: [
        'Identity Services and Azure AD',
        'Security Tools and Features',
        'Azure Governance Methodologies',
        'Privacy and Compliance Standards',
        'Data Protection Standards'
      ],
      learningObjectives: [
        'Describe Azure identity services and security tools',
        'Understand Azure governance methodologies',
        'Explain privacy, compliance, and data protection standards',
        'Learn about network security and threat protection'
      ]
    },
    {
      title: 'Pricing and Support',
      description: 'Understanding Azure pricing, SLAs, and support options',
      duration: '1 week',
      topics: [
        'Azure Subscriptions',
        'Cost Management and Tools',
        'Service Level Agreements (SLAs)',
        'Service Lifecycle',
        'Azure Support Options'
      ],
      learningObjectives: [
        'Understand Azure subscriptions and cost management',
        'Explain Azure Service Level Agreements (SLAs)',
        'Learn about service lifecycle in Azure',
        'Describe Azure support options and tools'
      ]
    }
  ]
};
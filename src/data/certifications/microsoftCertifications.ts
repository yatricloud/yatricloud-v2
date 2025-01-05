import { CertificationDetail } from '../../types/certification';

export const microsoftCertifications: Record<string, CertificationDetail> = {
  'DP-900': {
    code: 'DP-900',
    name: 'Microsoft Azure Data Fundamentals',
    level: 'Foundational',
    description: 'Learn fundamental data concepts including relational and non-relational data, big data, and analytics.',
    credlyBadge: 'https://images.credly.com/size/340x340/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png',
    duration: '4 weeks',
    price: 299,
    discountedPrice: 249,
    examVoucher: true,
    learningObjectives: [
      'Core data concepts (15-20%)',
      'Relational data in Azure (25-30%)',
      'Non-relational data in Azure (25-30%)',
      'Analytics workload in Azure (25-30%)'
    ],
    prerequisites: [
      'Basic understanding of data concepts',
      'No prior Azure experience required',
      'Basic computer literacy'
    ],
    curriculum: [
      {
        title: 'Core Data Concepts',
        topics: [
          'Data Types and Structures',
          'Data Roles and Services',
          'Data Processing Methods',
          'Data Security Requirements'
        ]
      },
      {
        title: 'Azure Data Services',
        topics: [
          'Azure SQL Database',
          'Azure Cosmos DB',
          'Azure Synapse Analytics',
          'Azure Data Lake'
        ]
      },
      {
        title: 'Data Analytics',
        topics: [
          'Business Intelligence',
          'Data Visualization',
          'Real-time Analytics',
          'Big Data Processing'
        ]
      }
    ]
  },
  'AI-900': {
    code: 'AI-900',
    name: 'Microsoft Azure AI Fundamentals',
    level: 'Foundational',
    description: 'Master the fundamentals of artificial intelligence and machine learning on Microsoft Azure.',
    credlyBadge: 'https://images.credly.com/size/340x340/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png',
    duration: '4 weeks',
    price: 299,
    discountedPrice: 249,
    examVoucher: true,
    learningObjectives: [
      'AI workloads and considerations (15-20%)',
      'Fundamental ML principles (30-35%)',
      'Computer Vision workloads (15-20%)',
      'Natural Language Processing (15-20%)',
      'Conversational AI (15-20%)'
    ],
    prerequisites: [
      'Basic understanding of cloud concepts',
      'No prior AI/ML experience required',
      'Basic programming knowledge helpful but not required'
    ],
    curriculum: [
      {
        title: 'AI and ML Fundamentals',
        topics: [
          'Introduction to AI',
          'Machine Learning Basics',
          'Responsible AI Principles',
          'Azure AI Services Overview'
        ]
      },
      {
        title: 'Computer Vision',
        topics: [
          'Image Classification',
          'Object Detection',
          'Face Recognition',
          'OCR Technologies'
        ]
      },
      {
        title: 'Natural Language AI',
        topics: [
          'Text Analytics',
          'Language Understanding',
          'Speech Services',
          'Bot Framework'
        ]
      }
    ]
  },
  'AZ-104': {
    code: 'AZ-104',
    name: 'Microsoft Azure Administrator',
    level: 'Associate',
    description: 'Learn to implement, monitor, and maintain Microsoft Azure solutions.',
    credlyBadge: 'https://images.credly.com/size/340x340/images/336eebfc-0ac3-4553-9a67-b402f491f185/image.png',
    duration: '8 weeks',
    price: 599,
    discountedPrice: 499,
    examVoucher: true,
    learningObjectives: [
      'Manage Azure identities and governance (15-20%)',
      'Implement and manage storage (15-20%)',
      'Deploy and manage Azure compute resources (20-25%)',
      'Configure and manage virtual networking (25-30%)',
      'Monitor and maintain Azure resources (10-15%)'
    ],
    prerequisites: [
      'Azure Fundamentals certification recommended',
      'Basic PowerShell or Azure CLI experience',
      'Understanding of networking concepts',
      'Understanding of virtualization concepts'
    ],
    curriculum: [
      {
        title: 'Identity and Governance',
        topics: [
          'Azure Active Directory',
          'Role-Based Access Control',
          'Subscriptions and Governance',
          'Azure Policy and Blueprints'
        ]
      },
      {
        title: 'Storage and Compute',
        topics: [
          'Azure Storage Services',
          'Virtual Machines',
          'App Services',
          'Container Services'
        ]
      },
      {
        title: 'Networking and Security',
        topics: [
          'Virtual Networks',
          'Network Security Groups',
          'Load Balancing',
          'VPN and ExpressRoute'
        ]
      }
    ]
  },
  'AZ-204': {
    code: 'AZ-204',
    name: 'Developing Solutions for Microsoft Azure',
    level: 'Associate',
    description: 'Master cloud development with Azure services and solutions.',
    credlyBadge: 'https://images.credly.com/size/340x340/images/63316b60-f62d-4e51-aacc-c23cb850089c/azure-developer-associate-600x600.png',
    duration: '10 weeks',
    price: 699,
    discountedPrice: 599,
    examVoucher: true,
    learningObjectives: [
      'Develop Azure compute solutions (25-30%)',
      'Develop for Azure storage (15-20%)',
      'Implement Azure security (20-25%)',
      'Monitor, troubleshoot, and optimize (15-20%)',
      'Connect to and consume Azure services (15-20%)'
    ],
    prerequisites: [
      '1-2 years professional development experience',
      'Experience with Azure IaaS and PaaS solutions',
      'Proficiency in C# or JavaScript',
      'Understanding of REST APIs'
    ],
    curriculum: [
      {
        title: 'Azure Compute Solutions',
        topics: [
          'Azure Functions',
          'Web Apps',
          'Docker Containers',
          'Azure Kubernetes Service'
        ]
      },
      {
        title: 'Azure Storage',
        topics: [
          'Blob Storage',
          'Cosmos DB',
          'Caching Solutions',
          'Data Security'
        ]
      },
      {
        title: 'Security and Monitoring',
        topics: [
          'Authentication',
          'Authorization',
          'Application Insights',
          'Performance Optimization'
        ]
      }
    ]
  },
  'AZ-500': {
    code: 'AZ-500',
    name: 'Microsoft Azure Security Technologies',
    level: 'Associate',
    description: 'Implement security controls and threat protection on Azure.',
    credlyBadge: 'https://images.credly.com/size/340x340/images/1ad16b6f-2c71-4a2e-ae74-ec69c4766039/azure-security-engineer-associate600x600.png',
    duration: '8 weeks',
    price: 599,
    discountedPrice: 499,
    examVoucher: true,
    learningObjectives: [
      'Manage identity and access (30-35%)',
      'Implement platform protection (15-20%)',
      'Manage security operations (25-30%)',
      'Secure data and applications (20-25%)'
    ],
    prerequisites: [
      'Understanding of security concepts',
      'Experience with Windows and Linux security',
      'Basic scripting and automation',
      'Networking security fundamentals'
    ],
    curriculum: [
      {
        title: 'Identity and Access',
        topics: [
          'Azure AD Security',
          'Conditional Access',
          'Identity Protection',
          'Privileged Identity Management'
        ]
      },
      {
        title: 'Security Operations',
        topics: [
          'Azure Security Center',
          'Azure Sentinel',
          'Security Monitoring',
          'Incident Response'
        ]
      },
      {
        title: 'Data Security',
        topics: [
          'Encryption Technologies',
          'Key Vault',
          'Information Protection',
          'Data Classification'
        ]
      }
    ]
  },
  'AZ-400': {
    code: 'AZ-400',
    name: 'Designing and Implementing Microsoft DevOps Solutions',
    level: 'Expert',
    description: 'Master DevOps practices and implement continuous integration and delivery.',
    credlyBadge: 'https://images.credly.com/size/340x340/images/107e2eb6-f394-40eb-83d2-d8c9b7d34555/azure-devops-engineer-expert-600x600.png',
    duration: '12 weeks',
    price: 799,
    discountedPrice: 699,
    examVoucher: true,
    learningObjectives: [
      'Configure processes and communications (10-15%)',
      'Design and implement source control (15-20%)',
      'Design and implement build and release pipelines (40-45%)',
      'Develop security and compliance plan (10-15%)',
      'Implement application infrastructure (15-20%)'
    ],
    prerequisites: [
      'Experience with Azure administration',
      'Experience with Azure development',
      'Understanding of DevOps principles',
      'Source control and agile development experience'
    ],
    curriculum: [
      {
        title: 'DevOps Fundamentals',
        topics: [
          'DevOps Principles',
          'Azure DevOps Services',
          'Project Management',
          'Team Collaboration'
        ]
      },
      {
        title: 'CI/CD Implementation',
        topics: [
          'Build Pipelines',
          'Release Management',
          'Deployment Patterns',
          'Infrastructure as Code'
        ]
      },
      {
        title: 'Quality and Security',
        topics: [
          'Testing Strategies',
          'Security Validation',
          'Monitoring Solutions',
          'Compliance Automation'
        ]
      }
    ]
  },
  'AZ-305': {
    code: 'AZ-305',
    name: 'Designing Microsoft Azure Infrastructure Solutions',
    level: 'Expert',
    description: 'Design and implement end-to-end cloud solutions on Microsoft Azure.',
    credlyBadge: 'https://images.credly.com/size/340x340/images/987adb7e-49be-4e24-b67e-55986bd3fe66/image.png',
    duration: '12 weeks',
    price: 799,
    discountedPrice: 699,
    examVoucher: true,
    learningObjectives: [
      'Design identity, governance, and monitoring solutions (25-30%)',
      'Design data storage solutions (25-30%)',
      'Design business continuity solutions (10-15%)',
      'Design infrastructure solutions (25-30%)'
    ],
    prerequisites: [
      'Azure Administrator Associate certification',
      'Experience with high availability and disaster recovery',
      'Understanding of security and compliance',
      'Experience with automation and DevOps practices'
    ],
    curriculum: [
      {
        title: 'Solution Architecture',
        topics: [
          'Architecture Patterns',
          'Solution Design',
          'Migration Strategies',
          'Cost Optimization'
        ]
      },
      {
        title: 'Infrastructure Design',
        topics: [
          'Compute Solutions',
          'Network Architecture',
          'Storage Design',
          'Container Services'
        ]
      },
      {
        title: 'Security and Governance',
        topics: [
          'Identity Solutions',
          'Data Protection',
          'Network Security',
          'Monitoring Strategy'
        ]
      }
    ]
  }
};
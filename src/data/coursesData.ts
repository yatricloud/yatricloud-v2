import { Course } from '../types/course';

export const courses: Course[] = [
  {
    id: 'azure',
    title: 'Microsoft Azure',
    provider: 'Microsoft',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    logo: 'https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png',
    description: 'Master cloud computing with Microsoft Azure certifications',
    gradient: 'from-[#0078D4] to-[#50E6FF]',
    certifications: [
      {
        name: 'Azure Fundamentals',
        code: 'AZ-900',
        level: 'Foundational',
        description: 'Cloud concepts, Azure services, security, privacy, compliance, and trust',
        credlyBadge: 'https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png',
        examUrl: 'https://learn.microsoft.com/credentials/certifications/azure-fundamentals/'
      },
      {
        name: 'Azure Administrator',
        code: 'AZ-104',
        level: 'Associate',
        description: 'Implement, monitor, and maintain Microsoft Azure solutions',
        credlyBadge: 'https://images.credly.com/size/340x340/images/336eebfc-0ac3-4553-9a67-b402f491f185/azure-administrator-associate-600x600.png',
        examUrl: 'https://learn.microsoft.com/credentials/certifications/azure-administrator/'
      },
      {
        name: 'Azure Solutions Architect',
        code: 'AZ-305',
        level: 'Expert',
        description: 'Design and implement solutions that run on Microsoft Azure',
        credlyBadge: 'https://images.credly.com/size/340x340/images/987adb7e-49be-4e24-b67e-55986bd3fe66/azure-solutions-architect-expert-600x600.png',
        examUrl: 'https://learn.microsoft.com/credentials/certifications/azure-solutions-architect/'
      }
    ]
  },
  {
    id: 'aws',
    title: 'Amazon Web Services',
    provider: 'Amazon',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    logo: 'https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    description: 'Build your AWS cloud expertise with industry-recognized certifications',
    gradient: 'from-[#FF9900] to-[#FFB266]',
    certifications: [
      {
        name: 'AWS Cloud Practitioner',
        code: 'CLF-C01',
        level: 'Foundational',
        description: 'Overview of AWS Cloud concepts, services, security, architecture, and pricing',
        credlyBadge: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
        examUrl: 'https://aws.amazon.com/certification/certified-cloud-practitioner/'
      },
      {
        name: 'AWS Solutions Architect Associate',
        code: 'SAA-C03',
        level: 'Associate',
        description: 'Design and deploy scalable systems on AWS',
        credlyBadge: 'https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
        examUrl: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/'
      },
      {
        name: 'AWS DevOps Engineer Professional',
        code: 'DOP-C02',
        level: 'Professional',
        description: 'Implement and manage continuous delivery systems on AWS',
        credlyBadge: 'https://images.credly.com/size/340x340/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png',
        examUrl: 'https://aws.amazon.com/certification/certified-devops-engineer-professional/'
      }
    ],
    status: 'coming_soon'
  },
  {
    id: 'gcp',
    title: 'Google Cloud Platform',
    provider: 'Google',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    logo: 'https://images.credly.com/images/ae2f5bae-b110-4ea1-8e26-77cf5f76c81e/GCP_Associate_Cloud_Engineer.png',
    description: 'Master cloud computing with Google Cloud Platform certifications',
    gradient: 'from-[#4285F4] to-[#34A853]',
    certifications: [
      {
        name: 'Cloud Digital Leader',
        code: 'CDL',
        level: 'Foundational',
        description: 'Understanding of cloud technology and its business application',
        credlyBadge: 'https://images.credly.com/size/340x340/images/8d67bbf4-128b-4141-b5f1-1bc61bbfbaa6/image.png',
        examUrl: 'https://cloud.google.com/certification/cloud-digital-leader'
      },
      {
        name: 'Professional Cloud Architect',
        code: 'PCA',
        level: 'Professional',
        description: 'Design, develop, and manage robust, secure, scalable solutions',
        credlyBadge: 'https://images.credly.com/size/340x340/images/516d626c-6c4c-4c61-b837-1689ccd4956f/GCP_Professional_Cloud_Architect.png',
        examUrl: 'https://cloud.google.com/certification/cloud-architect'
      },
      {
        name: 'Professional Cloud DevOps Engineer',
        code: 'PDE',
        level: 'Professional',
        description: 'Build and maintain reliable, secure, and efficient systems',
        credlyBadge: 'https://images.credly.com/size/340x340/images/9f11c723-7c5b-4e1a-9404-f4bf37e9d8b0/image.png',
        examUrl: 'https://cloud.google.com/certification/cloud-devops-engineer'
      }
    ],
    status: 'coming_soon'
  },
  {
    id: 'salesforce',
    title: 'Salesforce',
    provider: 'Salesforce',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg',
    logo: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu5&oid=00DF0000000gZsu&lastMod=1617267801000',
    description: 'Become a certified Salesforce professional with industry-recognized credentials',
    gradient: 'from-[#00A1E0] to-[#1798C1]',
    certifications: [
      {
        name: 'Salesforce Administrator',
        code: 'ADM-201',
        level: 'Associate',
        description: 'Master Salesforce administration and configuration',
        credlyBadge: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu5&oid=00DF0000000gZsu&lastMod=1617267801000',
        examUrl: 'https://trailhead.salesforce.com/credentials/administrator'
      },
      {
        name: 'Platform Developer I',
        code: 'DEV-402',
        level: 'Associate',
        description: 'Develop custom applications on the Salesforce platform',
        credlyBadge: 'https://drm.file.force.com/servlet/servlet.ImageServer?id=0153k00000A5Mu5&oid=00DF0000000gZsu&lastMod=1617267801000',
        examUrl: 'https://trailhead.salesforce.com/credentials/platformdeveloperi'
      }
    ],
    status: 'coming_soon'
  },
  {
    id: 'devops',
    title: 'DevOps',
    provider: 'Multiple Providers',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    description: 'Comprehensive DevOps certification path covering essential tools and practices',
    gradient: 'from-[#326CE5] to-[#54B4EB]',
    certifications: [
      {
        name: 'Docker Certified Associate',
        code: 'DCA-001',
        level: 'Associate',
        description: 'Master containerization with Docker technology',
        credlyBadge: 'https://images.credly.com/size/340x340/images/99289602-861e-4929-8277-773e63a2fa6f/image.png',
        examUrl: 'https://training.mirantis.com/certification/dca-certification-exam/'
      },
      {
        name: 'Certified Kubernetes Administrator',
        code: 'CKA-002',
        level: 'Professional',
        description: 'Deploy and manage Kubernetes clusters',
        credlyBadge: 'https://images.credly.com/size/340x340/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png',
        examUrl: 'https://www.cncf.io/certification/cka/'
      },
      {
        name: 'HashiCorp Terraform Associate',
        code: 'TF-003',
        level: 'Associate',
        description: 'Infrastructure as Code with Terraform',
        credlyBadge: 'https://images.credly.com/size/340x340/images/99289602-861e-4929-8277-773e63a2fa6f/image.png',
        examUrl: 'https://www.hashicorp.com/certification/terraform-associate'
      }
    ],
    status: 'coming_soon'
  },
  {
    id: 'github',
    title: 'GitHub',
    provider: 'GitHub',
    icon: '/github-mark-white.svg',
    logo: '/github-mark-white.svg',
    description: 'Master version control and collaboration with GitHub certifications',
    gradient: 'from-[#2D333B] to-[#444D56]',
    certifications: [
      {
        name: 'GitHub Foundations',
        code: 'GHF-001',
        level: 'Foundational',
        description: 'Learn the basics of Git and GitHub, including repositories, branches, and pull requests',
        credlyBadge: 'https://images.credly.com/size/340x340/images/e06d5627-5ff7-483f-b8e1-44cd6342aa11/github-foundations.png',
        examUrl: 'https://resources.github.com/learn/certifications/'
      },
      {
        name: 'GitHub Actions',
        code: 'GHA-002',
        level: 'Associate',
        description: 'Automate software workflows with GitHub Actions',
        credlyBadge: 'https://images.credly.com/size/340x340/images/89efc3e7-842b-4790-b09b-9ea5efc71ec3/image.png',
        examUrl: 'https://resources.github.com/learn/certifications/'
      },
      {
        name: 'GitHub Advanced Security',
        code: 'GHAS-003',
        level: 'Professional',
        description: 'Implement advanced security features and best practices',
        credlyBadge: 'https://images.credly.com/size/340x340/images/c9ed294b-f8ac-48fa-a8c3-96dab1f110f2/image.png',
        examUrl: 'https://resources.github.com/learn/certifications/'
      }
    ],
    status: 'coming_soon'
  }
];
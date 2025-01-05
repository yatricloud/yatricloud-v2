import { BookOpen, Target, Trophy } from 'lucide-react';
import type { PathwayDetails } from '../types';

export const pathwayDetails: Record<string, PathwayDetails> = {
  "cloud-fundamentals": {
    title: "Cloud Fundamentals",
    description: "Master the core concepts of cloud computing and essential services",
    duration: "4-6 weeks",
    level: "Beginner",
    certifications: ["AZ-900", "AWS CCP", "GCP CDL"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    icon: BookOpen,
    modules: [
      {
        title: "Introduction to Cloud Computing",
        description: "Learn the basics of cloud computing and its service models",
        duration: "1 week",
        topics: [
          "What is Cloud Computing?",
          "Cloud Service Models (IaaS, PaaS, SaaS)",
          "Cloud Deployment Models",
          "Benefits and Considerations"
        ]
      },
      {
        title: "Core Cloud Services",
        description: "Explore fundamental cloud services and their use cases",
        duration: "2 weeks",
        topics: [
          "Compute Services",
          "Storage Solutions",
          "Networking Fundamentals",
          "Identity and Access Management"
        ]
      }
    ]
  },
  "devops-mastery": {
    title: "DevOps Mastery",
    description: "Learn infrastructure as code, CI/CD, and automation practices",
    duration: "8-10 weeks",
    level: "Intermediate",
    certifications: ["AZ-400", "AWS DevOps", "CKA"],
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: Target,
    modules: [
      {
        title: "Infrastructure as Code",
        description: "Master infrastructure automation with Terraform and ARM templates",
        duration: "3 weeks",
        topics: [
          "Terraform Fundamentals",
          "ARM Templates",
          "State Management",
          "Best Practices"
        ]
      },
      {
        title: "CI/CD Pipelines",
        description: "Build and maintain automated deployment pipelines",
        duration: "3 weeks",
        topics: [
          "Pipeline Design",
          "Automated Testing",
          "Deployment Strategies",
          "Monitoring and Logging"
        ]
      }
    ]
  }
};
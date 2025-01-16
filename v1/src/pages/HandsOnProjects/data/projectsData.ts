import { Project, Lab } from '../types';

export const projects: Project[] = [
  {
    id: 'azure-webapp',
    title: 'Build and Deploy Azure Web App',
    description: 'Deploy a scalable web application using Azure App Service and GitHub Actions',
    duration: '2 hours',
    difficulty: 'Beginner',
    skills: ['CI/CD', 'Azure App Service', 'GitHub Actions'],
    technologies: ['Azure', 'Node.js', 'GitHub'],
    thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1600'
  },
  {
    id: 'kubernetes-cluster',
    title: 'Deploy Kubernetes Cluster',
    description: 'Set up and manage a production-ready Kubernetes cluster on AKS',
    duration: '3 hours',
    difficulty: 'Advanced',
    skills: ['Kubernetes', 'Container Orchestration', 'Networking'],
    technologies: ['AKS', 'Docker', 'Helm'],
    thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1600'
  }
];

export const microsoftLabs: Lab[] = [
  {
    id: 'az-204-lab1',
    title: 'Implement Azure App Service Web Apps',
    description: 'Create and configure Azure App Service, deploy web applications, and manage app settings',
    duration: '1.5 hours',
    skills: ['Azure App Service', 'Web Apps', 'Application Settings'],
    status: 'Available'
  },
  {
    id: 'az-204-lab2',
    title: 'Implement Azure Functions',
    description: 'Build serverless solutions using Azure Functions and integrate with other Azure services',
    duration: '2 hours',
    skills: ['Azure Functions', 'Serverless', 'Event-driven Architecture'],
    status: 'Available'
  }
];
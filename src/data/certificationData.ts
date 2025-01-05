import { CertificationGroup, CertificationDetail } from '../types/certification';
import { microsoftCertifications } from './certifications/microsoftCertifications';

export const azureCertifications: CertificationGroup[] = [
  {
    title: "Fundamentals: Master the Basics",
    description: "Build your foundation with these essential Azure certifications",
    certifications: [
      {
        code: "DP-900",
        name: "Data Fundamentals", 
        level: "Fundamentals",
        description: "Core data concepts and Microsoft data services"
      },
      {
        code: "AI-900",
        name: "AI Fundamentals",
        level: "Fundamentals", 
        description: "Artificial Intelligence and Machine Learning fundamentals"
      }
    ]
  },
  {
    title: "Associate: Build Your Expertise",
    description: "Take your skills to the next level with role-based certifications",
    certifications: [
      {
        code: "AZ-104",
        name: "Azure Administrator",
        level: "Associate",
        description: "Implement, monitor, and maintain Microsoft Azure solutions"
      },
      {
        code: "AZ-204",
        name: "Azure Developer",
        level: "Associate",
        description: "Design, build, test, and maintain cloud applications"
      },
      {
        code: "AZ-500",
        name: "Azure Security Engineer",
        level: "Associate",
        description: "Implement security controls and threat protection"
      }
    ]
  },
  {
    title: "Expert: Demonstrate Mastery",
    description: "Showcase your advanced skills and technical expertise",
    certifications: [
      {
        code: "AZ-305",
        name: "Azure Solutions Architect",
        level: "Expert",
        description: "Design and implement end-to-end cloud solutions"
      },
      {
        code: "AZ-400",
        name: "DevOps Engineer",
        level: "Expert",
        description: "Design and implement DevOps practices for Azure"
      }
    ]
  }
];

export const CERTIFICATION_DETAILS: Record<string, CertificationDetail> = {
  ...microsoftCertifications
};
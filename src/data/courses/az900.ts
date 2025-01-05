import { CourseModule } from '../../types/course';

export const az900Modules: CourseModule[] = [
  {
    title: "Cloud Concepts (20-25%)",
    topics: [
      "Describe cloud computing",
      "Describe the benefits of using cloud services",
      "Describe cloud service types",
      "Cloud deployment models (public, private, hybrid)"
    ],
    duration: "1 week"
  },
  {
    title: "Azure Architecture and Services (35-40%)",
    topics: [
      "Azure architectural components",
      "Azure compute and networking services",
      "Azure storage services",
      "Azure identity, access, and security"
    ],
    duration: "2 weeks"
  },
  {
    title: "Azure Management and Governance (30-35%)",
    topics: [
      "Cost management in Azure",
      "Features and tools for governance and compliance",
      "Azure monitoring tools",
      "Azure resource management tools"
    ],
    duration: "1 week"
  }
];
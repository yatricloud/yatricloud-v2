export interface Project {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  skills: string[];
  technologies: string[];
  thumbnail: string;
}

export interface Lab {
  id: string;
  title: string;
  description: string;
  duration: string;
  skills: string[];
  status: 'Available' | 'Coming Soon';
}
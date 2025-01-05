export interface Expert {
  name: string;
  title: string;
  icon: string;
  certifications: string[];
  achievements: string[];
  specialization: string;
}

export interface Session {
  title: string;
  expert: Expert;
  date: string;
  time: string;
  duration: string;
  attendees: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  topics: string[];
  highlights: string[];
}
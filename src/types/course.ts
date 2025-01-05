// Add to existing types
export interface CourseModule {
  title: string;
  topics: string[];
  duration: string;
}

export interface CourseDetails {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  prerequisites: string[];
  modules: CourseModule[];
  learningObjectives: string[];
  examDetails: {
    code: string;
    name: string;
    questionCount: number;
    passingScore: number;
    duration: string;
  };
}
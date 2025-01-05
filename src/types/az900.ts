export interface AZ900Module {
  title: string;
  description: string;
  duration: string;
  topics: string[];
  learningObjectives: string[];
}

export interface AZ900Course {
  code: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  price: number;
  prerequisites: string[];
  modules: AZ900Module[];
  examDetails: {
    questionCount: number;
    passingScore: number;
    duration: string;
  };
}
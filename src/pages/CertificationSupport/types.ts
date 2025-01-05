export interface ExamPrep {
  id: string;
  code: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  duration: string;
  questionsCount: number;
  passingScore: number;
  lastUpdated: string;
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export interface ExamResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  timeSpent: string;
  questionResults: {
    questionId: string;
    correct: boolean;
    userAnswer: number;
  }[];
}
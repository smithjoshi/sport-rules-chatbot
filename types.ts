
export type Sport = 'Cricket' | 'Football' | 'Basketball' | 'Tennis' | 'Rugby' | 'Baseball';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface QuizResult {
  id: string;
  sport: Sport;
  score: number;
  total: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timestamp: number;
}

export enum AppMode {
  Chat = 'chat',
  Quiz = 'quiz',
  Analytics = 'analytics'
}

export type ExperienceLevel = 'fresher' | 'mid-level' | 'senior';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type Mode = 'quick' | 'normal' | 'mcq' | 'theory' | 'mock';

export interface Question {
    id: string;
    title: string;
    topic: string;
    subtopic: string;
    technology: string;
    role: string;
    experienceLevel: ExperienceLevel;
    companyTags: string[];
    difficulty: Difficulty;
    modeTags: Mode[];
    shortAnswer: string;
    normalAnswer: string;
    exampleAnswer: string;
    followUpQuestions: string[];
    relatedQuestions: string[];
    bookmarked: boolean;
    estimatedTime: number;
    mcqOptions?: { text: string; correct: boolean }[];
}

export interface Topic {
    id: string;
    name: string;
    icon: string;
    description: string;
    subtopics: string[];
    questionCount: number;
    color: string;
}

export interface Company {
    id: string;
    name: string;
    logo: string;
    color: string;
    questionCount: number;
}

export interface JobDescription {
    id: string;
    title: string;
    company: string;
    text: string;
}

export interface UserProfile {
    id: string;
    name: string;
    role: string;
    experienceLevel: ExperienceLevel;
    streak: number;
    topicsCompleted: string[];
    readinessByCategory: Record<string, number>;
}

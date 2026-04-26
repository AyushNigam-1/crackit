import { UserProfile } from "../types/indes";

export const users: UserProfile[] = [
    {
        id: 'u1', name: 'Aisha (Fresher Frontend)', role: 'frontend', experienceLevel: 'fresher', streak: 4,
        topicsCompleted: ['javascript', 'react'],
        readinessByCategory: { React: 60, JavaScript: 70, 'Next.js': 30, Databases: 20, 'System Design': 15 }
    },
    {
        id: 'u2', name: 'Rohan (Mid-level Backend)', role: 'backend', experienceLevel: 'mid-level', streak: 12,
        topicsCompleted: ['nodejs', 'databases', 'backend', 'api'],
        readinessByCategory: { 'Node.js': 80, Databases: 75, APIs: 70, 'System Design': 55, Linux: 60 }
    },
    {
        id: 'u3', name: 'Priya (Senior Full-stack)', role: 'fullstack', experienceLevel: 'senior', streak: 25,
        topicsCompleted: ['react', 'nodejs', 'system-design', 'databases', 'nextjs', 'api', 'devops'],
        readinessByCategory: { React: 90, 'Node.js': 85, 'System Design': 80, Databases: 88, DevOps: 75, 'Next.js': 82 }
    },
];

export const currentUser = users[1]; 

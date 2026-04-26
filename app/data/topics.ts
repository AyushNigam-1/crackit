import { Topic } from "../types/indes";

export const topics: Topic[] = [
    {
        id: 'react', name: 'React', icon: '⚛️', description: 'Hooks, components, state', color: 'bg-blue-100 text-blue-700',
        subtopics: ['useState', 'useEffect', 'props', 'rendering', 'memoization', 'state management', 'context', 'refs'], questionCount: 18
    },
    {
        id: 'nextjs', name: 'Next.js', icon: '▲', description: 'SSR, routing, app router', color: 'bg-slate-100 text-slate-800',
        subtopics: ['SSR', 'SSG', 'ISR', 'App Router', 'API Routes', 'Middleware'], questionCount: 12
    },
    {
        id: 'nodejs', name: 'Node.js', icon: '🟢', description: 'Runtime, async, modules', color: 'bg-green-100 text-green-700',
        subtopics: ['event loop', 'streams', 'modules', 'async/await', 'cluster'], questionCount: 14
    },
    {
        id: 'system-design', name: 'System Design', icon: '🏛️', description: 'Architecture & scaling', color: 'bg-purple-100 text-purple-700',
        subtopics: ['load balancing', 'caching', 'CAP theorem', 'microservices', 'message queues', 'sharding'], questionCount: 15
    },
    {
        id: 'backend', name: 'Backend Basics', icon: '⚙️', description: 'Servers, REST, auth', color: 'bg-orange-100 text-orange-700',
        subtopics: ['REST', 'authentication', 'authorization', 'sessions', 'JWT'], questionCount: 11
    },
    {
        id: 'api', name: 'APIs', icon: '🔌', description: 'REST, GraphQL, design', color: 'bg-pink-100 text-pink-700',
        subtopics: ['REST design', 'GraphQL', 'versioning', 'rate limiting', 'webhooks'], questionCount: 9
    },
    {
        id: 'databases', name: 'Databases', icon: '🗄️', description: 'SQL, NoSQL, indexing', color: 'bg-indigo-100 text-indigo-700',
        subtopics: ['indexes', 'transactions', 'normalization', 'NoSQL', 'sharding', 'ACID'], questionCount: 13
    },
    {
        id: 'linux', name: 'Linux', icon: '🐧', description: 'Shell, processes, perms', color: 'bg-gray-100 text-gray-700',
        subtopics: ['permissions', 'processes', 'shell', 'networking commands'], questionCount: 7
    },
    {
        id: 'git', name: 'Git', icon: '🌿', description: 'Version control', color: 'bg-red-100 text-red-700',
        subtopics: ['rebase vs merge', 'branching', 'cherry-pick', 'reset vs revert'], questionCount: 6
    },
    {
        id: 'javascript', name: 'JavaScript', icon: '🟨', description: 'Core language concepts', color: 'bg-yellow-100 text-yellow-700',
        subtopics: ['closures', 'hoisting', 'prototypes', 'event loop', 'this keyword', 'promises'], questionCount: 16
    },
    {
        id: 'typescript', name: 'TypeScript', icon: '🔷', description: 'Types, generics', color: 'bg-cyan-100 text-cyan-700',
        subtopics: ['generics', 'utility types', 'inference', 'narrowing'], questionCount: 8
    },
    {
        id: 'devops', name: 'DevOps', icon: '🚀', description: 'CI/CD, Docker, K8s', color: 'bg-teal-100 text-teal-700',
        subtopics: ['Docker', 'Kubernetes', 'CI/CD', 'monitoring'], questionCount: 9
    },
];
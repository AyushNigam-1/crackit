import { Question } from "../types/indes";

const baseQuestions: Partial<Question>[] = [
    {
        title: 'Explain useState and its working in React', topic: 'react', subtopic: 'useState', technology: 'React',
        shortAnswer: 'useState is a Hook that lets functional components manage local state by returning a state value and an updater function.',
        normalAnswer: 'useState is a React Hook for adding state to functional components. It returns an array with the current state and a setter. React preserves state between renders. Updates trigger re-renders, and state updates are batched for performance. Initial values can be lazy-evaluated by passing a function.',
        exampleAnswer: 'const [count, setCount] = useState(0); — calling setCount(count+1) triggers a re-render with the new value.',
        followUpQuestions: ['Why is the setter function preferred over direct mutation?', 'How does lazy initialization work?', 'What happens if you call useState conditionally?']
    },
    {
        title: 'How does useEffect work and when does it run?', topic: 'react', subtopic: 'useEffect', technology: 'React',
        shortAnswer: 'useEffect runs side effects after render. It runs after commit phase and re-runs based on its dependency array.',
        normalAnswer: 'useEffect lets you perform side effects in functional components. It runs after the render is committed to the screen. The dependency array controls when it re-runs: empty array runs once, no array runs every render, and listed dependencies trigger re-runs on change. Cleanup functions run before next effect or unmount.',
        exampleAnswer: 'useEffect(() => { const id = setInterval(tick,1000); return () => clearInterval(id); }, []);',
        followUpQuestions: ['What is the cleanup function?', 'Difference between useEffect and useLayoutEffect?', 'How to avoid infinite loops?']
    },
    {
        title: 'What is memoization in React?', topic: 'react', subtopic: 'memoization', technology: 'React',
        shortAnswer: 'Memoization caches computed results to avoid re-running expensive operations. React provides useMemo, useCallback, and React.memo.',
        normalAnswer: 'Memoization in React optimizes performance by caching results. useMemo memoizes computed values, useCallback memoizes function references, and React.memo prevents component re-renders when props are unchanged. Overuse can hurt performance due to comparison overhead.',
        exampleAnswer: 'const expensive = useMemo(() => computeHeavy(items), [items]);',
        followUpQuestions: ['When should you NOT memoize?', 'Difference between useMemo and useCallback?']
    },
    {
        title: 'Explain the React rendering process', topic: 'react', subtopic: 'rendering', technology: 'React',
        shortAnswer: 'React renders by building a virtual DOM, diffing it with the previous one, and committing minimal changes to the real DOM.',
        normalAnswer: 'React rendering involves two phases: render phase (pure, builds virtual DOM tree) and commit phase (applies changes to DOM). It uses reconciliation to diff trees efficiently. Fiber architecture allows interruptible rendering.',
        exampleAnswer: 'When state changes, React schedules a re-render, builds a new tree, diffs against the prior tree, then commits.',
        followUpQuestions: ['What is reconciliation?', 'What is React Fiber?']
    },
    {
        title: 'What is SSR vs SSG vs ISR in Next.js?', topic: 'nextjs', subtopic: 'SSR', technology: 'Next.js',
        shortAnswer: 'SSR renders per request, SSG renders at build time, ISR re-generates pages on demand after a set interval.',
        normalAnswer: 'SSR (Server-Side Rendering) generates HTML on every request, ideal for dynamic data. SSG (Static Site Generation) pre-renders pages at build time for max speed. ISR (Incremental Static Regeneration) combines both — pages are static but regenerated periodically based on revalidation rules.',
        exampleAnswer: 'A blog post page can use SSG with revalidate: 60 (ISR) for fresh content without rebuilds.',
        followUpQuestions: ['When would you choose ISR over SSR?', 'How does Next.js cache work?']
    },
    {
        title: 'Explain the App Router in Next.js', topic: 'nextjs', subtopic: 'App Router', technology: 'Next.js',
        shortAnswer: 'App Router is Next.js 13+ file-based routing using React Server Components by default with nested layouts.',
        normalAnswer: 'The App Router uses the /app directory and supports React Server Components, streaming, nested layouts, loading states, and error boundaries via convention-based files (page.tsx, layout.tsx, loading.tsx, error.tsx).',
        exampleAnswer: 'app/dashboard/layout.tsx wraps app/dashboard/page.tsx with shared UI like sidebar.',
        followUpQuestions: ['What are Server Components?', 'How do you do client interactivity?']
    },
    {
        title: 'How does the Node.js event loop work?', topic: 'nodejs', subtopic: 'event loop', technology: 'Node.js',
        shortAnswer: 'The event loop processes async callbacks in phases: timers, pending, idle, poll, check, close — enabling non-blocking I/O.',
        normalAnswer: 'Node.js event loop is single-threaded and runs callbacks in distinct phases. Each phase has its own queue. The loop allows handling thousands of concurrent operations without spawning OS threads, by offloading I/O to libuv.',
        exampleAnswer: 'setTimeout fires in timers phase; setImmediate in check; process.nextTick before any phase.',
        followUpQuestions: ['What is libuv?', 'Difference between setImmediate and setTimeout(0)?']
    },
    {
        title: 'What are Node.js streams?', topic: 'nodejs', subtopic: 'streams', technology: 'Node.js',
        shortAnswer: 'Streams process data in chunks rather than loading everything in memory — Readable, Writable, Duplex, Transform.',
        normalAnswer: 'Streams in Node.js handle data piece-by-piece, ideal for large files or network I/O. Four types exist: Readable (read), Writable (write), Duplex (both), Transform (modify). They emit events like data, end, error and support backpressure via pipe().',
        exampleAnswer: 'fs.createReadStream("file").pipe(res) — efficiently streams a file as HTTP response.',
        followUpQuestions: ['What is backpressure?', 'When to use pipeline()?']
    },
    {
        title: 'Explain CAP theorem', topic: 'system-design', subtopic: 'CAP theorem', technology: 'System Design',
        shortAnswer: 'CAP states that a distributed system can guarantee only two of: Consistency, Availability, Partition tolerance.',
        normalAnswer: 'CAP theorem: in presence of network partition, a system must choose between consistency (all nodes see same data) and availability (every request gets a response). Real systems are typically CP (e.g. MongoDB, HBase) or AP (e.g. Cassandra, DynamoDB).',
        exampleAnswer: 'A banking system favors CP; a social feed often favors AP.',
        followUpQuestions: ['What is eventual consistency?', 'How does PACELC extend CAP?']
    },
    {
        title: 'How does load balancing work?', topic: 'system-design', subtopic: 'load balancing', technology: 'System Design',
        shortAnswer: 'A load balancer distributes incoming traffic across multiple servers to improve availability and performance.',
        normalAnswer: 'Load balancers route requests using algorithms like round-robin, least connections, IP hash, or weighted distribution. They can operate at L4 (TCP) or L7 (HTTP), provide health checks, SSL termination, and act as a single entry point for clients.',
        exampleAnswer: 'NGINX as L7 LB routes /api/* to API servers and /static/* to a CDN origin.',
        followUpQuestions: ['What is sticky session?', 'Difference between L4 and L7?']
    },
    {
        title: 'What is caching and where to apply it?', topic: 'system-design', subtopic: 'caching', technology: 'System Design',
        shortAnswer: 'Caching stores frequently accessed data closer to the consumer to reduce latency and load.',
        normalAnswer: 'Caching layers include browser, CDN, reverse proxy, application (in-memory like Redis), and database query cache. Strategies: cache-aside, write-through, write-behind. Important: cache invalidation and TTL design.',
        exampleAnswer: 'Use Redis to cache user profile lookups for 5 minutes.',
        followUpQuestions: ['What is cache stampede?', 'How does LRU eviction work?']
    },
    {
        title: 'Explain microservices vs monolith', topic: 'system-design', subtopic: 'microservices', technology: 'System Design',
        shortAnswer: 'Monolith is a single deployable unit; microservices split functionality into independently deployable services.',
        normalAnswer: 'Monoliths are simpler and have lower operational overhead. Microservices allow independent scaling, deployment, and tech-choice per service but add complexity (networking, observability, data consistency). Usually start monolith, extract services as needed.',
        exampleAnswer: 'A startup may run a single Rails app; at scale, payments, search, and notifications become separate services.',
        followUpQuestions: ['What is the saga pattern?', 'How to handle distributed transactions?']
    },
    {
        title: 'What is REST and its constraints?', topic: 'api', subtopic: 'REST design', technology: 'Backend',
        shortAnswer: 'REST is an architectural style with constraints: client-server, stateless, cacheable, uniform interface, layered, code-on-demand.',
        normalAnswer: 'REST uses HTTP verbs and status codes with resources identified by URLs. Statelessness means each request is independent. Cacheable responses improve performance. The uniform interface principle simplifies architecture.',
        exampleAnswer: 'GET /users/123 → 200 OK with JSON; POST /users → 201 Created.',
        followUpQuestions: ['What is HATEOAS?', 'When to use PUT vs PATCH?']
    },
    {
        title: 'REST vs GraphQL', topic: 'api', subtopic: 'GraphQL', technology: 'Backend',
        shortAnswer: 'REST exposes multiple endpoints with fixed responses; GraphQL exposes a single endpoint with client-defined queries.',
        normalAnswer: 'REST returns predefined data structures, often leading to over- or under-fetching. GraphQL lets clients request exactly what they need with a single endpoint and strong typing via schema. Tradeoffs: GraphQL has caching complexity and N+1 risk.',
        exampleAnswer: 'A mobile client fetches only name and avatar via GraphQL instead of full user object.',
        followUpQuestions: ['What is the N+1 problem?', 'How does GraphQL handle versioning?']
    },
    {
        title: 'What are database indexes?', topic: 'databases', subtopic: 'indexes', technology: 'Database',
        shortAnswer: 'Indexes are data structures (often B-trees) that speed up lookups at the cost of slower writes and extra storage.',
        normalAnswer: 'Indexes accelerate read queries by avoiding full table scans. Common types: B-tree, hash, GIN, GiST. Multi-column indexes support compound queries. Trade-off: write/update overhead and disk usage. Choose indexes based on query patterns.',
        exampleAnswer: 'CREATE INDEX idx_users_email ON users(email); makes WHERE email=? lookups O(log n).',
        followUpQuestions: ['What is a covering index?', 'When does an index hurt performance?']
    },
    {
        title: 'ACID properties explained', topic: 'databases', subtopic: 'ACID', technology: 'Database',
        shortAnswer: 'ACID = Atomicity, Consistency, Isolation, Durability — guarantees for reliable database transactions.',
        normalAnswer: 'Atomicity: all-or-nothing. Consistency: valid state transitions. Isolation: concurrent transactions don\'t interfere. Durability: committed data survives failure. Different isolation levels (read uncommitted → serializable) trade safety for performance.',
        exampleAnswer: 'A bank transfer must debit and credit atomically — either both happen or neither.',
        followUpQuestions: ['What is a phantom read?', 'Difference between BASE and ACID?']
    },
    {
        title: 'SQL vs NoSQL', topic: 'databases', subtopic: 'NoSQL', technology: 'Database',
        shortAnswer: 'SQL is relational with strict schema and joins; NoSQL is flexible-schema, horizontally scalable, varies by type (document, key-value, graph, column).',
        normalAnswer: 'SQL databases (PostgreSQL, MySQL) excel at complex queries and consistency. NoSQL (MongoDB, DynamoDB, Redis, Cassandra) suits high-scale, flexible-schema, or specialized workloads. Choose based on access patterns, consistency needs, and scale.',
        exampleAnswer: 'Use PostgreSQL for transactional data; Redis for session cache; Mongo for varied product catalogs.',
        followUpQuestions: ['When would you use a graph database?', 'What are document databases best at?']
    },
    {
        title: 'Explain JavaScript closures', topic: 'javascript', subtopic: 'closures', technology: 'JavaScript',
        shortAnswer: 'A closure is a function that retains access to its outer lexical scope even after the outer function returns.',
        normalAnswer: 'Closures occur naturally in JavaScript — every function captures references to variables in its surrounding scope. Useful for data privacy, callbacks, and partial application. They keep memory referenced as long as the closure exists.',
        exampleAnswer: 'function counter(){let c=0;return ()=>++c;} const inc=counter(); inc();//1 inc();//2',
        followUpQuestions: ['Common closure-related memory leaks?', 'How are closures used in module patterns?']
    },
    {
        title: 'What is hoisting in JavaScript?', topic: 'javascript', subtopic: 'hoisting', technology: 'JavaScript',
        shortAnswer: 'Hoisting moves variable and function declarations to the top of their scope during compilation.',
        normalAnswer: 'JavaScript hoists var declarations (initialized as undefined) and function declarations (fully). let/const are hoisted but live in the temporal dead zone until declared. Function expressions are not hoisted as functions.',
        exampleAnswer: 'console.log(x); var x=5; // logs undefined, not error',
        followUpQuestions: ['What is the temporal dead zone?', 'Why does let behave differently?']
    },
    {
        title: 'Promises vs async/await', topic: 'javascript', subtopic: 'promises', technology: 'JavaScript',
        shortAnswer: 'async/await is syntactic sugar over Promises, making async code look synchronous and easier to read.',
        normalAnswer: 'Promises represent eventual completion of an async operation with then/catch chaining. async/await provides cleaner syntax that pauses execution until the Promise resolves, with try/catch for errors. Both are equivalent under the hood.',
        exampleAnswer: 'const data = await fetch(url).then(r=>r.json());',
        followUpQuestions: ['What is Promise.all vs Promise.allSettled?', 'How are errors propagated in async functions?']
    },
    {
        title: 'JWT vs Session-based auth', topic: 'backend', subtopic: 'JWT', technology: 'Backend',
        shortAnswer: 'JWTs are stateless, signed tokens carried by the client; sessions store state on server with a session ID cookie.',
        normalAnswer: 'JWTs encode user info in a signed token (no server lookup needed) — great for distributed/microservices but harder to revoke. Sessions are server-stored (easy revocation, sensitive data isn\'t exposed) but require shared storage at scale.',
        exampleAnswer: 'A SPA uses JWT in Authorization header; a traditional web app uses session cookie.',
        followUpQuestions: ['How do you revoke a JWT?', 'Refresh token rotation strategy?']
    },
    {
        title: 'Git rebase vs merge', topic: 'git', subtopic: 'rebase vs merge', technology: 'Git',
        shortAnswer: 'Merge preserves history with a merge commit; rebase rewrites commits onto a new base for a linear history.',
        normalAnswer: 'Merge keeps the original branch context and creates a merge commit. Rebase replays your commits on top of the target branch, producing linear history but rewriting commit hashes — risky for shared branches.',
        exampleAnswer: 'Use rebase locally before pushing a feature branch; use merge when integrating to main.',
        followUpQuestions: ['What is interactive rebase?', 'When is merge safer?']
    },
    {
        title: 'Linux file permissions', topic: 'linux', subtopic: 'permissions', technology: 'Linux',
        shortAnswer: 'Permissions are read/write/execute for owner, group, and others; managed via chmod, chown.',
        normalAnswer: 'Each file has 9 permission bits (rwx for u/g/o), shown as drwxr-xr-x. Octal notation: 7=rwx, 5=r-x. Special bits: setuid, setgid, sticky. Use chmod to modify and chown to change ownership.',
        exampleAnswer: 'chmod 755 script.sh — owner full, others can read/execute.',
        followUpQuestions: ['What does the sticky bit do?', 'How do umask values work?']
    },
    {
        title: 'TypeScript generics explained', topic: 'typescript', subtopic: 'generics', technology: 'TypeScript',
        shortAnswer: 'Generics let you write reusable, type-safe code that works with multiple types via parameters.',
        normalAnswer: 'Generics allow type parameters, similar to function arguments but for types. They enable APIs that preserve type information across boundaries. Constraints (T extends X) restrict allowable types.',
        exampleAnswer: 'function identity<T>(v: T): T { return v; } identity<number>(5);',
        followUpQuestions: ['What are utility types like Partial<T>?', 'When to use type vs interface?']
    },
    {
        title: 'Docker vs Kubernetes', topic: 'devops', subtopic: 'Docker', technology: 'DevOps',
        shortAnswer: 'Docker packages apps into containers; Kubernetes orchestrates many containers across machines.',
        normalAnswer: 'Docker provides containerization — packaging app + dependencies into a portable image. Kubernetes orchestrates containers at scale, handling deployment, scaling, networking, self-healing, and rollbacks across a cluster.',
        exampleAnswer: 'Docker builds your image; K8s ensures 3 replicas always run with auto-restart.',
        followUpQuestions: ['What is a Pod?', 'Difference between Deployment and StatefulSet?']
    },
];

// Expand to ~60 questions by varying experience/companies/difficulty
const companies = ['google', 'meta', 'amazon', 'microsoft', 'apple', 'netflix', 'uber', 'airbnb', 'stripe', 'flipkart'];
const experiences: ('fresher' | 'mid-level' | 'senior')[] = ['fresher', 'mid-level', 'senior'];
const difficulties: ('easy' | 'medium' | 'hard')[] = ['easy', 'medium', 'hard'];

export const questions: Question[] = baseQuestions.flatMap((q, i) => {
    const variants = 2 + (i % 2); // 2-3 variants
    return Array.from({ length: variants }, (_, j) => ({
        id: `q-${i}-${j}`,
        title: q.title!,
        topic: q.topic!,
        subtopic: q.subtopic!,
        technology: q.technology!,
        role: ['frontend', 'backend', 'fullstack'][j % 3],
        experienceLevel: experiences[(i + j) % 3],
        companyTags: [companies[(i + j) % 10], companies[(i + j + 3) % 10]],
        difficulty: difficulties[(i + j) % 3],
        modeTags: ['theory', 'quick', 'normal', 'mcq'] as any,
        shortAnswer: q.shortAnswer!,
        normalAnswer: q.normalAnswer!,
        exampleAnswer: q.exampleAnswer!,
        followUpQuestions: q.followUpQuestions!,
        relatedQuestions: [],
        bookmarked: false,
        estimatedTime: 3 + (i % 5),
        mcqOptions: [
            { text: q.shortAnswer!.slice(0, 60) + '...', correct: true },
            { text: 'It only runs on the server side at startup.', correct: false },
            { text: 'It is deprecated in modern frameworks.', correct: false },
            { text: 'It works only with class components.', correct: false },
        ],
    }));
});

'use client';
import { useState } from 'react';
import { Sparkles, Target, Calendar, AlertTriangle } from 'lucide-react';
import { topics } from '@/app/data/topics';
import { questions } from '@/app/data/questions';
import { jobDescriptions } from '@/app/data/jobDescriptions';
import ProgressBar from '@/app/components/ProgressBar';

interface PrepPlan {
    matchedTopics: string[];
    missingTopics: string[];
    likelyQuestions: string[];
    priority: { topic: string; score: number }[];
    readinessScore: number;
    dailyPlan: { day: string; focus: string; minutes: number }[];
}

export default function JDPlanPage() {

    const [jd, setJd] = useState('');
    const [plan, setPlan] = useState<PrepPlan | null>(null);
    const [loading, setLoading] = useState(false);

    const generate = (text: string) => {
        setLoading(true);
        setTimeout(() => {
            const lower = text.toLowerCase();
            const matched = topics.filter(t => lower.includes(t.name.toLowerCase()) || t.subtopics.some(s => lower.includes(s.toLowerCase())));
            const missing = topics.filter(t => !matched.includes(t)).slice(0, 4);
            const likely = questions.filter(q => matched.some(m => m.id === q.topic)).slice(0, 5).map(q => q.title);
            const priority = matched.map((t, i) => ({ topic: t.name, score: 95 - i * 10 }));
            const readiness = Math.max(20, Math.min(85, matched.length * 12));
            const dailyPlan = [
                { day: 'Mon', focus: matched[0]?.name ?? 'Fundamentals', minutes: 60 },
                { day: 'Tue', focus: matched[1]?.name ?? 'System Design', minutes: 45 },
                { day: 'Wed', focus: 'MCQ Mock Test', minutes: 30 },
                { day: 'Thu', focus: matched[2]?.name ?? 'Databases', minutes: 60 },
                { day: 'Fri', focus: 'Voice Interview Practice', minutes: 30 },
                { day: 'Sat', focus: 'Mixed Mock Test', minutes: 90 },
                { day: 'Sun', focus: 'Review weak areas', minutes: 45 },
            ];
            setPlan({ matchedTopics: matched.map(m => m.name), missingTopics: missing.map(m => m.name), likelyQuestions: likely, priority, readinessScore: readiness, dailyPlan });
            setLoading(false);
        }, 800);
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">JD → Prep Plan</h1>
                <p className="text-slate-500 mt-1">Paste a job description and get a tailored study plan.</p>
            </div>

            <div className="card p-5">
                <textarea value={jd} onChange={e => setJd(e.target.value)} rows={6}
                    placeholder="Paste a job description here..."
                    className="w-full p-3 border border-slate-200 rounded-lg outline-none focus:border-brand-500 text-sm" />
                <div className="mt-3 flex flex-wrap items-center gap-2">
                    <button onClick={() => generate(jd)} disabled={!jd || loading} className="btn-primary inline-flex items-center gap-2 disabled:opacity-50">
                        <Sparkles size={16} />{loading ? 'Analyzing...' : 'Generate Plan'}
                    </button>
                    <span className="text-xs text-slate-500">Or try a sample:</span>
                    {jobDescriptions.slice(0, 3).map(j => (
                        <button key={j.id} onClick={() => { setJd(j.text); generate(j.text); }} className="badge bg-slate-100 text-slate-700 hover:bg-slate-200">{j.title}</button>
                    ))}
                </div>
            </div>

            {plan && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="card p-5">
                        <div className="flex items-center gap-2 mb-3"><Target className="text-brand-500" /><h3 className="font-semibold">Readiness Score</h3></div>
                        <div className="text-4xl font-bold text-brand-500">{plan.readinessScore}%</div>
                        <ProgressBar value={plan.readinessScore} />
                        <p className="text-sm text-slate-500 mt-2">Based on topic coverage and prior progress.</p>
                    </div>

                    <div className="card p-5">
                        <div className="flex items-center gap-2 mb-3"><AlertTriangle className="text-amber-500" /><h3 className="font-semibold">Missing Topics</h3></div>
                        <div className="flex flex-wrap gap-1.5">
                            {plan.missingTopics.map(t => <span key={t} className="badge bg-amber-50 text-amber-700">{t}</span>)}
                        </div>
                    </div>

                    <div className="card p-5">
                        <h3 className="font-semibold mb-3">Preparation Priority</h3>
                        <div className="space-y-3">
                            {plan.priority.map(p => <ProgressBar key={p.topic} label={p.topic} value={p.score} />)}
                        </div>
                    </div>

                    <div className="card p-5">
                        <h3 className="font-semibold mb-3">Likely Interview Questions</h3>
                        <ul className="space-y-2 text-sm">
                            {plan.likelyQuestions.map((q, i) => (
                                <li key={i} className="flex gap-2"><span className="text-brand-500">{i + 1}.</span>{q}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="card p-5 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-3"><Calendar className="text-brand-500" /><h3 className="font-semibold">7-Day Study Plan</h3></div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                            {plan.dailyPlan.map(d => (
                                <div key={d.day} className="bg-slate-50 rounded-lg p-3">
                                    <div className="text-xs font-semibold text-slate-500">{d.day}</div>
                                    <div className="text-sm font-medium mt-1">{d.focus}</div>
                                    <div className="text-xs text-slate-500 mt-1">{d.minutes} min</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

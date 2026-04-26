'use client';
import { useEffect, useMemo, useState } from 'react';
import { Timer, CheckCircle2, XCircle } from 'lucide-react';
import { questions } from '../data/questions';

type TestMode = 'mcq' | 'theory';

export default function MockTestPage() {
    const [started, setStarted] = useState(false);
    const [finished, setFinished] = useState(false);
    const [mode, setMode] = useState<TestMode>('mcq');
    const [duration, setDuration] = useState(10);
    const [timeLeft, setTimeLeft] = useState(0);
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [theoryConfidence, setTheoryConfidence] = useState<Record<string, boolean>>({});

    const testQs = useMemo(() => questions.slice(0, 8), []);

    useEffect(() => {
        if (!started || finished) return;
        if (timeLeft <= 0) { setFinished(true); return; }
        const t = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(t);
    }, [started, finished, timeLeft]);

    const start = () => { setStarted(true); setFinished(false); setCurrent(0); setAnswers({}); setTimeLeft(duration * 60); };

    const score = mode === 'mcq'
        ? testQs.reduce((s, q) => s + ((q.mcqOptions?.[answers[q.id]]?.correct) ? 1 : 0), 0)
        : Object.values(theoryConfidence).filter(Boolean).length;

    if (!started) {
        return (
            <div className="max-w-2xl mx-auto card p-8">
                <h1 className="text-2xl font-bold">Mock Test</h1>
                <p className="text-slate-500 mt-1">Timed, theory-only assessment with instant scoring.</p>

                <div className="mt-6 space-y-4">
                    <div>
                        <div className="text-sm font-semibold mb-2">Mode</div>
                        <div className="flex gap-2">
                            {(['mcq', 'theory'] as TestMode[]).map(m => (
                                <button key={m} onClick={() => setMode(m)}
                                    className={`px-4 py-2 rounded-lg border ${mode === m ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-slate-200'}`}>
                                    {m === 'mcq' ? 'MCQ Mode' : 'Theory Mode'}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="text-sm font-semibold mb-2">Duration</div>
                        <div className="flex gap-2">
                            {[5, 10, 20].map(d => (
                                <button key={d} onClick={() => setDuration(d)}
                                    className={`px-4 py-2 rounded-lg border ${duration === d ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-slate-200'}`}>{d} min</button>
                            ))}
                        </div>
                    </div>
                </div>

                <button onClick={start} className="btn-primary mt-8">Start Test</button>
            </div>
        );
    }

    if (finished) {
        const total = testQs.length;
        const pct = Math.round((score / total) * 100);
        return (
            <div className="max-w-2xl mx-auto card p-8 text-center">
                <div className="text-5xl mb-2">{pct >= 70 ? '🎉' : '💪'}</div>
                <h1 className="text-2xl font-bold">Test Complete</h1>
                <div className="text-5xl font-bold mt-4 text-brand-500">{score}/{total}</div>
                <p className="text-slate-500 mt-2">{pct}% — {pct >= 70 ? 'Great job!' : 'Keep practicing.'}</p>

                <div className="mt-8 text-left space-y-3">
                    {testQs.map((q, i) => {
                        const correct = mode === 'mcq' ? q.mcqOptions?.[answers[q.id]]?.correct : theoryConfidence[q.id];
                        return (
                            <div key={q.id} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50">
                                {correct ? <CheckCircle2 className="text-green-500 shrink-0" /> : <XCircle className="text-red-500 shrink-0" />}
                                <div className="text-sm"><span className="font-medium">{i + 1}.</span> {q.title}</div>
                            </div>
                        );
                    })}
                </div>

                <button onClick={() => { setStarted(false); setFinished(false); }} className="btn-primary mt-6">Take Another Test</button>
            </div>
        );
    }

    const q = testQs[current];
    return (
        <div className="max-w-2xl mx-auto">
            <div className="card p-4 flex items-center justify-between mb-4">
                <div className="text-sm text-slate-600">Question {current + 1} of {testQs.length}</div>
                <div className="flex items-center gap-2 text-sm font-mono font-bold text-brand-600">
                    <Timer size={16} />{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
                </div>
            </div>

            <div className="card p-6">
                <h2 className="font-semibold text-lg">{q.title}</h2>

                {mode === 'mcq' ? (
                    <div className="mt-4 space-y-2">
                        {q.mcqOptions?.map((opt, idx) => (
                            <button key={idx} onClick={() => setAnswers({ ...answers, [q.id]: idx })}
                                className={`w-full text-left p-3 rounded-lg border text-sm ${answers[q.id] === idx ? 'border-brand-500 bg-brand-50' : 'border-slate-200 hover:border-slate-300'}`}>
                                {opt.text}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="mt-4 space-y-3">
                        <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-700">{q.normalAnswer}</div>
                        <div className="text-xs text-slate-500">Did you know this answer confidently?</div>
                        <div className="flex gap-2">
                            <button onClick={() => setTheoryConfidence({ ...theoryConfidence, [q.id]: true })}
                                className={`btn-secondary ${theoryConfidence[q.id] === true ? 'bg-green-50 border-green-300' : ''}`}>Yes</button>
                            <button onClick={() => setTheoryConfidence({ ...theoryConfidence, [q.id]: false })}
                                className={`btn-secondary ${theoryConfidence[q.id] === false ? 'bg-red-50 border-red-300' : ''}`}>No</button>
                        </div>
                    </div>
                )}

                <div className="mt-6 flex justify-between">
                    <button disabled={current === 0} onClick={() => setCurrent(current - 1)} className="btn-secondary disabled:opacity-50">Previous</button>
                    {current < testQs.length - 1 ? (
                        <button onClick={() => setCurrent(current + 1)} className="btn-primary">Next</button>
                    ) : (
                        <button onClick={() => setFinished(true)} className="btn-primary">Submit</button>
                    )}
                </div>
            </div>
        </div>
    );
}

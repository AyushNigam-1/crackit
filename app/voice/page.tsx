'use client';
import { useState } from 'react';
import { Mic, MicOff, Volume2, RotateCcw } from 'lucide-react';
import { questions } from '@/app/data/questions';

export default function VoicePage() {
    const [recording, setRecording] = useState(false);
    const [step, setStep] = useState(0);
    const [finished, setFinished] = useState(false);
    const flow = questions.slice(0, 4);
    const q = flow[step];

    const next = () => {
        if (step < flow.length - 1) setStep(step + 1); else setFinished(true);
        setRecording(false);
    };

    const reset = () => { setStep(0); setFinished(false); setRecording(false); };

    if (finished) {
        return (
            <div className="max-w-2xl mx-auto card p-8 text-center">
                <div className="text-5xl mb-3">🎤</div>
                <h1 className="text-2xl font-bold">Interview Complete!</h1>
                <p className="text-slate-500 mt-1">Here's a simulated feedback summary.</p>

                <div className="mt-6 space-y-3 text-left">
                    <FeedbackRow label="Clarity" value={82} />
                    <FeedbackRow label="Technical Accuracy" value={75} />
                    <FeedbackRow label="Confidence" value={68} />
                    <FeedbackRow label="Pacing" value={88} />
                </div>

                <div className="mt-6 bg-slate-50 rounded-lg p-4 text-sm text-left">
                    <div className="font-semibold mb-1">Summary</div>
                    <p className="text-slate-600">Your answers showed good structure. Try adding more concrete examples and slowing down on technical depth questions.</p>
                </div>

                <button onClick={reset} className="btn-primary mt-6 inline-flex items-center gap-2"><RotateCcw size={16} />Start New Session</button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Voice Interview</h1>
                <p className="text-slate-500 mt-1">Practice answering aloud — voice processing coming soon.</p>
                <span className="badge bg-amber-100 text-amber-700 mt-2">Beta · Simulated</span>
            </div>

            <div className="card p-6">
                <div className="text-xs text-slate-500 mb-2">Question {step + 1} of {flow.length}</div>
                <div className="flex items-center gap-3 mb-4">
                    <Volume2 className="text-brand-500" />
                    <h2 className="text-lg font-semibold">{q.title}</h2>
                </div>

                <div className="bg-slate-50 rounded-xl p-8 text-center">
                    <button onClick={() => setRecording(!recording)}
                        className={`w-20 h-20 mx-auto rounded-full grid place-items-center transition ${recording ? 'bg-red-500 animate-pulse' : 'bg-brand-500 hover:bg-brand-600'} text-white shadow-lg`}>
                        {recording ? <MicOff size={28} /> : <Mic size={28} />}
                    </button>
                    <p className="text-sm text-slate-600 mt-3">{recording ? 'Recording... tap to stop' : 'Tap to start answering'}</p>
                </div>

                <div className="mt-4 flex justify-between">
                    <button onClick={reset} className="btn-secondary text-sm">Restart</button>
                    <button onClick={next} className="btn-primary text-sm">{step < flow.length - 1 ? 'Next Question' : 'Finish'}</button>
                </div>
            </div>

            <div className="card p-5">
                <div className="text-xs font-semibold uppercase text-slate-500 mb-2">Reference Answer</div>
                <p className="text-sm text-slate-700">{q.shortAnswer}</p>
            </div>
        </div>
    );
}

function FeedbackRow({ label, value }: { label: string; value: number }) {
    return (
        <div>
            <div className="flex justify-between text-sm mb-1"><span>{label}</span><span className="font-semibold">{value}/100</span></div>
            <div className="h-2 rounded-full bg-slate-100"><div className="h-full bg-brand-500 rounded-full" style={{ width: `${value}%` }} /></div>
        </div>
    );
}

'use client';
import { Bookmark, Clock, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Question } from '../types/indes';

const diffColor = { easy: 'bg-green-100 text-green-700', medium: 'bg-amber-100 text-amber-700', hard: 'bg-red-100 text-red-700' };
const expColor = { fresher: 'bg-blue-100 text-blue-700', 'mid-level': 'bg-purple-100 text-purple-700', senior: 'bg-indigo-100 text-indigo-700' };

export default function QuestionCard({ question, mode = 'normal' }: { question: Question; mode?: 'quick' | 'normal' }) {
    const [expanded, setExpanded] = useState(false);
    const [bookmarked, setBookmarked] = useState(question.bookmarked);

    return (
        <div className="card p-5">
            <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`badge ${diffColor[question.difficulty]}`}>{question.difficulty}</span>
                        <span className={`badge ${expColor[question.experienceLevel]}`}>{question.experienceLevel}</span>
                        <span className="badge bg-slate-100 text-slate-600">{question.subtopic}</span>
                        <span className="text-xs text-slate-400 flex items-center gap-1"><Clock size={12} />{question.estimatedTime}m</span>
                    </div>
                    <h3 className="font-semibold text-slate-900">{question.title}</h3>
                </div>
                <button onClick={() => setBookmarked(!bookmarked)} className={`p-2 rounded-lg hover:bg-slate-100 ${bookmarked ? 'text-brand-500' : 'text-slate-400'}`}>
                    <Bookmark size={18} fill={bookmarked ? 'currentColor' : 'none'} />
                </button>
            </div>

            <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                {mode === 'quick' ? question.shortAnswer : question.normalAnswer}
            </div>

            {expanded && (
                <div className="mt-4 space-y-3 text-sm border-t border-slate-100 pt-4">
                    <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Example Answer</div>
                        <div className="bg-slate-50 rounded-lg p-3 font-mono text-xs text-slate-800">{question.exampleAnswer}</div>
                    </div>
                    <div>
                        <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Follow-up Questions</div>
                        <ul className="space-y-1 text-slate-700">
                            {question.followUpQuestions.map((f, i) => <li key={i} className="flex gap-2"><span className="text-brand-500">→</span>{f}</li>)}
                        </ul>
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {question.companyTags.map(c => (
                            <span key={c} className="badge bg-slate-100 text-slate-600 capitalize">{c}</span>
                        ))}
                    </div>
                </div>
            )}

            <button onClick={() => setExpanded(!expanded)}
                className="mt-3 flex items-center gap-1 text-sm text-brand-600 hover:text-brand-700 font-medium">
                {expanded ? 'Show less' : 'Show example & follow-ups'}
                <ChevronDown size={16} className={expanded ? 'rotate-180 transition' : 'transition'} />
            </button>
        </div>
    );
}

'use client';

import { useState } from 'react';
import { topics } from '../data/topics';
import TopicCard from '../components/TopicCard';

export default function TopicsPage() {
    const [subFilter, setSubFilter] = useState('');
    const allSubtopics = Array.from(new Set(topics.flatMap(t => t.subtopics)));

    const filteredTopics = subFilter
        ? topics.filter(t => t.subtopics.some(s => s.toLowerCase().includes(subFilter.toLowerCase())))
        : topics;

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Interview Topics</h1>
                <p className="text-slate-500 mt-1">Browse all theory-based topics and subtopics.</p>
            </div>

            <div className="card p-4">
                <div className="text-xs font-semibold uppercase text-slate-500 mb-2">Filter by subtopic</div>
                <div className="flex flex-wrap gap-1.5">
                    <button onClick={() => setSubFilter('')} className={`badge ${!subFilter ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>All</button>
                    {allSubtopics.map(s => (
                        <button key={s} onClick={() => setSubFilter(s)} className={`badge ${subFilter === s ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>{s}</button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTopics.map(t => <TopicCard key={t.id} topic={t} />)}
            </div>
        </div>
    );
}

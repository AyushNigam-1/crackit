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
        <div className="space-y-8">

            {/* Header */}
            <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    Interview Topics
                </h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1.5">
                    Browse all theory-based topics and subtopics.
                </p>
            </div>

            {/* Filter panel */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    Filter by subtopic
                </div>
                <div className="flex flex-wrap gap-1.5">
                    <button
                        onClick={() => setSubFilter('')}
                        className={`text-[11px] font-medium px-2.5 py-1 rounded-full transition-colors ${!subFilter
                            ? 'bg-brand-500 text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                            }`}
                    >
                        All
                    </button>
                    {allSubtopics.map(s => (
                        <button
                            key={s}
                            onClick={() => setSubFilter(s)}
                            className={`text-[11px] font-medium px-2.5 py-1 rounded-full transition-colors ${subFilter === s
                                ? 'bg-brand-500 text-white'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                                }`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results count */}
            <p className="text-sm text-slate-500 dark:text-slate-400 -mt-2">
                Showing <span className="font-semibold text-slate-700 dark:text-slate-200">{filteredTopics.length}</span> topic{filteredTopics.length !== 1 ? 's' : ''}
                {subFilter && <> for <span className="font-semibold text-brand-600 dark:text-brand-400">"{subFilter}"</span></>}
            </p>

            {/* Grid */}
            {filteredTopics.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredTopics.map(t => <TopicCard key={t.id} topic={t} />)}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                    <span className="text-4xl mb-3">🔍</span>
                    <p className="font-semibold text-slate-700 dark:text-slate-200">No topics found</p>
                    <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">Try a different subtopic filter.</p>
                    <button
                        onClick={() => setSubFilter('')}
                        className="mt-4 text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline underline-offset-2"
                    >
                        Clear filter
                    </button>
                </div>
            )}
        </div>
    );
}
'use client';

import ProgressBar from '@/app/components/ProgressBar';
import { currentUser, users } from '@/app/data/users';
import { Flame, BookOpen, TrendingUp, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function ProgressPage() {
    const [userId, setUserId] = useState(currentUser.id);
    const user = users.find(u => u.id === userId)!;
    const cats = Object.entries(user.readinessByCategory);
    const avg = Math.round(cats.reduce((s, [, v]) => s + v, 0) / cats.length);
    const strengths = cats.filter(([, v]) => v >= 70).map(([k]) => k);
    const weak = cats.filter(([, v]) => v < 50).map(([k]) => k);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                    <h1 className="text-3xl font-bold">Your Progress</h1>
                    <p className="text-slate-500 mt-1">{user.name}</p>
                </div>
                <select value={userId} onChange={e => setUserId(e.target.value)} className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white">
                    {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Stat icon={<Flame className="text-orange-500" />} label="Current Streak" value={`${user.streak} days`} />
                <Stat icon={<BookOpen className="text-brand-500" />} label="Topics Completed" value={user.topicsCompleted.length} />
                <Stat icon={<TrendingUp className="text-green-500" />} label="Overall Readiness" value={`${avg}%`} />
            </div>

            <div className="card p-5">
                <h3 className="font-semibold mb-4">Readiness by Category</h3>
                <div className="space-y-4">
                    {cats.map(([cat, val]) => <ProgressBar key={cat} label={cat} value={val} />)}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="card p-5">
                    <div className="flex items-center gap-2 mb-3"><TrendingUp className="text-green-500" /><h3 className="font-semibold">Strengths</h3></div>
                    {strengths.length ? (
                        <div className="flex flex-wrap gap-2">{strengths.map(s => <span key={s} className="badge bg-green-100 text-green-700">{s}</span>)}</div>
                    ) : <p className="text-sm text-slate-500">Complete more questions to discover your strengths.</p>}
                </div>
                <div className="card p-5">
                    <div className="flex items-center gap-2 mb-3"><AlertCircle className="text-amber-500" /><h3 className="font-semibold">Focus Areas</h3></div>
                    {weak.length ? (
                        <div className="flex flex-wrap gap-2">{weak.map(s => <span key={s} className="badge bg-amber-100 text-amber-700">{s}</span>)}</div>
                    ) : <p className="text-sm text-slate-500">Great—no critical weak areas!</p>}
                </div>
            </div>
        </div>
    );
}

function Stat({ icon, label, value }: any) {
    return (
        <div className="card p-5">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-50 grid place-items-center">{icon}</div>
                <div>
                    <div className="text-xs text-slate-500">{label}</div>
                    <div className="text-xl font-bold">{value}</div>
                </div>
            </div>
        </div>
    );
}

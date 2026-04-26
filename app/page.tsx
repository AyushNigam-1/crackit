'use client';
import Link from 'next/link';
import { Search, Zap, Timer, Sparkles } from 'lucide-react';

import { useState } from 'react';
import { topics } from './data/topics';
import TopicCard from './components/TopicCard';
import CompanyBadge from './components/CompanyBadge';
import { companies } from './data/companies';

export default function Home() {
  const [query, setQuery] = useState('');
  const [role, setRole] = useState('');
  const [exp, setExp] = useState('');

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center pt-6">
        <div className="inline-flex items-center gap-2 badge bg-brand-50 text-brand-700 mb-4">
          <Sparkles size={14} /> Theory-first interview prep
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Master the <span className="text-brand-500">interview theory</span><br />that actually gets asked.
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          No coding puzzles. Just real, well-explained concepts—curated by topic, role, experience, and company.
        </p>

        {/* Search */}
        <div className="mt-8 max-w-2xl mx-auto card p-2 flex items-center gap-2">
          <Search className="text-slate-400 ml-3" />
          <input value={query} onChange={e => setQuery(e.target.value)}
            placeholder="Search topics, questions, companies..."
            className="flex-1 px-2 py-2 outline-none text-sm" />
          <Link href={`/practice?q=${query}`} className="btn-primary">Search</Link>
        </div>

        {/* Quick filters */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <select value={role} onChange={e => setRole(e.target.value)} className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white">
            <option value="">Any role</option><option>frontend</option><option>backend</option><option>fullstack</option>
          </select>
          <select value={exp} onChange={e => setExp(e.target.value)} className="text-sm border border-slate-200 rounded-lg px-3 py-2 bg-white">
            <option value="">Any experience</option><option>fresher</option><option>mid-level</option><option>senior</option>
          </select>
        </div>

        {/* CTA */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link href="/practice?mode=quick" className="btn-primary inline-flex items-center gap-2"><Zap size={16} />Quick Prep</Link>
          <Link href="/mock-test" className="btn-secondary inline-flex items-center gap-2"><Timer size={16} />Take Mock Test</Link>
        </div>
      </section>

      {/* Featured topics */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Featured Topics</h2>
          <Link href="/topics" className="text-sm text-brand-600 hover:underline">View all →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topics.slice(0, 8).map(t => <TopicCard key={t.id} topic={t} />)}
        </div>
      </section>

      {/* Companies */}
      <section>
        <h2 className="text-xl font-bold mb-4">Popular Companies</h2>
        <div className="flex flex-wrap gap-2">
          {companies.map(c => <CompanyBadge key={c.id} company={c} />)}
        </div>
      </section>

      {/* AI guide cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AICard title="Paste a JD" desc="Get a tailored prep plan from any job description." href="/jd-plan" emoji="📋" />
        <AICard title="Voice Interview" desc="Practice answering aloud with our voice bot (beta)." href="/voice" emoji="🎤" />
        <AICard title="Track Progress" desc="See readiness score and weak areas instantly." href="/progress" emoji="📊" />
      </section>
    </div>
  );
}

function AICard({ title, desc, href, emoji }: any) {
  return (
    <Link href={href} className="card p-5 hover:shadow-lg transition">
      <div className="text-3xl mb-2">{emoji}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-500 mt-1">{desc}</p>
    </Link>
  );
}
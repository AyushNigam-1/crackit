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
  const [count, setState] = useState(0)

  return (
    <div className="space-y-20 pb-20">
      <section className="relative text-center h-dvh flex justify-center space-y-6 items-center flex-col overflow-hidden">
        {/* Subtle radial glow behind the heading */}
        {/* <div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-start justify-center"
        >
          <div className="w-175 h-100 rounded-full bg-brand-500/10 dark:bg-brand-500/15 blur-3xl -translate-y-1/3" />
        </div> */}

        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border border-brand-300 dark:border-brand-700 bg-brand-50 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
          <Sparkles size={12} />
          Theory-first interview prep
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white">
          Master the interview theory that actually gets asked.
        </h1>

        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
          No coding puzzles. Just real, well-explained concepts—curated by
          topic, role, experience, and company.
        </p>

        {/* Search bar */}
        <div className=" max-w-2xl mx-auto flex items-center gap-0 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
          <Search className="text-slate-400 shrink-0 ml-4" size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search topics, questions, companies..."
            className="flex-1 px-3 py-3.5 text-sm bg-transparent outline-none text-slate-800 dark:text-slate-100 placeholder:text-slate-400"
          />
          <Link
            href={`/practice?q=${query}`}
            className="m-1.5 shrink-0 rounded-lg px-5 py-2.5 text-sm font-semibold bg-brand-500 hover:bg-brand-600 text-white transition-colors"
          >
            Search
          </Link>
        </div>

        {/* Filters */}
        {/* <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-3 py-2 outline-none cursor-pointer hover:border-brand-400 transition-colors"
          >
            <option value="">Any role</option>
            <option>frontend</option>
            <option>backend</option>
            <option>fullstack</option>
          </select>
          <select
            value={exp}
            onChange={(e) => setExp(e.target.value)}
            className="text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-3 py-2 outline-none cursor-pointer hover:border-brand-400 transition-colors"
          >
            <option value="">Any experience</option>
            <option>fresher</option>
            <option>mid-level</option>
            <option>senior</option>
          </select>
        </div> */}

        {/* CTA row */}
        {/* <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/practice?mode=quick"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold bg-brand-500 hover:bg-brand-600 text-white shadow-sm transition-colors"
          >
            <Zap size={15} />
            Quick Prep
          </Link>
          <Link
            href="/mock-test"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-colors"
          >
            <Timer size={15} />
            Take Mock Test
          </Link>
        </div> */}
      </section>

      {/* ── Featured Topics ───────────────────────────────────── */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Featured Topics
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Start with the most commonly tested areas
            </p>
          </div>
          <Link
            href="/topics"
            className="text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline underline-offset-2"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {topics.slice(0, 8).map((t) => (
            <TopicCard key={t.id} topic={t} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Popular Companies
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Company-specific question banks
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {companies.map((c) => (
            <CompanyBadge key={c.id} company={c} />
          ))}
        </div>
      </section>

      {/* ── AI Feature Cards ──────────────────────────────────── */}
      <section>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            AI-Powered Tools
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Supercharge your preparation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AICard
            title="Paste a JD"
            desc="Get a tailored prep plan from any job description."
            href="/jd-plan"
            emoji="📋"
            accent="from-violet-500/10 to-purple-500/5"
          />
          <AICard
            title="Voice Interview"
            desc="Practice answering aloud with our voice bot (beta)."
            href="/voice"
            emoji="🎤"
            accent="from-brand-500/10 to-sky-500/5"
          />
          <AICard
            title="Track Progress"
            desc="See readiness score and weak areas instantly."
            href="/progress"
            emoji="📊"
            accent="from-emerald-500/10 to-teal-500/5"
          />
        </div>
      </section>
    </div>
  );
}

/* ── Sub-components ─────────────────────────────────────────── */

function AICard({
  title,
  desc,
  href,
  emoji,
  accent,
}: {
  title: string;
  desc: string;
  href: string;
  emoji: string;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-linear-to-br ${accent} dark:from-slate-800/60 dark:to-slate-900/40 p-6 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-md transition-all duration-200`}
    >
      <span className="text-3xl">{emoji}</span>
      <div>
        <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
          {desc}
        </p>
      </div>
      <span className="mt-auto text-xs font-medium text-brand-600 dark:text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
        Get started →
      </span>
    </Link>
  );
}
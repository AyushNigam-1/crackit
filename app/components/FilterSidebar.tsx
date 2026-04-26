'use client';
import { topics } from '../data/topics';
import { companies } from '../data/companies';

interface Filters {
    topic?: string;
    subtopic?: string;
    experience?: string;
    difficulty?: string;
    company?: string;
    role?: string;
}

export default function FilterSidebar({ filters, setFilters }: { filters: Filters; setFilters: (f: Filters) => void }) {
    const update = (k: keyof Filters, v: string) => setFilters({ ...filters, [k]: filters[k] === v ? undefined : v });
    const selectedTopic = topics.find(t => t.id === filters.topic);

    return (
        <aside className="card p-5 space-y-5 sticky top-20">
            <div>
                <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm">Filters</h4>
                    <button onClick={() => setFilters({})} className="text-xs text-brand-500 hover:underline">Clear</button>
                </div>
            </div>

            <FilterGroup label="Topic">
                <div className="space-y-1 max-h-44 overflow-y-auto">
                    {topics.map(t => (
                        <button key={t.id} onClick={() => update('topic', t.id)}
                            className={`w-full text-left text-sm px-2 py-1.5 rounded-lg ${filters.topic === t.id ? 'bg-brand-50 text-brand-700' : 'hover:bg-slate-50 text-slate-700'}`}>
                            {t.icon} {t.name}
                        </button>
                    ))}
                </div>
            </FilterGroup>

            {selectedTopic && (
                <FilterGroup label="Subtopic">
                    <div className="flex flex-wrap gap-1">
                        {selectedTopic.subtopics.map(s => (
                            <button key={s} onClick={() => update('subtopic', s)}
                                className={`badge ${filters.subtopic === s ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>{s}</button>
                        ))}
                    </div>
                </FilterGroup>
            )}

            <FilterGroup label="Experience">
                {['fresher', 'mid-level', 'senior'].map(e => (
                    <Pill key={e} active={filters.experience === e} onClick={() => update('experience', e)}>{e}</Pill>
                ))}
            </FilterGroup>

            <FilterGroup label="Difficulty">
                {['easy', 'medium', 'hard'].map(d => (
                    <Pill key={d} active={filters.difficulty === d} onClick={() => update('difficulty', d)}>{d}</Pill>
                ))}
            </FilterGroup>

            <FilterGroup label="Role">
                {['frontend', 'backend', 'fullstack'].map(r => (
                    <Pill key={r} active={filters.role === r} onClick={() => update('role', r)}>{r}</Pill>
                ))}
            </FilterGroup>

            <FilterGroup label="Company">
                <div className="flex flex-wrap gap-1">
                    {companies.slice(0, 8).map(c => (
                        <button key={c.id} onClick={() => update('company', c.id)}
                            className={`badge capitalize ${filters.company === c.id ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>{c.name}</button>
                    ))}
                </div>
            </FilterGroup>
        </aside>
    );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <div>
            <div className="text-xs font-semibold text-slate-500 uppercase mb-2">{label}</div>
            <div className="flex flex-wrap gap-1">{children}</div>
        </div>
    );
}
function Pill({ active, onClick, children }: any) {
    return <button onClick={onClick} className={`badge capitalize ${active ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>{children}</button>;
}

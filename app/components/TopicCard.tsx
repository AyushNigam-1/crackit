import Link from 'next/link';
import { Topic } from '../types/indes';

export default function TopicCard({ topic }: { topic: Topic }) {
    return (
        <Link href={`/practice?topic=${topic.id}`} className="card p-5 hover:shadow-lg transition group">
            <div className="flex items-start justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl grid place-items-center text-2xl ${topic.color}`}>{topic.icon}</div>
                <span className="text-xs text-slate-400">{topic.questionCount} qs</span>
            </div>
            <h3 className="font-semibold text-slate-900 group-hover:text-brand-600">{topic.name}</h3>
            <p className="text-sm text-slate-500 mt-1">{topic.description}</p>
            <div className="flex flex-wrap gap-1 mt-3">
                {topic.subtopics.slice(0, 3).map(s => (
                    <span key={s} className="badge bg-slate-100 text-slate-600">{s}</span>
                ))}
                {topic.subtopics.length > 3 && <span className="badge bg-slate-100 text-slate-600">+{topic.subtopics.length - 3}</span>}
            </div>
        </Link>
    );
}

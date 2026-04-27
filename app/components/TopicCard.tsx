import Link from 'next/link';
import { Topic } from '../types/indes';

export default function TopicCard({ topic }: { topic: Topic }) {
    const visibleTags = topic.subtopics.slice(0, 3);
    const extraCount = topic.subtopics.length - visibleTags.length;

    return (
        <Link
            href={`/practice?topic=${topic.id}`}
            className="group flex flex-col gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-md dark:hover:shadow-black/30 transition-all duration-200"
        >
            <div className="flex items-start justify-between">
                <div className={`w-11 h-11 rounded-xl grid place-items-center text-2xl shrink-0 ${topic.color}`}>
                    {topic.icon}
                </div>
                <span className="text-xs font-medium text-slate-400 dark:text-slate-500 mt-0.5">
                    {topic.questionCount} qs
                </span>
            </div>

            <div>
                <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
                    {topic.name}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-2">
                    {topic.description}
                </p>
            </div>

            {/* Tag pills */}
            <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                {visibleTags.map((s) => (
                    <span
                        key={s}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300"
                    >
                        {s}
                    </span>
                ))}
                {extraCount > 0 && (
                    <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                        +{extraCount}
                    </span>
                )}
            </div>
        </Link>
    );
}
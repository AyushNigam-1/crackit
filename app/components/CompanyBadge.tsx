import { Company } from "../types/indes";

export default function CompanyBadge({ company, onClick, active }: { company: Company; onClick?: () => void; active?: boolean }) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all duration-150 ${active
                ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/60 dark:border-brand-600'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-brand-300 dark:hover:border-brand-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
        >
            <span className={`w-6 h-6 rounded-full ${company.color} text-white grid place-items-center text-[11px] font-bold shrink-0`}>
                {company.logo}
            </span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {company.name}
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500">
                {company.questionCount}
            </span>
        </button>
    );
}
import { Company } from "../types/indes";

export default function CompanyBadge({ company, onClick, active }: { company: Company; onClick?: () => void; active?: boolean }) {
    return (
        <button onClick={onClick}
            className={`flex items-center gap-2 px-3 py-2 rounded-full border transition ${active ? 'border-brand-500 bg-brand-50' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}>
            <span className={`w-7 h-7 rounded-full ${company.color} text-white grid place-items-center text-xs font-bold`}>{company.logo}</span>
            <span className="text-sm font-medium">{company.name}</span>
            <span className="text-xs text-slate-400">{company.questionCount}</span>
        </button>
    );
}

export default function ProgressBar({ value, label }: { value: number; label?: string }) {
    return (
        <div>
            {label && <div className="flex justify-between text-xs mb-1"><span className="text-slate-600">{label}</span><span className="font-medium">{value}%</span></div>}
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <div className="h-full bg-linear-to-r from-brand-500 to-brand-600 rounded-full transition-all" style={{ width: `${value}%` }} />
            </div>
        </div>
    );
}
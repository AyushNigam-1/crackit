import { Search } from 'lucide-react';
export default function EmptyState({ message = 'No results found' }: { message?: string }) {
    return (
        <div className="card p-10 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 grid place-items-center mb-3"><Search className="text-slate-400" /></div>
            <p className="text-slate-500">{message}</p>
        </div>
    );
}
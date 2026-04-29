'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Home, BookOpen, Dumbbell, ClipboardList,
    FileText, Mic, BarChart2, X, Map
} from 'lucide-react';

const links = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/topics', label: 'Topics', icon: BookOpen },
    { href: '/practice', label: 'Practice', icon: Dumbbell },
    { href: '/mock-test', label: 'Mock Test', icon: ClipboardList },
    { href: '/jd-plan', label: 'JD Plan', icon: FileText },
    { href: '/voice', label: 'Voice', icon: Mic },
    { href: '/progress', label: 'Progress', icon: BarChart2 },
];

interface SidebarProps {
    open: boolean;
    onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
    const pathname = usePathname();

    return (
        <>
            {open && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                    onClick={onClose}
                />
            )}

            <aside
                className={`fixed top-0 left-0 h-full w-64 z-50 flex flex-col
                    bg-white dark:bg-slate-950
                    border-r border-slate-200 dark:border-slate-800
                    shadow-xl
                    transition-transform duration-300 ease-in-out
                    ${open ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="flex items-center justify-between px-5 h-16 border-b border-slate-200 dark:border-slate-800 shrink-0">
                    <Link href="/" onClick={onClose} className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                        <div className="w-7 h-7 rounded-lg bg-brand-500 text-white grid place-items-center shadow-sm">
                            <Map size={14} />
                        </div>
                        InterviewMap
                    </Link>
                    <button
                        onClick={onClose}
                        className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        aria-label="Close sidebar"
                    >
                        <X size={18} />
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
                    {links.map(({ href, label, icon: Icon }) => {
                        const active = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                onClick={onClose}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${active
                                    ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                                    }`}
                            >
                                <Icon size={17} className={active ? 'text-brand-500 dark:text-brand-400' : 'text-slate-400 dark:text-slate-500'} />
                                {label}
                                {active && (
                                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-500 dark:bg-brand-400" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-800 shrink-0">
                    <p className="text-[11px] text-slate-400 dark:text-slate-600">
                        Theory-first interview prep
                    </p>
                </div>
            </aside>
        </>
    );
}
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Map, Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
    { href: '/', label: 'Home' },
    { href: '/topics', label: 'Topics' },
    { href: '/practice', label: 'Practice' },
    { href: '/mock-test', label: 'Mock Test' },
    { href: '/jd-plan', label: 'JD Plan' },
    { href: '/voice', label: 'Voice' },
    { href: '/progress', label: 'Progress' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white shrink-0">
                    <div className="w-8 h-8 rounded-lg bg-brand-500 text-white grid place-items-center shadow-sm">
                        <Map size={16} />
                    </div>
                    InterviewMap
                </Link>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-0.5">
                    {links.map(l => {
                        const active = pathname === l.href;
                        return (
                            <Link
                                key={l.href}
                                href={l.href}
                                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${active
                                    ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400'
                                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                                    }`}
                            >
                                {l.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>
            {open && (
                <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 space-y-1">
                    {links.map(l => {
                        const active = pathname === l.href;
                        return (
                            <Link
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${active
                                    ? 'bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400'
                                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100'
                                    }`}
                            >
                                {l.label}
                            </Link>
                        );
                    })}
                </div>
            )}
        </nav>
    );
}
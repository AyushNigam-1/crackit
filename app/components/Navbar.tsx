'use client';
import Link from 'next/link';
import { Map, Menu } from 'lucide-react';

interface NavbarProps {
    onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
    return (
        <nav className="sticky top-0 z-30 h-16 flex items-center
            bg-white/80 dark:bg-slate-950/80 backdrop-blur-md
            border-b border-slate-200 dark:border-slate-800"
        >
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 flex items-center justify-between">
                <button
                    onClick={onMenuClick}
                    className="p-2 rounded-xl text-slate-600 dark:text-slate-400
                        hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    aria-label="Open menu"
                >
                    <Menu size={20} />
                </button>

                <Link href="/" className="flex items-center gap-2 font-bold text-slate-900 dark:text-white absolute left-1/2 -translate-x-1/2">
                    <div className="w-7 h-7 rounded-lg bg-brand-500 text-white grid place-items-center shadow-sm">
                        <Map size={14} />
                    </div>
                    InterviewMap
                </Link>

                <div className="w-10" />
            </div>
        </nav>
    );
}
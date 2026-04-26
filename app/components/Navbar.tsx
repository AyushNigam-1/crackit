'use client';
import Link from 'next/link';
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
    return (
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                    <div className="w-8 h-8 rounded-lg bg-brand-500 text-white grid place-items-center"><Map size={18} /></div>
                    InterviewMap
                </Link>
                <div className="hidden md:flex items-center gap-1">
                    {links.map(l => (
                        <Link key={l.href} href={l.href} className="px-3 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900">{l.label}</Link>
                    ))}
                </div>
                <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>
            {open && (
                <div className="md:hidden border-t border-slate-200 px-4 py-2 space-y-1">
                    {links.map(l => (
                        <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                            className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100">{l.label}</Link>
                    ))}
                </div>
            )}
        </nav>
    );
}

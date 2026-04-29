'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

export default function ShellLayout({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Sidebar open={open} onClose={() => setOpen(false)} />
            <Navbar onMenuClick={() => setOpen(true)} />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">{children}</main>
        </>
    );
}
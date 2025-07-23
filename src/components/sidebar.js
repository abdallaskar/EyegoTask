'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, setUser);
        return unsubscribe;
    }, []);
    const pathname = usePathname();
    return (
        <div className="w-64 fixed left-0 z-30 h-[calc(100vh-4rem)] bg-gray-100 border-r border-gray-200 flex-col hidden sm:flex shadow-md">
            <nav className="flex-1 px-6 py-8 space-y-4">
                <Link
                    href="/dashboard/charts"
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${pathname === '/dashboard/charts' ? 'bg-blue-600 text-white' : 'text-gray-900 hover:bg-gray-100'}`}
                >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    </svg>
                    Charts
                </Link>
                <Link
                    href="/dashboard/table"
                    className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${pathname === '/dashboard/table' ? 'bg-blue-600 text-white' : 'text-gray-900 hover:bg-gray-100'}`}
                >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 3h14a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm10 4H7v2h6V7zm0 4H7v2h6v-2z" />
                    </svg>
                    Table
                </Link>
            </nav>
        </div>
    );
}
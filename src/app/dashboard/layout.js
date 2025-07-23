'use client';
import Sidebar from '../../components/sidebar.js';
import { useState } from 'react';
import AuthGuard from '../../components/AuthGuard';

// export const metadata = {
//     title: 'Dashboard',
// };

export default function DashboardLayout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <AuthGuard>
            <div>
                <Sidebar />
                {/* Main Content */}
                <main className="flex-1 p-6 ml-0 sm:ml-64 bg-amber">
                    {/* Toggle Button for Mobile */}
                    <button
                        className="sm:hidden mb-4 p-2 bg-blue-600 text-white rounded"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        {isSidebarOpen ? 'Close' : 'Menu'}
                    </button>
                    {children}
                </main>
            </div>
        </AuthGuard >
    );
}
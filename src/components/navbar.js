'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, setUser);
        return unsubscribe;
    }, []);

    return (
        <header className="bg-white shadow-md sticky top-0 z-10">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <svg className="text-blue-600 h-8 w-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
                    </svg>
                    <Link href="/">
                        <h1 className="text-2xl font-bold text-gray-900">Eyego</h1>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6">
                    <Link className="text-gray-900 hover:text-blue-600 font-medium transition-colors" href="/dashboard/charts">Dashboard</Link>
                    {user ? (
                        <>

                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                                onClick={() => signOut(auth)}
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <Link className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors" href="/login">Login</Link>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        className="p-2 text-gray-900 hover:text-blue-600 focus:outline-none"
                    >
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-6 pb-4 bg-white shadow-md flex flex-col space-y-2">
                    <Link
                        className="text-gray-900 hover:text-blue-600 font-medium transition-colors py-2"
                        href="/dashboard/charts"
                        onClick={() => setIsOpen(false)}
                    >
                        Dashboard
                    </Link>
                    {user ? (
                        <>
                            <span className="text-gray-700 font-medium py-2">{user.email}</span>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-center"
                                onClick={() => { setIsOpen(false); signOut(auth); }}
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <Link
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center"
                            href="/login"
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </Link>
                    )}
                </div>
            )}
        </header>
    );
}
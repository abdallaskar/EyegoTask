'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function Home() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <div className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Eyego Dashboard</h2>
          <p className="text-base text-gray-600 mb-8">
            Your central hub for monitoring, analysis, and insights. Log in to access your dashboard or explore the features.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row">
            {!user && (
              <Link
                href="/login"
                className="bg-white text-gray-600 border border-gray-300 rounded-lg px-6 py-3 font-semibold hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors w-full sm:w-auto"
              >
                Login
              </Link>
            )}
            <Link
              href="/dashboard/charts"
              className="bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors w-full sm:w-auto"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
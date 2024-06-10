import React from 'react';
import Link from 'next/link';

const FrontPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <header className="w-full py-4 bg-indigo-600 text-white text-center shadow-md">
        <h1 className="text-3xl font-bold">Welcome to Our A.I Mock Interview Website</h1>
      </header>
      
      <main className="flex-1 flex flex-col justify-center items-center px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Us Today</h2>
        <p className="text-gray-700 text-center mb-8">
          Sign up now to get access to our exclusive content and community.
        </p>
        <div className="flex space-x-4">
          <Link href="/dashboard"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400">
              Go to Dashboard
            
          </Link>
        </div>
      </main>
      
      <footer className="w-full py-4 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FrontPage;

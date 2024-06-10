
import React from 'react';
import { SignIn } from "@clerk/nextjs";



const FrontPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <header className="w-full py-4 bg-indigo-600 text-white text-center shadow-md">
        <h1 className="text-3xl font-bold">Welcome to Our A.I Mock interview website</h1>
      </header>
      
      <main className="flex-1 flex flex-col justify-center items-center px-4 py-8 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Us Today</h2>
        <p className="text-gray-700 text-center mb-8">
          Sign up now to get access to our exclusive content and community.
        </p>
        <div className="flex space-x-4">
          
            <SignIn className="px-6 py-3 bg-indigo-600 text-white rounded-full text-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Sign In
            </SignIn>
          
          <Link href="/signup">
            <button className="px-6 py-3 bg-gray-300 text-gray-900 rounded-full text-lg font-medium hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300">
              Sign Up
            </button>
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

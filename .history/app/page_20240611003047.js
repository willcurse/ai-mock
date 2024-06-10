import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const FrontPage = () => {
  return (
    <div>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Ace Your Interviews with AI Assistance
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Prepare for your interviews with our cutting-edge AI technology. Get personalized feedback, improve your responses, and increase your chances of success. Join our community and take the next step in your career.
            </p>

            <div className="mt-4 md:mt-8 flex justify-center sm:justify-start space-x-4">
              <Link
                href="/signin"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="inline-block rounded bg-gray-300 px-12 py-3 text-sm font-medium text-gray-900 transition hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        <img
          alt="Interview Preparation"
          src="https://images.unsplash.com/photo-1581092580508-4c4d66c75de8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
          className="h-56 w-full object-cover sm:h-full"
        />
      </section>
    </div>
  );
};

export default FrontPage;

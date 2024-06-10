"use client";
import React from 'react';
import plans from '../../../utils/Payment';  // Adjust the path according to your project structure

const Upgrade = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="flex  gap-8 sm:items-center">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

const PlanCard = ({ plan }) => {
  return (
    <div className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:px-8 lg:p-12">
      <div className="text-center">
        <h2 className="text-lg font-medium text-gray-900">
          {plan.name}
          <span className="sr-only">{plan.price}</span>
        </h2>

        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">{plan.price}</strong>
          <span className="text-sm font-medium text-gray-700"> {plan.duration} </span>
        </p>
      </div>

      <ul className="mt-6 space-y-2">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 text-indigo-700"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={plan.link}
        className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
      >
        Get Started
      </a>
    </div>
  );
};

export default Upgrade;

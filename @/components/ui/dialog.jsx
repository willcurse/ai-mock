"use client";
import React from 'react';
import plans from '../../../utils/Payment';  // Adjust the path according to your project structure

const Upgrade = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center md:gap-8">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

const PlanCard = ({ plan }) => {
  return (
    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
      <div className="text-center">
        <h2 className="text-lg font-medium text-gray-900">{plan.price}<span className="sr-only"> Plan</span></h2>
        <p className="mt-2 sm:mt-4">
          <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">{plan.price}</strong>
          <span className="text-sm font-medium text-gray-700">{plan.duration}</span>
        </p>
      </div>
      <ul className="mt-6 space-y-2">
        {/* Add your plan features here */}
      </ul>
      <a
        href={plan.link}
        className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
      >
        Select Plan
      </a>
    </div>
  );
};

export default Upgrade;

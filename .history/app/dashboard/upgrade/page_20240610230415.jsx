"use client"
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const Upgrade = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center md:gap-8">
          <PlanCard plan="Basic" price="0" />
          <PlanCard plan="Standard" price="1500" />
          <PlanCard plan="Pro" price="3000" />
        </div>
      </div>
    </Elements>
  );
};

const PlanCard = ({ plan, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handlePayment = async () => {
    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    try {
      const { clientSecret } = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: price }),
      }).then((res) => res.json());

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          setSuccess(true);
        }
      }
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
      <div className="text-center">
        <h2 className="text-lg font-medium text-gray-900">{plan}<span className="sr-only"> Plan</span></h2>
        <p className="mt-2 sm:mt-4"><strong className="text-3xl font-bold text-gray-900 sm:text-4xl">{price / 100}$</strong><span className="text-sm font-medium text-gray-700">/month</span></p>
      </div>
      <ul className="mt-6 space-y-2">
        {/* Plan features here */}
      </ul>
      <CardElement className="mt-4" />
      <button
        onClick={handlePayment}
        className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
        disabled={!stripe || loading}
      >
        {loading ? 'Processing...' : 'Get Started'}
      </button>
      {error && <div className="text-red-600 mt-4">{error}</div>}
      {success && <div className="text-green-600 mt-4">Payment successful!</div>}
    </div>
  );
};

export default Upgrade;

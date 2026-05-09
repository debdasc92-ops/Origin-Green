"use client";

import Script from "next/script";
import { useState } from "react";

export default function CheckoutPage() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handlePayment = () => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 29900,
      currency: "INR",
      name: "ORIGIN GREEN",
      description: "Moringa Powder Order",

      handler: function () {
        alert("Payment Successful 🎉");
      },

      prefill: {
        name: name,
      },

      notes: {
        address: address,
      },

      theme: {
        color: "#15803d",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-xl">
          <h1 className="text-5xl font-black mb-10 text-green-700">
            Checkout
          </h1>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-4 rounded-2xl mb-6"
          />

          <textarea
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border p-4 rounded-2xl mb-6"
          />

          <button
            onClick={handlePayment}
            className="w-full bg-green-700 text-white py-5 rounded-2xl text-2xl font-bold"
          >
            Pay ₹299
          </button>
        </div>
      </div>
    </>
  );
}
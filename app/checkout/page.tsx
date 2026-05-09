"use client";

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
      description: "Premium Moringa Powder",
      image: "/logo.png",
      handler: function () {
        alert("Payment Successful");
      },
      prefill: {
        name,
      },
      theme: {
        color: "#0b7a33",
      },
    };

    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-green-800 to-lime-500 flex items-center justify-center px-4 py-10">
      <div className="bg-white w-full max-w-5xl rounded-[40px] overflow-hidden shadow-2xl grid md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="bg-gradient-to-br from-green-900 to-green-700 text-white p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight">
              Premium <br /> Moringa Powder
            </h1>

            <p className="mt-6 text-green-100 text-lg leading-relaxed">
              Freshly packed moringa powder crafted for daily wellness,
              immunity and energy.
            </p>
          </div>

          <div className="mt-10 bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
            <p className="text-sm text-green-100">Total Amount</p>

            <h2 className="text-5xl font-bold mt-2">₹299</h2>

            <p className="mt-3 text-green-200 text-sm">
              Secure payment powered by Razorpay
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold text-green-800 mb-8">
            Checkout
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-5 px-5 py-4 rounded-2xl border-2 border-green-700 bg-white text-green-900 placeholder:text-green-500 outline-none focus:ring-4 focus:ring-green-300"
          />

          <textarea
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={5}
            className="w-full mb-6 px-5 py-4 rounded-2xl border-2 border-green-700 bg-white text-green-900 placeholder:text-green-500 outline-none focus:ring-4 focus:ring-green-300 resize-none"
          />

          <button
            onClick={handlePayment}
            className="w-full bg-green-700 hover:bg-green-800 text-white text-2xl font-bold py-5 rounded-2xl transition-all duration-300 shadow-lg hover:scale-[1.02]"
          >
            Pay ₹299
          </button>

          <p className="text-center text-green-700 mt-5 text-sm">
            100% Secure Payment Gateway
          </p>
        </div>
      </div>
    </div>
  );
}
"use client";

declare global {
  interface Window {
    Razorpay: any;
  }
}

import { useState } from "react";

export default function CheckoutPage() {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">

      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-xl">

        <h1 className="text-5xl font-black mb-10 text-green-700">
          Checkout
        </h1>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-4 rounded-2xl mb-6 text-green-1000 placeholder:text-green-400"
        />

        <textarea
          placeholder="Your Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border p-4 rounded-2xl mb-6 text-green-1000 placeholder:text-green-400"
        />

        <button
  onClick={() => {

    const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 29900,
      currency: "INR",
      name: "ORIGIN GREEN",
      description: "Moringa Powder Order",

      handler: function () {
        alert("Payment Successful 🎉");
      },

      theme: {
        color: "#15803d",
      },
    };

    if (typeof window !== "undefined" && window.Razorpay) {

  const rzp = new window.Razorpay(options);
  rzp.open();

} else {

  alert("Razorpay failed to load");

}
  }}

  className="w-full bg-green-700 text-white py-5 rounded-2xl text-xl font-bold"
>
  Pay ₹299
</button>

      </div>

    </div>
  );
}
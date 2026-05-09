"use client";

import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-green-800 text-white px-8 py-4 flex justify-between items-center shadow-lg">
        <h1 className="text-3xl font-black">ORIGIN GREEN</h1>

        <div className="flex items-center gap-6">
          <button className="font-semibold">Home</button>
          <button className="font-semibold">Products</button>

          <div className="bg-white text-black px-4 py-2 rounded-xl font-bold">
            🛒 {cart}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 to-lime-500 text-white py-20 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <p className="uppercase tracking-[4px] mb-4">
              100% Natural Wellness
            </p>

            <h1 className="text-6xl font-black leading-tight mb-6">
              Premium Moringa Powder
            </h1>

            <p className="text-lg text-green-100 mb-8">
              Freshly packed moringa powder crafted for daily health and immunity.
            </p>

            <button className="bg-white text-green-900 px-8 py-4 rounded-2xl font-bold">
              Shop Now
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop"
              className="rounded-[30px] shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Product Section */}
      <section className="max-w-7xl mx-auto py-20 px-8">

        <h2 className="text-4xl font-black mb-10 text-center">
          Featured Product
        </h2>

        <div className="bg-white rounded-3xl shadow-xl p-8 grid lg:grid-cols-2 gap-10">

          <div>
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl"
            />
          </div>

          <div className="flex flex-col justify-center">

            <h3 className="text-5xl font-black mb-6">
              Organic Moringa Powder
            </h3>

            <p className="text-gray-600 text-lg mb-6">
              Rich in vitamins, minerals, and antioxidants.
            </p>

            <h4 className="text-4xl font-black text-green-700 mb-8">
              ₹299
            </h4>

            <div className="flex gap-4">

              <button
                onClick={() => setCart(cart + 1)}
                className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-bold"
              >
                Add To Cart
              </button>

              <a
  href="/cart"
  className="border border-black px-8 py-4 rounded-2xl font-bold"
>
  Buy Now
</a>
            </div>

          </div>

        </div>

      </section>

    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around items-center py-3 z-50 shadow-lg">

  <a href="/" className="flex flex-col items-center text-sm font-medium">
    🏠
    <span>Home</span>
  </a>

  <a href="/cart" className="flex flex-col items-center text-sm font-medium">
    🛒
    <span>Cart</span>
  </a>

  <a
    href="/checkout"
    className="bg-green-700 text-white px-5 py-2 rounded-full font-semibold shadow-md"
  >
    Buy Now
  </a>
</div>
</div>
  );
}
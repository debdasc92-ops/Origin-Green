"use client";

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-black mb-10">
        Your Cart 🛒
      </h1>

      <div className="bg-white rounded-3xl shadow-xl p-8">

        <div className="flex justify-between items-center border-b pb-6 mb-6">

          <div>
            <h2 className="text-3xl font-bold">
              Organic Moringa Powder
            </h2>

            <p className="text-gray-500">
              Quantity: 1
            </p>
          </div>

          <h3 className="text-3xl font-black text-green-700">
            ₹299
          </h3>

        </div>

        <div className="flex justify-between items-center">

          <h2 className="text-4xl font-black">
            Total: ₹299
          </h2>

          <a
            href="/checkout"
            className="bg-green-700 text-white px-8 py-4 rounded-2xl font-bold"
          >
            Proceed To Checkout
          </a>

        </div>

      </div>

    </div>
  );
}
"use client";
import React, { useState } from "react";
import Image from "next/image";
import CheckoutLayout from "./layout/CheckoutLayout";
import ProductRow from "./components/ProductRow";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, totalItems, totalPrice, isLoaded } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState<"pickup" | "delivery">("pickup");

  if (!isLoaded) return null; // Wait for localStorage to hydrate

  return (
    <CheckoutLayout>
      <div className="flex w-full flex-col gap-6 px-4 pt-18 md:px-12 lg:px-24">
        {/* Title */}
        <h1 className="font-avenir-black w-fit bg-gradient-to-r from-[#8ADF60] to-[#3CE0F9] bg-clip-text text-4xl text-transparent md:text-5xl">
          Cart
        </h1>

        {/* Table Header - Only visible on md+ */}
        <div className="hidden w-full flex-row items-center justify-between rounded-full bg-[#333333] px-4 py-3 text-sm font-semibold text-white shadow-md md:flex">
          <div className="w-[35%] px-2">Product</div>
          <div className="flex w-[20%] justify-center">Unit Price</div>
          <div className="flex w-[15%] justify-center">Quantity</div>
          <div className="flex w-[20%] justify-center">Total Price</div>
          <div className="flex w-[10%] justify-center">Action</div>
        </div>

        {/* Cart Items */}
        <div className="scrollbar-hide flex w-full flex-col gap-4 overflow-x-auto pb-4">
          {cart.length === 0 ? (
            <div className="flex w-full items-center justify-center rounded-xl border border-white/10 bg-[#333333] p-12 text-gray-400">
              Your cart is empty.
            </div>
          ) : (
            cart.map((item) => <ProductRow key={item.id} item={item} />)
          )}
        </div>

        {/* Your Profile Section */}
        <div className="mt-8 flex w-full flex-col gap-6 rounded-2xl bg-[#333333] p-8 text-white shadow-xl">
          <h2 className="font-avenir-black text-3xl">Your Profile</h2>

          <div className="flex max-w-xl flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="rounded-lg border border-white/20 bg-[#222222] p-3 text-sm text-white outline-none focus:border-[#75C44D]"
              />
            </div>

            <div className="mt-2 flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-300">Method</label>
              <div className="flex gap-4">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="method"
                    value="pickup"
                    checked={deliveryMethod === "pickup"}
                    onChange={() => setDeliveryMethod("pickup")}
                    className="accent-[#75C44D]"
                  />
                  <span>Pick Up at UGM</span>
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="radio"
                    name="method"
                    value="delivery"
                    checked={deliveryMethod === "delivery"}
                    onChange={() => setDeliveryMethod("delivery")}
                    className="accent-[#75C44D]"
                  />
                  <span>Delivery</span>
                </label>
              </div>
            </div>

            {deliveryMethod === "delivery" && (
              <div className="animate-in fade-in slide-in-from-top-2 mt-2 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-300">Delivery Address</label>
                  <textarea
                    rows={3}
                    placeholder="Enter your full address"
                    className="rounded-lg border border-white/20 bg-[#222222] p-3 text-sm text-white outline-none focus:border-[#75C44D]"
                  />
                </div>
                <div className="rounded-lg border border-yellow-500/50 bg-yellow-500/10 p-3 text-xs text-yellow-200">
                  ⚠️ <strong>Note:</strong> Shipping cost is borne by the user and will be
                  calculated by the admin upon confirmation.
                </div>
              </div>
            )}

            {deliveryMethod === "pickup" && (
              <div className="animate-in fade-in slide-in-from-top-2 mt-2 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-300">Pick Up Address</label>
                  <p className="rounded-lg border border-white/20 bg-[#222222] p-3 text-sm text-gray-300">
                    Selasar Fisipol, Universitas Gadjah Mada, Yogyakarta
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Total & Checkout Section */}
        <div className="mb-24 flex w-full flex-row items-center justify-between rounded-2xl bg-[#333333] p-8 text-white shadow-xl">
          <div className="flex flex-col">
            <span className="font-avenir-heavy text-sm text-[#75C44D]">Total Price</span>
            <span className="font-avenir-black text-2xl text-white md:text-3xl">
              IDR {totalPrice.toLocaleString("id-ID")}
            </span>
          </div>
          <button
            disabled={cart.length === 0}
            className="font-avenir-black flex h-12 items-center justify-center rounded-lg bg-[#75C44D] px-8 text-white transition-all hover:bg-[#82D956] disabled:opacity-50"
          >
            Checkout
          </button>
        </div>
      </div>
    </CheckoutLayout>
  );
};

export default Checkout;

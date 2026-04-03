import React from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useCart, CartItem } from "../../context/CartContext";

interface ProductRowProps {
  item: CartItem;
}

const ProductRow = ({ item }: ProductRowProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex w-full flex-col gap-4 rounded-xl border border-white/10 bg-[#333333] p-4 text-white md:flex-row md:items-center md:justify-between md:gap-0">
      
      {/* Product Image and Details */}
      <div className="flex w-full flex-row items-center gap-4 md:w-[35%] md:pl-2">
        <div className="relative aspect-[4/3] w-[80px] shrink-0 overflow-hidden rounded-md bg-gray-500 md:w-[100px]">
          <Image src={item.image} alt={item.name} fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="font-avenir-heavy text-base md:text-xl">{item.name}</h5>
          {item.variant && (
            <p className="font-avenir-regular text-xs text-gray-300">
              Variant: {item.variant}
            </p>
          )}
        </div>
      </div>

      {/* Responsive Info Grid for Mobile, Row for Desktop */}
      <div className="flex w-full flex-col gap-4 border-t border-white/10 pt-4 md:w-[65%] md:flex-row md:items-center md:gap-0 md:border-t-0 md:pt-0">
        
        {/* Unit Price */}
        <div className="flex items-center justify-between md:w-[30%] md:justify-center">
          <span className="text-xs text-gray-400 md:hidden">Unit Price</span>
          <p className="font-avenir-heavy text-sm">
            IDR {item.price.toLocaleString("id-ID")}
          </p>
        </div>

        {/* Quantity */}
        <div className="flex items-center justify-between md:w-[25%] md:justify-center">
          <span className="text-xs text-gray-400 md:hidden">Quantity</span>
          <div className="flex h-8 w-24 items-center justify-between overflow-hidden rounded-full bg-[#75C44D]">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="flex h-full w-1/3 items-center justify-center text-white transition-all hover:bg-black/10"
            >
              -
            </button>
            <div className="flex h-full w-1/3 items-center justify-center bg-white text-sm font-semibold text-black">
              {item.quantity}
            </div>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="flex h-full w-1/3 items-center justify-center text-white transition-all hover:bg-black/10"
            >
              +
            </button>
          </div>
        </div>

        {/* Total Price */}
        <div className="flex items-center justify-between md:w-[30%] md:justify-center">
          <span className="text-xs text-gray-400 md:hidden">Total Price</span>
          <p className="font-avenir-heavy text-sm text-[#75C44D] md:text-white">
            IDR {(item.price * item.quantity).toLocaleString("id-ID")}
          </p>
        </div>

        {/* Action */}
        <div className="flex items-center justify-end md:w-[15%] md:justify-center">
          <button
            onClick={() => removeFromCart(item.id)}
            className="flex h-8 w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-transparent px-4 text-xs text-white transition-all hover:border-red-500 hover:bg-red-500 md:w-auto"
          >
            <Trash2 className="h-4 w-4 md:hidden" />
            <span>Delete</span>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ProductRow;

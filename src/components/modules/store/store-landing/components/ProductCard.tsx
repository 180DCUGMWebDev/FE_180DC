"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Check, ShoppingCart } from "lucide-react";
import { useCart } from "../../context/CartContext";
import { Product, productNeedsSize } from "../../data/ProductData";

interface ProductCardProps {
  product: Product;
  onOpenDetail: (product: Product) => void;
}

const ProductCard = ({ product, onOpenDetail }: ProductCardProps) => {
  const { cart, addToCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  const needsSize = productNeedsSize(product);
  // Check if already in cart (any size variant)
  const isAdded = cart.some((item) => item.id === product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();

    // If product needs size, open detail sheet instead
    if (needsSize) {
      onOpenDetail(product);
      return;
    }

    setIsSuccess(true);
    addToCart({
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      type: product.type,
    });

    setTimeout(() => {
      setIsSuccess(false);
    }, 1200);
  };

  return (
    <article
      onClick={() => onOpenDetail(product)}
      className="flex w-[280px] shrink-0 cursor-pointer snap-start flex-col items-center justify-center rounded-[20px] border border-white/10 bg-[#1A1A1A]/35 p-4 transition-all duration-300 hover:border-[#75C44D]/30 hover:bg-[#1A1A1A]/50 md:w-[320px]"
    >
      <div
        className={`relative w-full overflow-hidden rounded-lg ${
          product.type === "digital" ? "aspect-[4/3] bg-white/90 p-4" : "aspect-square bg-gray-500"
        }`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={product.type === "digital" ? "object-contain" : "object-cover"}
        />
        {/* Type badge */}
        <div className="absolute left-2 top-2">
          <span
            className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
              product.type === "bundle"
                ? "bg-purple-500/80 text-white backdrop-blur-sm"
                : product.type === "digital"
                  ? "bg-blue-500/80 text-white backdrop-blur-sm"
                  : "bg-[#75C44D]/80 text-white backdrop-blur-sm"
            }`}
          >
            {product.type === "bundle" ? "Bundle" : product.type === "digital" ? "Digital" : "Merch"}
          </span>
        </div>
        {/* Size indicator */}
        {needsSize && (
          <div className="absolute bottom-2 right-2">
            <span className="rounded-full bg-black/50 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
              Pilih Size
            </span>
          </div>
        )}
      </div>
      <div className="mt-4 flex w-full flex-col gap-1 text-left">
        <h5 className="font-avenir-black text-lg leading-[1.1] text-white md:text-xl">
          {product.name}
        </h5>
        <p className="font-avenir-regular text-xs text-[#cccccc] md:text-sm">
          IDR {product.price.toLocaleString("id-ID")}
        </p>
      </div>
      <div className="mt-5 flex w-full items-center justify-between gap-2">
        <div className="w-1/2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetail(product);
            }}
            className="font-avenir-black flex h-10 w-full items-center justify-center rounded-full bg-[#75C44D] px-2 text-xs text-white transition-all hover:bg-[#82D956] md:text-sm"
          >
            Detail
          </button>
        </div>
        <div className="w-1/2">
          <button
            onClick={handleQuickAdd}
            disabled={isSuccess}
            className={`flex h-10 w-full items-center justify-center gap-1 overflow-hidden rounded-full border-2 px-2 text-xs font-semibold text-white transition-all duration-300 md:text-sm ${
              isSuccess
                ? "border-[#75C44D] bg-[#75C44D]"
                : "border-lime-300 bg-transparent hover:bg-white/10"
            }`}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {isSuccess ? (
                <motion.div
                  key="check"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Check className="h-5 w-5 text-white" strokeWidth={3} />
                </motion.div>
              ) : (
                <motion.span
                  key={isAdded ? "more" : "add"}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-1"
                >
                  <ShoppingCart className="h-3.5 w-3.5" />
                  {needsSize ? "Select" : isAdded ? "Add More" : "Add"}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;

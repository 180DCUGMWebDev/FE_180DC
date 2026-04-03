"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";
import { useCart } from "../../context/CartContext";

interface ProductCardInterface {
  id: number;
  image: string;
  name: string;
  price: number;
  slugLink: string;
}

const ProductCard = ({ id, image, name, price, slugLink }: ProductCardInterface) => {
  const router = useRouter();
  const { cart, addToCart } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  // Derive isAdded dari global context, sehingga biarpun di-refresh akan tetap "Add More" bila ada di keranjang
  const isAdded = cart.some((item) => item.id === id);

  const handleAddToCart = () => {
    setIsSuccess(true);
    addToCart({ id, image, name, price, slugLink });
    
    // Tahan checkmark selama 1 detik lalu kembali ke bentuk semula (yang otomatis menampilkan "Add More" karena isAdded menjadi true)
    setTimeout(() => {
      setIsSuccess(false);
    }, 1200);
  };

  return (
    <article className="flex w-[280px] shrink-0 snap-start flex-col items-center justify-center rounded-[20px] border border-white/10 bg-[#1A1A1A]/35 p-4 transition-all duration-300 hover:bg-[#1A1A1A]/50 md:w-[320px]">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-500">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <div className="mt-4 flex w-full flex-col gap-1 text-left">
        <h5 className="font-avenir-black text-lg leading-[1.1] text-white md:text-xl">{name}</h5>
        <p className="font-avenir-regular text-xs text-[#cccccc] md:text-sm">
          IDR {price.toLocaleString("id-ID")}
        </p>
      </div>
      <div className="mt-5 flex w-full items-center justify-between gap-2">
        <div className="font-avenir-heavy w-1/2">
          <button
            onClick={() => router.push(slugLink)}
            className="font-avenir-black flex h-10 w-full items-center justify-center rounded-full bg-[#75C44D] px-2 text-xs text-white transition-all hover:bg-[#82D956] md:text-sm"
          >
            Learn More
          </button>
        </div>
        <div className="w-1/2">
          <button
            onClick={handleAddToCart}
            disabled={isSuccess}
            className={`flex h-10 w-full overflow-hidden items-center justify-center rounded-full border-2 px-2 text-xs font-semibold text-white transition-all duration-300 md:text-sm ${
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
                >
                  {isAdded ? "Add More" : "Add to Cart"}
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

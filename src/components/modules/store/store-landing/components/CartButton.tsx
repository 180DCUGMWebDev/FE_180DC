"use client";
import React from "react";
import { ShoppingBasket } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CartButtonProps {
  productCount: number;
  onClick: () => void;
}

const CartButton = ({ productCount, onClick }: CartButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-full bg-[#38848F] p-4 transition-all duration-300 hover:bg-[#24aabe]"
    >
      <AnimatePresence>
        {productCount > 0 && (
          <div className="absolute top-0 right-0 z-10 translate-x-1/4 -translate-y-1/4">
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.5 }}
              className="font-lato-bold relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-[#D13C45] text-xs text-white shadow-sm"
            >
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={productCount}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="absolute"
                >
                  {productCount}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ShoppingBasket className="h-10 w-10 text-white" />
      <p className="font-avenir-heavy text-sm text-white">Cart</p>
    </button>
  );
};

export default CartButton;

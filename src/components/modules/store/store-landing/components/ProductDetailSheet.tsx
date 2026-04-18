"use client";
import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Check, Minus, Plus, ShoppingCart } from "lucide-react";
import { Product, productNeedsSize } from "../../data/ProductData";
import { useCart } from "../../context/CartContext";

interface ProductDetailSheetProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailSheet({ product, isOpen, onClose }: ProductDetailSheetProps) {
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [sizeError, setSizeError] = useState(false);

  // Reset state when product changes
  useEffect(() => {
    if (product) {
      setCurrentImageIndex(0);
      setSelectedSize(null);
      setQuantity(1);
      setAddedSuccess(false);
      setSizeError(false);
    }
  }, [product]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleAddToCart = useCallback(() => {
    if (!product) return;

    if (productNeedsSize(product) && !selectedSize) {
      setSizeError(true);
      return;
    }

    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        type: product.type,
        size: selectedSize || undefined,
      },
      quantity
    );

    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 1000);
  }, [product, selectedSize, quantity, addToCart, onClose]);

  const images = product?.images || (product ? [product.image] : []);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!product) return null;

  const needsSize = productNeedsSize(product);

  const sheetContent = (
    <div className="flex flex-col">
      {/* Image Carousel */}
      <div
        className={`relative aspect-square w-full overflow-hidden ${
          product.type === "digital" ? "bg-white/90" : "bg-[#222222]"
        }`}
      >
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex]}
              alt={`${product.name} - ${currentImageIndex + 1}`}
              fill
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Dots indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === currentImageIndex
                    ? "scale-125 bg-[#75C44D]"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-4 p-5">
        {/* Name + Price */}
        <div>
          <h2 className="font-avenir-black text-2xl text-white">{product.name}</h2>
          <p className="font-avenir-heavy mt-1 text-xl text-[#75C44D]">
            IDR {product.price.toLocaleString("id-ID")}
          </p>
        </div>

        {/* Description */}
        {product.description && (
          <p className="font-lato-regular text-sm leading-relaxed text-gray-300">
            {product.description}
          </p>
        )}

        {/* Bundle Contents */}
        {product.bundleContents && product.bundleContents.length > 0 && (
          <div className="rounded-lg border border-white/10 bg-[#222222] p-3">
            <p className="font-avenir-heavy mb-2 text-xs uppercase tracking-wider text-gray-400">
              Isi Paket
            </p>
            <ul className="space-y-1">
              {product.bundleContents.map((item, idx) => (
                <li key={idx} className="font-lato-regular flex items-center gap-2 text-sm text-gray-200">
                  <span className="h-1 w-1 rounded-full bg-[#75C44D]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Size Selector */}
        {needsSize && product.sizes && (
          <div>
            <p className="font-avenir-heavy mb-2 text-sm text-white">
              Pilih Size <span className="text-red-400">*</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    setSizeError(false);
                  }}
                  className={`rounded-lg border-2 px-4 py-2 text-sm font-semibold transition-all ${
                    selectedSize === size
                      ? "border-[#75C44D] bg-[#75C44D]/20 text-[#75C44D]"
                      : "border-white/20 text-gray-300 hover:border-white/40"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {sizeError && (
              <p className="mt-2 text-xs text-red-400">Pilih size terlebih dahulu</p>
            )}
          </div>
        )}

        {/* Quantity */}
        <div>
          <p className="font-avenir-heavy mb-2 text-sm text-white">Quantity</p>
          <div className="flex h-10 w-32 items-center justify-between overflow-hidden rounded-lg border border-white/20">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="flex h-full w-10 items-center justify-center text-gray-300 transition-colors hover:bg-white/10"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="font-avenir-heavy text-white">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="flex h-full w-10 items-center justify-center text-gray-300 transition-colors hover:bg-white/10"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={addedSuccess}
          className={`font-avenir-black flex h-12 w-full items-center justify-center gap-2 rounded-lg text-white transition-all ${
            addedSuccess
              ? "bg-[#75C44D]"
              : "bg-[#75C44D] hover:bg-[#82D956] active:scale-[0.98]"
          }`}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {addedSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="flex items-center gap-2"
              >
                <Check className="h-5 w-5" strokeWidth={3} />
                <span>Added!</span>
              </motion.div>
            ) : (
              <motion.div
                key="add"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm"
          />

          {/* Desktop Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[9999] hidden items-center justify-center p-6 md:flex pointer-events-none"
          >
            <div className="pointer-events-auto relative max-h-[90vh] w-full max-w-lg overflow-hidden overflow-y-auto rounded-2xl bg-[#333333] shadow-2xl scrollbar-hide">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              >
                <X className="h-5 w-5" />
              </button>
              {sheetContent}
            </div>
          </motion.div>

          {/* Mobile Bottom Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-x-0 bottom-0 z-[9999] md:hidden pointer-events-none"
          >
            <div className="pointer-events-auto max-h-[92vh] overflow-y-auto rounded-t-2xl bg-[#333333] shadow-2xl scrollbar-hide">
              {/* Drag handle */}
              <div className="sticky top-0 z-10 flex items-center justify-center bg-[#333333] pb-2 pt-3">
                <div className="h-1 w-10 rounded-full bg-white/30" />
              </div>
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
              >
                <X className="h-5 w-5" />
              </button>
              {sheetContent}
              {/* Bottom safe area */}
              <div className="h-6" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

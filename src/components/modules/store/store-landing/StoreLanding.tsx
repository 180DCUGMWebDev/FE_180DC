"use client";
import React from "react";
import StoreLayout from "./layout/StoreLayout";
import ProductSection from "./layout/ProductSection";
import ProductCard from "./components/ProductCard";
import CartButton from "./components/CartButton";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import {
  bundlingProducts,
  merchandiseProducts,
  specialProducts,
} from "../data/ProductData";

const StoreLanding = () => {
  const { totalItems } = useCart();
  const router = useRouter();

  return (
    <StoreLayout>
      <div className="relative pb-2">
        <div className="mt-12 flex flex-col gap-12">
          <ProductSection
            title="Bundling Pack."
            subtitle="Paket lengkap casebook dan materi eksklusif 180DC UGM, cocok untuk kamu yang ingin belajar consulting dari awal sampai mahir."
          >
            {bundlingProducts.map((p) => (
              <ProductCard key={`bundle-${p.id}`} {...p} />
            ))}
          </ProductSection>

          <ProductSection
            title="Merchandise."
            subtitle="Tunjukkan identitasmu sebagai bagian dari 180DC UGM — dari hoodie hingga tumbler, semua hadir dalam kualitas premium."
          >
            {merchandiseProducts.map((p) => (
              <ProductCard key={`merch-${p.id}`} {...p} />
            ))}
          </ProductSection>

          <ProductSection
            title="Special Products."
            subtitle="Produk edisi terbatas dan digital tools pilihan yang dirancang khusus untuk mendukung perjalanan konsultingmu."
          >
            {specialProducts.map((p) => (
              <ProductCard key={`special-${p.id}`} {...p} />
            ))}
          </ProductSection>
        </div>

        {/* Floating Cart Button */}
        <div className="fixed right-5 bottom-30 z-50">
          <CartButton productCount={totalItems} onClick={() => router.push("/store/checkout")} />
        </div>
      </div>
    </StoreLayout>
  );
};

export default StoreLanding;

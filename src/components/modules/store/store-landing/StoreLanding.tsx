"use client";
import React, { useState } from "react";
import StoreLayout from "./layout/StoreLayout";
import ProductSection from "./layout/ProductSection";
import ProductCard from "./components/ProductCard";
import CartButton from "./components/CartButton";
import ProductDetailSheet from "./components/ProductDetailSheet";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import {
  bundleProducts,
  merchandiseProducts,
  specialProducts,
  Product,
} from "../data/ProductData";

const StoreLanding = () => {
  const { totalItems } = useCart();
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleOpenDetail = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
  };

  return (
    <StoreLayout>
      <div className="relative pb-2">
        <div className="mt-12 flex flex-col gap-12">
          <ProductSection
            title="Merchandise."
            subtitle="Tunjukkan identitasmu sebagai bagian dari 180DC UGM, semua hadir dalam kualitas premium."
          >
            {merchandiseProducts.map((p) => (
              <ProductCard key={`merch-${p.id}`} product={p} onOpenDetail={handleOpenDetail} />
            ))}
          </ProductSection>

          <ProductSection
            title="Special Products."
            subtitle="Produk digital pilihan yang dirancang khusus untuk mendukung perjalanan konsultingmu."
          >
            {specialProducts.map((p) => (
              <ProductCard key={`special-${p.id}`} product={p} onOpenDetail={handleOpenDetail} />
            ))}
          </ProductSection>

          <ProductSection
            title="Paket Bundle."
            subtitle="Paket lengkap dan eksklusif dari 180DC UGM — lebih hemat dari beli satuan!"
          >
            {bundleProducts.map((p) => (
              <ProductCard key={`bundle-${p.id}`} product={p} onOpenDetail={handleOpenDetail} />
            ))}
          </ProductSection>
        </div>

        {/* Floating Cart Button */}
        <div className="fixed right-5 bottom-30 z-50">
          <CartButton productCount={totalItems} onClick={() => router.push("/store/checkout")} />
        </div>
      </div>

      {/* Product Detail Modal / Bottom Sheet */}
      <ProductDetailSheet
        product={selectedProduct}
        isOpen={isDetailOpen}
        onClose={handleCloseDetail}
      />
    </StoreLayout>
  );
};

export default StoreLanding;

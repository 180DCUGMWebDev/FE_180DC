"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Receipt } from "../components/Receipt";
import { useCart } from "../../context/CartContext";

const RECEIPT_KEY = "merch-receipt-data";

export default function Step3Complete({ transactionId }: { transactionId?: string }) {
  const receiptRef = useRef<HTMLDivElement>(null);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [orderData, setOrderData] = useState<any>(null);
  const { clearCart } = useCart();
  const router = useRouter();

  // Confetti animation
  useEffect(() => {
    const end = Date.now() + 3 * 1000;
    const colors = ["#75C44D", "#82D956", "#3CE0F9", "#8ADF60"];
    const frame = () => {
      if (Date.now() > end) return;
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors,
      });
      requestAnimationFrame(frame);
    };
    frame();
  }, []);

  // Load receipt data
  useEffect(() => {
    const savedData = localStorage.getItem(RECEIPT_KEY);
    if (savedData) {
      try {
        setOrderData(JSON.parse(savedData));
      } catch (e) {
        console.error("Failed to parse receipt data", e);
      }
    }
  }, []);

  // Clear cart on mount
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  const downloadPDF = async () => {
    const element = receiptRef.current;
    if (!element) return;

    try {
      const html2pdfModule = await import("html2pdf.js");
      const html2pdf = html2pdfModule.default;

      if (!html2pdf) throw new Error("html2pdf.js failed to load");

      const opt = {
        margin: 10,
        filename: `receipt-${orderData?.transaction_id || "new"}.pdf`,
        image: { type: "jpeg" as any, quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" as const },
      };

      await html2pdf().set(opt).from(element).save();
      setIsDownloaded(true);
      toast.success("Receipt downloaded successfully!");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Failed to download: ${error.message}`);
      } else {
        toast.error("Failed to download receipt.");
      }
    }
  };

  return (
    <div className="mx-auto max-w-lg text-center">
      {/* Hidden receipt for PDF */}
      <div className="hidden">
        <Receipt ref={receiptRef} orderData={orderData} />
      </div>

      <div className="mb-6 text-6xl">🎉</div>
      <h2 className="font-avenir-black mb-4 text-3xl text-white">Payment Complete!</h2>
      <p className="font-lato-regular mb-8 text-lg text-gray-300">
        You&apos;ve made a great choice! ✨
      </p>

      {/* Download Receipt */}
      <div className="mb-5 rounded-2xl border border-[#75C44D]/30 bg-[#75C44D]/10 p-6">
        <h3 className="font-avenir-black mb-3 text-xl text-[#75C44D]">Download Receipt</h3>
        <button
          type="button"
          onClick={downloadPDF}
          className="font-avenir-black w-full rounded-lg bg-[#75C44D] py-3 text-white transition-all hover:bg-[#82D956]"
        >
          Download PDF
        </button>
      </div>

      {/* LINE Group */}
      <div className="rounded-2xl border border-white/10 bg-[#222222] p-6">
        <h3 className="font-avenir-black mb-3 text-xl text-white">Join Our Community</h3>
        <Link
          href="https://line.me/ti/g/v-R8wZBneG"
          onClick={(e) => {
            if (!isDownloaded) {
              e.preventDefault();
              toast.error("Please download the receipt first");
            }
          }}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium text-white shadow-md transition-colors duration-200 ${
            isDownloaded
              ? "bg-[#06C755] hover:bg-[#05b34c]"
              : "cursor-not-allowed bg-gray-600"
          }`}
        >
          {/* LINE Icon */}
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.183.592.266.339.172.863.084 1.197-.084.331-.305 1.288-.37 1.564-.114.48-.528 1.88.913 1.026 1.441-.854 7.78-4.584 10.612-7.85 2.083-2.396 3.541-4.991 3.541-7.141zm-15.523 4.413c0 .216-.176.391-.392.391h-2.518c-.216 0-.392-.175-.392-.391v-4.413c0-.216.176-.391.392-.391h.243c.216 0 .392.175.392.391v3.779h1.891c.216 0 .392.175.392.391v.243zm2.592 0c0 .216-.176.391-.391.391h-.244a.392.392 0 01-.392-.391v-4.413c0-.216.176-.391.392-.391h.244c.216 0 .391.175.391.391v4.413zm5.727 0c0 .216-.176.391-.392.391h-2.52c-.215 0-.391-.175-.391-.391v-4.413c0-.216.176-.391.391-.391h.245c.216 0 .391.175.391.391v3.779h1.893c.216 0 .392.175.392.391v.243zm3.179-1.992c0 .216-.176.391-.392.391h-1.649v.6c0 .216-.176.391-.392.391h-.242c-.216 0-.392-.175-.392-.391v-2.03c0-.216.176-.391.392-.391h2.288c.216 0 .392.175.392.391v.242c0 .216-.176.392-.392.392h-1.896v.406h1.649c.216 0 .392.176.392.392v.242c0-.001 0 0 0 0z" />
          </svg>
          {isDownloaded ? "Join LINE Group" : "Download receipt to unlock"}
        </Link>
        <p className="mt-3 text-center text-xs text-gray-500">
          You&apos;ll receive further instructions and updates in the group
        </p>
      </div>

      <p className="font-lato-regular mt-8 text-gray-400">
        Stay tuned & Thank you for purchasing!
      </p>

      <button
        type="button"
        onClick={() => router.push("/store")}
        className="font-avenir-heavy mt-6 rounded-lg border border-white/20 px-8 py-3 text-white transition-all hover:bg-white/5"
      >
        Back to Store
      </button>
    </div>
  );
}

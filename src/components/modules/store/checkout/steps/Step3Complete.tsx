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

      {/* WhatsApp Group */}
      <div className="rounded-2xl border border-white/10 bg-[#222222] p-6">
        <h3 className="font-avenir-black mb-3 text-xl text-white">Join Our Community</h3>
        <Link
          href=""
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
              ? "bg-green-600 hover:bg-green-700"
              : "cursor-not-allowed bg-gray-600"
          }`}
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          {isDownloaded ? "Join WhatsApp Group" : "Download receipt to unlock"}
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

"use client";

import React from "react";
import { Button } from "@/components/elements/Form/button";
interface Slide3Props {
  buyCasebook: boolean; // State saat ini (dari parent)
  setBuyCasebook: (value: boolean) => void; // Fungsi untuk ubah state (di parent)
  onNext: () => void;
  onBack: () => void;
}

export default function Slide3({ buyCasebook, setBuyCasebook, onNext, onBack }: Slide3Props) {
  // Fungsi ini dipanggil saat tombol Next diklik
  // Tidak perlu validasi, karena nilai default (false) sudah ada
  const handleNext = () => {
    // State `buyCasebook` sudah di-set oleh tombol pilihan,
    // jadi kita tinggal panggil onNext()
    onNext();
  };

  return (
    <div className="mx-auto max-w-lg">
      <h2 className="font-avenir-black mb-4 text-center text-2xl">Get the Full Toolkit</h2>
      <p className="font-lato-regular mb-8 text-center text-gray-600">
        Ready to dive in? To ensure you have the best resources, you can also get our official
        casebook at a special bundle price.
      </p>

      <div className="space-y-4 transition-all duration-300">
        <Button
          type="button"
          // Jika 'buyCasebook' true, pakai 'default' (hijau)
          // Jika false, pakai 'outline'
          variant={buyCasebook ? "default" : "outline"}
          size="lg"
          className="h-auto w-full py-4 text-left"
          onClick={() => setBuyCasebook(true)}
        >
          {/* --- INI TEKSNYA --- */}
          <div className="flex flex-col items-center">
            <span className="font-avenir-book text-lg">Yes, I want the complete package!</span>
            <p
              className={`font-avenir-regular ${!buyCasebook ? "text-gray-600" : "text-gray-300"}`}
            >
              (Total price becomes IDR 90K + Commitment Fee)
            </p>
          </div>
          {/* --- SELESAI --- */}
        </Button>

        <Button
          type="button"
          // Jika 'buyCasebook' false (alias !buyCasebook), pakai 'default'
          // Jika true, pakai 'outline'
          variant={!buyCasebook ? "default" : "outline"}
          size="lg"
          className="h-auto w-full py-4 text-left"
          onClick={() => setBuyCasebook(false)}
        >
          {/* --- INI TEKSNYA --- */}
          <div className="flex flex-col items-center">
            <span className={`font-avenir-book text-lg ${buyCasebook ? "text-gray-900" : ""}`}>
              No, thank you.
            </span>
            <p className={`font-avenir-regular ${buyCasebook ? "text-gray-600" : ""}`}>
              {" "}
              (Total price remains IDR 70K + Commitment Fee)
            </p>
          </div>
          {/* --- SELESAI --- */}
        </Button>
      </div>

      {/* --- Tombol Navigasi --- */}
      <div className="mt-10 flex justify-between">
        <Button type="button" variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button type="button" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
}

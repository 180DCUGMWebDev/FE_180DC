import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/elements/Form/button";

export default function Slide5() {
  const router = useRouter();
  const handleHome = () => {
    router.push("/"); // Logika untuk kembali ke Home
  };
  return (
    <div className="mx-auto max-w-lg text-center">
      {/* Kamu bisa tambahkan icon/emoji di sini */}
      <div className="mb-6 text-6xl">🎉</div>

      <h2 className="font-avenir-black mb-4 text-3xl text-gray-900">Registration Complete!</h2>

      <p className="font-lato-regular mb-8 text-lg text-gray-700">
        Thank you for securing your spot in the bootcamp!
      </p>

      {/* Info penting dari GForm */}
      <div className="rounded-lg border border-green-200 bg-green-50 p-6">
        <p className="font-lato-regular text-md text-green-800">
          Participants will be added to the official WhatsApp group by
          <br />
          <strong className="font-lato-bold text-lg">27 November 2025</strong>.
        </p>
      </div>

      <p className="font-lato-regular text-md mt-8 text-gray-600">
        Stay tuned & Thank you for joining!
      </p>

      {/* Opsional: Kamu bisa tambahkan tombol "Back to Home" */}
      <Button
        type="button"
        onClick={handleHome} // Panggil fungsi navigasi
        className="mt-8" // ShadCN otomatis pakai style default (hijau)
      >
        Back to Home
      </Button>
    </div>
  );
}

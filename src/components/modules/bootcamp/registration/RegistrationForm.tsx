// /modules/registration/RegistrationForm.tsx
"use client";

import { useState, useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

// Import semua komponen 'reusable' dan 'slides' kamu
import Stepper from "./components/Stepper";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import { toast } from "sonner"; // (Opsional: pakai ini untuk notif error)

// Tipe untuk state registrasi
type RegistrationType = "individual" | "duo";

// TIPE UNTUK SEMUA DATA FORM
type FormData = {
  // --- Fields dari Slide 2 (Peserta 1) ---
  fullName: string;
  email: string;
  whatsapp: string;
  university: string;
  batch: string;
  faculty: string;
  major: string;
  motivation: string;
  cv: string; // Link CV

  // --- Fields dari Slide 2 (Peserta 2, opsional) ---
  fullName_p2?: string;
  email_p2?: string;
  whatsapp_p2?: string;
  university_p2?: string;
  batch_p2?: string;
  faculty_p2?: string; // <-- BARU
  major_p2?: string; // <-- BARU
  motivation_p2?: string;
  cv_p2?: string;

  findUs: string; // (Single choice)
  drive_link: string; // (Social proof)

  // --- Field dari Slide 4 ---
  paymentProof: FileList; // Bukti bayar
  refundBank: string;
  refundNumber: string;
};

// === 1. KUNCI UNTUK LOCALSTORAGE ===
const STORAGE_KEY = "bootcamp-registration-progress";

export default function RegistrationForm() {
  // === 2. STATE MANAGEMENT ===
  const [currentStep, setCurrentStep] = useState(1);
  const [regType, setRegType] = useState<RegistrationType>("individual");
  const [buyCasebook, setBuyCasebook] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // --- TAMBAHAN BARU ---
  // State untuk menonaktifkan tombol submit saat upload
  const [isSubmitting, setIsSubmitting] = useState(false);
  // --- SELESAI TAMBAHAN ---

  const methods = useForm<FormData>({
    // (Kosong, sudah benar)
  });
  const { watch, reset } = methods;

  // === 3. LOGIKA MEMUAT DATA (LOAD) ===
  // (Tidak ada perubahan di sini)
  useEffect(() => {
    const savedProgress = localStorage.getItem(STORAGE_KEY);
    if (savedProgress) {
      try {
        const data = JSON.parse(savedProgress);
        if (data.formData) {
          reset(data.formData);
        }
        if (data.currentStep) {
          setCurrentStep(data.currentStep);
        }
        if (data.regType) {
          setRegType(data.regType);
        }
        if (data.buyCasebook) {
          setBuyCasebook(data.buyCasebook);
        }
      } catch (error) {
        console.error("Gagal memuat progres:", error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setIsLoading(false);
  }, [reset]);

  // === 4. LOGIKA MENYIMPAN DATA (SAVE) ===
  // (Tidak ada perubahan di sini)
  const watchedData = watch();
  useEffect(() => {
    if (isLoading) return;
    const progressData = {
      formData: watchedData,
      currentStep,
      regType,
      buyCasebook,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressData));
  }, [watchedData, currentStep, regType, buyCasebook, isLoading]);

  // === 5. LOGIKA NAVIGASI ===
  const handleNextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (regType === "individual") {
        setCurrentStep(3);
      } else {
        setCurrentStep(4);
      }
    } else if (currentStep === 3) {
      setCurrentStep(4);
    }
  };

  const handlePrevStep = () => {
    if (currentStep === 4) {
      if (regType === "individual") {
        setCurrentStep(3);
      } else {
        setCurrentStep(2);
      }
    } else if (currentStep === 3) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(1);
    }
  };

  // === 6. LOGIKA SUBMIT (DIGANTI TOTAL) ===
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // 1. Set loading jadi true
    setIsSubmitting(true);

    // 2. Buat FormData baru
    const fd = new FormData();

    // 3. Tambahkan state
    fd.append("regType", regType);
    fd.append("buyCasebook", String(buyCasebook)); // Kirim boolean sebagai string

    // 4. Tambahkan data P1
    fd.append("fullName", data.fullName);
    fd.append("email", data.email);
    fd.append("whatsapp", data.whatsapp);
    fd.append("university", data.university);
    fd.append("batch", data.batch);
    fd.append("faculty", data.faculty); // <-- BARU
    fd.append("major", data.major); // <-- BARU
    fd.append("motivation", data.motivation);
    fd.append("cv", data.cv);

    // 5. Tambahkan data P2 (jika duo)
    if (regType === "duo") {
      fd.append("fullName_p2", data.fullName_p2 || "");
      fd.append("email_p2", data.email_p2 || "");
      fd.append("whatsapp_p2", data.whatsapp_p2 || "");
      fd.append("university_p2", data.university_p2 || "");
      fd.append("batch_p2", data.batch_p2 || "");
      fd.append("faculty_p2", data.faculty_p2 || ""); // <-- BARU
      fd.append("major_p2", data.major_p2 || ""); // <-- BARU
      fd.append("motivation_p2", data.motivation_p2 || "");
      fd.append("cv_p2", data.cv_p2 || "");
    }

    fd.append("findUs", data.findUs); // <-- BARU
    fd.append("drive_link", data.drive_link); // <-- BARU

    // 6. Tambahkan file bukti bayar
    if (data.paymentProof && data.paymentProof.length > 0) {
      fd.append("paymentProof", data.paymentProof[0]);
      fd.append("refundBank", data.refundBank);
      fd.append("refundNumber", data.refundNumber);
    } else {
      // Validasi jaga-jaga
      toast.error("Payment proof is missing!");
      setIsSubmitting(false);
      return;
    }

    // 7. Kirim ke API route BARU kita
    try {
      const response = await fetch("/api/bootcamp/2025", {
        method: "POST",
        body: fd, // Kirim sebagai FormData, bukan JSON
      });

      const result = await response.json();

      if (!response.ok) {
        // Jika server kirim error (status 400/500)
        throw new Error(result.error || "Failed to submit. Please try again.");
      }

      // --- SUKSES ---
      console.log("Sukses submit:", result.message);
      toast.success("Registration complete!");
      setCurrentStep(5);
      localStorage.removeItem(STORAGE_KEY);
      // setIsSubmitting tidak perlu di-false, karena komponen ganti
    } catch (error: any) {
      // Jika fetch gagal (network error) atau server kirim error
      console.error("Submit error:", error);
      toast.error(`Error submitting form: ${error.message}`);
      setIsSubmitting(false); // Set false lagi biar tombol bisa diklik
    }
  };

  // === 7. LOGIKA STEPPER ===
  // (Tidak ada perubahan di sini)
  const individualSteps = ["Register", "Details", "Add-ons", "Payment", "Complete"];
  const duoSteps = ["Register", "Details", "Payment", "Complete"];
  const stepsToShow = regType === "individual" ? individualSteps : duoSteps;
  let activeStepIndex = currentStep;
  if (regType === "duo" && currentStep > 2) {
    activeStepIndex = currentStep - 1;
  }

  // === 8. RENDER ===

  // (Tampilan loading, tidak berubah)
  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="font-lato-regular text-lg">Loading...</p>
      </div>
    );
  }

  // (Tampilan form, ada 1 PERUBAHAN)
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {currentStep < 5 && <Stepper activeStep={activeStepIndex} steps={stepsToShow} />}

        {/* --- KONTEN SLIDE DINAMIS --- */}
        {currentStep === 1 && <Slide1 setRegType={setRegType} onNext={handleNextStep} />}

        {currentStep === 2 && (
          <Slide2 regType={regType} onNext={handleNextStep} onBack={handlePrevStep} />
        )}

        {currentStep === 3 && regType === "individual" && (
          <Slide3
            buyCasebook={buyCasebook}
            setBuyCasebook={setBuyCasebook}
            onNext={handleNextStep}
            onBack={handlePrevStep}
          />
        )}

        {/* --- INI PERUBAHANNYA --- */}
        {currentStep === 4 && (
          <Slide4
            regType={regType}
            buyCasebook={buyCasebook}
            onBack={handlePrevStep}
            isSubmitting={isSubmitting} // <-- Kirim state loading ke Slide 4
          />
        )}
        {/* --- SELESAI PERUBAHAN --- */}

        {currentStep === 5 && <Slide5 />}
      </form>
    </FormProvider>
  );
}

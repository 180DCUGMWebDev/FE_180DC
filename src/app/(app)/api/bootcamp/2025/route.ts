import { createClient } from "@/integrations/supabase/server";
import { NextResponse } from "next/server";

const TABLE_NAME = "bootcamp-submissions-2025";
const STORAGE_BUCKET = "bootcamp-submissions-2025";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const supabase = createClient();

    const paymentProofFile = formData.get("paymentProof") as File | null;
    let paymentProofUrl = null;

    if (!paymentProofFile || paymentProofFile.size === 0) {
      return NextResponse.json({ error: "Payment proof is required." }, { status: 400 });
    }

    const maxSizeInKB = 500; // Maksimum ukuran file dalam KB
    const maxSizeInBytes = maxSizeInKB * 1024;

    if (paymentProofFile.size > maxSizeInBytes) {
      return NextResponse.json(
        { error: `File is too large (Max ${maxSizeInKB}KB)` }, // Update pesan error
        { status: 400 } // 400 = Bad Request
      );
    }
    // --- SELESAI ---

    // Buat nama file unik
    const filePath = `public/${Date.now()}_${paymentProofFile.name}`;

    // Upload ke Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from(STORAGE_BUCKET)
      .upload(filePath, paymentProofFile);

    if (uploadError) {
      console.error("Supabase storage error:", uploadError);
      throw new Error(`Failed to upload payment proof: ${uploadError.message}`);
    }

    // Dapatkan URL publik dari file yang di-upload
    const { data: urlData } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(uploadData.path);

    paymentProofUrl = urlData.publicUrl;
    // ------------------------------------------------
    // SELESAI UPLOAD FILE

    // 3. Siapkan data untuk di-insert
    const submissionData = {
      // Data dari state
      reg_type: formData.get("regType") as string,
      buy_casebook: formData.get("buyCasebook") === "true",

      // URL dari storage
      payment_proof_url: paymentProofUrl,

      // Data Peserta 1
      p1_full_name: formData.get("fullName") as string,
      p1_email: formData.get("email") as string,
      p1_whatsapp: formData.get("whatsapp") as string,
      p1_university: formData.get("university") as string,
      p1_batch: formData.get("batch") as string,
      p1_faculty: formData.get("faculty") as string, // <-- BARU
      p1_major: formData.get("major") as string, // <-- BARU
      p1_motivation: formData.get("motivation") as string,
      p1_cv_link: formData.get("cv") as string,

      // Data Peserta 2 (akan jadi null jika tidak dikirim)
      p2_full_name: formData.get("fullName_p2") as string | null,
      p2_email: formData.get("email_p2") as string | null,
      p2_whatsapp: formData.get("whatsapp_p2") as string | null,
      p2_university: formData.get("university_p2") as string | null,
      p2_batch: formData.get("batch_p2") as string | null,
      p2_faculty: formData.get("faculty_p2") as string | null, // <-- BARU
      p2_major: formData.get("major_p2") as string | null, // <-- BARU
      p2_motivation: formData.get("motivation_p2") as string | null,
      p2_cv_link: formData.get("cv_p2") as string | null,

      find_us: formData.get("findUs") as string, // <-- BARU
      drive_link: formData.get("drive_link") as string, // <-- BARU

      // Meta Information
      user_agent: request.headers.get("user-agent"),
      ip_address:
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip") ||
        (request as any).ip ||
        "unknown",
      submitted_at: new Date().toISOString(),
    };

    // 4. Validasi backend (sesuai kebutuhanmu)
    if (
      !submissionData.reg_type ||
      !submissionData.p1_full_name ||
      !submissionData.p1_faculty || // <-- BARU
      !submissionData.p1_major || // <-- BARU
      !submissionData.find_us || // <-- BARU
      !submissionData.drive_link // <-- BARU
    ) {
      return NextResponse.json(
        { error: "Missing required fields for Participant 1." },
        { status: 400 }
      );
    }

    // Validasi P2 jika 'duo'
    if (
      submissionData.reg_type === "duo" &&
      (!submissionData.p2_full_name || !submissionData.p2_email || !submissionData.p2_cv_link)
    ) {
      return NextResponse.json(
        { error: "Missing required fields for Participant 2." },
        { status: 400 }
      );
    }

    // 5. Insert data ke database
    console.log("Attempting insert with data for table:", TABLE_NAME);
    const { data, error } = await supabase.from(TABLE_NAME).insert([submissionData]).select();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        {
          error: error.message || "Failed to save data",
          details: error.details,
        },
        { status: 500 }
      );
    }

    console.log("Form submitted successfully:", data);
    return NextResponse.json(
      { success: true, message: "Application submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: error.message || "An internal server error occurred" },
      { status: 500 }
    );
  }
}

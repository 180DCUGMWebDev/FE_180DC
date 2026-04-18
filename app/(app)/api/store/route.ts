// --- IMPORTS ---
import { createClient } from "@/integrations/supabase/server"
import { appendToSheet } from "@/integrations/google-sheets/client"
import { NextResponse } from "next/server"
import { getGoogleOAuth } from "@/lib/googleAuth"
import { google } from "googleapis"
import { Readable } from "stream"

// --- TYPE DEFINITIONS ---
interface OrderVariant {
  size: string;
  quantity: number;
  color?: string;
}

interface OrderItem {
  name: string;
  type: 'merch' | 'digital' | 'bundle';
  price: number;
  quantity?: number;
  variants?: OrderVariant[];
}

interface CleanOrderData {
  transaction_id: string; 
  created_at: string;
  name: string;
  email: string;
  whatsapp: string;
  is_delivery: boolean;
  full_address: string | null;
  area: string | null;
  order_items: OrderItem[];
  total_price: number;
  payment_proof_url: string;
  refund_account: string;
  refund_number: string;
}

const TABLE_NAME = "merch_orders"
const STORAGE_BUCKET = "merch-order-2526"

export async function POST (request: Request) {
  try {
    // 1. Receive raw JSON from frontend
    const rawData = await request.json();

    // 2. Extract & transform data
    const finalPaymentProofUrl = rawData.paymentProofUrl;
    const storedFileName = rawData.paymentProofFileName;

    // Check delivery: if address is provided
    const hasAddress = rawData.fullAddress && rawData.fullAddress.trim() !== "";

    // Map to clean format
    const extractedData: CleanOrderData = {
      // Metadata
      transaction_id: `180DC-${Date.now()}`,
      created_at: new Date().toISOString(),

      // Personal info
      name: rawData.name,
      email: rawData.email,
      whatsapp: rawData.whatsapp,
      
      // Shipping
      is_delivery: rawData.isDelivery || false,
      full_address: hasAddress ? rawData.fullAddress : null,
      area: hasAddress ? rawData.area : null,

      // Order items (from cart)
      order_items: rawData.order?.map((item: any) => {
        const cleanItem: OrderItem = {
          name: item.name,
          type: item.type,
          price: item.price,
        };

        if (item.variants && Array.isArray(item.variants) && item.variants.length > 0) {
          cleanItem.variants = item.variants.map((v: any) => ({
            size: v.size || "All Size",
            quantity: v.quantity || 1,
            color: v.color
          }));
          cleanItem.quantity = cleanItem.variants.reduce((acc, curr) => acc + curr.quantity, 0);
        } else {
          cleanItem.quantity = item.quantity || 1;
        }

        return cleanItem;
      }) || [],

      // Payment
      total_price: rawData.totalPrice,
      payment_proof_url: rawData.paymentProofUrl,
      refund_account: rawData.refundAccount,
      refund_number: rawData.refundNumber
    };

    console.log("✅ Data extracted:", extractedData.transaction_id);
    
    // 3. Save to Supabase
    const supabase = createClient();
    const { error } = await supabase
      .from(TABLE_NAME)
      .insert(extractedData);

    if (error) throw error;

    // 4. Migrate Payment Proof to Google Drive & Cleanup Supabase
    let finalProofUrl = extractedData.payment_proof_url;

    if (finalPaymentProofUrl && storedFileName && finalPaymentProofUrl.includes('/temp/')) {
      try {
        console.log("📥 Fetching temp file from Supabase...");
        const fileRes = await fetch(finalPaymentProofUrl);
        if (!fileRes.ok) throw new Error("Failed to fetch temp file");
        
        const arrayBuffer = await fileRes.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const stream = Readable.from(buffer);

        // SOLUTION: Use OAuth (real google account) instead of Service Account to avoid 0GB quota limit!
        const auth = getGoogleOAuth();
        const drive = google.drive({ version: 'v3', auth });

        console.log("📤 Uploading to Google Drive as regular OAuth user...");
        const driveFolderId = process.env.STORE_DRIVE_FOLDER_ID;
        
        if (!driveFolderId) throw new Error("STORE_DRIVE_FOLDER_ID missing in .env");

        const uploadedFile = await drive.files.create({
          requestBody: {
            name: `Store_${extractedData.transaction_id}_${storedFileName}`,
            parents: [driveFolderId]
          },
          media: {
            mimeType: fileRes.headers.get('content-type') || 'application/octet-stream',
            body: stream
          },
          fields: "id",
          supportsAllDrives: true,
        });

        // Set file permission to anyone with link
        await drive.permissions.create({
          fileId: uploadedFile.data.id!,
          requestBody: { type: "anyone", role: "reader" },
          supportsAllDrives: true,
        });

        finalProofUrl = `https://drive.google.com/file/d/${uploadedFile.data.id}/view`;
        extractedData.payment_proof_url = finalProofUrl;
        
        // Update Supabase DB to use Drive URL
        await supabase
          .from(TABLE_NAME)
          .update({ payment_proof_url: finalProofUrl })
          .eq('transaction_id', extractedData.transaction_id);

        console.log("✅ Drive upload successful:", finalProofUrl);

        // Delete temp file from Supabase to save space
        await supabase.storage
          .from(STORAGE_BUCKET)
          .remove([`temp/${storedFileName}`]);
          
      } catch (err: any) {
        console.error("❌ Failed to migrate to Google Drive:", err.message);
        // Fallback: move to public if Drive upload fails
        await supabase.storage.from(STORAGE_BUCKET).move(`temp/${storedFileName}`, `public/${storedFileName}`);
        const { data: publicUrlData } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(`public/${storedFileName}`);
        finalProofUrl = publicUrlData.publicUrl;
        extractedData.payment_proof_url = finalProofUrl;
        await supabase.from(TABLE_NAME).update({ payment_proof_url: finalProofUrl }).eq('transaction_id', extractedData.transaction_id);
      }
    }

    // 5. Dual-write to Google Sheets
    try {
      const spreadsheetId = process.env.STORE_SPREADSHEET_ID;
      const sheetTab = process.env.STORE_SHEETS_TAB || "Store Orders";

      if (spreadsheetId) {
        // Flatten items into readable string
        const itemsString = extractedData.order_items
          .map((item) => {
            if (item.variants && item.variants.length > 0) {
              const variantDetails = item.variants
                .map(v => `Size: ${v.size}${v.color ? `, Color: ${v.color}` : ""} (x${v.quantity})`)
                .join(" | ");
              return `${item.name} [${variantDetails}] @${item.price}`;
            }
            return `${item.name} (x${item.quantity || 1}) @${item.price}`;
          })
          .join("; ");

        const row = [
          extractedData.transaction_id,
          extractedData.created_at,
          extractedData.name,
          extractedData.email,
          extractedData.whatsapp,
          extractedData.is_delivery ? "Delivery" : "Pickup",
          extractedData.full_address || "-",
          extractedData.area || "-",
          itemsString,
          extractedData.total_price.toString(),
          extractedData.payment_proof_url || "-",
          extractedData.refund_account,
          extractedData.refund_number,
        ];

        await appendToSheet(spreadsheetId, `${sheetTab}!A:M`, [row]);
        console.log("✅ Appended to Google Sheets");
      }
    } catch (sheetsError) {
      // Don't fail the request if Sheets append fails
      console.error("Google Sheets append failed (non-blocking):", sheetsError);
    }

    return NextResponse.json({ 
      success: true, 
      message: "Order processed successfully",
      data: extractedData,
    });

  } catch (error: any) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Error" }, 
      { status: 500 }
    );
  }
}
// --- IMPORTS ---
import { createClient } from "@/integrations/supabase/server"
import { NextResponse } from "next/server"
import { getGoogleOAuth, getGoogleAuth } from "@/lib/googleAuth"
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
  revenue: number;
  payment_proof_url: string;
  refund_account: string;
  refund_number: string;
}

const TABLE_NAME = "merch_orders"
const STORAGE_BUCKET = "merch-order-2526"

// Store Configuration Constants
const STORE_DRIVE_FOLDER_ID = "1Tuwe33KthtFnhPm7lvGTuDF0HiAY_4TJ";
const STORE_SPREADSHEET_ID = "1aUZrllOVb5AIRPhKiaifJHkEluJ7zHb7m7YM8ayCizQ";
const STORE_SHEETS_TAB = "Store Orders";

/**
 * SQL for database preparation:
 * ALTER TABLE merch_orders ADD COLUMN revenue NUMERIC;
 * ALTER TABLE merch_orders ADD COLUMN status TEXT DEFAULT 'pending';
 */

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
      revenue: rawData.totalPrice, // Use total price as initial revenue
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

    // 4. Migrate Payment Proof to Permanent Supabase Storage
    let finalProofUrl = extractedData.payment_proof_url;

    if (finalPaymentProofUrl && storedFileName && finalPaymentProofUrl.includes('/temp/')) {
      try {
        console.log("📦 Moving file from temp to public in Supabase bucket...");
        
        // Move file to public directory
        const { error: moveError } = await supabase.storage
          .from(STORAGE_BUCKET)
          .move(`temp/${storedFileName}`, `public/${storedFileName}`);

        if (moveError) throw moveError;

        // Get permanent public URL
        const { data: publicUrlData } = supabase.storage
          .from(STORAGE_BUCKET)
          .getPublicUrl(`public/${storedFileName}`);

        finalProofUrl = publicUrlData.publicUrl;
        extractedData.payment_proof_url = finalProofUrl;

        // Update database with permanent URL
        await supabase
          .from(TABLE_NAME)
          .update({ payment_proof_url: finalProofUrl })
          .eq('transaction_id', extractedData.transaction_id);

        console.log("✅ Supabase permanent storage successful:", finalProofUrl);

      } catch (err: any) {
        console.error("❌ Failed to move to permanent storage:", err.message);
      }
    }

    // 5. Dual-write to Google Sheets (Using OAuth 2.0)
    try {
      const spreadsheetId = STORE_SPREADSHEET_ID;
      const sheetTab = STORE_SHEETS_TAB;

      if (spreadsheetId) {
        const auth = getGoogleOAuth();
        const sheets = google.sheets({ version: "v4", auth });

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
          itemsString,
          extractedData.total_price.toString(),
          extractedData.is_delivery ? "Delivery" : "Pickup",
          extractedData.full_address || "-",
          extractedData.area || "-",
          extractedData.payment_proof_url || "-",
          extractedData.refund_account,
          extractedData.refund_number,
          extractedData.revenue,
        ];

        try {
          // OPTIMIZATION: Attempt direct append first. If it fails (e.g. sheet empty), then handle headers.
          // This saves 1 network round-trip to Google for every successful order.
          await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: `'${sheetTab}'!A1`,
            valueInputOption: "USER_ENTERED",
            insertDataOption: "INSERT_ROWS",
            requestBody: { values: [row] },
          });
          console.log("✅ Data appended to Google Sheets successfully");
        } catch (sheetErr: any) {
          console.log("📝 Initialization needed or error occurred:", sheetErr.message);
          
          try {
            // Re-verify headers if append failed
            const headers = [
              "Transaction ID", "Timestamp", "Customer Name", "Email", "WhatsApp", 
              "Order Details", "Total Price", "Shipping Method", "Address", "Area", 
              "Payment Proof URL", "Refund Account", "Refund Number", "Revenue"
            ];
            await sheets.spreadsheets.values.update({
              spreadsheetId,
              range: `'${sheetTab}'!A1`,
              valueInputOption: "USER_ENTERED",
              requestBody: { values: [headers] },
            });
            
            // Try append again
            await sheets.spreadsheets.values.append({
              spreadsheetId,
              range: `'${sheetTab}'!A1`,
              valueInputOption: "USER_ENTERED",
              insertDataOption: "INSERT_ROWS",
              requestBody: { values: [row] },
            });
          } catch (initErr: any) {
            console.error("❌ Google Sheets critical failure:", initErr.message);
          }
        }
      }
    } catch (sheetsError) {
      console.error("❌ Google Sheets append failed (non-blocking):", sheetsError);
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
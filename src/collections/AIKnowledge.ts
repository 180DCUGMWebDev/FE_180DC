import type { CollectionConfig } from "payload";
import { GoogleGenAI } from "@google/genai";
import { createClient } from "@supabase/supabase-js";

// Inisialisasi client AI dan Supabase
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export const AIKnowledge: CollectionConfig = {
  slug: "ai_knowledge",
  admin: {
    useAsTitle: "title",
    description: "Manage AI Knowledge",
    defaultColumns: ["title", "knowledge", "uploader", "createdAt", "updatedAt"],
    group: "AI Knowledge",
  },
  labels: {
    singular: "AI Knowledge",
    plural: "AI Knowledges",
  },
  access: {
    read: () => true,
    create: ({ req: { user }}) => !!user,
    update: ({ req: { user }}) => !!user,
    delete: ({ req: { user }}) => !!user,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      unique: true,
      label: "Title",
      admin: {
      description: "Contoh: IT 180 DC UGM",
        placeholder: "IT 180 DC UGM",
      },
      validate: (val: unknown) => {
          const value = val as string;
          if (!value) return "Title is required";
          return true;
      },
    },
    {
      name: "knowledge",
      type: "text",
      required: true,
      label: "Knowledge",
      admin: {
        description: "English knowledge (Bisa dibantu dengan gemini untuk membuatnya)",
        placeholder: "",
      },
      validate: (val: unknown) => {
        const value = val as string;
        if (!value) return "Knowledge is required";
        return true;
      },
    },
    {
      name: "uploader",
      type: "text",
      required: true,
      label: "Name Uploader",
      admin: {
        description: "Name of the uploader",
        placeholder: "Example: Muhammad Khoirunas",
      },
      validate: (val: unknown) => {
        const value = val as string;
        if (!value) return "Uploader is required";
        return true;
      },
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req, operation, originalDoc }) => {
        if (operation === 'create' || operation === 'update') {

          const hasChanged = operation === 'create' || (operation === 'update' && data.knowledge !== originalDoc?.knowledge);

          if (data.knowledge && hasChanged) {
            try {
              console.log(`[AIKnowledge] Generating embedding for ${operation} operation...`);
              // 1. Generate Vektor dengan Gemini API
              const response = await ai.models.embedContent({
                model: 'gemini-embedding-001',
                contents: data.knowledge as string,
                config: {
                  taskType: 'RETRIEVAL_DOCUMENT',
                  outputDimensionality: 3072, // Pastikan sesuai dengan konfigurasi Supabase
                },
              });
              
              const vector = response.embeddings[0].values;

              // 2. Simpan vector sementara di req untuk dipakai di afterChange
              (req as any).temp_embedding_vector = vector; 

            } catch (err) {
              console.error("Kesalahan Gemini API di AIKnowledge beforeChange:", err);
              if (err instanceof Error) {
                throw new Error(`Gagal memproses AI Embedding: ${err.message}`);
              }
              throw new Error('Gagal memproses AI Embedding.');
            }
          } else if (operation === 'update' && !hasChanged) {
             console.log("[AIKnowledge] Content unchanged, skipping embedding API call.");
          }
        }
        return data;
      },
    ],
    afterChange: [
      async ({ doc, req, operation }) => {
        if (operation === 'create' || operation === 'update') {
          try {
            // Ambil vector yang tadi di-generate di beforeChange
            const vector = (req as any).temp_embedding_vector;

            if (!vector) return doc; // Skip jika tidak ada vektor baru yang perlu di-upload

            // 1. Hapus referensi lama (jika update)
            if (operation === 'update') {
              await supabase
                .from('knowledge_base')
                .delete()
                .eq('metadata->>payload_id', String(doc.id));
            }

            // 2. Masukkan data ke Supabase SEKARANG (karena doc.id sudah tersedia dan valid)
            const { error: insertError } = await supabase.from('knowledge_base').insert({
              content: doc.knowledge,
              embedding: vector,
              metadata: { 
                payload_id: doc.id, 
                title: doc.title 
              }
            });

            if (insertError) {
              console.error("Gagal kirim ke Supabase:", insertError);
              throw new Error(`Data gagal disimpan di Supabase setelah Payload menyimpannya: ${insertError.message}`);
            }

          } catch (err) {
            console.error("Kesalahan sinkronisasi Supabase di afterChange:", err);
            // Error yang terlempar di sini akan memicu Payload otomatis ROLLBACK document yang baru dibuat
            if (err instanceof Error) {
              throw new Error(`Transaksi dibatalkan otomatis (Rollback berjalan): ${err.message}`);
            }
            throw new Error('Transaksi dibatalkan otomatis karena terjadi kegagalan saat sinkronisasi Supabase.');
          }
        }
        return doc;
      },
    ],
    afterDelete: [
      async ({ id }) => {
        try {
          const { error } = await supabase
            .from('knowledge_base')
            .delete()
            .eq('metadata->>payload_id', String(id));
            
          if (error) console.error("Gagal hapus dari Supabase:", error);
        } catch (err) {
          console.error("Error saat menghapus dari Supabase:", err);
        }
      }
    ],
  },
  timestamps: true,
}
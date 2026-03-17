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
    afterChange: [
      async ({ doc, operation }) => {
      if (operation === 'create' || operation === 'update') {
        try {
          if (operation === 'update') {
            await supabase
              .from('knowledge_base')
              .delete()
              .eq('metadata->>payload_id', String(doc.id));
          }

          const response = await ai.models.embedContent({
            model: 'gemini-embedding-2-preview',
            contents: doc.knowledge,
            config: {
              taskType: 'RETRIEVAL_DOCUMENT',
            },
          });
          
          const vector = response.embeddings[0].values;
          const { error } = await supabase.from('knowledge_base').insert({
            content: doc.knowledge,
            embedding: vector,
            metadata: { 
              payload_id: doc.id, 
              title: doc.title 
            }
          });
          if (error) console.error("Gagal kirim ke Supabase:", error);
        } catch (err) {
          console.error("Gagal bikin vektor di Gemini:", err);
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
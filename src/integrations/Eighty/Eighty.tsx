import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { createClient } from "@/integrations/supabase/client";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

export async function POST(req: NextRequest) {
    try {
        const { message } = await req.json();

        const embeddingResult = await ai.models.embedContent({
            model: 'gemini-embedding-2-preview',
            contents: message,
            config: { taskType: "RETRIEVAL_QUERY" }
        });

        const queryVector = embeddingResult.embeddings[0].values;

        const supabase = createClient();
        const { error, data: documents } = await supabase.rpc(
            'match_knowledge',
            {
                query_embedding: queryVector,
                match_threshold: 0.7,
                match_count: 3,
            }
        );

        if (error) throw error;

        const context = documents?.map((doc: any) => doc.content).join('\n\n') || "Belum ada informasi terkait ini di database";

        const responseStream = await ai.models.generateContentStream({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: `Kamu adalah asisten organisasi yang ramah. Jawab pertanyaan HANYA berdasarkan konteks berikut: ${context}. Jika jawabannya tidak ada di konteks, katakan "Mohon maaf informasi tersebut belum tersedia di database kami. Mohon dapat menghubungi kami di ugm@180dc.org atau melalui instagram @180dcugm".`,
                temperature: 1.1,
            },
            contents: `
            Answer the question in Bahasa Indonesia.
            
            Question: ${message}
            `,
        });

        const stream = new ReadableStream({
            async start(controller) {
                try {
                    for await (const chunk of responseStream) {
                        if (chunk.text) {
                            controller.enqueue(new TextEncoder().encode(chunk.text));
                        }
                    }
                    controller.close();
                } catch (err) {
                    controller.error(err);
                }
            }
        });

        return new NextResponse(stream, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "Cache-Control": "no-cache",
            },
        });

    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { text: "Maaf sepertinya sedang ada masalah. Coba lagi setelah beberapa detik" },
            { status: 500 }
        );
    }
}
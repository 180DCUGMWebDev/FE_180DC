import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import Groq from "groq-sdk"
import { createClient } from "@/integrations/supabase/client";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Fallback model list — if one model hits rate limit, try the next
const MODELS = [
    { name: "openai/gpt-oss-120b", temperature: 1.2 },
    { name: "qwen/qwen3-32b", temperature: 1.2 },
    { name: "llama-3.3-70b-versatile", temperature: 1.2 },
    { name: "moonshotai/kimi-k2-instruct", temperature: 0.3 },
];

function isRateLimitError(err: any): boolean {
    return (
        err?.status === 429 ||
        err?.statusCode === 429 ||
        err?.error?.code === 'rate_limit_exceeded' ||
        err?.message?.includes('rate_limit') ||
        err?.message?.includes('Rate limit')
    );
}

async function createCompletionWithFallback(messages: any[]) {
    let lastError: any = null;

    for (const model of MODELS) {
        try {
            console.log(`[Eighty] Trying model: ${model.name}`);
            const stream = await groq.chat.completions.create({
                messages,
                model: model.name,
                temperature: model.temperature,
                stream: true,
            });
            console.log(`[Eighty] Success with model: ${model.name}`);
            return stream;
        } catch (err: any) {
            lastError = err;
            if (isRateLimitError(err)) {
                console.warn(`[Eighty] Rate limit hit for ${model.name}, trying next model...`);
                continue;
            }
            // If it's not a rate limit error, throw immediately
            throw err;
        }
    }

    // All models exhausted
    console.error("[Eighty] All models rate limited.");
    throw lastError;
}

export async function POST(req: NextRequest) {
    try {
        const { message, history } = await req.json();

        const embeddingResult = await ai.models.embedContent({
            model: 'gemini-embedding-001',
            contents: message,
            config: {
                taskType: "RETRIEVAL_QUERY",
                outputDimensionality: 3072
            }
        });

        const queryVector = embeddingResult.embeddings[0].values;

        const supabase = createClient();
        const { error, data: documents } = await supabase.rpc(
            'match_knowledge',
            {
                query_embedding: queryVector,
                match_threshold: 0.65,
                match_count: 3,
            }
        );

        if (error) {
            console.error("Supabase RPC Error:", error);
            throw error;
        }

        const context = documents?.map((doc: any) => doc.content).join('\n\n') || "No related information available in the database yet.";

        let messages = [];

        messages.push({
            role: "system",
            content: `You are a helpful and friendly assistant for 180 Degrees Consulting UGM. Your goal is to provide accurate information based on the context and conversation history provided below:
                
                CONTEXT FROM DATABASE:
                ${context}

                INSTRUCTIONS:
                - Use the provided context to answer the user's question as thoroughly as possible.
                - IMPORTANT: Maintain continuity by understanding references to previous messages if they exist in the history.
                - FORMATTING: You MUST always format your responses using proper Markdown. When listing items, ALWAYS use Markdown bullet points (e.g., "- item" or "* item"). Use **bold** for emphasis on key terms or names. Use numbered lists (1. 2. 3.) when order matters. Never list items on plain separate lines without bullet markers.
                - If the context contains links or URLs, make sure to include them in your response using Markdown link format.
                - Be warm and professional.
                - If the information is absolutely not present in the context and cannot be reasonably inferred, only then use this exact fallback: "We apologize, but that information is not yet available in our database. Please contact us at ugm@180dc.org or via Instagram @180dcugm".`
        });

        // Build previous conversation string from history (last 1 Q&A pair)
        if (history && history.length > 0) {
            history.forEach((msg: any) => {
                const role = msg.role === 'model' ? 'assistant' : 'user';
                const content = msg.parts?.map((p: any) => p.text).join('') || '';
                if (content) {
                    messages.push({ role, content });
                }
            });
        }

        messages.push({
            role: 'user',
            content: `Answer the question in English.\n\nQuestion: ${message}`
        });

        const chatCompletionStream = await createCompletionWithFallback(messages);

        const stream = new ReadableStream({
            async start(controller) {
                try {
                    let insideThink = false;
                    let buffer = '';

                    for await (const chunk of chatCompletionStream) {
                        const content = chunk.choices[0]?.delta?.content;
                        if (!content) continue;

                        buffer += content;

                        // Process buffer to filter out <think>...</think> blocks
                        while (buffer.length > 0) {
                            if (insideThink) {
                                const closeIdx = buffer.indexOf('</think>');
                                if (closeIdx !== -1) {
                                    buffer = buffer.slice(closeIdx + 8);
                                    insideThink = false;
                                } else {
                                    buffer = buffer.length > 7 ? buffer.slice(-7) : buffer;
                                    break;
                                }
                            } else {
                                const openIdx = buffer.indexOf('<think>');
                                if (openIdx !== -1) {
                                    const before = buffer.slice(0, openIdx);
                                    if (before) {
                                        controller.enqueue(new TextEncoder().encode(before));
                                    }
                                    buffer = buffer.slice(openIdx + 7);
                                    insideThink = true;
                                } else {
                                    if (buffer.length > 6) {
                                        const safe = buffer.slice(0, -6);
                                        controller.enqueue(new TextEncoder().encode(safe));
                                        buffer = buffer.slice(-6);
                                    }
                                    break;
                                }
                            }
                        }
                    }

                    // Flush remaining buffer (only if not inside a think block)
                    if (!insideThink && buffer.length > 0) {
                        controller.enqueue(new TextEncoder().encode(buffer));
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
            { text: "Sorry, it seems there is a problem. Please try again in a few seconds." },
            { status: 500 }
        );
    }
}
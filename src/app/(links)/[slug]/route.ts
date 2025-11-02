import { getPayload } from "payload";
import config from "@payload-config";
import { redirect, notFound } from "next/navigation";
import type { Link } from "@/payload-types";

export const dynamic = "force-dynamic"; // Disable caching untuk real-time redirect

interface RouteParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  const { slug } = await params;

  try {
    const payload = await getPayload({ config });

    // Query link dari database
    const result = await payload.find({
      collection: "links",
      where: {
        slug: {
          equals: slug,
        },
        isActive: {
          equals: true,
        },
      },
      limit: 1,
    });

    // Jika tidak ditemukan, 404
    if (!result.docs.length) {
      notFound();
    }

    const link = result.docs[0] as Link;

    // Update click count dan last clicked time (async, tidak perlu ditunggu)
    payload
      .update({
        collection: "links",
        id: link.id,
        data: {
          clickCount: (link.clickCount || 0) + 1,
          lastClickedAt: new Date().toISOString(),
        },
      })
      .catch((error) => {
        console.error("Failed to update click count:", error);
      });

    // The redirect() function throws a special error that Next.js catches
    // We need to let it propagate, not catch it
    redirect(link.destination);
  } catch (error) {
    // Redirect errors have a digest property starting with NEXT_REDIRECT
    if (error instanceof Error && error.message === "NEXT_REDIRECT") {
      // Let redirect errors propagate
      throw error;
    }

    console.error("Redirect error:", error);
    notFound();
  }
}

import { getPayload } from "payload";
import config from "@payload-config";
import { redirect, notFound } from "next/navigation";
import type { Link } from "@/payload-types";

export const dynamic = "force-dynamic"; // Disable caching untuk real-time redirect

interface PageParams {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LinkRedirectPage({ params }: PageParams) {
  const { slug } = await params;

  let payload;
  let result;

  try {
    payload = await getPayload({ config });

    // Query link dari database
    result = await payload.find({
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
  } catch (error) {
    console.error("Error fetching link:", error);
    notFound();
  }

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

  // Redirect to destination
  redirect(link.destination);
}

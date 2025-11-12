import { getPayload } from "payload";
import config from "@payload-config";
import { redirect, notFound } from "next/navigation";
import type { Link } from "@/payload-types";

export const dynamic = "force-dynamic";

interface PageParams {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateMetadata({ params }: PageParams) {
  const { slug } = await params;
  const slugString = slug.join("/");
  return {
    title: `404 | Link "${slugString}" Not Found`,
  };
}

export default async function LinkRedirectPage({ params }: PageParams) {
  const { slug } = await params;

  // Blacklist: route yang sudah ada
  const reservedRoutes = [
    "bootcamp",
    "academy",
    "about",
    "article",
    "apply",
    "casecompetition",
    "oprec",
    "store",
    "dashboard",
    "api",
    "admin",
  ];

  // Jika segment pertama adalah reserved route, langsung 404
  if (slug.length > 0 && reservedRoutes.includes(slug[0].toLowerCase())) {
    notFound();
  }

  // Gabungkan slug array menjadi string
  const slugString = slug.join("/");

  let payload;
  let result;

  try {
    payload = await getPayload({ config });

    result = await payload.find({
      collection: "links",
      where: {
        slug: {
          equals: slugString,
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

  // Update click count
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

  redirect(link.destination);
}

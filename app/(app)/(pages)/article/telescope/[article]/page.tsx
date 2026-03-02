import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TelescopeDetail from "@/components/modules/telescope/TelescopeDetail";
import CommentSection from "@/components/modules/telescope/CommentSection";

async function getData() {
  const baseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/telescope?sort=-publishedDate&depth=1`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    console.log("Failed to fetch telescope data");
    return { docs: [] };
  }
  return res.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ article: string }>;
}): Promise<Metadata> {
  const { article: articleSlug } = await params;

  try {
    const data = await getData();
    const article = data.docs?.find((a: any) => a.slug === articleSlug);

    if (!article) {
      return {
        title: "Article Not Found | 180 Degrees Consulting UGM",
      };
    }

    return {
      title: `${article.title} | 180 Degrees Consulting UGM`,
    };
  } catch (error) {
    return {
      title: "Telescope | 180 Degrees Consulting UGM",
    };
  }
}

export default async function Article({ params }: { params: Promise<{ article: string }> }) {
  const { article: articleSlug } = await params;

  const data = await getData();
  const articles = data.docs || [];
  const article = articles.find((a: any) => a.slug === articleSlug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <TelescopeDetail article={article} allArticles={articles} articleSlug={articleSlug} />
      <CommentSection telescopeId={article.id} />
    </>
  );
}

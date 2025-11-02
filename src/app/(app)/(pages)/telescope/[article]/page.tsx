"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { TelescopeBox } from "@/components/modules/telescope/TelescopeBox";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { MdxComponents } from "@/components/modules/telescope";
import rehypeRaw from "rehype-raw";
import { use } from "react";

async function getData() {
  const res = await fetch("/api/telescope?sort=-publishedDate&depth=1", {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    console.log("Failed to fetch data");
    return { docs: [] };
  }
  return res.json();
}

export default function Article({ params }: { params: Promise<{ article: string }> }) {
  // Unwrap params using React.use()
  const { article: articleSlug } = use(params);

  const [articles, setArticles] = useState(undefined);

  useEffect(() => {
    getData().then((res) => {
      setArticles(res.docs);
    });
  }, []);

  const article = articles?.find((article) => article.slug === articleSlug);

  if (!articles) return <div className="h-[120vh] bg-[black]" />;
  if (articles && !article) notFound();

  // Get image URL - handle both string and object cases
  const getImageUrl = (image) => {
    if (typeof image === "string") return image;
    if (image?.url) return image.url;
    return "";
  };

  return (
    <main className="min-h-screen bg-[black]">
      <div className="font-lato-regular flex flex-col gap-[min(2vw,20px)] px-[5%] py-[max(20vw,100px)] text-gray-100 lg:px-[26%] lg:py-[max(15vh,100px)]">
        {/* Title */}
        <h1 className="font-avenir-black text-center text-[8vw] lg:text-[3.3vw]">
          {article.title}
        </h1>
        <h2 className="text-center text-[3vw] lg:text-[1vw]">
          Author: {article.author ?? "-"} • Publish Date:{" "}
          {article.publishedDate
            ? new Date(article.publishedDate).toLocaleDateString("id-ID")
            : new Date(article.createdAt).toLocaleDateString("id-ID")}
        </h2>
        {/* Image */}
        {article.image && (
          <div className="aspect-h-[522] aspect-w-[994] relative overflow-hidden rounded-[20px]">
            <Image
              src={getImageUrl(article.image)}
              alt={article.title || "article image"}
              width={2000}
              height={2000}
              className="inset-0 h-full w-full object-cover"
            />
          </div>
        )}
        {/* Article */}
        <div className="mt-[20px] text-justify text-[3.3vw] lg:text-[1.2vw]">
          <ReactMarkdown components={MdxComponents} rehypePlugins={[rehypeRaw]}>
            {String(article.content || article.description || "")}
          </ReactMarkdown>
        </div>
        <div className="font-avenir-black mt-[20px] flex flex-col text-[5vw] lg:text-[2.5vw]">
          Our Recommendation
          <TelescopeBox article={articles.find((a) => a.slug !== articleSlug)} type="article" />
        </div>
      </div>
    </main>
  );
}

"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { TelescopeBox } from "@/components/telescope/TelescopeBox";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { MdxComponents } from "@/components/telescope";
import rehypeRaw from "rehype-raw";

async function getData() {
  const res = await fetch(
    "https://goldfish-app-38lif.ondigitalocean.app/api/articles?populate=*&sort=publishedAt:desc",
    {
      next: { revalidate: 60 },
    }
  );
  if (!res.ok) {
    console.log("Failed to fetch data");
  }
  return res.json();
}

export default function Article({ params }) {
  const [articles, setArticles] = useState(undefined);
  useEffect(() => {
    getData().then((res) => {
      const data = res.data.map((e) => e.attributes);
      setArticles(data);
    });
  }, []);
  const article = articles?.find((article) => article.slug == params.article);
  if (!articles) return <div className="h-[120vh] bg-[black]" />;
  if (articles && !article) notFound();
  return (
    <main className="min-h-screen bg-[black]">
      <div className="flex flex-col gap-[min(2vw,20px)] px-[5%] lg:px-[26%] text-lightWhite font-latoRegular py-[max(20vw,100px)] lg:py-[max(15vh,100px)]">
        {/* Title */}
        <h1 className="font-avenirBlack text-center text-[8vw] lg:text-[3.3vw]">
          {article.title}
        </h1>
        <h2 className="text-center text-[3vw] lg:text-[1vw]">
          Author: {article.author ?? "-"} • Publish Date:{" "}
          {new Date(article.publishedAt).toLocaleDateString("id-ID")}
        </h2>
        {/* Image */}
        <div className="aspect-w-[994] aspect-h-[522] relative rounded-[20px] overflow-hidden">
          <Image
            src={`https://goldfish-app-38lif.ondigitalocean.app${article.thumbnail.data.attributes.url}`}
            alt="article image"
            width={2000}
            height={2000}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Article */}
        <div className="mt-[20px] text-[3.3vw] lg:text-[1.2vw] text-justify">
          <ReactMarkdown components={MdxComponents} rehypePlugins={rehypeRaw}>
            {article.body}
          </ReactMarkdown>
        </div>
        <div className="mt-[20px] font-avenirBlack text-[5vw] lg:text-[2.5vw] flex flex-col">
          Our Recommendation
          <TelescopeBox
            article={articles.find((article) => article.slug != params.article)}
            type="article"
          />
        </div>
      </div>
    </main>
  );
}

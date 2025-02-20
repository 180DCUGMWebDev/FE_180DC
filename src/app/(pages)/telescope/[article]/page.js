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
    "https://strapi.180dcugm.org/api/articles?populate=*&sort=publishedAt:desc",
    {
      next: { revalidate: 60 },
    },
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
      <div className="flex flex-col gap-[min(2vw,20px)] px-[5%] py-[max(20vw,100px)] font-latoRegular text-lightWhite lg:px-[26%] lg:py-[max(15vh,100px)]">
        {/* Title */}
        <h1 className="text-center font-avenirBlack text-[8vw] lg:text-[3.3vw]">{article.title}</h1>
        <h2 className="text-center text-[3vw] lg:text-[1vw]">
          Author: {article.author ?? "-"} • Publish Date:{" "}
          {new Date(article.publishedAt).toLocaleDateString("id-ID")}
        </h2>
        {/* Image */}
        <div className="aspect-h-[522] aspect-w-[994] relative overflow-hidden rounded-[20px]">
          <Image
            src={`https://strapi.180dcugm.org${article.thumbnail.data.attributes.url}`}
            alt="article image"
            width={2000}
            height={2000}
            className=" inset-0 h-full w-full object-cover"
          />
        </div>
        {/* Article */}
        <div className="mt-[20px] text-justify text-[3.3vw] lg:text-[1.2vw]">
          <ReactMarkdown components={MdxComponents} rehypePlugins={rehypeRaw}>
            {article.body}
          </ReactMarkdown>
        </div>
        <div className="mt-[20px] flex flex-col font-avenirBlack text-[5vw] lg:text-[2.5vw]">
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

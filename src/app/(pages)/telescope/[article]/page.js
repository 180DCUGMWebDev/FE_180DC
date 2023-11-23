"use client";
import { notFound } from "next/navigation";
import { articles } from "@/components/content";
import Image from "next/image";
import { TelescopeBox } from "@/components/telescope/TelescopeBox";

export default function Article({ params }) {
  const article = articles.find((article) => article.id == params.article);
  if (!article) notFound();
  return (
    <main className="min-h-screen bg-[black]">
      <div className="flex flex-col gap-[min(2vw,20px)] px-[5%] lg:px-[26%] text-lightWhite font-latoRegular py-[max(20vw,100px)] lg:py-[max(15vh,100px)]">
        {/* Title */}
        <h1 className="font-avenirBlack text-center text-[8vw] lg:text-[3.3vw]">
          {article.title}
        </h1>
        <h2 className="text-center text-[3vw] lg:text-[1vw]">
          Author: {article.author} • Publish Date: {article.date}
        </h2>
        {/* Image */}
        <div className="aspect-w-[994] aspect-h-[522] relative rounded-[20px] overflow-hidden">
          <Image
            src={article.image}
            alt="article image"
            width={2000}
            height={2000}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Article */}
        <p className="mt-[20px] text-[3.3vw] lg:text-[1.2vw] text-justify">
          {article.content}
        </p>
        <div className="mt-[20px] font-avenirBlack text-[5vw] lg:text-[2.5vw] flex flex-col">
          Our Recommendation
          <TelescopeBox
            article={articles.find((article) => article.id != params.article)}
            type="article"
          />
        </div>
      </div>
    </main>
  );
}

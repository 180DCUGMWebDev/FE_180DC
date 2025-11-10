import ReactMarkdown from "react-markdown";
import { MdxComponents } from "@/components/modules/telescope";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import Link from "next/link";
import { TelescopeBox } from "./TelescopeBox";
import { Quote } from "lucide-react";

export default function TelescopeDetail({
  article,
  allArticles,
  articleSlug,
}: {
  article: any;
  allArticles: any[];
  articleSlug: string;
}) {
  if (!article) return null;

  // Get image URL - handle both string and object cases
  const getImageUrl = (image: any): string => {
    if (!image) return "";

    let imageUrl = "";

    // Handle string format
    if (typeof image === "string") {
      imageUrl = image;
    }
    // Handle Payload CMS object format
    else if (typeof image === "object") {
      // Try different possible URL field names
      imageUrl = image.url || image.src || image.filename || "";
    }

    if (!imageUrl || typeof imageUrl !== "string") return "";

    // If it's already a full URL, return it as is
    if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
      return imageUrl;
    }

    // Otherwise prepend the base URL
    const baseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || "";
    if (baseUrl && imageUrl) {
      return `${baseUrl}${imageUrl.startsWith("/") ? "" : "/"}${imageUrl}`;
    }

    return imageUrl;
  };

  // Get a random recommendation article different from current
  const recommendedArticle = allArticles?.find((a) => a.slug !== articleSlug);

  // Serialize Payload richText to HTML string
  const serializeRichText = (content: any): string => {
    if (!content) return "";
    if (typeof content === "string") return content;

    // If it's a richText object with root, extract text content
    if (content?.root?.children) {
      return extractTextFromRichText(content.root.children);
    }

    return "";
  };

  const extractTextFromRichText = (children: any[]): string => {
    return children
      .map((child: any) => {
        if (child.text) return child.text;
        if (child.children) return extractTextFromRichText(child.children);
        return "";
      })
      .join("\n");
  };

  return (
    <main className="min-h-screen bg-black">
      <div className="font-lato-regular flex flex-col gap-[min(2vw,20px)] px-[5%] py-[max(20vw,100px)] text-gray-100 lg:px-[26%] lg:py-[max(15vh,100px)]">
        {/* Title */}
        <h1 className="font-avenir-black text-center text-[8vw] lg:text-[3.3vw]">
          {article.title}
        </h1>

        {/* Author & Published Date */}
        <h2 className="text-center text-[3vw] lg:text-[1vw]">
          Author: {article.author ?? "-"} • Publish Date:{" "}
          {article.publishedDate
            ? new Date(article.publishedDate).toLocaleDateString("id-ID")
            : new Date(article.createdAt).toLocaleDateString("id-ID")}
        </h2>

        {/* Image */}
        {article.image && (
          <div className="relative aspect-video overflow-hidden rounded-[20px]">
            <Image
              src={getImageUrl(article.image)}
              alt={article.title || "article image"}
              fill
              className="object-cover"
            />
          </div>
        )}
        {article.content && (
          <div className="font-lato-light-italic mt-[20px] border-l-4 border-white px-4 text-justify text-[3.3vw] lg:text-[1.2vw]">
            <Quote className="rotate-180" />
            <ReactMarkdown components={MdxComponents} rehypePlugins={[rehypeRaw]}>
              {serializeRichText(article.content)}
            </ReactMarkdown>
            <Quote />
          </div>
        )}

        {article.description && (
          <div>
            <ReactMarkdown components={MdxComponents} rehypePlugins={[rehypeRaw]}>
              {article.description}
            </ReactMarkdown>
          </div>
        )}

        {/* Recommendation Section */}
        {recommendedArticle && (
          <div className="font-avenir-black mt-[20px] flex flex-col gap-[20px] text-[5vw] lg:text-[2.5vw]">
            Our Recommendation
            <Link href={`/article/telescope/${recommendedArticle.slug}`}>
              <TelescopeBox article={recommendedArticle} type="article" />
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

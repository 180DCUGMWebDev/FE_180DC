import Image from "next/image";
import Link from "next/link";

export function TelescopeBox({ article, type, className = "" }) {
  // type = "lg" or "sm" or "article"
  if (!article) return null;

  // Handle different possible structures from Payload
  const thumbnailUrl = article.thumbnail?.url || article.thumbnail;
  const imageUrl = thumbnailUrl?.startsWith("http")
    ? thumbnailUrl
    : `${process.env.NEXT_PUBLIC_PAYLOAD_URL || ""}${thumbnailUrl}`;

  return (
    <Link href={`/telescope/${article.slug}`}>
      <div
        className={`w-full ${
          type !== "article"
            ? type === "lg"
              ? "aspect-h-[154] aspect-w-[326]"
              : "aspect-h-[106] aspect-w-[154]"
            : "aspect-h-[400] aspect-w-[1068]"
        } ${className}`}
      >
        <div
          className={`pl-[5%] ${
            type === "lg" ? "pr-[27%]" : "pr-[12%]"
          } relative rounded-[10px] py-[5%] lg:rounded-[20px]`}
        >
          {/* Background */}
          <div className="absolute inset-0 z-10 overflow-hidden rounded-[10px]">
            {type === "article" || (
              <>
                <div className="absolute inset-0 bg-[linear-gradient(120deg,var(--tw-gradient-stops))] from-green-300 from-20% to-cyan-300 to-80%" />
                <div className="bg-black-300 absolute inset-0 opacity-[0.35]" />
              </>
            )}
            {thumbnailUrl && (
              <Image
                src={imageUrl}
                alt={article.title || "article image"}
                width={2000}
                height={2000}
                className={`absolute inset-0 h-full w-full object-cover ${
                  type === "article" ? "opacity-50" : "opacity-20 blur-[2px] grayscale"
                }`}
              />
            )}
          </div>
          {/* Text */}
          <div
            className={`relative z-20 flex h-full flex-col text-gray-100 ${
              type === "lg" ? "justify-between lg:justify-end" : "justify-end"
            }`}
          >
            <div className="flex flex-col gap-[6px]">
              <div
                className={`font-avenir-black ${
                  type === "lg" ? "text-[5vw]" : "text-[3.5vw]"
                } line-clamp-2 leading-[1.2]`}
              >
                {article.title}
              </div>
              {type === "lg" && article.previewText && (
                <div className="font-lato-regular text-[2.7vw] leading-[1.2]">
                  {article.previewText}
                </div>
              )}
            </div>
            <div className="text-[2.7vw] leading-[1.2] italic underline lg:hidden">
              Read Article
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

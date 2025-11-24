import Image from "next/image";
import Link from "next/link";

export function TelescopeBox({ article, type, className = "" }) {
  // type = "lg" or "sm" or "article"
  if (!article) return null;

  // Handle image field (relationship to media collection)
  // Handle image field (relationship to media collection)
  let fullImageUrl = "";
  if (
    typeof article.image === "object" &&
    article.image !== null &&
    "filename" in article.image
  ) {
    fullImageUrl = `https://gvwdpmgyinzctwyzqqdy.supabase.co/storage/v1/object/public/media/${encodeURIComponent(article.image.filename)}`;
  } else {
    const imageUrl = article.image?.url || article.image;
    fullImageUrl = imageUrl?.startsWith("http")
      ? imageUrl
      : `${process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000"}${imageUrl}`;
  }

  return (
    <Link href={`/article/telescope/${article.slug}`}>
      <div
        className={`${
          type !== "article"
            ? type === "lg"
              ? "aspect-h-[254] aspect-w-[326]"
              : "aspect-h-[156] aspect-w-[154]"
            : "aspect-h-[500] aspect-w-[1068]"
        } ${className}`}
      >
        <div
          className={`pl-[5%] ${
            type === "lg" ? "pr-[27%]" : "pr-[12%]"
          } relative rounded-[10px] py-[5%] lg:rounded-[20px]`}
        >
          {/* Background */}
          <div className="absolute inset-0 z-10 overflow-hidden rounded-[10px]">
            {fullImageUrl ? (
              <Image
                src={fullImageUrl}
                alt={article.title || "article image"}
                width={2000}
                height={2000}
                className="absolute inset-0 h-full w-full object-cover"
                unoptimized
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-[linear-gradient(120deg,var(--tw-gradient-stops))] from-green-300 from-20% to-cyan-300 to-80%" />
                <div className="bg-black-300 absolute inset-0 opacity-[0.35]" />
              </>
            )}
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
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
                  type === "lg"
                    ? "text-3xl lg:text-5xl"
                    : "text-xl lg:text-3xl"
                } line-clamp-2 leading-[1.2] drop-shadow-lg`}
              >
                {article.title}
              </div>
              {type === "lg" && article.description && (
                <div className="font-lato-regular line-clamp-2 text-sm lg:text-lg leading-[1.2] drop-shadow-md">
                  {article.description}
                </div>
              )}
            </div>
            <div className="text-sm leading-[1.2] italic underline drop-shadow-md lg:hidden">
              Read Article
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

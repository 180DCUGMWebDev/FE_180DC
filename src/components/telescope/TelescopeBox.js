import Image from "next/image";
import Link from "next/link";

export function TelescopeBox({ article, type, className }) {
  // type = "lg" or "sm"
  if (!article) return null;
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
          } rounded-[10px] py-[5%] lg:rounded-[20px] relative`}
        >
          {/* Background */}
          <div className="absolute inset-0 z-10 overflow-hidden rounded-[10px] ">
            {type === "article" || (
              <>
                <div className="absolute inset-0 from-primary from-20% to-secondary to-80% [background-image:linear-gradient(120deg,var(--tw-gradient-stops))]" />
                <div className="absolute inset-0 bg-black opacity-[0.35]" />
              </>
            )}
            <Image
              src={`https://strapi.180dcugm.org${article.thumbnail.data.attributes.url}`}
              alt="article image"
              width={2000}
              height={2000}
              className={`absolute inset-0 h-full w-full object-cover ${
                type === "article" ? "opacity-50" : "opacity-20 blur-[2px] grayscale"
              }`}
            />
          </div>
          {/* Text */}
          <div
            className={`relative z-20 flex h-full flex-col text-lightWhite ${
              type === "lg" ? "justify-between lg:justify-end" : "justify-end"
            }`}
          >
            <div className="flex flex-col gap-[6px]">
              <div
                className={`font-avenirBlack ${
                  type === "lg" ? "text-[5vw]" : "text-[3.5vw]"
                } line-clamp-2 leading-[1.2]`}
              >
                {article.title}
              </div>
              {type === "lg" && (
                <div className="font-latoRegular text-[2.7vw] leading-[1.2]">
                  {article.previewText}
                </div>
              )}
            </div>
            <div className="text-[2.7vw] italic leading-[1.2] underline lg:hidden">
              Read Article
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

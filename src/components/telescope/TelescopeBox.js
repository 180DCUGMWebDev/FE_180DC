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
              ? "aspect-w-[326] aspect-h-[154]"
              : "aspect-w-[154] aspect-h-[106]"
            : "aspect-w-[1068] aspect-h-[400]"
        } ${className}`}
      >
        <div
          className={`pl-[5%] ${
            type === "lg" ? "pr-[27%]" : "pr-[12%]"
          } py-[5%] rounded-[10px] lg:rounded-[20px]`}
        >
          {/* Background */}
          <div className="z-10 absolute inset-0 rounded-[10px] overflow-hidden">
            {type === "article" || (
              <>
                <div className="absolute inset-0 [background-image:linear-gradient(120deg,var(--tw-gradient-stops))] from-primary from-20% to-secondary to-80%" />
                <div className="absolute inset-0 bg-black opacity-[0.35]" />
              </>
            )}
            <Image
              src={`https://goldfish-app-38lif.ondigitalocean.app${article.thumbnail.data.attributes.url}`}
              alt="article image"
              width={2000}
              height={2000}
              className={`absolute inset-0 w-full h-full object-cover ${
                type === "article"
                  ? "opacity-50"
                  : "grayscale blur-[2px] opacity-20"
              }`}
            />
          </div>
          {/* Text */}
          <div
            className={`z-20 relative h-full flex flex-col text-lightWhite ${
              type === "lg" ? "justify-between lg:justify-end" : "justify-end"
            }`}
          >
            <div className="flex flex-col gap-[6px]">
              <div
                className={`font-avenirBlack ${
                  type === "lg" ? "text-[5vw]" : "text-[3.5vw]"
                } leading-[1.2] line-clamp-2`}
              >
                {article.title}
              </div>
              {type === "lg" && (
                <div className="font-latoRegular text-[2.7vw] leading-[1.2]">
                  {article.previewText}
                </div>
              )}
            </div>
            <div className="lg:hidden italic underline text-[2.7vw] leading-[1.2]">
              Read Article
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

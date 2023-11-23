import Image from "next/image";
import Link from "next/link";

export function TelescopeBox({ article, type, className }) {
  // type = "lg" or "sm"
  return (
    <Link href={`/telescope/${article.id}`}>
      <div
        className={`w-full ${
          type === "lg"
            ? "aspect-w-[326] aspect-h-[154]"
            : "aspect-w-[154] aspect-h-[106]"
        } ${className}`}
      >
        <div
          className={`pl-[5%] ${
            type === "lg" ? "pr-[27%]" : "pr-[12%]"
          } py-[5%] rounded-[10px] lg:rounded-[20px]`}
        >
          {/* Background */}
          <div className="z-10 absolute inset-0 rounded-[10px] overflow-hidden">
            <div className="absolute inset-0 [background-image:linear-gradient(120deg,var(--tw-gradient-stops))] from-primary from-20% to-secondary to-80%" />
            <div className="absolute inset-0 bg-black opacity-[0.35]" />
            <Image
              src={article.image}
              alt="article image"
              width={2000}
              height={2000}
              className="absolute inset-0 w-full h-full object-cover grayscale blur-[2px] opacity-20"
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
                  {article.subtitle}
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

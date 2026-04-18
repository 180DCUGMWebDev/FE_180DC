import React from "react";
import Image from "next/image";

const PageHeader = ({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className?: string;
}) => {
  return (
    <div className={`relative z-20 w-full ${className}`}>
      {/* Background layer: handle rounded corners and mask decoration1 */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-b-[20px] bg-gradient-to-t from-[#202020] to-[#525252] shadow-lg md:rounded-b-[40px]">
        <Image
          src="/img/page-header/decoration1.webp"
          alt="dec1"
          fill
          className="absolute right-0 bottom-0 z-0 origin-bottom-right scale-[0.3] object-contain object-right-bottom opacity-30 md:scale-[0.4] lg:scale-[0.5]"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col gap-[12px] px-6 pt-[130px] pb-[70px] sm:px-12 md:gap-[16px] md:px-12 lg:px-[55px] lg:pt-[140px] lg:pb-[100px] 2xl:px-[240px]">
        <h1 className="font-avenir-black max-w-[800px] bg-gradient-to-r from-[#8ADF60] to-[#3CE0F9] bg-clip-text text-3xl leading-[1.1] text-transparent md:text-5xl lg:text-[50px]">
          {title}
        </h1>
        <p className="font-lato-regular max-w-[640px] text-sm leading-relaxed text-white md:text-base">
          {subtitle}
        </p>
      </div>

      {/* Decoration 2: Placed outside overflow-hidden so it can bleed/overlap onto following components! */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <Image
          src="/img/page-header/decoration2.webp"
          alt="dec2"
          fill
          className="absolute top-0 right-0 origin-right translate-x-[5.5rem] translate-y-[46%] scale-[0.6] object-contain object-right md:translate-x-[8rem] md:translate-y-[43%] md:scale-[0.8] lg:translate-x-[11rem] lg:translate-y-[45%] lg:scale-[1.05]"
        />
      </div>
    </div>
  );
};

export default PageHeader;

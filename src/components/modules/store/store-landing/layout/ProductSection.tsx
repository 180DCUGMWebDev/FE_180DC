import React from "react";

const ProductSection = ({
  children,
  title,
  subtitle,
}: {
  children?: React.ReactNode;
  title: string;
  subtitle: string;
}) => {
  return (
    <section className="flex w-full flex-col gap-3">
      <div className="flex w-full flex-col gap-1 px-6 sm:px-12 md:px-12 lg:px-[55px] 2xl:px-[240px]">
        <h3 className="font-avenir-black max-w-[800px] bg-gradient-to-r from-[#8ADF60] to-[#3CE0F9] bg-clip-text text-xl leading-[1.1] text-transparent md:text-3xl lg:text-[45px]">
          {title}
        </h3>
        <p className="font-lato-regular max-w-[640px] text-sm leading-relaxed text-white md:text-base">
          {subtitle}
        </p>
      </div>
      <div className="relative mt-2 w-full">
        <div className="scrollbar-hide flex w-full gap-6 overflow-x-auto pr-[5%] pb-4 pl-6 sm:pl-12 md:pl-12 lg:pl-[55px] 2xl:pl-[240px]">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

import React from "react";
import PageHeader from "@/components/elements/PageHeader";
import Image from "next/image";

const StoreLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <main className="relative min-h-screen w-full bg-[#444444]/10 bg-[url('/img/events/background.webp')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <PageHeader
        title="Our Products"
        subtitle="Explore the various products offered by 180 Degrees Consulting UGM."
      />
      {/* Konten Utama dipasang di sini */}
      <div className="relative z-10 flex min-h-[50vh] w-full flex-col pb-[5vh] sm:pb-[10vh] lg:pb-[25vh]">
        {children}
      </div>
      <div
        className="pointer-events-none absolute -bottom-30 left-0 z-0 h-[300px] w-full overflow-hidden sm:-bottom-50 md:h-[400px] lg:h-[500px]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
        }}
      >
        <Image
          src="/img/store/texture.webp"
          alt="texture"
          fill
          className="object-cover object-[center_60%] opacity-80"
        />
      </div>
    </main>
  );
};

export default StoreLayout;

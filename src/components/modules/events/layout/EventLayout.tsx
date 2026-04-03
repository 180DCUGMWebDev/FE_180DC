import PageHeader from "@/components/elements/PageHeader";
import React from "react";
import Image from "next/image";

const EventLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <main className="relative min-h-screen w-full bg-[#444444]/10 bg-[url('/img/events/background.webp')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <PageHeader
        title="Our Programs and Events"
        subtitle="Explore the various programs and events organized by 180 Degrees Consulting UGM."
      />
      <Image
        src="/img/events/decoration1.webp"
        alt="background"
        fill
        className="pointer-events-none fixed z-0 origin-left -translate-x-[40%] -translate-y-[15%] scale-[0.5] object-contain object-left sm:-translate-x-[12%] sm:scale-[0.2] md:-translate-x-[10.8%] xl:-translate-x-[11.7%] 2xl:-translate-x-[9.5%]"
      />

      {/* Konten Utama dari EventsHub dipasang di sini */}
      <div className="relative z-10 flex min-h-[50vh] w-full flex-col pb-[5vh] sm:pb-[10vh] lg:pb-[25vh]">
        {children}
      </div>

      {/* --- Kumpulan Stars (Decoration 2) --- */}
      <Image
        src="/img/events/decoration2.webp"
        alt="star"
        width={150}
        height={150}
        className="pointer-events-none absolute right-[10%] bottom-[5%] z-9 h-16 w-16 opacity-80 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-[150px] lg:w-[150px]"
      />
      <Image
        src="/img/events/decoration2.webp"
        alt="star"
        width={150}
        height={150}
        className="pointer-events-none absolute bottom-[45%] left-[2%] z-9 h-12 w-12 opacity-60 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-[120px] lg:w-[120px]"
      />
      <Image
        src="/img/events/decoration2.webp"
        alt="star"
        width={150}
        height={150}
        className="pointer-events-none absolute right-0 bottom-[30%] z-9 h-20 w-20 opacity-90 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-[150px] lg:w-[150px] xl:right-[5%]"
      />

      {/* Balairung Decorative di paling bawah dengan gradien memudar di atas */}
      <div
        className="pointer-events-none absolute -bottom-30 left-0 z-0 h-[300px] w-full overflow-hidden sm:-bottom-50 md:h-[400px] lg:h-[500px]"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 35%)",
        }}
      >
        <Image
          src="/img/events/balairung.webp"
          alt="balairung"
          fill
          className="object-cover object-[center_60%] opacity-80"
        />
      </div>
    </main>
  );
};

export default EventLayout;

import Image from "next/image";
import Button180 from "@/components/elements/Button180";
import Link from "next/link";
import Container from "@/components/layout/Container";

export function WhatIs() {
  return (
    <Container>
      <div className="flex h-fit flex-col items-center justify-center bg-white max-lg:-mt-[10vh] max-lg:rounded-[10px] max-lg:px-[4%] max-lg:py-[16px] max-lg:drop-shadow-[-2px_3px_5px_#1A1A1A40] lg:h-full">
        {/* Judul (Mobile) */}
        <div className="font-avenir-black mb-1.5 text-center text-xl text-green-300 sm:text-2xl lg:hidden">
          What is <br />
          180DC UGM?
        </div>
        {/* Gambar */}
        <div className="relative z-10 h-[180px] w-full overflow-hidden rounded-t-[8px] sm:h-[220px] lg:h-[280px] lg:rounded-t-[16px] xl:h-[320px]">
          <Image
            src="/img/homepage/balairung_green.png"
            alt="Balairung"
            width={1000}
            height={1000}
            className="z-10 h-full w-full object-cover"
          />
        </div>
        {/* Teks */}
        <div className="z-20 flex flex-col gap-[16px] px-[2.3%] max-lg:-mt-[8px] max-lg:items-center">
          <div className="flex flex-col">
            <div className="font-avenir-black max-lg:hidden lg:text-5xl xl:text-6xl">
              What is 180DC UGM?
            </div>
            <div className="font-lato-regular text-[11px] max-lg:text-center sm:text-sm lg:text-xl xl:text-2xl">
              180 Degrees Consulting Universitas Gadjah Mada is the first Indonesian branch of the
              world&apos;s largest consultancy for non-profit and social enterprises. Being at the
              very forefront of desirable change, 180 Degrees Consulting UGM has helped various
              entities in overcoming the challenges they face at extremely affordable costs.{" "}
            </div>
          </div>
          <Link href="/aboutus" className="max-lg:hidden">
            <Button180 color="black" text="Read More" />
          </Link>
          <Link href="/aboutus" className="lg:hidden">
            <Button180 color="green" text="Read More" />
          </Link>
        </div>
      </div>
    </Container>
  );
}

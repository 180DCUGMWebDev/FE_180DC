import Image from "next/image";
import Button180 from "@/components/elements/Button180";
import Link from "next/link";
import Container from "@/components/layout/Container";

export function WhatIs() {
  return (
    <section className="relative overflow-visible bg-white py-12 lg:py-16">
      <Image
        src="/img/bootcamp/180DCCircle.webp"
        alt="left ornament"
        width={200}
        height={200}
        className="pointer-events-none absolute left-[4vw] top-[220px] z-10 hidden lg:block"
      />
      <Image
        src="/img/bootcamp/cincin.webp"
        alt="right ornament"
        width={270}
        height={270}
        className="pointer-events-none absolute right-4 top-10 z-10 hidden lg:block"
      />

      <Container>
        <div className="relative mx-auto w-full px-12">
          <div className="h-[180px] w-full overflow-hidden border border-black/10 sm:h-[210px] lg:h-[285px]">
            <Image
              src="/img/homepage/ugm-about.webp"
              alt="180DC UGM"
              width={1200}
              height={360}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mx-auto mt-9 max-w-[980px] text-center text-black lg:mt-11">
            <h2 className="font-avenir-black text-3xl sm:text-4xl lg:text-[50px] lg:leading-tight">
              What is <span className="text-[#73B743]">180DC UGM</span>?
            </h2>
            <p className="font-lato-regular mx-auto mt-5 max-w-[1060px] leading-relaxed text-xl lg:text-[30px] lg:mt-7 lg:leading-[1.34]">
              180 Degrees Consulting Universitas Gadjah Mada is the first Indonesian branch of the
              world&apos;s largest consultancy for non-profit and social enterprises. Being at the
              very forefront of desirable change, 180 Degrees Consulting UGM has helped various
              entities in overcoming the challenges they face at extremely affordable costs.
            </p>
            <div className="mt-8 flex justify-center lg:mt-10">
              <Link href="/about/us">
                <Button180 color="green" size="md" text="Read More" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

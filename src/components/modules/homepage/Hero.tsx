import Image from "next/image";
import Button180 from "@/components/elements/Button180";
import Container from "@/components/layout/Container";
import type { Hero as HeroType } from "@/payload-types";

export async function Hero({ heroData }: { heroData: Partial<HeroType> }) {
  const newsTitle = heroData?.newsTitle || "180DC UGM Consulting Bootcamp";
  const newsContent =
    heroData?.newsContent ||
    "The 180DC UGM Consulting Bootcamp 2025 is an online program designed to help you learn, apply, and master the essential skills every consultant needs. Whether you're a beginner or an aspiring problem-solver, this is the perfect place to start your journey!";

  const newsImage =
    typeof heroData?.newsImage === "object" &&
      heroData?.newsImage !== null &&
      "url" in heroData.newsImage &&
      heroData.newsImage.url
      ? heroData.newsImage.url
      : "/img/homepage/caseBook.webp";

  return (
    <>
      <div className="bg-[#73B743] py-1 z-10 mt-16 text-center w-full">
        <p className="text-xl font-avenir-heavy">{heroData?.notification}</p>
      </div>
      {/* Hero */}
      <div className="bg-[#313131] relative z-10 flex h-fit w-full items-center px-[5%] max-lg:pt-[15vh] max-lg:pb-[25vh] sm:px-[10%] lg:h-[50vw] lg:px-[4%] rounded-b-3xl border-white border-b-3">
        {/* Hero Background */}
        <Image
          src="/img/homepage/hero-background.webp"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 z-10 h-full w-full object-cover"
        />
        <Container className="flex flex-col">
          {/* Hero Content */}
          <div className="relative z-20 flex flex-row h-fit w-full text-white max-lg:pb-[20px] lg:h-1/2 lg:justify-between">
            {/* Kolom Kiri */}
            <div className="flex w-full justify-center flex-col gap-10 max-lg:items-center ">
              {/* Teks */}
              <div className="flex flex-col gap-2 max-lg:items-center">
                <div className="font-avenir-black text-2xl max-lg:text-center max-lg:text-green-300 sm:text-3xl lg:text-5xl xl:text-[45px]">
                  Providing <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#73B743] to-[#58B9D1]">Perfect Solutions</span>  For Your Own Business.
                </div>
                <div className="font-lato-regular w-[90%] text-xs max-lg:text-center sm:text-sm lg:w-[72%] lg:text-lg xl:text-xl">
                  UGM branch of the world&apos;s largest student-led consultancy for non-profits &
                  social enterprises.
                </div>
              </div>
              {/* Tombol */}
              <div className="flex flex-col gap-2 max-lg:w-full max-lg:justify-center md:flex-row md:gap-8">
                <Button180
                  href="/apply"
                  size="lg"
                  color="green"
                  text="Consult Now!"
                />
                <Button180
                  color="gray"
                  text="Contact Us"
                  size="lg"
                  href={heroData?.contact || "#"}
                />
              </div>
            </div>

            {/* Kolom Kanan */}
            <div className="max-lg:hidden lg:flex lg:w-[52%] lg:items-center lg:justify-end">
              <div className="relative h-[430px] w-[860px]">
                <div className="absolute top-0 left-0 z-20 flex items-center rounded-full bg-[#73B743] px-5 lg:px-10 py-3 shadow-[0_6px_14px_rgba(0,0,0,0.22)]">
                  <div className="mr-3 flex items-center gap-2">
                    <span className="h-4 w-4 rounded-full bg-[#4A7D2A]" />
                    <span className="h-4 w-4 rounded-full bg-black" />
                    <span className="h-4 w-4 rounded-full bg-white" />
                  </div>
                  <p className="font-avenir-heavy text-xs leading-none text-white">180DC UGM News</p>
                </div>

                <Image
                  src="/img/homepage/hero-rectangle.webp"
                  alt=""
                  fill
                  className="object-contain"
                  priority
                />

                <div className="relative z-10 grid h-full grid-cols-[45%_55%] gap-6 px-8 pt-[68px] pb-8">
                  <div className="flex flex-col text-white">
                    <h3 className="font-avenir-black text-[28px] leading-[1.15]">{newsTitle}</h3>
                    <p className="mt-3 pr-2 font-lato-regular text-[13px] leading-[1.5] text-white/90 line-clamp-8">
                      {newsContent}
                    </p>
                  </div>

                  <div className="relative overflow-hidden rounded-[12px]">
                    <Image
                      src={newsImage}
                      alt={newsTitle}
                      fill
                      sizes="(min-width: 1024px) 30vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

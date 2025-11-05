import Image from "next/image";
import Button180 from "@/components/elements/Button180";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { ArrowUpRight } from "lucide-react";

export function Hero({ contactRef }) {
  const podcastLink = "https://open.spotify.com/episode/3LRLqk6d9B7XkSA5zekYC8?si=c122ebff6e664062";
  return (
    <>
      {/* Hero */}
      <div className="lg:bg-black-300 relative z-10 flex h-fit w-full items-center px-[5%] max-lg:pt-[15vh] max-lg:pb-[25vh] sm:px-[10%] lg:h-screen lg:min-h-[50vw] lg:px-[4%]">
        {/* Hero Background */}
        <Image
          src="/img/homepage/balairung.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 z-10 h-full w-full object-cover max-lg:hidden"
        />
        <Image
          src="/img/homepage/balairung_mobile.png"
          alt="background"
          width={2000}
          height={2000}
          className="absolute inset-0 z-10 h-full w-full lg:hidden"
        />
        <Container className="flex flex-col">
          {/* Hero Content */}
          <div className="relative z-20 flex h-fit w-full text-white max-lg:pb-[20px] lg:h-1/2 lg:justify-between">
            {/* Kolom Kiri */}
            <div className="flex w-full flex-col gap-10 max-lg:items-center lg:w-[54%]">
              {/* Teks */}
              <div className="flex flex-col gap-2 max-lg:items-center">
                <div className="font-avenir-black text-2xl max-lg:text-center max-lg:text-green-300 sm:text-3xl lg:text-5xl xl:text-6xl">
                  Providing Perfect Solutions For Your Own Business.
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
                  icon={<ArrowUpRight />}
                />
                <Button180
                  color="green"
                  text="Contact Us"
                  size="lg"
                  action={() => contactRef.current.scrollIntoView({ behavior: "smooth" })}
                />
              </div>
            </div>
            {/* Kolom Kanan */}
            <div className="flex w-[45%] flex-col justify-between max-lg:hidden">
              {/* Bagian atas */}
              <div className="flex h-[60%] justify-between">
                <div className="relative w-[62%] overflow-hidden rounded-tl-[60%] rounded-r-[7%] rounded-bl-[7%]">
                  <Image
                    src="/img/homepage/hero1.png"
                    alt="Gambar Homepage Kanan"
                    width={2000}
                    height={2000}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="font-avenir-black bg-black-300 flex w-[34%] flex-col justify-center rounded-[24px] px-[20px] pt-[30px]">
                  <div className="text-[40px] leading-[25px] xl:text-[60px] xl:leading-[45px] 2xl:text-[70px] 2xl:leading-[50px]">
                    8<span className="text-green-300">+</span>
                  </div>
                  <div className="lg:text-[12px] xl:text-[15px] 2xl:text-[20px]">
                    Notable <span className="text-green-300">Mentors</span>
                  </div>
                  <div className="font-lato-regular overflow-hidden lg:text-[9px] xl:text-[10px] 2xl:text-[12px]">
                    Delivering high quality consultancy to clients, supported by professional
                    mentors from notable entities.
                  </div>
                </div>
              </div>
              {/* Bagian bawah */}
              <div className="flex h-fit flex-col items-center justify-center">
                <iframe
                  title="Spotify Web Player"
                  src={`https://open.spotify.com/embed${new URL(podcastLink).pathname}`}
                  className="h-[152px] w-full rounded-[8px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

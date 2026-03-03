import Image from "next/image";
import Container from "@/components/layout/Container";

export function VisitSpotify() {
  const podcastLink = "https://open.spotify.com/episode/3LRLqk6d9B7XkSA5zekYC8?si=c122ebff6e664062";

  return (
    <div className="relative w-full bg-[#73B743] py-16 md:py-24">
      <Image
        src="/img/bootcamp/plsfix.webp"
        alt="plsfix banner"
        width={500}
        height={150}
        className="absolute top-0 right-0 z-10 w-[40%] max-w-[500px] -translate-y-[50%] object-contain lg:w-[35%]"
      />
      <Container>
        <div className="relative z-20 flex flex-col items-center justify-center gap-8 px-[4%] sm:px-[6%] md:flex-row md:px-0">
          <div
            data-aos="fade-right"
            data-aos-duration="600"
            className="font-avenir-black shrink-0 leading-[1.05] text-black"
          >
            <div className="flex flex-row flex-wrap items-center justify-center gap-2 text-[32px] sm:gap-3 sm:text-[48px] md:hidden">
              <span>Visit</span>
              <span>Our</span>
              <div className="relative h-[44px] w-[44px] flex-shrink-0 sm:h-[60px] sm:w-[60px]">
                <Image
                  src="/img/bootcamp/180DCCircle.webp"
                  alt="180DC Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span>Spotify</span>
            </div>
            <div className="hidden flex-col text-[80px] md:flex lg:text-[96.1px]">
              <div className="flex flex-row items-center">
                <div className="flex flex-col">
                  <p>Visit</p>
                  <p>Our</p>
                </div>
                <div className="relative ml-4 h-[134px] w-[134px] flex-shrink-0 lg:h-[161px] lg:w-[161px]">
                  <Image
                    src="/img/bootcamp/180DCCircle.webp"
                    alt="180DC Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p>Spotify</p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-delay="200"
            className="w-full max-w-[620px] md:w-[55%] md:pt-[60px] lg:min-w-0 lg:flex-1"
          >
            <iframe
              title="Spotify Web Player"
              src={`https://open.spotify.com/embed${new URL(podcastLink).pathname}`}
              className="mt-[5px] block h-[calc(3*1.05*clamp(48px,8.5vw,96.1px))] w-full rounded-[12px]"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

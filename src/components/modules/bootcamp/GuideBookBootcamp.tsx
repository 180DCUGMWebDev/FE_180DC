import Container from "@/components/layout/Container";
import Image from "next/image";

export const GuideBookBootcamp = () => {
  return (
    <div className="relative">
      {/* Mobile background */}
      <Image
        alt="backgroundBawahMobile"
        src="/img/bootcamp/backgroundBawahMobile.webp"
        width={2000}
        height={2000}
        className="absolute inset-0 z-0 min-h-screen w-screen lg:hidden"
      />
      <Image
        alt="bintang bawah mobile"
        src="/img/bootcamp/bintangBawahMobile.webp"
        width={2000}
        height={2000}
        className="absolute top-[5%] left-[18%] z-10 w-[80%] lg:hidden"
      />
      <Image
        alt="city"
        src="/img/bootcamp/kotaBawahMobile.webp"
        width={2000}
        height={2000}
        className="absolute bottom-0 z-0 w-full lg:hidden"
      />
      {/* Desktop background */}
      <Image
        alt="backgroundBawahDesktop"
        src="/img/bootcamp/backgroundBawahDesktop.webp"
        width={2000}
        height={2000}
        className="inset-0 z-0 hidden min-h-screen w-screen lg:absolute lg:block"
      />
      <Image
        alt="bintang bawah desktop"
        src="/img/bootcamp/bintangBawahDesktop.webp"
        width={2000}
        height={2000}
        className="top-0 left-[3vw] z-10 hidden w-[160vw] max-w-none lg:absolute lg:block"
      />
      <Image
        alt="city"
        src="/img/bootcamp/kotaBawahDesktop.webp"
        width={2000}
        height={2000}
        className="absolute bottom-0 z-0 hidden w-full lg:block"
      />
      {/* Background Fleksibel */}
      <Image
        alt="ellipse bawah"
        src="/img/bootcamp/ellipseBawah.webp"
        width={2000}
        height={2000}
        className="absolute -bottom-[130vw] -left-[71vw] z-0 w-[231vw] max-w-none"
      />
      <Container className="relative z-30 flex h-fit w-screen flex-col items-center leading-none lg:justify-center">
        <Image
          alt="bootcampTimeline"
          src="/img/bootcamp/bootcampGuidebook.webp"
          width={2000}
          height={2000}
          className="w-[100%] lg:w-[50%]"
        />
        <div className="relative mt-[6%] flex h-[100vw] w-full items-center justify-center lg:mb-[4%] lg:h-[60vw]">
          <div
            className="z-30 flex h-full w-[90%] items-center justify-center rounded-[20.43px] p-[20.43px] lg:p-[31px]"
            style={{
              background: "linear-gradient(to bottom, #77BA47 0%, #58B9D1 100%)",
            }}
          >
            <Image
              alt="down tree atas"
              src="/img/bootcamp/downTree.webp"
              width={2000}
              height={2000}
              className="absolute top-0 left-0 z-40 w-[20%] -translate-x-[10%] -translate-y-[90%] -rotate-68 lg:w-[10%] lg:-translate-x-[60%] lg:-translate-y-[80%]"
            />
            <Image
              alt="down tree bawah"
              src="/img/bootcamp/downTree.webp"
              width={2000}
              height={2000}
              className="lg:translate-x-[] absolute right-0 bottom-0 z-50 w-[20%] translate-x-[25%] translate-y-[85%] rotate-120 lg:w-[10%] lg:rotate-140"
            />
            <Image
              alt="plsfix"
              src="/img/bootcamp/plsfix.webp"
              width={2000}
              height={2000}
              className="pointer-events-none absolute top-0 right-0 z-50 w-[55%] translate-x-[12%] -translate-y-[50%] rotate-35 lg:hidden"
            />
            <Image
              alt="ring"
              src="/img/bootcamp/cincin.webp"
              width={2000}
              height={2000}
              className="pointer-events-none absolute bottom-0 left-0 z-50 w-[55%] -translate-x-[25%] translate-y-[35%] rotate-0 lg:left-20 lg:w-[20%] lg:translate-y-[60%]"
            />
            <iframe
              src="/file/CAOprecGuidebook.pdf"
              className="relative z-40 h-[96%] w-[98%] rounded-[6px]"
              title="PDF Viewer"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

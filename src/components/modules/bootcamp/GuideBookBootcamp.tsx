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
        className="absolute lg:hidden inset-0 z-0 min-h-screen w-screen"
      />
      <Image
        alt="bintang bawah mobile"
        src="/img/bootcamp/bintangBawahMobile.webp"
        width={2000}
        height={2000}
        className="absolute lg:hidden z-10 w-[80%] top-[5%] left-[18%] "
      />
      <Image
        alt="city"
        src="/img/bootcamp/kotaBawahMobile.webp"
        width={2000}
        height={2000}
        className="absolute lg:hidden z-0 w-full bottom-0 "
      />
      {/* Desktop background */}
      <Image
        alt="backgroundBawahDesktop"
        src="/img/bootcamp/backgroundBawahDesktop.webp"
        width={2000}
        height={2000}
        className="hidden lg:block lg:absolute inset-0 z-0 min-h-screen w-screen"
      />
      <Image
        alt="bintang bawah desktop"
        src="/img/bootcamp/bintangBawahDesktop.webp"
        width={2000}
        height={2000}
        className="hidden lg:absolute lg:block z-10 max-w-none w-[160vw] top-0 left-[3vw]"
      />
      <Image
        alt="city"
        src="/img/bootcamp/kotaBawahDesktop.webp"
        width={2000}
        height={2000}
        className="absolute hidden lg:block z-0 w-full bottom-0 "
      />
      {/* Background Fleksibel */}
      <Image
        alt="ellipse bawah"
        src="/img/bootcamp/ellipseBawah.webp"
        width={2000}
        height={2000}
        className="absolute z-0 max-w-none w-[231vw] -left-[71vw] -bottom-[130vw]"
      />
      <Container className="w-screen h-fit flex items-center lg:justify-center flex-col relative z-30 leading-none">
        <Image
          alt="bootcampTimeline"
          src="/img/bootcamp/bootcampGuidebook.webp"
          width={2000}
          height={2000}
          className="w-[100%] lg:w-[50%]"
        />
        <div className="relative w-full h-[100vw] lg:h-[60vw] lg:mb-[4%] flex items-center justify-center mt-[6%]">
          <div 
            className="w-full h-full flex z-30 rounded-[20.43px] items-center justify-center p-[20.43px] lg:p-[31px]" 
            style={{ 
              background: 'linear-gradient(to bottom, #77BA47 0%, #58B9D1 100%)',
            }}
          >
            <Image
              alt="down tree atas"
              src="/img/bootcamp/downTree.webp"
              width={2000}
              height={2000}
              className="absolute z-40 w-[20%] lg:w-[10%] top-0 left-0 -rotate-68 -translate-x-[10%] lg:-translate-x-[60%] -translate-y-[90%] lg:-translate-y-[80%]"
            />
            <Image
              alt="down tree bawah"
              src="/img/bootcamp/downTree.webp"
              width={2000}
              height={2000}
              className="absolute z-50 w-[20%] lg:w-[10%] bottom-0 right-0 rotate-120 lg:rotate-140 translate-x-[25%] lg:translate-x-[] translate-y-[85%]"
            />
            <Image
              alt="plsfix"
              src="/img/bootcamp/plsfix.webp"
              width={2000}
              height={2000}
              className="absolute lg:hidden z-50 w-[55%] rotate-35 top-0 right-0 translate-x-[12%] -translate-y-[50%] pointer-events-none"
            />
            <Image
              alt="ring"
              src="/img/bootcamp/cincin.webp"
              width={2000}
              height={2000}
              className="absolute z-50 w-[55%] lg:w-[20%] rotate-0 bottom-0 left-0 lg:left-20 -translate-x-[25%] translate-y-[35%] lg:translate-y-[60%] pointer-events-none"
            />
            <iframe
              src="/file/CAOprecGuidebook.pdf"
              className="absolute z-40 w-[98%] h-[96%] rounded-[6px]"
              title="PDF Viewer"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </div>
  )
};

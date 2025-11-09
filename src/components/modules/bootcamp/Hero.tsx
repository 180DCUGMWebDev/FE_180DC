"use client";
import Button180 from "@/components/elements/Button180";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { useMobile } from "@/utils/hooks/MobileProvider";
import { useTablet } from "@/utils/hooks/TabletProvider";
import { Play } from "lucide-react";

export function Hero() {
  const itemsDesktop = [
    { line1: "Gain consulting skills", line2: "from experienced experts." },
    { line1: "Apply knowledge in", line2: "hands-on workshops" },
    { line1: "Network with like-", line2: "minded peers" },
    { line1: "Get special mentoring from the", line2: "180DC UGM team & experts." },
    { line1: "Solve real business problems", line2: "and compete for prizes." },
    { line1: "Receive an e-certificate", line2: "upon completion." },
  ];

  const itemsMobile = [
    { line1: "Gain consulting", line2: "skills", line3: "from experienced", line4: "experts." },
    { line1: "Apply knowledge in", line2: "hands-on", line3: "workshops." },
    { line1: "Network with", line2: "like-minded", line3: "peers" },
    { line1: "Get special mentoring", line2: "from the 180DC UGM", line3: "team & experts." },
    { line1: "Solve real business", line2: "problems and", line3: "compete for prizes." },
    { line1: "Receive an e-", line2: "certificate upon", line3: "completion." },
  ];

  const isMobile = useMobile();
  const isTablet = useTablet();

  return (
    <div className="relative">
      <Image
        src="/img/bootcamp/heroBootcamp.webp"
        alt="background"
        width={2000}
        height={2000}
        className="absolute inset-0 z-0 min-h-full w-screen overflow-clip object-cover"
      />
      <Image
        src="/img/bootcamp/ellipse_1.webp"
        alt="background"
        width={2000}
        height={2000}
        className="absolute z-10 hidden lg:-top-[2.96%] lg:-left-[37.88vw] lg:block lg:h-[56.31vw] lg:w-[62.98vw]"
      />

      <Image
        src="/img/bootcamp/ellipse_2.webp"
        alt="background"
        width={2000}
        height={2000}
        className="absolute top-[5.4%] -left-[69.2vw] z-10 h-[100.7vw] w-[112.5vw] lg:top-[25.92%] lg:left-[43.38vw] lg:h-[19.85vw] lg:w-[22.17vw]"
      />

      <Image
        src="/img/bootcamp/ellipse_3.webp"
        alt="background"
        width={2000}
        height={2000}
        className="absolute z-10 hidden lg:top-[22.77%] lg:right-[10%] lg:left-[53.89vw] lg:block lg:h-[19.85vw] lg:w-[22.17vw]"
      />

      <Image
        src="/img/bootcamp/ellipse_4.webp"
        alt="background"
        width={2000}
        height={2000}
        className="absolute z-10 hidden lg:top-[14.07%] lg:left-[69.9vw] lg:block lg:h-[19.85vw] lg:w-[22.17vw]"
      />

      <Image
        src="/img/bootcamp/ellipse_5.webp"
        alt="background"
        width={2000}
        height={2000}
        className="absolute z-10 hidden lg:top-[7.22%] lg:left-[73.33vw] lg:block lg:h-[29.44vw] lg:w-[32.93vw]"
      />
      <Image
        src="/img/bootcamp/ellipse_6.webp"
        alt="background"
        width={2000}
        height={2000}
        className="absolute top-[11.5%] left-[60vw] z-10 h-[149.5vw] w-[167.1vw] lg:hidden"
      />
      <Container className="relative z-20 flex min-h-screen w-screen flex-col items-center justify-center px-0 leading-none sm:px-0">
        <div className="relative mx-auto flex h-fit w-full items-center overflow-clip lg:justify-center">
          <div className="relative w-full">
            {/* Main Layout */}
            <div className="relative mt-[8.2%] flex w-full flex-col items-center pb-8 md:mt-[3%] lg:mt-0 lg:h-fit lg:flex-row lg:items-center lg:justify-start lg:gap-8 lg:pb-0 xl:gap-12">
              {/* Left Column */}
              <div className="flex w-full flex-col items-center lg:h-full lg:w-[40%] lg:items-start lg:justify-center">
                <Image
                  data-aos={isMobile || isTablet ? "fade-up" : "fade-right"}
                  alt="consultingBootcamp"
                  src="/img/bootcamp/consultingBootcamp.webp"
                  width={2000}
                  height={2000}
                  className="mx-auto w-[70%] sm:w-[60%] md:w-[45%] lg:w-[90%]"
                />
                <div
                  data-aos="fade-right"
                  className="mt-[2%] ml-[20%] hidden gap-4 pb-8 lg:flex lg:flex-col"
                >
                  <p className="font-lato-black text-white lg:text-[33.54px]">
                    <span className="font-lato-regular">by</span> 180DC UGM
                  </p>
                  <p className="font-lato-regular text-white lg:text-[24px]">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Aliquam
                    in hendrerit urna.
                  </p>
                  <div className="relative mt-[4.5%] hidden flex-row gap-x-2 lg:flex">
                    <Button180
                      color="green"
                      className="font-avenir-heavy w-[43%] rounded-[24.23px] py-[17px] md:text-[14px] lg:text-[clamp(16px,1.5vw,24.23px)]"
                      text="Enroll Me"
                      icon={<Play />}
                      href="/bootcamp/registration"
                    />
                    <Button180
                      color="white"
                      className="font-avenir-heavy w-[43%] rounded-[24.23px] py-[17px] md:text-[14px] lg:text-[clamp(16px,1.5vw,24.23px)]"
                      text="Guidebook"
                      href=""
                    />
                  </div>
                </div>
              </div>
              {/* Right Column */}
              <div className="mt-[2%] flex w-full flex-col px-[6.7%] lg:mt-[6.6%] lg:h-full lg:w-[60%] lg:justify-center lg:gap-3 lg:pr-0 lg:pl-3">
                <div
                  data-aos="fade-left"
                  className="relative mt-[2%] h-[120px] w-full items-center rounded-[24px] bg-white lg:mx-0 lg:ml-auto lg:flex lg:h-[30%] lg:w-[87%] lg:justify-center lg:rounded-l-[54px] lg:rounded-r-none"
                >
                  <Image
                    alt="180 DC Semi Circle"
                    src="/img/bootcamp/180dc_semicircle.webp"
                    width={2000}
                    height={2000}
                    className="absolute top-0 left-0 w-[25%] translate-x-[2%] -translate-y-[59%] object-contain lg:-translate-x-[40%] lg:-translate-y-[53%]"
                  />
                  <div className="relative flex h-full flex-col items-center justify-center px-5 py-2 text-[31.41px] md:text-[40px] lg:px-6 lg:py-6 lg:text-[50px] xl:text-[68px] 2xl:text-[68px]">
                    <div className="font-lato-black text-outline-decoration text-stroke-width flex flex-col bg-gradient-to-r from-[#77BA47] to-[#58B9D1] bg-clip-text text-transparent drop-shadow-[2px_3px_0px_rgba(0,0,0,1)] lg:drop-shadow-[4px_5px_0px_rgba(0,0,0,1)]">
                      {isMobile ? (
                        <>
                          <p>The more you learn,</p>
                          <p>the more you earn!</p>
                        </>
                      ) : (
                        <>
                          <p className="font-lato-black-italic pl-1">The more you learn,</p>
                          <p className="font-lato-black-italic">the more you earn!</p>
                        </>
                      )}
                    </div>
                  </div>
                  <Image
                    alt="plsfix"
                    src="/img/bootcamp/plsfix.webp"
                    width={2000}
                    height={2000}
                    className="absolute -right-7 bottom-0 w-[35%] translate-y-[50%] object-contain lg:right-[3%] lg:w-[25%]"
                  />
                </div>
                <p
                  data-aos="fade-left"
                  className="font-lato-bold mt-[6%] text-white lg:mt-[4%] lg:ml-[13%] lg:text-[35px]"
                >
                  What you will get..
                </p>
                <div className="relative flex w-full flex-col items-end">
                  <div
                    data-aos="fade-left"
                    className="lg: relative z-21 hidden items-center justify-center rounded-[54px] p-[5px] backdrop-blur-[14.8px] lg:absolute lg:bottom-0 lg:ml-auto lg:flex lg:h-full lg:w-[87%] lg:rounded-r-[0]"
                    style={{
                      background:
                        "linear-gradient(to left, transparent 5%, #77BA47 50%, #58B9D1 100%)",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                    }}
                  ></div>
                  <div
                    data-aos="fade-left"
                    className="relative hidden h-full w-[87%] items-center justify-center bg-transparent px-5 py-2.5 lg:flex"
                  >
                    <div className="relative px-[4%] py-[4%] font-bold text-white">
                      <div className="z-10 hidden flex-row flex-wrap gap-x-4 gap-y-5 lg:flex lg:gap-y-3">
                        {itemsDesktop.map((item, index) => (
                          <div
                            key={index}
                            className="w-fit rounded-r-[30px] rounded-bl-[30px] bg-white p-2 px-6"
                          >
                            <h2 className="font-lato-bold bg-gradient-to-r from-[#77BA47] to-[#58B9D1] bg-clip-text text-center text-transparent lg:text-[13px] xl:text-[18px] 2xl:text-[24px]">
                              <div>{item.line1}</div>
                              <div>{item.line2}</div>
                            </h2>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Gradient Card */}
              <div data-aos="fade-up" className="w-full lg:hidden">
                <div className="relative mx-[6.7%] mt-[2%] h-full w-full items-center justify-center overflow-hidden rounded-[17.12px] bg-transparent">
                  <div
                    className="absolute z-21 h-full w-[83.3%] items-center justify-center rounded-[18.87px] p-[1.75px] lg:hidden"
                    style={{
                      background:
                        "radial-gradient(ellipse at center, #77BA47 0%, #77BA47 30%, #58B9D1 100%)",
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "exclude",
                    }}
                  ></div>
                  <div
                    data-aos="fade-up"
                    className="relative z-30 w-[83.3%] py-[4%] font-bold text-white"
                  >
                    <div className="flex flex-row flex-wrap justify-center gap-x-1 gap-y-5 md:gap-y-2 lg:hidden">
                      {itemsMobile.map((item, index) => (
                        <div
                          key={index}
                          className="m-1 flex w-fit items-center rounded-r-[12px] rounded-bl-[12px] bg-white p-2 px-3"
                        >
                          <h2 className="font-lato-bold bg-gradient-to-r from-[#77BA47] to-[#58B9D1] bg-clip-text text-center text-[13.73px] text-transparent sm:text-[16px] md:text-[20px]">
                            <div>{item.line1}</div>
                            <div>{item.line2}</div>
                            <div>{item.line3}</div>
                            {item.line4 ? <div>{item.line4}</div> : null}
                          </h2>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Button 180 */}
              <div data-aos="fade-up" className="w-full lg:hidden">
                <div className="relative mx-[6.7%] mt-[8%] flex items-center justify-center md:mt-[5%]">
                  <Button180
                    color="green"
                    className="font-avenir-heavy h-[59px] w-full text-[24.23px]"
                    icon={<Play />}
                    text={
                      <>
                        <span>Enroll Me</span>
                      </>
                    }
                    href="/bootcamp/registration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

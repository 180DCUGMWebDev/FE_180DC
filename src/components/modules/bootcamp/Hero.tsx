"use client"
import Button180 from "@/components/elements/Button180";
import Image from "next/image";
import Container from "@/components/layout/Container"
import { useMobile } from "@/utils/hooks/MobileProvider";
import { useTablet } from "@/utils/hooks/TabletProvider";

export function Hero() {
  const itemsDesktop = [
    {line1: "Gain consulting skills", line2: "from experienced experts."},
    {line1: "Apply knowledge in", line2:"hands-on workshops"},
    {line1: "Network with like-", line2: "minded peers"},
    {line1: "Get special mentoring from the", line2: "180DC UGM team & experts."},
    {line1: "Solve real business problems", line2: "and compete for prizes."},
    {line1: "Receive an e-certificate", line2: "upon completion."},
  ];

  const itemsMobile = [
    {line1: "Gain consulting", line2: "skills", line3: "from experienced", line4: "experts."},
    {line1: "Apply knowledge in", line2:"hands-on", line3: "workshops."},
    {line1: "Network with", line2:"like-minded", line3: "peers"},
    {line1: "Get special mentoring", line2: "from the 180DC UGM", line3: "team & experts."},
    {line1: "Solve real business", line2: "problems and", line3: "compete for prizes."},
    {line1: "Receive an e-", line2: "certificate upon", line3: "completion."},
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
        className="absolute z-10 hidden lg:block lg:-top-[2.96%] lg:-left-[37.88vw] lg:h-[56.31vw] lg:w-[62.98vw]"
      />

      <Image
        src="/img/bootcamp/ellipse_2.webp"
        alt="background"
        width={2000}
        height={2000}
        className="absolute z-10 top-[5.4%] -left-[69.2vw]  h-[100.7vw] w-[112.5vw] lg:top-[25.92%] lg:left-[43.38vw] lg:h-[19.85vw] lg:w-[22.17vw]"
      />

      <Image
        src="/img/bootcamp/ellipse_3.webp"
        alt="background"
        width={2000}
        height={2000}
        className="absolute z-10 hidden lg:right-[10%] lg:block lg:top-[22.77%] lg:left-[53.89vw] lg:h-[19.85vw] lg:w-[22.17vw]"
      />

      <Image
        src="/img/bootcamp/ellipse_4.webp"
        alt="background"
        width={2000}
        height={2000}
        className="absolute z-10 hidden lg:block lg:top-[14.07%] lg:left-[69.9vw] lg:h-[19.85vw] lg:w-[22.17vw]"
      />

      <Image
        src="/img/bootcamp/ellipse_5.webp"
        alt="background"
        width={2000}
        height={2000}
        className="absolute z-10 hidden lg:block lg:top-[7.22%] lg:left-[73.33vw] lg:h-[29.44vw] lg:w-[32.93vw]"
      />
      <Image
        src="/img/bootcamp/ellipse_6.webp"
        alt="background"
        width={2000}
        height={2000}
        className="absolute z-10 top-[11.5%] left-[60vw] h-[149.5vw] w-[167.1vw] lg:hidden"
      />
      <Container className="w-screen min-h-screen flex items-center justify-center flex-col relative z-20 leading-none">
        <div className="mx-auto flex overflow-clip w-full h-fit items-center lg:justify-center relative">
          <div className="relative w-full">
            {/* Main Layout */}
            <div className="flex relative flex-col w-full lg:h-fit lg:flex-row pb-8 lg:pb-0 lg:gap-8 xl:gap-12 items-center lg:items-center lg:justify-start mt-[8.2%] md:mt-[3%] lg:mt-0">
              {/* Left Column */}
              <div className="w-full lg:w-[40%] lg:h-full flex flex-col items-center lg:justify-center lg:items-start">
                <Image
                  data-aos={isMobile || isTablet ? "fade-up" : "fade-right"}
                  alt="consultingBootcamp"
                  src="/img/bootcamp/consultingBootcamp.webp"
                  width={2000}
                  height={2000}
                  className="mx-auto w-[70%] sm:w-[60%] md:w-[45%] lg:w-[90%]"
                />
                <div data-aos="fade-right" className="hidden lg:flex lg:flex-col gap-4 mt-[2%] pb-8 ml-[20%]">
                  <p className="font-lato-black lg:text-[33.54px] text-white">
                    <span className="font-lato-regular">by</span> 180DC UGM
                  </p>
                  <p className="font-lato-regular lg:text-[24px] text-white">
                    Lorem ipsum dolor sit amet consectetur adipiscing
                    elit. Ut et massa mi. Aliquam in hendrerit urna.
                  </p>
                  <div className="hidden relative lg:flex flex-row gap-x-2 mt-[4.5%]">
                    <Button180 
                      color="green" 
                      className="font-avenir-heavy rounded-[24.23px] w-[43%] py-[17px] md:text-[14px] lg:text-[clamp(16px,1.5vw,24.23px)]"
                      text="▶ Enroll Me"
                      href="/bootcamp/registration" 
                    />
                    <Button180 
                      color="white" 
                      className="font-avenir-heavy rounded-[24.23px] w-[43%] py-[17px] md:text-[14px] lg:text-[clamp(16px,1.5vw,24.23px)]"
                      text="Guidebook" 
                      href="" 
                    />
                  </div>
                </div>
              </div>
              {/* Right Column */}
              <div className="flex flex-col lg:justify-center w-full lg:h-full px-[6.7%] lg:gap-3 lg:pr-0 lg:pl-3 lg:w-[60%] mt-[2%] lg:mt-[6.6%]">
                <div data-aos="fade-left" className="relative lg:flex lg:justify-center h-[120px] lg:h-[30%] w-full lg:w-[87%] mt-[2%] lg:ml-auto bg-white items-center rounded-[24px] lg:rounded-r-none lg:rounded-l-[54px] lg:mx-0">
                  <Image
                    alt="180 DC Semi Circle"
                    src="/img/bootcamp/180dc_semicircle.webp"
                    width={2000}
                    height={2000}
                    className="absolute object-contain w-[25%] top-0 left-0 translate-x-[2%] lg:-translate-x-[40%] -translate-y-[59%] lg:-translate-y-[53%]"
                  />
                  <div className="relative h-full text-[31.41px] md:text-[40px] lg:text-[50px] xl:text-[68px] 2xl:text-[68px] flex flex-col items-center justify-center px-5 py-2 lg:px-6 lg:py-6">
                    <div className="flex flex-col font-lato-black text-transparent bg-clip-text bg-gradient-to-r from-[#77BA47] to-[#58B9D1] text-outline-decoration text-stroke-width drop-shadow-[2px_3px_0px_rgba(0,0,0,1)] lg:drop-shadow-[4px_5px_0px_rgba(0,0,0,1)]">
                      {isMobile ? 
                      <>
                        <p>The more you learn,</p>
                        <p>the more you earn!</p>
                      </> 
                      : 
                        <>
                          <p className="pl-1 font-lato-black-italic">The more you learn,</p>
                          <p className="font-lato-black-italic">the more you earn!</p>
                        </>
                      }
                      
                    </div>
                  </div>
                  <Image
                    alt="plsfix"
                    src="/img/bootcamp/plsfix.webp"
                    width={2000}
                    height={2000}
                    className="absolute object-contain w-[35%] lg:w-[25%] bottom-0 -right-7 lg:right-[3%] translate-y-[50%]"
                  />
                </div>
                <p data-aos="fade-left" className="font-lato-bold lg:text-[35px] lg:ml-[13%] mt-[6%] lg:mt-[4%] text-white">What you will get..</p>
                <div className="relative w-full flex flex-col items-end">
                  <div 
                    data-aos="fade-left"
                    className="hidden lg:w-[87%] lg:ml-auto lg:h-full lg:absolute lg:flex lg: lg:bottom-0 z-21 rounded-[54px] lg:rounded-r-[0] relative items-center justify-center p-[5px] backdrop-blur-[14.8px]" 
                    style={{ 
                      background: 'linear-gradient(to left, transparent 5%, #77BA47 50%, #58B9D1 100%)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                    }}
                  >
                  </div>
                  <div data-aos="fade-left" className="hidden relative lg:flex items-center justify-center h-full w-[87%] bg-transparent px-5 py-2.5">
                    <div className="relative font-bold text-white px-[4%] py-[4%]">
                      <div className="hidden lg:flex flex-row flex-wrap z-10 gap-y-5 lg:gap-y-3 gap-x-4">
                        {itemsDesktop.map((item, index) => (
                          <div
                            key={index}
                            className="w-fit bg-white rounded-r-[30px] rounded-bl-[30px] p-2 px-6"
                          >
                            <h2 className="font-lato-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#77BA47] to-[#58B9D1] lg:text-[13px] xl:text-[18px] 2xl:text-[24px]">
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
                <div className="relative items-center justify-center h-full w-full mt-[2%] mx-[6.7%] rounded-[17.12px] bg-transparent overflow-hidden">
                  <div 
                    className="absolute lg:hidden h-full w-[86%] z-21 items-center rounded-[18.87px] justify-center p-[1.75px]" 
                    style={{ 
                      background: 'radial-gradient(ellipse at center, #77BA47 0%, #77BA47 30%, #58B9D1 100%)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                    }}
                  >
                  </div>
                  <div data-aos="fade-up" className="relative w-[86%] z-30 font-bold text-white py-[4%]">
                    <div className="flex lg:hidden flex-row justify-center flex-wrap gap-y-5 md:gap-y-2 gap-x-1 ">
                      {itemsMobile.map((item, index) => (
                        <div
                          key={index}
                          className="w-fit flex items-center bg-white rounded-r-[12px] rounded-bl-[12px] p-2 px-3 m-1"
                        >
                          <h2 className="font-lato-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#77BA47] to-[#58B9D1] text-[13.73px] sm:text-[16px] md:text-[20px]">
                            <div>{item.line1}</div>
                            <div>{item.line2}</div>
                            <div>{item.line3}</div>
                            {(item.line4) ? <div>{item.line4}</div> : null}
                          </h2>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Button 180 */}
              <div data-aos="fade-up" className="w-full lg:hidden">
                <div className="relative flex items-center justify-center mt-[8%] md:mt-[5%] mx-[6.7%]">
                  <Button180 color="green" className="font-avenir-heavy w-full h-[59px] text-[24.23px]"
                    text={
                      <>
                        <span>▶</span>
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

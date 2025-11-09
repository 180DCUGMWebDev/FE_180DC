"use client";

// Import Packages
import React from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Button180 from "@/components/elements/Button180";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { AiFillClockCircle } from "react-icons/ai";
import { useMobile } from "@/utils/hooks/MobileProvider";
import { useTablet } from "@/utils/hooks/TabletProvider";

export function Speaker() {
  const isMobile = useMobile();
  const isTablet = useTablet();
  const speakers = ["TBA", "TBA", "TBA"];

  const whatWillYouGet = [
    {
      line1: "Provided with essential skills and",
      line2: "knowledge in consulting given by",
      line3: "Experienced Consultants",
    },
    {
      line1: "After-class materials",
      line2: "implementation through workshop",
      line3: "sessions",
    },
    { line1: "Networking with like-minded", line2: "individuals" },
    {
      line1: "Special mentoring session with",
      line2: "180DC UGM team and Experts in",
      line3: "Consulting field",
    },
    {
      line1: "Opportunity to solve real business",
      line2: "problem and chance to win prizes in",
      line3: "final pitching",
    },
    { line1: "Receive E-certificate upon", line2: "completion." },
  ];

  const speakerSession = [
    {
      name: "#Session 1",
      line1: '"Get to know the Playbook:',
      line2: "Onboarding",
      line3: '& Consulting 101"',
    },
    {
      name: "#Session 2",
      line1: '"The Art of The Problem:',
      line2: 'Problem Analysis"',
    },
  ];

  return (
    <Container className="w-screen py-0 lg:py-20 min-h-fit flex items-center justify-start flex-col relative z-10 leading-none">
      <Image
        alt="awan"
        src="/img/bootcamp/awan.webp"
        width={2000}
        height={2000}
        className="absolute z-0 w-[100%] lg:w-[50%] top-0 left-0 lg:scale-x-[-1] -translate-x-[18%] -translate-y-[20%] lg:-translate-x-[30%] lg:-translate-y-[10%]"
      />
      <Image
        alt="awan"
        src="/img/bootcamp/awan.webp"
        width={2000}
        height={2000}
        className="absolute z-0 w-[100%] lg:w-[50%] top-0 right-0 lg:scale-x-[-1] translate-x-[80%] -translate-y-[15%] lg:translate-x-[45%] lg:-translate-y-[10%]"
      />
      <Image
        alt="awan"
        src="/img/bootcamp/awan.webp"
        width={2000}
        height={2000}
        className="absolute z-0 w-[100%] lg:w-[50%] bottom-0 right-0 lg:right-auto lg:left-1/2 scale-x-[-1] lg:scale-x-[1] translate-x-[60%] translate-y-[25%] lg:-translate-x-1/2 lg:translate-y-[35%]"
      />
      <Image
        alt="bintangTengahAtas"
        src="/img/bootcamp/bintangTengahAtas.webp"
        width={2000}
        height={2000}
        className="absolute hidden lg:block z-0 w-[100%] top-55 left-5"
      />
      <div className="mx-auto flex overflow-clip w-full h-fit items-center justify-center relative">
        <div className="relative w-full flex flex-col items-center justify-center">
          <Image
            data-aos="fade-up"
            alt="judulBootcamp"
            src="/img/bootcamp/judulBootcamp.webp"
            width={2000}
            height={2000}
            className="mx-auto w-[70%] sm:w-[60%] md:w-[70%] lg:w-[35%] mt-[2%] lg:mt-[8%]"
          />
          {/* Main Layout */}
          <div className="flex relative flex-col w-[95%] lg:h-fit lg:flex-row lg:gap-8 xl:gap-12 items-center lg:items-center lg:justify-start mt-[3%]">
            {/* Left Column */}
            <div className="w-full lg:w-[42%] lg:h-full flex flex-col items-center lg:justify-end lg:items-start mb-[4%] lg:mb-[10%] mt-auto">
              <Image
                data-aos="fade-right"
                alt="ring"
                src="/img/bootcamp/cincin.webp"
                width={2000}
                height={2000}
                className="absolute hidden lg:block z-10 w-[20%] bottom-0 left-0 -translate-x-[5%] translate-y-[5%]"
              />
              <div className="flex flex-col items-center justify-end">
                <Image
                  data-aos={isMobile || isTablet ? "fade-up" : "fade-right"}
                  alt="siluet speaker"
                  src="/img/bootcamp/vektorSiluet.webp"
                  width={2000}
                  height={2000}
                  className="w-[90%]"
                />
                <div data-aos="fade-up" className="relative font-lato-semibold w-full h-full lg:h-fit flex flex-row  lg:flex-col items-center p-3 gap-y-5 bg-white rounded-[13.2px] lg:rounded-[38.79px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] lg:shadow-[12px_16px_4px_0px_rgba(0,0,0,0.4)] ">
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex flex-row gap-x-10 md:gap-x-20 lg:gap-x-5 xl:gap-x-10">
                    {speakers.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white w-fit rounded-[10.47px] shadow-[0px_6.11px_3.49px_0px_rgba(0,0,0,0.25)] p-2 px-5 md:p-5 md:px-10  xl:p-5 xl:px-10 2xl:p-5 2xl:px-15"
                      >
                        <p className="">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div data-aos="fade-right" className="flex flex-col gap-y-5 py-[5%] lg:py-[10%] text-[10.3px] md:text-[27px] lg:text-[28px] xl:text-[30px] shadow-[0px_5px_9px_rgba(0,0,0,0.25)] rounded-[8.18px] lg:rounded-[26px]">
                    <p className="flex flex-row gap-x-2 px-5 lg:gap-x-10 lg:py-7 lg:mx-7 lg:border-b">
                      <BsCalendar2CheckFill/> XX November 2025
                    </p>
                    <p className="flex flex-row gap-x-2 px-5 lg:gap-x-10 lg:py-7 lg:mx-7 lg:border-b">
                      <HiLocationMarker className="text-[15px] md:text-[30px] lg:text-[20px] xl:text-[55px] 2xl:text-[65px]"/> Fakultas XXXX Universitas Gadjah Mada
                    </p>
                    <p className="flex flex-row gap-x-2 px-5 lg:gap-x-10 lg:py-7 lg:mx-7">
                      <AiFillClockCircle className="text-[10px] md:text-[25px] lg:text-[28px] xl:text-[32.75px]"/> 00:00 - 00:00
                    </p>
                  </div>
                  <div 
                    data-aos={isMobile || isTablet ? "fade-left" : "fade-right"}
                    className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-y-3 gap-x-6 pl-[6%] lg:px-[10%] py-[10%] text-[11.26px] md:text-[28px] lg:text-[32.75px] lg:shadow-[0px_5px_9px_rgba(0,0,0,0.25)] rounded-[26px] lg:mb-[3%]"
                  >
                    {isMobile ? <p>Register<br /> Yourself:</p> : <p>Register yourself through:</p>}
                    <Button180
                      color="green"
                      className="font-avenir-heavy rounded-[8.54px] lg:rounded-[24.23px] w-[100%] lg:w-[60%] py-[10px] lg:py-[17px] text-[8.54px] md:text-[25px] lg:text-[clamp(16px,1.5vw,24.23px)]"
                      text="Enroll Me"
                      href="/bootcamp/registration"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className="w-full lg:w-[58%] h-full flex flex-col-reverse lg:flex-col justify-end lg:items-end mt-auto lg:mb-[10%]">
              {/* Upper Right Column */}
              <div className="flex relative flex-col items-center justify-end w-full bg-gradient-to-r from-[#77BA47] to-transparent rounded-[13.52px] lg:rounded-[38.39px] mb-[3%] lg:shadow-[12px_16px_4px_0px_rgba(0,0,0,0.4)] p-[2.79px] lg:p-[8px]">
                <Image
                  data-aos="fade-left"
                  alt="downtree"
                  src="/img/bootcamp/downTree.webp"
                  width={2000}
                  height={2000}
                  className="absolute z-10 w-[15%] -top-1 right-1 lg:-top-5 lg:right-4"
                />
                <Image
                  data-aos="fade-left"
                  alt="ring"
                  src="/img/bootcamp/cincin.webp"
                  width={2000}
                  height={2000}
                  className="absolute hidden lg:block z-10 w-[30%] top-0 right-0 -translate-x-[40%] -translate-y-[55%] scale-x-[-1]"
                />
                <div className="relative w-full h-full rounded-[13px] lg:rounded-[36px] bg-white flex items-center justify-center">
                  <div className="flex flex-col items-start gap-y-5 lg:gap-y-10 justify-center w-[87%] py-[7%]">
                    <p 
                      data-aos={isMobile || isTablet ? "fade-up" : "fade-left"}
                      className="font-lato-black text-[15.1px] md:text-[38px] lg:text-[43.32px] text-[#77BA47] text-outline-decoration"
                    >
                      What Will YOU Get?
                    </p>
                    <div 
                      data-aos={isMobile || isTablet ? "fade-up" : "fade-left"}
                      className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-7 lg:gap-x-8 w-full"
                    >
                      {whatWillYouGet.map((item, index) => (
                        <div
                          key={index}
                          className="relative h-full bg-gradient-to-r from-[#77BA47] to-transparent rounded-[9.06px] lg:rounded-[26px] shadow-[0px_1.74px_3.14px_rgba(0,0,0,0.25)] lg:shadow-[0px_5px_9px_rgba(0,0,0,0.25)] p-[0.5px] lg:p-[1px]"
                        >
                          <div className="h-full bg-white flex flex-col items-center justify-center rounded-[8.7px] lg:rounded-[25px] py-3 lg:py-8">
                            <div className="font-lato-semibold text-center px-[8%] lg:px-0 text-black text-[9.67px] md:text-[15px] lg:text-[12px] xl:text-[16px] 2xl:text-[22px]">
                              {isMobile || isTablet ? 
                                <div>{item.line1} {item.line2} {item.line3}</div>
                                :
                                <>
                                  <div>{item.line1}</div>
                                  <div>{item.line2}</div>
                                  {item.line3 ? <div>{item.line3}</div> : null}
                                </>
                              }
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Under Right Column */}
              <div className="flex relative flex-col items-center justify-end w-full bg-gradient-to-r from-[#6DB8BB] to-transparent rounded-[13.74px] lg:rounded-[38.39px] lg:shadow-[12px_16px_4px_0px_rgba(0,0,0,0.4)] p-[2.83px] lg:p-[8px] mb-[4%] lg:mb-0">
                <Image
                  data-aos="fade-left"
                  alt="speaker"
                  src="/img/bootcamp/speaker.webp"
                  width={2000}
                  height={2000}
                  className="absolute z-10 w-[15%] top-0 right-0 -translate-x-[40%] translate-y-[30%]"
                />
                <Image
                  data-aos="fade-left"
                  alt="plsfix"
                  src="/img/bootcamp/plsfix.webp"
                  width={2000}
                  height={2000}
                  className="absolute hidden lg:block z-10 w-[30%] top-0 right-0 -translate-x-[40%] -translate-y-[40%]"
                />
                <Image
                  data-aos="fade-left"
                  alt="180dc_semicircle"
                  src="/img/bootcamp/180dc_semicircle.webp"
                  width={2000}
                  height={2000}
                  className="absolute hidden lg:block z-10 w-[35%] bottom-0 right-0 translate-y-[48%] rotate-38"
                />
                <div className="relative w-full h-full rounded-[12px] lg:rounded-[36px] bg-white flex items-center justify-center">
                  <div className="flex flex-col gap-y-3 lg:gap-y-10 items-start justify-center w-[87%] py-[7%]">
                    <p 
                      className="font-lato-black text-[15.34px] md:text-[38px] lg:text-[43.32px] text-[#A0D1D3] text-outline-decoration"
                      data-aos={isMobile || isTablet ? "fade-up" : "fade-left"}
                    >
                      SPEAKER Sessions!
                    </p>
                    <div 
                      data-aos={isMobile || isTablet ? "fade-up" : "fade-left"}
                      className="flex-1 grid grid-cols-2 gap-x-3 lg:gap-x-10 w-full"
                    >
                      {speakerSession.map((item, index) => (
                        <div key={index} className="relative bg-gradient-to-r h-full w-full from-[#77BA47] to-transparent rounded-[9px] lg:rounded-[26px] shadow-[0px_1.77px_3.19px_0px_rgba(0,0,0,0.25)] lg:shadow-[0px_5px_9px_0px_rgba(0,0,0,0.25)] p-[0.5px] lg:p-[1px]">
                          {/* Content */}
                          <div className="relative h-full bg-white flex flex-col gap-y-3 lg:gap-y-10 rounded-[9.3px] lg:rounded-[25px] py-3 lg:py-12 lg:px-10">
                            <div className="font-lato-bold pl-[10%] lg:pl-0 text-[#A0D1D3] text-[11.69px] md:text-[30px] lg:text-[33px]">
                              {item.name}
                            </div>
                            <h2 className="flex-1 flex flex-col font-lato-bold justify-center -leading-[2%] text-center text-black text-[8.51px] md:text-[20px] lg:text-[24.04px]">
                              <div>{item.line1}</div>
                              <div>{item.line2}</div>
                              {item.line3 ? <div>{item.line3}</div> : null}
                            </h2>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
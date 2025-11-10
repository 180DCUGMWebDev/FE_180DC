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
    {
      name: "#Session 3",
      line1: '"Data to Decision:"',
      line2: "Business Research",
      line3: 'Methodology"',
    },
    {
      name: "#Session 4",
      line1: '"Business Case Competition:"',
      line2: "Case Walkthrough &",
      line3: 'Deck-Making"',
    },
  ];

  return (
    <div className="relative z-10 min-h-fit w-screen bg-[#C4E2E4]">
      <Container className="relative z-10 flex min-h-fit w-screen flex-col items-center justify-start bg-[#C4E2E4] py-0 leading-none sm:!px-0 lg:!px-0 lg:py-20">
        <Image
          alt="awan"
          src="/img/bootcamp/awan.webp"
          width={2000}
          height={2000}
          className="absolute top-0 left-0 z-0 w-[100%] -translate-x-[18%] -translate-y-[20%] lg:w-[50%] lg:-translate-x-[30%] lg:-translate-y-[10%] lg:scale-x-[-1]"
        />
        <Image
          alt="awan"
          src="/img/bootcamp/awan.webp"
          width={2000}
          height={2000}
          className="absolute top-0 right-0 z-0 w-[100%] translate-x-[80%] -translate-y-[15%] lg:w-[50%] lg:translate-x-[45%] lg:-translate-y-[10%] lg:scale-x-[-1]"
        />
        <Image
          alt="awan"
          src="/img/bootcamp/awan.webp"
          width={2000}
          height={2000}
          className="absolute right-0 bottom-0 z-0 w-[100%] translate-x-[60%] translate-y-[25%] scale-x-[-1] lg:right-auto lg:left-1/2 lg:w-[50%] lg:-translate-x-1/2 lg:translate-y-[35%] lg:scale-x-[1]"
        />
        <Image
          alt="bintangTengahAtas"
          src="/img/bootcamp/bintangTengahAtas.webp"
          width={2000}
          height={2000}
          className="absolute top-55 left-5 z-0 hidden w-[100%] lg:block"
        />
        <div className="relative mx-auto flex h-fit w-full items-center justify-center overflow-clip">
          <div className="relative flex w-full flex-col items-center justify-center">
            <Image
              data-aos="fade-up"
              alt="judulBootcamp"
              src="/img/bootcamp/judulBootcamp.webp"
              width={2000}
              height={2000}
              className="mx-auto mt-[2%] w-[70%] sm:w-[60%] md:w-[70%] lg:mt-[8%] lg:w-[35%]"
            />
            {/* Main Layout */}
            <div className="relative mt-[3%] flex w-[95%] flex-col items-center lg:h-fit lg:flex-row lg:items-center lg:justify-start lg:gap-8 xl:gap-12">
              {/* Left Column */}
              <div className="mt-auto mb-[4%] flex w-full flex-col items-center lg:mb-[10%] lg:h-full lg:w-[42%] lg:items-start lg:justify-end">
                <Image
                  data-aos="fade-right"
                  alt="ring"
                  src="/img/bootcamp/cincin.webp"
                  width={2000}
                  height={2000}
                  className="absolute bottom-0 left-0 z-10 hidden w-[20%] -translate-x-[5%] translate-y-[5%] lg:block"
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
                  <div
                    data-aos="fade-up"
                    className="font-lato-semibold relative flex h-full w-full flex-row items-center gap-y-5 rounded-[13.2px] bg-white p-3 shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] lg:h-fit lg:flex-col lg:rounded-[38.79px] lg:shadow-[12px_16px_4px_0px_rgba(0,0,0,0.4)]"
                  >
                    <div className="absolute -top-7 left-1/2 flex -translate-x-1/2 flex-row gap-x-10 md:gap-x-20 lg:gap-x-5 xl:gap-x-10">
                      {speakers.map((item, index) => (
                        <div
                          key={index}
                          className="w-fit rounded-[10.47px] bg-white p-2 px-5 shadow-[0px_6.11px_3.49px_0px_rgba(0,0,0,0.25)] md:p-5 md:px-10 xl:p-5 xl:px-10 2xl:p-5 2xl:px-15"
                        >
                          <p className="">{item}</p>
                        </div>
                      ))}
                    </div>
                    <div
                      data-aos="fade-right"
                      className="flex flex-col gap-y-5 rounded-[8.18px] py-[5%] text-[10.3px] shadow-[0px_5px_9px_rgba(0,0,0,0.25)] md:text-[27px] lg:rounded-[26px] lg:py-[10%] lg:text-[28px] xl:text-[30px]"
                    >
                      <p className="flex flex-row gap-x-2 px-5 lg:mx-7 lg:gap-x-10 lg:border-b lg:py-7">
                        <BsCalendar2CheckFill /> 29 November 2025 - 3 January 2026
                      </p>
                      <p className="flex flex-row gap-x-2 px-5 lg:mx-7 lg:gap-x-10 lg:border-b lg:py-7">
                        <HiLocationMarker /> Online
                      </p>
                    </div>
                    <div
                      data-aos={isMobile || isTablet ? "fade-left" : "fade-right"}
                      className="flex flex-col gap-x-6 gap-y-3 rounded-[26px] py-[10%] pl-[6%] text-[11.26px] md:text-[28px] lg:mb-[3%] lg:flex-row lg:items-center lg:justify-center lg:px-[10%] lg:text-[32.75px] lg:shadow-[0px_5px_9px_rgba(0,0,0,0.25)]"
                    >
                      {isMobile ? (
                        <p>
                          Register
                          <br /> Yourself:
                        </p>
                      ) : (
                        <p>Register yourself through:</p>
                      )}
                      <Button180
                        color="green"
                        className="font-avenir-heavy w-[100%] rounded-[8.54px] py-[10px] text-[8.54px] md:text-[25px] lg:w-[60%] lg:rounded-[24.23px] lg:py-[17px] lg:text-[clamp(16px,1.5vw,24.23px)]"
                        text="Enroll Me"
                        href="/bootcamp/registration"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column */}
              <div className="mt-auto flex h-full w-full flex-col-reverse justify-end lg:mb-[10%] lg:w-[58%] lg:flex-col lg:items-end">
                {/* Upper Right Column */}
                <div className="relative mb-[3%] flex w-full flex-col items-center justify-end rounded-[13.52px] bg-gradient-to-r from-[#77BA47] to-transparent p-[2.79px] lg:rounded-[38.39px] lg:p-[8px] lg:shadow-[12px_16px_4px_0px_rgba(0,0,0,0.4)]">
                  <Image
                    data-aos="fade-left"
                    alt="downtree"
                    src="/img/bootcamp/downTree.webp"
                    width={2000}
                    height={2000}
                    className="absolute -top-1 right-1 z-10 w-[15%] lg:-top-5 lg:right-4"
                  />
                  <Image
                    data-aos="fade-left"
                    alt="ring"
                    src="/img/bootcamp/cincin.webp"
                    width={2000}
                    height={2000}
                    className="absolute top-0 right-0 z-10 hidden w-[30%] -translate-x-[40%] -translate-y-[55%] scale-x-[-1] lg:block"
                  />
                  <div className="relative flex h-full w-full items-center justify-center rounded-[13px] bg-white lg:rounded-[36px]">
                    <div className="flex w-[87%] flex-col items-start justify-center gap-y-5 py-[7%] lg:gap-y-10">
                      <p
                        data-aos={isMobile || isTablet ? "fade-up" : "fade-left"}
                        className="font-lato-black text-outline-decoration text-[15.1px] text-[#77BA47] md:text-[38px] lg:text-[43.32px]"
                      >
                        What Will YOU Get?
                      </p>
                      <div
                        data-aos={isMobile || isTablet ? "fade-up" : "fade-left"}
                        className="grid w-full flex-1 grid-cols-1 gap-1 lg:grid-cols-2 lg:gap-7 lg:gap-x-8"
                      >
                        {whatWillYouGet.map((item, index) => (
                          <div
                            key={index}
                            className="relative h-full rounded-[9.06px] bg-gradient-to-r from-[#77BA47] to-transparent p-[0.5px] shadow-[0px_1.74px_3.14px_rgba(0,0,0,0.25)] lg:rounded-[26px] lg:p-[1px] lg:shadow-[0px_5px_9px_rgba(0,0,0,0.25)]"
                          >
                            <div className="flex h-full flex-col items-center justify-center rounded-[8.7px] bg-white py-3 lg:rounded-[25px] lg:py-8">
                              <div className="font-lato-semibold px-[8%] text-center text-[9.67px] text-black md:text-[15px] lg:px-0 lg:text-[12px] xl:text-[16px] 2xl:text-[22px]">
                                {isMobile || isTablet ? (
                                  <div>
                                    {item.line1} {item.line2} {item.line3}
                                  </div>
                                ) : (
                                  <>
                                    <div>{item.line1}</div>
                                    <div>{item.line2}</div>
                                    {item.line3 ? <div>{item.line3}</div> : null}
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Under Right Column */}
                <div className="relative mb-[4%] flex w-full flex-col items-center justify-end rounded-[13.74px] bg-gradient-to-r from-[#6DB8BB] to-transparent p-[2.83px] lg:mb-0 lg:rounded-[38.39px] lg:p-[8px] lg:shadow-[12px_16px_4px_0px_rgba(0,0,0,0.4)]">
                  <Image
                    data-aos="fade-left"
                    alt="speaker"
                    src="/img/bootcamp/speaker.webp"
                    width={2000}
                    height={2000}
                    className="absolute top-0 right-0 z-10 w-[15%] -translate-x-[40%] translate-y-[30%]"
                  />
                  <Image
                    data-aos="fade-left"
                    alt="plsfix"
                    src="/img/bootcamp/plsfix.webp"
                    width={2000}
                    height={2000}
                    className="absolute top-0 right-0 z-10 hidden w-[30%] -translate-x-[40%] -translate-y-[40%] lg:block"
                  />
                  <Image
                    data-aos="fade-left"
                    alt="180dc_semicircle"
                    src="/img/bootcamp/180dc_semicircle.webp"
                    width={2000}
                    height={2000}
                    className="absolute right-0 bottom-0 z-10 hidden w-[35%] translate-y-[48%] rotate-38 lg:block"
                  />
                  <div className="relative flex h-full w-full items-center justify-center rounded-[12px] bg-white lg:rounded-[36px]">
                    <div className="flex w-[87%] flex-col items-start justify-center gap-y-3 py-[7%] lg:gap-y-10">
                      <p
                        className="font-lato-black text-outline-decoration text-[15.34px] text-[#A0D1D3] md:text-[38px] lg:text-[43.32px]"
                        data-aos={isMobile || isTablet ? "fade-up" : "fade-left"}
                      >
                        SPEAKER Sessions!
                      </p>
                      <div
                        data-aos={isMobile || isTablet ? "fade-up" : "fade-left"}
                        className="grid w-full flex-1 grid-cols-2 gap-x-3 gap-y-2 lg:gap-x-10"
                      >
                        {speakerSession.map((item, index) => (
                          <div
                            key={index}
                            className="relative h-full w-full rounded-[9px] bg-gradient-to-r from-[#77BA47] to-transparent p-[0.5px] shadow-[0px_1.77px_3.19px_0px_rgba(0,0,0,0.25)] lg:rounded-[26px] lg:p-[1px] lg:shadow-[0px_5px_9px_0px_rgba(0,0,0,0.25)]"
                          >
                            {/* Content */}
                            <div className="relative flex h-full flex-col gap-y-3 rounded-[9.3px] bg-white py-3 lg:gap-y-10 lg:rounded-[25px] lg:px-10 lg:py-12">
                              <div className="font-lato-bold pl-[10%] text-[11.69px] text-[#A0D1D3] md:text-[30px] lg:pl-0 lg:text-[33px]">
                                {item.name}
                              </div>
                              <h2 className="font-lato-bold -leading-[2%] flex flex-1 flex-col justify-center text-center text-[8.51px] text-black md:text-[20px] lg:text-[24.04px]">
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
    </div>
  );
}

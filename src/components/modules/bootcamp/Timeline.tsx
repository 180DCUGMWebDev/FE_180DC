"use client";

// Import Packages
import React from "react";
import Image from "next/image";
import TimelineCard from "@/components/elements/Bootcamp/TimelineCard";
import { timelineBootcampData } from "@/components/data/timelineBootcamp";
import { useMobile } from "@/utils/hooks/MobileProvider";
import Container from "@/components/layout/Container";


// Exported Component
export function Timeline() {
  // State
  const isMobile = useMobile();

  const totalHeight = isMobile 
    ? (timelineBootcampData.length - 1) * 200 
    : (timelineBootcampData.length - 1) * 130;

  // Page
  return (
    <div className="relative w-screen min-h-fit z-10">
      <Container className="w-screen py-0 lg:py-20 min-h-fit flex items-center justify-start flex-col relative leading-none">
        <div className="w-full">
          <div className="lg:h-full w-full lg:py-8">
            <div className="mx-auto flex w-full h-full flex-col justify-start lg:justify-center relative">
              <div className="relative w-full flex flex-col">
                <div className="relative flex flex-col w-full lg:h-full lg:pb-0 gap-7 lg:gap-8 xl:gap-12 items-center lg:items-center lg:mt-0">
                  <Image
                    data-aos={isMobile ? "fade-up" : "fade-left"}
                    alt="bootcampTimeline"
                    src="/img/bootcamp/bootcampTimeline.webp"
                    width={2000}
                    height={2000}
                    className="mx-auto z-10 w-[70%] xl:w-[35%] xl:absolute xl:z-30  xl:top-50 xl:right-0 xl:translate-x-[8%] xl:translate-y-[80%] xl:rotate-15"
                  />
                  <Image
                    data-aos="fade-up"
                    alt="bootcampTimelineOval"
                    src="/img/bootcamp/atasBootcampTimeline.webp"
                    width={2000}
                    height={2000}
                    className="hidden xl:block lg:absolute z-40 w-[40%] -translate-y-[70%]"
                  />
                  <div className="flex relative flex-col w-[95%] items-center lg:justify-center p-[12.14px] mt-[5px]">
                    <div 
                      data-aos="fade-up"
                      className="hidden lg:block lg:absolute h-full w-full z-10 rounded-[38.73px]" 
                      style={{ background: 'radial-gradient(ellipse at center, #77BA47 0%, #77BA47 30%, #58B9D1 100%)'}}
                    >
                    </div>
                    <Image
                      data-aos="fade-up"
                      alt="down tree"
                      src="/img/bootcamp/downTree.webp"
                      width={2000}
                      height={2000}
                      className="absolute z-20 w-[18%] top-0 right-0 translate-x-[18%] -translate-y-[80%] lg:left-0 lg:-translate-x-[52%] lg:-translate-y-[90%] lg:-rotate-70"
                    />
                    <Image
                      data-aos="fade-left"
                      alt="180 PLSFIX"
                      src="/img/bootcamp/180PlsFix.webp"
                      width={2000}
                      height={2000}
                      className="hidden lg:block absolute z-30 w-[24%] top-0 right-0 -translate-x-[2%] -translate-y-[40%]"
                    />
                    <Image
                      data-aos="fade-right"
                      alt="PLSFIX"
                      src="/img/bootcamp/plsfix.webp"
                      width={2000}
                      height={2000}
                      className="hidden lg:block absolute z-30 w-[24%] bottom-0 left-0 -translate-x-[11%] translate-y-[70%]"
                    />
                    <Image
                      data-aos={isMobile ? "fade-right" : "fade-left"}
                      alt="up tree"
                      src="/img/bootcamp/upTree.webp"
                      width={2000}
                      height={2000}
                      className="absolute z-30 w-[30%] lg:w-[18%] bottom-0 left-0 -translate-x-[10%] translate-y-[90%] lg:left-auto lg:right-0 lg:bottom-0 lg:-translate-x-75 lg:translate-y-80 lg:rotate-5"
                    />
                    <Image
                      data-aos="fade-left"
                      alt="180 DC Circle"
                      src="/img/bootcamp/180DCCircle.webp"
                      width={2000}
                      height={2000}
                      className="absolute z-30 w-[65%] lg:w-[28%] bottom-0 right-0 translate-x-[38%] translate-y-[70%] lg:bottom-0 lg:translate-x-7 lg:translate-y-50 lg:-rotate-15"
                    />
                    <Image
                      alt="awan"
                      src="/img/bootcamp/awan.webp"
                      width={2000}
                      height={2000}
                      className="absolute -z-1 w-[100%] lg:w-[50%] bottom-0 right-0 scale-x-[-1] lg:scale-x-[1] translate-x-[60%] translate-y-[50%] lg:-translate-x-[20%] lg:translate-y-[82%]"
                    />
                    <Image
                      alt="awan"
                      src="/img/bootcamp/awan.webp"
                      width={2000}
                      height={2000}
                      className="absolute z-0 w-[100%] lg:hidden lg:w-[50%] top-0 left-0 lg:left-1/2 scale-x-[-1] -translate-x-[60%] -translate-y-[80%] lg:-translate-x-1/2 lg:-translate-y-[75%]"
                    />
                    <Image
                      alt="awan desktop"
                      src="/img/bootcamp/awan.webp"
                      width={2000}
                      height={2000}
                      className="absolute z-0 w-[100%] lg:w-[50%] bottom-0 right-0 lg:right-auto lg:left-0 scale-x-[-1] lg:scale-x-[1] translate-x-[60%] lg:-translate-x-[42%] translate-y-[50%] lg:translate-y-[45%]"
                    />
                    <Image
                      alt="bintangTengahTengah"
                      src="/img/bootcamp/bintangTengahTengah.webp"
                      width={2000}
                      height={2000}
                      className="hidden xl:block absolute z-40 w-[12%] top-0 left-0 -translate-x-[25%] -translate-y-[240%]"
                    />
                    <div className="w-full h-full bg-[#C4E2E4] lg:bg-[#E8E8E8] lg:px-[3%] lg:py-[3%] lg:z-20 lg:rounded-[35px]">
                      <div className="flex flex-col relative gap-[37.68px] lg:gap-[79.23px]">
                        {timelineBootcampData.map((timeline, index) => (
                          <TimelineCard
                            key={index}
                            period={timeline.period}
                            description={timeline.description}
                            isLast={index === timelineBootcampData.length - 1}
                            index={index}
                            className="h-fit"
                          />
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
      <Image
        data-aos="fade-left"
        alt="180 PLSFIX"
        src="/img/bootcamp/180PlsFix.webp"
        width={2000}
        height={2000}
        className="lg:hidden absolute z-30 w-[60%] -rotate-10 bottom-0 left-0  translate-y-[30%]"
      />
      <Image
        alt="bg bootcamp"
        src="/img/bootcamp/backgroundTengahMobile.webp"
        width={450}
        height={735}
        className="h-full w-full object-contain lg:hidden"
      />
      <Image
        alt="bg bootcamp"
        src="/img/bootcamp/backgroundTengahDesktop.webp"
        width={450}
        height={735}
        className="hidden h-full w-full object-contain lg:block"
      />
    </div>
  );
}

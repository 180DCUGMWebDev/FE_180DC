"use client";

// Import Packages
import React from "react";
import Image from "next/image";
import TimelineCard from "@/components/elements/Bootcamp/TimelineCard";
import { timelineBootcampData } from "@/data/timelineBootcamp";
import { useMobile } from "@/hooks/MobileProvider";
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
    <div className="relative z-10 min-h-fit w-screen bg-[#C4E2E4]">
      <Container className="relative flex min-h-fit w-screen flex-col items-center justify-start py-0 leading-none lg:py-20">
        <div className="w-full">
          <div className="w-full lg:h-full lg:py-8">
            <div className="relative mx-auto flex h-full w-full flex-col justify-start lg:justify-center">
              <div className="relative flex w-full flex-col">
                <div className="relative flex w-full flex-col items-center gap-7 lg:mt-0 lg:h-full lg:items-center lg:gap-8 lg:pb-0 xl:gap-12">
                  <Image
                    data-aos={isMobile ? "fade-up" : "fade-left"}
                    alt="bootcampTimeline"
                    src="/img/bootcamp/bootcampTimeline.webp"
                    width={2000}
                    height={2000}
                    className="z-10 mx-auto w-[70%] xl:absolute xl:top-50 xl:right-0 xl:z-30 xl:w-[35%] xl:translate-x-[8%] xl:translate-y-[80%] xl:rotate-15"
                  />
                  <Image
                    data-aos="fade-up"
                    alt="bootcampTimelineOval"
                    src="/img/bootcamp/atasBootcampTimeline.webp"
                    width={2000}
                    height={2000}
                    className="z-40 hidden w-[40%] -translate-y-[70%] lg:absolute xl:block"
                  />
                  <div className="relative mt-[5px] flex w-[95%] flex-col items-center p-[12.14px] lg:justify-center">
                    <div
                      data-aos="fade-up"
                      className="z-10 hidden h-full w-full rounded-[38.73px] bg-gradient-to-b from-[#73B743] to-[#28C0D7] lg:absolute lg:block"
                    ></div>
                    <Image
                      data-aos="fade-up"
                      alt="down tree"
                      src="/img/bootcamp/downTree.webp"
                      width={2000}
                      height={2000}
                      className="absolute top-0 right-0 z-20 w-[18%] translate-x-[18%] -translate-y-[80%] lg:left-0 lg:-translate-x-[52%] lg:-translate-y-[90%] lg:-rotate-70"
                    />
                    <Image
                      data-aos="fade-left"
                      alt="180 PLSFIX"
                      src="/img/bootcamp/180PlsFix.webp"
                      width={2000}
                      height={2000}
                      className="absolute top-0 right-0 z-30 hidden w-[24%] -translate-x-[2%] -translate-y-[40%] lg:block"
                    />
                    <Image
                      data-aos="fade-right"
                      alt="PLSFIX"
                      src="/img/bootcamp/plsfix.webp"
                      width={2000}
                      height={2000}
                      className="absolute bottom-0 left-0 z-30 hidden w-[24%] -translate-x-[11%] translate-y-[70%] lg:block"
                    />
                    <Image
                      data-aos={isMobile ? "fade-right" : "fade-left"}
                      alt="up tree"
                      src="/img/bootcamp/upTree.webp"
                      width={2000}
                      height={2000}
                      className="absolute bottom-0 left-0 z-30 w-[30%] -translate-x-[10%] translate-y-[90%] lg:right-0 lg:bottom-0 lg:left-auto lg:w-[18%] lg:-translate-x-75 lg:translate-y-80 lg:rotate-5"
                    />
                    <Image
                      data-aos="fade-left"
                      alt="180 DC Circle"
                      src="/img/bootcamp/180DCCircle.webp"
                      width={2000}
                      height={2000}
                      className="absolute right-0 bottom-0 z-30 w-[65%] translate-x-[38%] translate-y-[70%] lg:bottom-0 lg:w-[28%] lg:translate-x-7 lg:translate-y-50 lg:-rotate-15"
                    />
                    <Image
                      alt="awan"
                      src="/img/bootcamp/awan.webp"
                      width={2000}
                      height={2000}
                      className="absolute right-0 bottom-0 -z-1 w-[100%] translate-x-[60%] translate-y-[50%] scale-x-[-1] lg:w-[50%] lg:-translate-x-[20%] lg:translate-y-[82%] lg:scale-x-[1]"
                    />
                    <Image
                      alt="awan"
                      src="/img/bootcamp/awan.webp"
                      width={2000}
                      height={2000}
                      className="absolute top-0 left-0 z-0 w-[100%] -translate-x-[60%] -translate-y-[80%] scale-x-[-1] lg:left-1/2 lg:hidden lg:w-[50%] lg:-translate-x-1/2 lg:-translate-y-[75%]"
                    />
                    <Image
                      alt="awan desktop"
                      src="/img/bootcamp/awan.webp"
                      width={2000}
                      height={2000}
                      className="absolute right-0 bottom-0 z-0 w-[100%] translate-x-[60%] translate-y-[50%] scale-x-[-1] lg:right-auto lg:left-0 lg:w-[50%] lg:-translate-x-[42%] lg:translate-y-[45%] lg:scale-x-[1]"
                    />
                    <Image
                      alt="bintangTengahTengah"
                      src="/img/bootcamp/bintangTengahTengah.webp"
                      width={2000}
                      height={2000}
                      className="absolute top-0 left-0 z-40 hidden w-[12%] -translate-x-[25%] -translate-y-[240%] xl:block"
                    />
                    <div className="h-full w-full bg-[#C4E2E4] lg:z-20 lg:rounded-[35px] lg:bg-[#E8E8E8] lg:px-[3%] lg:py-[3%]">
                      <div className="relative flex flex-col gap-[37.68px] lg:gap-[79.23px]">
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
        className="absolute bottom-0 left-0 z-30 w-[60%] translate-y-[30%] -rotate-10 lg:hidden"
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

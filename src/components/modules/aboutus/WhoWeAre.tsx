"use client";

// Import Packages
import { FaPlay } from "react-icons/fa";
import React, { useState, useEffect } from "react";

// Import Components
import ImageAction from "@/components/elements/ImageAction";
import Container from "@/components/layout/Container";
import { NavbarResolver } from "@/components/elements/Navbar/NavbarResolver";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function WhoWeAre() {
  // Video Ref
  const [isPlaying, setIsPlaying] = useState(true);
  useEffect(() => {
    if (!isPlaying) {
      const videoElement = document.getElementById("vidRef") as HTMLVideoElement;
      videoElement.play();
    } else {
      const videoElement = document.getElementById("vidRef") as HTMLVideoElement;
      videoElement.pause();
    }
  }, [isPlaying, setIsPlaying]);

  const handlePlayVideo = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  // Contents
  const content = {
    title: "Who Are We?",
    weDesc:
      "180 DC UGM is the first Indonesian branch of the world's largest consultancy for non-profit and social enterprises. Being at the very forefront of desirable change, 180 DC UGM has helped various entities in overcoming the challenges they face while further broadening its reach.",
    clients: "20+",
    clientsTitle: "Clients",
    clientsDesc:
      "Successfully assisted both national and international enterprises to tackle their problems and reach their respective goals.",
  };

  const contentTag = (
    <>
      {/* Who Are We? Title */}
      <div className="flex w-full items-center justify-center">
        <h1 className="font-avenir-black text-center text-[26px]/[32px] text-green-300 lg:text-[48px]/[46px] lg:text-green-300 2xl:text-[52px]/[50px]">
          {content.title}
        </h1>
      </div>
      {/* Who Are We? Content */}
      <div className="flex w-full items-center justify-center">
        <p className="font-lato-regular w-full text-center text-sm leading-[15px] text-gray-100 lg:text-2xl lg:leading-8 2xl:text-[30.7px] 2xl:leading-[41px]">
          {content.weDesc}
        </p>
      </div>
    </>
  );

  const videoButton = (
    <>
      {/* Button Desktop */}
      <div className="bg-black-300 absolute -right-[10px] -bottom-[20px] z-20 h-[125px] w-[125px] rounded-full rounded-br-none p-[12px] max-lg:hidden 2xl:h-[100px] 2xl:w-[100px] 2xl:p-[9.2px]">
        <div className="hover:cursor-pointer" onClick={() => handlePlayVideo()}>
          <div className="h-full w-full rounded-full bg-white p-[19px] pl-[29px] 2xl:p-[15.36px] 2xl:pl-[23px]">
            <FaPlay className="h-full w-full text-green-300" />
          </div>
        </div>
      </div>
      {/* Button Mobile */}
      <div className="relative h-full w-full lg:hidden">
        <div
          className={
            "absolute z-15 flex h-full w-full items-center justify-center transition duration-600 ease-in-out hover:cursor-pointer " +
            (!isPlaying ? "bg-transparent" : "bg-black-300/50")
          }
          onClick={() => handlePlayVideo()}
        >
          <div className="flex h-[50px] w-[50px] items-center justify-center">
            <FaPlay
              className={
                "text-gray-100 transition-all duration-400 " +
                (!isPlaying ? "h-0 w-0" : "h-full w-full")
              }
              onClick={() => handlePlayVideo()}
            />
          </div>
        </div>
      </div>
    </>
  );

  let videoTag = (
    <>
      {/* Background Content */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden rounded-[12px] lg:rounded-[19px] 2xl:rounded-[15.36px]">
        <video id="vidRef" playsInline loop className="h-full w-full object-cover">
          <source
            src="https://utfs.io/f/7156b8ed-3306-4165-9cd7-c167defff825-brzyqj.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      {videoButton}
    </>
  );

  // Page
  return (
    <Container color="dark">
      <NavbarResolver />
      {/* Content */}
      <div className="flex h-fit w-full items-center justify-center max-lg:py-[48px]">
        <div className="flex flex-col items-center justify-center px-[20px] 2xl:w-[1536px] 2xl:px-[80px]">
          {/* Title & Description - Desktop Only */}
          <div className="hidden w-full flex-col items-center gap-[28px] py-6 lg:flex">
            {contentTag}
          </div>

          <div className="relative flex h-fit w-full flex-col justify-center gap-6 lg:mt-[20px] lg:gap-6 2xl:gap-4">
            {/* Mobile Layout */}
            <div className="flex flex-col gap-6 lg:hidden">
              {/* Title & Description - Mobile */}
              <div className="flex w-full flex-col items-center gap-4">{contentTag}</div>

              {/* Video - Mobile */}
              <div className="relative h-[220px] w-full overflow-hidden rounded-[12px] max-lg:hover:cursor-pointer sm:h-[280px]">
                {videoTag}
              </div>

              {/* Stats Card - Mobile */}
              <div className="group relative flex h-[160px] w-full flex-col items-start justify-between rounded-[12px] p-4 text-gray-100">
                {/* Background */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-[12px]">
                  <ImageAction
                    src="/img/aboutus/WhatWeAre/left_content.png"
                    alt="180dc who we are leftcontent"
                    heightPtg="100%"
                    className="h-full w-full object-cover duration-500 group-hover:scale-[1.2]"
                  />
                </div>
                {/* Content */}
                <div className="font-avenir-black relative z-10 flex w-full flex-col">
                  <h1 className="text-[48px]/[48px]">{content.clients}</h1>
                  <h1 className="ml-1 text-[16px]/[20px]">{content.clientsTitle}</h1>
                </div>
                <div className="font-lato-regular relative z-10 flex h-full w-full items-end">
                  <p className="ml-1 text-[14px]/[18px]">{content.clientsDesc}</p>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden h-[320px] w-full gap-12 lg:flex 2xl:h-[280px] 2xl:gap-16">
              {/* Stats Card - Desktop */}
              <div className="group relative flex h-full w-[27%] flex-col items-start justify-between rounded-lg p-6 text-gray-100 2xl:p-5">
                {/* Background */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-[10px]">
                  <ImageAction
                    src="/img/aboutus/WhatWeAre/left_content.png"
                    alt="180dc who we are leftcontent"
                    heightPtg="100%"
                    className="w-full object-cover duration-500 group-hover:scale-[1.2]"
                  />
                </div>
                {/* Content */}
                <div className="font-avenir-black relative z-10 flex w-full flex-col">
                  <h1 className="text-7xl leading-tight 2xl:text-6xl 2xl:leading-tight">
                    {content.clients}
                  </h1>
                  <h1 className="ml-1 text-2xl leading-tight 2xl:text-xl 2xl:leading-tight">
                    {content.clientsTitle}
                  </h1>
                </div>
                <div className="font-lato-regular relative z-10 flex h-full w-full items-end">
                  <p className="ml-1 text-lg leading-snug 2xl:text-base 2xl:leading-snug">
                    {content.clientsDesc}
                  </p>
                </div>
              </div>

              {/* Video - Desktop */}
              <div className="relative flex h-full w-[73%] items-start rounded-[10px]">
                {videoTag}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

"use client";

// Import Packages
import { FaPlay } from "react-icons/fa";
import React, { useState, useEffect } from "react";

// Import Components
import ImageAction from "@/components/elements/ImageAction";
import Container from "@/components/layout/Container";

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
      <div className="font-avenir-black flex w-full items-center text-[21px] text-gray-100 lg:w-[27%] lg:text-[48px] 2xl:text-[40px]">
        <h1>{content.title}</h1>
      </div>
      {/* Who Are We? Content */}
      <div className="flex h-full w-full items-center lg:w-[73%]">
        <p className="font-lato-regular text-justify text-[11px]/[10px] text-gray-100 lg:text-[24px]/[32px] 2xl:text-[20px]/[26px]">
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
          <div className="flex h-[40px] w-[40px] items-center justify-center">
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

      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden rounded-[26px] lg:rounded-[19px] 2xl:rounded-[15.36px]">
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
    <Container color="dark" className="relative">
      {/* Content */}
      <div className="flex h-fit w-full items-center justify-center">
        <div className="flex h-fit w-full flex-col items-center justify-center px-[23px] lg:h-full lg:px-[50px] lg:pt-[130px] lg:pb-[54px] 2xl:w-[1536px]">
          <div className="flex h-fit w-full flex-col justify-center gap-[20px] py-[40px] lg:h-full lg:py-0 2xl:h-fit 2xl:gap-[16px]">
            <div className="hidden h-fit w-full gap-[67px] lg:flex 2xl:gap-[72px]">
              {contentTag}
            </div>
            {/* Images / All for Mobile */}
            <div className="flex h-fit w-full flex-wrap gap-[15px] lg:h-[410px] lg:max-h-[499px] lg:flex-row lg:flex-nowrap lg:gap-[67px] 2xl:h-[350px] 2xl:gap-[72px]">
              <div className="group relative flex h-[131px] w-[131px] flex-col items-start rounded-[10px] p-[8px] pb-[15px] text-gray-100 max-lg:grow lg:h-full lg:w-[27%] 2xl:gap-[40px] 2xl:p-[30px] 2xl:pb-[25px]">
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
                <div className="font-avenir-black z-2 flex w-full flex-col">
                  <h1 className="text-[38px]/[38px] lg:text-[120px]/[100px] 2xl:text-[110px]/[100px]">
                    {content.clients}
                  </h1>
                  <h1 className="ml-[4px] text-[11px]/[6px] lg:text-[32px]/[28px] 2xl:text-[36px]/[22px]">
                    {content.clientsTitle}
                  </h1>
                </div>
                <div className="font-lato-regular z-2 flex h-full w-full items-end">
                  <p className="ml-[4px] text-[11px]/[11px] lg:text-[20px]/[22px] 2xl:text-[19px]/[20px]">
                    {content.clientsDesc}
                  </p>
                </div>
              </div>
              {/* Mobile Content Position */}
              <div className="flex h-[98px] w-[150px] grow flex-wrap lg:hidden">{contentTag}</div>
              {/* Video */}
              <div className="relative h-[80px] w-full max-lg:hover:cursor-pointer min-[300px]:h-[250px] md:h-[300px] lg:flex lg:h-full lg:w-[73%] lg:items-start lg:rounded-[10px]">
                {videoTag}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

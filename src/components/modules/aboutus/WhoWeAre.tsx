"use client";

// Import Packages
import { FaPlay } from "react-icons/fa";
import React, { useState, useEffect } from "react";

// Import Components
import ImageAction from "@/components/elements/ImageAction";

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
      "180 DC UGM is the first Indonesian branch of the world’s largest consultancy for non-profit and social enterprises. Being at the very forefront of desirable change, 180 DC UGM has helped various entities in overcoming the challenges they face while further broadening its reach.",
    clients: "20+",
    clientsTitle: "Clients",
    clientsDesc:
      "Successfully assisted both national and international enterprises to tackle their problems and reach their respective goals.",
  };

  const contentTag = (
    <>
      {/* Who Are We? Title */}
      <div className="font-avenir-black flex w-full items-center text-[5.5vw] text-gray-100 lg:w-[27%] lg:text-[3vw] 2xl:text-[46px]">
        <h1>{content.title}</h1>
      </div>
      {/* Who Are We? Content */}
      <div className="flex h-full w-full items-center lg:w-[73%]">
        <p className="font-lato-regular text-justify text-[3vw]/[2.7vw] text-gray-100 lg:text-[1.5vw]/[2vw] 2xl:text-[23.1px]/[30.8px]">
          {content.weDesc}
        </p>
      </div>
    </>
  );

  const videoButton = (
    <>
      {/* Button Desktop */}
      <div className="bg-black-300 absolute -right-[10px] -bottom-[20px] h-[6.5vw] w-[6.5vw] rounded-full rounded-br-none p-[0.6vw] max-lg:hidden 2xl:h-[100px] 2xl:w-[100px] 2xl:p-[9.2px]">
        <div className="hover:cursor-pointer" onClick={() => handlePlayVideo()}>
          <div className="bg-light-white h-full w-full rounded-full p-[1vw] pl-[1.5vw] 2xl:p-[15.36px] 2xl:pl-[23px]">
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
          <div className="flex h-[4vmax] w-[4vmax] items-center justify-center">
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

      <div className="absolute top-0 left-0 -z-1 flex h-full w-full items-center justify-center overflow-clip rounded-[7vw] lg:rounded-[1vw] 2xl:rounded-[15.36px]">
        <video id="vidRef" playsInline loop>
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
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex h-fit min-h-screen w-full items-center justify-center">
        <div className="flex h-fit w-full flex-col items-center justify-center px-[6vw] lg:h-full lg:px-[50px] lg:pt-[12%] lg:pb-[5%] 2xl:w-[1536px]">
          <div className="flex h-fit w-full flex-col justify-center gap-[2vmax] py-[6vh] lg:h-full lg:py-0 2xl:h-fit 2xl:gap-[16px]">
            <div className="hidden h-fit w-full gap-[3.5vw] lg:flex 2xl:gap-[72px]">
              {contentTag}
            </div>
            {/* Images / All for Mobile */}
            <div className="flex h-fit w-full flex-wrap gap-[4vw] lg:h-[38vh] lg:max-h-[26vw] lg:flex-row lg:flex-nowrap lg:gap-[3.5vw] 2xl:h-[350px] 2xl:gap-[72px]">
              <div className="group relative flex h-[35vw] w-[35vw] flex-col items-start rounded-[10px] p-[2vw] pb-[15px] text-gray-100 max-lg:grow lg:h-full lg:w-[27%] 2xl:gap-[40px] 2xl:p-[30px] 2xl:pb-[25px]">
                {/* Background */}
                <div className="absolute top-0 left-0 -z-1 h-full w-full overflow-clip rounded-[10px]">
                  <ImageAction
                    src="/img/aboutus/WhatWeAre/left_content.png"
                    alt="180dc who we are leftcontent"
                    className="duration-500 group-hover:scale-[1.2]"
                  />
                </div>
                {/* Content */}
                <div className="font-avenir-black flex w-full flex-col">
                  <h1 className="text-[10vw]/[10vw] lg:text-[8vw]/[6vw] 2xl:text-[152px]/[124px]">
                    {content.clients}
                  </h1>
                  <h1 className="ml-[4px] text-[3vw]/[1.5vw] lg:text-[2vw]/[1.6vw] 2xl:text-[42px]/[24px]">
                    {content.clientsTitle}
                  </h1>
                </div>
                <div className="font-lato-regular flex h-full w-full items-end">
                  <p className="ml-[4px] text-[3vw]/[2.8vw] lg:text-[1.3vw]/[1.3vw] 2xl:text-[23.1px]/[23.1px]">
                    {content.clientsDesc}
                  </p>
                </div>
              </div>
              {/* Mobile Content Position */}
              <div className="flex h-[26vw] w-[40vw] grow flex-wrap lg:hidden">{contentTag}</div>
              {/* Video */}
              <div className="relative h-[12vh] w-full max-lg:hover:cursor-pointer min-[300px]:h-[25vmax] md:h-[30vmax] lg:flex lg:h-full lg:w-[73%] lg:items-start lg:rounded-[10px]">
                {videoTag}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

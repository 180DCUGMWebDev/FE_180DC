// Import Packages
"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Configs
import { createBackground } from "@/config/Functions";

const images = [
  "/img/store/fbank/PREVIEW_A.png",
  "/img/store/fbank/PREVIEW_A2.png",
  "/img/store/fbank/PREVIEW_A.png",
  "/img/store/fbank/PREVIEW_A.png",
  "/img/store/fbank/PREVIEW_A.png",
];

export default function PreviewFbanks() {
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex h-fit w-full items-center justify-center max-lg:py-[8vh] lg:h-screen">
        {/* Desktop */}
        <div className="relative flex flex-col items-center justify-center max-lg:hidden">
          <div className="w-full">
            <h1 className="z-1 absolute bottom-[19vw] right-[17vw] bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] bg-clip-text font-avenirRegular text-[15.625vw] text-transparent">
              {"Preview"}
            </h1>
          </div>
          <div className="w-full">
            <h1 className="z-1 absolute left-[17vw] top-[17vw] bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] bg-clip-text font-avenirRegular text-[15.625vw] text-transparent">
              {"Preview"}
            </h1>
          </div>

          <div className="z-[2] rounded-3xl bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] p-[0.4vw]">
            <div className="rounded-2xl bg-white">
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true}
                className="h-[28.594vw] w-[50.833vw] rounded-2xl"
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="h-full w-full rounded-2xl object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="z-[2] mb-[10vw] flex w-full flex-col items-center lg:hidden">
          <div className="relative h-[10.556vw] w-[85vw] pb-[10vw] text-end">
            <h1 className="bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] bg-clip-text font-avenirHeavy text-[9.722vw] text-transparent">
              {"Preview"}
            </h1>
          </div>
          <div className="z-[2] rounded-3xl bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] p-[1vw]">
            <div className="rounded-2xl bg-white">
              <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation={true}
                className="h-[48vw] w-[85vw] rounded-2xl"
              >
                {images.map((src, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="h-full w-full rounded-2xl object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="relative h-[10.556vw] w-[85vw] pb-[10vw] text-start">
            <div className="bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] bg-clip-text pt-[2vw] font-avenirRegular text-[3.333vw]/[3vw] text-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

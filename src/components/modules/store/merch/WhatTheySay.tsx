"use client";

import { createBackground } from "@/config/Functions";
import React from "react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./merch.css";
import testimonies from "./testimonies";

const WhatTheySay = () => {
  return (
    <section className="relative w-full bg-[url('/img/store/merch/bg-wts.png')] object-cover py-[6vw] text-white">
      <Image
        alt=""
        src="/img/store/merch/vignet-l.png"
        width={2000}
        height={2000}
        className="absolute top-0 left-0 z-99 h-full w-auto max-lg:hidden"
      />
      <Image
        alt=""
        src="/img/store/merch/vignet-r.png"
        width={2000}
        height={2000}
        className="absolute top-0 right-0 z-99 h-full w-auto max-lg:hidden"
      />
      <div className="w-full justify-center max-lg:flex lg:px-[10vw]">
        <span className="font-avenir-black bg-[linear-gradient(90deg,#6FAA26_7%,#58B9D1_85%)] bg-clip-text text-[6.7vw] text-transparent lg:text-[3vw]">
          What did they say?
        </span>
      </div>
      <div className="mt-[5vw] w-full flex-col items-center justify-center lg:mt-[2vw]">
        <Swiper
          effect="slide"
          slidesPerView={1.6}
          freeMode
          loop
          spaceBetween={"2vw"}
          centeredSlides
          pagination={{
            clickable: true,
          }}
          speed={4000}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 1000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            waitForTransition: true,
            stopOnLastSlide: false,
          }}
          className="swipper-wrapper relative flex w-full items-center justify-center gap-[2vw] overflow-visible"
        >
          {testimonies.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="relative flex h-full w-full items-center justify-center">
                <div className="bg-brand-primary flex h-[75vw] w-[92%] max-w-[1200px] flex-col items-center justify-center gap-[1vw] rounded-2xl max-lg:justify-between max-lg:py-[5vw] max-md:text-[10px] md:h-[58vw] md:text-base lg:h-fit lg:w-[98%] lg:gap-[1.5vw] lg:pt-[5vw] lg:pb-[0]">
                  <i className="w-[80%] text-center max-lg:mt-[10vw]">&quot;{item.text}&quot;</i>
                  <div className="relative flex h-auto w-[75%] flex-row gap-[2%] lg:mt-[5%] lg:mb-[5%] lg:w-[90%]">
                    <div className="relative flex aspect-square w-[12%] items-center justify-center lg:w-[35px] xl:w-[40px]">
                      <div className="aspect-h-1 aspect-w-1 w-full rounded-[50%]">
                        {item.profile && <Image alt="" src={item.profile} fill />}
                      </div>
                    </div>

                    <div className="relative flex w-[85%] flex-col justify-center text-left max-md:text-[8px] md:text-[13px] md:leading-snug lg:text-[13px]">
                      <b>{item.name}</b>
                      {item.role}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhatTheySay;

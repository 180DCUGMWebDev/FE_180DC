"use client";

import React from "react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./merch.css";
import products from "./products";
import Button180 from "@/components/elements/Button180";

const LayoutMerch = () => {
  return (
    <section className="relative w-full bg-[url('/img/store/casebook/bgBlackPatterned1.png')] object-cover py-[6vw] max-lg:py-[12vw]">
      {/* Title */}
      <div className="flex w-full flex-col items-center justify-center px-[6vw] lg:px-[10vw]">
        <span className="text-[3.333vw] font-bold text-white max-lg:text-[6vw]">Shop Now!</span>
        <Image
          src="/img/store/casebook/BlueSpark.png"
          alt="180DC UGM Casebook"
          width={2000}
          height={2000}
          className="absolute -top-[2vw] -right-[1vw] z-0 w-[14.008vw] object-cover max-lg:hidden"
        />
      </div>

      {/* Product Carousel */}
      <div className="mt-[5vw] flex w-full items-center justify-center max-lg:mt-[8vw] lg:mt-[2vw]">
        <Swiper
          effect="slide"
          loop
          freeMode
          centeredSlides
          spaceBetween={"2vw"}
          speed={3000}
          pagination={{ clickable: false }}
          modules={[Autoplay]}
          autoplay={{
            delay: 50,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            waitForTransition: false,
            stopOnLastSlide: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3.6, // default for desktop
            },
          }}
          className="relative flex w-full items-center justify-center gap-[2vw] overflow-visible px-[4vw]"
        >
          {products.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="flex h-[30vw] w-[92%] max-w-[1200px] flex-col gap-[1vw] rounded-2xl bg-white p-[2vw] shadow-lg max-lg:h-auto max-lg:p-[4vw]">
                {/* Product Image */}
                <div className="flex h-full w-full items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={800}
                    height={800}
                    className="rounded-md object-cover max-lg:h-auto max-lg:w-full"
                  />
                </div>
                {/* Product Name */}
                <b className="text-black-300 w-[80%] text-left text-lg max-lg:mt-[4vw] max-lg:text-[3.2vw]">
                  {item.name}
                </b>
                {/* Product Price */}
                <p className="w-[80%] text-left text-lg font-semibold text-green-600 max-lg:text-[4vw]">
                  {item.price}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Buy Button */}
      <div className="flex h-full w-full flex-col items-center justify-center py-[15vh] max-lg:px-[4vw] max-lg:py-[12vw] lg:gap-[16px] lg:p-[100px] 2xl:py-[110px]">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScOuHT1hdVMUeLNjxFaLC8zAcgERZnL5b2qZgjcWBdaRSi4NQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-[22vw] items-center justify-center rounded-full bg-green-600 py-[2vw] text-[3.3vw] text-white transition-all duration-300 hover:bg-green-700 max-lg:mt-[7vw] max-lg:w-[60vw] max-lg:py-[3.5vw] max-lg:text-[4.2vw] lg:mt-[0.5vw]! lg:w-[11vw] lg:py-[9px] lg:text-[1.1vw] 2xl:w-[170px] 2xl:text-[17px]"
        >
          Buy Now
        </a>
      </div>
    </section>
  );
};

export default LayoutMerch;

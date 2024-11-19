"use client";

import React from "react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./merch.css"; 
import products from "./products"; 
import Button from "@/components/global/Button";

const LayoutMerch = () => {
    return (
        <section className="relative w-full bg-[url('/img/store/casebook/bgBlackPatterned1.png')] object-cover py-[6vw]">
            <div className="flex w-full flex-col items-center justify-center lg:px-[10vw]">
                <span className="font-bold text-[3.333vw] text-white">
                    Shop Now!
                </span>
                <Image
                    src="/img/store/casebook/BlueSpark.png"
                    alt="180DC UGM Casebook"
                    width={2000}
                    height={2000}
                    className="absolute z-0 -top-[2vw] -right-[1vw]  w-[14.008vw] object-cover max-lg:hidden"
                />
            </div>
            <div className="mt-[5vw] w-full flex items-center justify-center lg:mt-[2vw]">
                <Swiper
                    effect="slide"
                    slidesPerView={3.6}
                    freeMode
                    loop
                    spaceBetween={"2vw"} 
                    centeredSlides
                    pagination={{
                        clickable: false, 
                    }}
                    speed={10000} 
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 50, 
                        pauseOnMouseEnter: false,
                        disableOnInteraction: false,
                        waitForTransition: false,
                        stopOnLastSlide: false,
                    }}
                    className="relative w-full flex items-center justify-center gap-[2vw] overflow-visible"
                >
                    {products.map((item, index) => (
                        <SwiperSlide key={index} className="relative">
                            <div className="flex h-[30vw] w-[92%] max-w-[1200px] flex-col gap-[1vw] rounded-2xl bg-white shadow-lg p-[2vw]">
                                {/* Gambar Produk */}
                                <div className="flex h-full w-full items-center justify-center">
                                    <Image src={item.image} alt={item.name} width={800} height={800} className="object-cover rounded-md" />
                                </div>
                                {/* Nama Produk */}
                                <b className="w-[80%] max-lg:mt-[10vw] text-lg text-left text-black">
                                    {item.name}
                                </b>
                                {/* Harga Produk */}
                                <p className="w-[80%] max-lg:mt-[10vw] text-green-600 font-semibold text-left text-lg">
                                    {item.price}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="flex h-full w-full flex-col items-center justify-center py-[15vh] lg:gap-[16px] lg:p-[100px] 2xl:py-[110px]">
                <Button
                    color={"green"}
                    text={"Buy Now"}
                    addClass={
                        "max-lg:mt-[7vw] lg:!mt-[0.5vw] w-[22vw] lg:w-[11vw] text-[3.3vw] lg:text-[1.1vw] py-[2vw] lg:py-[9px] 2xl:w-[170px] 2xl:text-[17px]"
                    }
                    action={() => {
                        directRoute(intLinks.Apply, router, pathname);
                    }}
                />
            </div>
        </section>
    );
};

export default LayoutMerch;

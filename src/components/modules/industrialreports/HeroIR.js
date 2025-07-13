"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/element/Button";
import { HiOutlineArrowUpRight, HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";

const products = [
  {
    href: "/industrialreport/cafe-industry",
    image: "/img/industrialreport/CafeIndusThumb.png",
    alt: "Thumbnail of the Cafe Industry Report",
  },
  {
    href: "/industrialreport/tenun-lurik",
    image: "/img/industrialreport/tenunlurikthumb.png",
    alt: "Thumbnail of the Tenun Lurik Report",
  },
];

export default function HeroIR() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/industrialreport/bg-indusrep.png"
          alt="Industrial Report Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-50 flex h-screen w-full flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-[10px] px-[4%] py-[9vh] max-lg:pt-[10vw] lg:gap-[30px]">
          <div className="mt-[7vw] font-avenirBlack text-xl text-lightWhite sm:text-4xl lg:text-[80px] lg:leading-none 2xl:text-[112px]">
            Industrial Report
          </div>

          <div
            data-gsap="up-stagger"
            className="relative mb-[5vw] flex w-full flex-col items-center justify-center lg:h-auto"
          >
            {/* Carousel Container */}
            <div
              className="flex w-full snap-x snap-mandatory flex-row gap-[20px] overflow-x-auto px-4 lg:px-0"
              style={{
                transform: `translateX(-${currentSlide * (100 / products.length)}%)`,
                transition: "transform 0.5s ease-in-out",
                width: "150%",
                scrollBehavior: "smooth",
              }}
            >
              {products.map((product, index) => (
                <Link
                  key={index}
                  href={product.href}
                  className="group relative aspect-[11/16] w-[70vw] max-w-[300px] flex-shrink-0 snap-center overflow-hidden rounded-lg sm:w-[60vw] md:w-[50vw] lg:w-full"
                >
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </Link>
              ))}
            </div>

            {/* Pagination and Navigation */}
            <div className="mt-8 flex items-center justify-center gap-6 lg:hidden">
              {/* Previous Arrow */}
              <button
                onClick={prevSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 text-lightWhite transition-colors hover:bg-gray-700"
                aria-label="Previous slide"
              >
                <HiOutlineArrowLeft className="h-5 w-5" />
              </button>

              {/* Pagination Dots */}
              <div className="flex gap-3">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-3 w-3 rounded-full transition-all ${
                      currentSlide === index ? "w-6 bg-lightWhite" : "bg-gray-400/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Arrow */}
              <button
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 text-lightWhite transition-colors hover:bg-gray-700"
                aria-label="Next slide"
              >
                <HiOutlineArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi2";

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
  {
    href: "/industrialreport/tenun-lurik",
    image: "/img/industrialreport/tenunlurikthumb.png",
    alt: "Thumbnail of the Tenun Lurik Report",
  },
];

export default function HeroIR() {
  // For desktop: calculate total number of pages (rows) needed
  const itemsPerRow = 4;
  const totalRows = Math.ceil(products.length / itemsPerRow);
  
  // Mobile carousel state
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);
  // Desktop pagination state
  const [currentDesktopPage, setCurrentDesktopPage] = useState(0);

  // Mobile navigation functions
  const nextMobileSlide = () => {
    setCurrentMobileSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevMobileSlide = () => {
    setCurrentMobileSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const goToMobileSlide = (index) => {
    setCurrentMobileSlide(index);
  };

  // Desktop pagination functions
  const nextDesktopPage = () => {
    setCurrentDesktopPage((prev) => (prev === totalRows - 1 ? 0 : prev + 1));
  };

  const prevDesktopPage = () => {
    setCurrentDesktopPage((prev) => (prev === 0 ? totalRows - 1 : prev - 1));
  };

  const goToDesktopPage = (index) => {
    setCurrentDesktopPage(index);
  };

  // Get current items to display on desktop
  const getDesktopPageItems = () => {
    const startIdx = currentDesktopPage * itemsPerRow;
    const endIdx = startIdx + itemsPerRow;
    return products.slice(startIdx, endIdx);
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

          {/* Desktop View - Grid Layout with Pagination */}
          <div className="hidden w-full lg:block">
            <div className="grid grid-cols-4 gap-6">
              {getDesktopPageItems().map((product, index) => (
                <Link
                  key={index}
                  href={product.href}
                  className="group relative aspect-[11/16] w-full overflow-hidden rounded-lg"
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

            {/* Desktop Pagination */}
            <div className="mt-8 flex items-center justify-center gap-6">
              {/* Previous Arrow */}
              <button 
                onClick={prevDesktopPage}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 text-lightWhite transition-colors hover:bg-gray-700"
                aria-label="Previous page"
              >
                <HiOutlineArrowLeft className="h-5 w-5" />
              </button>
              
              {/* Pagination Dots */}
              <div className="flex gap-3">
                {Array.from({ length: totalRows }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToDesktopPage(index)}
                    className={`h-3 w-3 rounded-full transition-all ${
                      currentDesktopPage === index ? "bg-lightWhite w-6" : "bg-gray-400/50"
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Next Arrow */}
              <button 
                onClick={nextDesktopPage}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 text-lightWhite transition-colors hover:bg-gray-700"
                aria-label="Next page"
              >
                <HiOutlineArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Mobile View - Single Item Carousel */}
          <div className="relative mb-[5vw] flex w-full flex-col items-center justify-center lg:hidden">
            <div className="relative w-full overflow-hidden">
              <div 
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentMobileSlide * 100}%)` }}
              >
                {products.map((product, index) => (
                  <Link
                    key={index}
                    href={product.href}
                    className="group relative aspect-[11/16] w-full flex-shrink-0 overflow-hidden rounded-lg"
                    style={{ width: '100%' }}
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
            </div>

            {/* Mobile Pagination and Navigation */}
            <div className="mt-8 flex items-center justify-center gap-6">
              {/* Previous Arrow */}
              <button 
                onClick={prevMobileSlide}
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
                    onClick={() => goToMobileSlide(index)}
                    className={`h-3 w-3 rounded-full transition-all ${
                      currentMobileSlide === index ? "bg-lightWhite w-6" : "bg-gray-400/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Next Arrow */}
              <button 
                onClick={nextMobileSlide}
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
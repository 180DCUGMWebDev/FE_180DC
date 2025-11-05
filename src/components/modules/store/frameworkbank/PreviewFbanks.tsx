"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { createBackground } from "@/config/Functions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Container from "@/components/layout/Container";

const images = [
  "/img/store/fbank/PREVIEW_A.png",
  "/img/store/fbank/PREVIEW_A2.png",
  "/img/store/fbank/PREVIEW_A3.png",
  "/img/store/fbank/PREVIEW_A4.png",
  "/img/store/fbank/PREVIEW_A5.png",
  "/img/store/fbank/PREVIEW_A6.png",
  "/img/store/fbank/PREVIEW_A7.png",
  "/img/store/fbank/PREVIEW_A8.png",
  "/img/store/fbank/PREVIEW_A9.png",
  "/img/store/fbank/PREVIEWCTA1.png",
  "/img/store/fbank/PREVIEWCTA2.png",
];

export default function PreviewFbanks() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    // Set initial slide
    setCurrentSlide(api.selectedScrollSnap());

    // Listen to slide changes
    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <Container color="dark" className="relative">
      {/* Content */}
      <div className="flex h-fit w-full items-center justify-center px-4 py-12 sm:px-6 md:py-16 lg:py-24">
        {/* Desktop */}
        <div className="relative hidden w-full flex-col items-center justify-center lg:flex">
          {/* Background Text */}
          <div className="absolute top-0 right-0 z-0">
            <h1 className="font-avenir-regular bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] bg-clip-text text-6xl text-transparent sm:text-7xl md:text-8xl lg:text-[225px]">
              Preview
            </h1>
          </div>
          <div className="absolute bottom-0 left-0 z-0">
            <h1 className="font-avenir-regular bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] bg-clip-text text-6xl text-transparent sm:text-7xl md:text-8xl lg:text-[225px]">
              Preview
            </h1>
          </div>

          {/* Carousel Container */}
          <div className="z-10 rounded-2xl bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] p-1 sm:p-1.5 lg:rounded-3xl lg:p-1.5">
            <div className="rounded-xl bg-white sm:rounded-2xl">
              <Carousel
                className="h-48 w-96 rounded-xl sm:h-64 sm:w-[600px] md:h-72 md:w-[700px] lg:h-[412px] lg:w-[732px] lg:rounded-2xl"
                setApi={setApi}
              >
                <CarouselContent>
                  {images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-48 w-96 overflow-hidden rounded-xl sm:h-64 sm:w-[600px] md:h-72 md:w-[700px] lg:h-[412px] lg:w-[732px] lg:rounded-2xl">
                        <Image
                          src={src || "/placeholder.svg"}
                          alt={`Slide ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center gap-4 pt-4 lg:gap-6 lg:pt-6">
                <button
                  onClick={scrollPrev}
                  className="rounded-full border border-gray-300 p-2 transition-all hover:border-[#58B9D1] hover:bg-[#58B9D1]/10 lg:p-3"
                >
                  <FaChevronLeft className="text-sm text-gray-600 sm:text-base lg:text-lg" />
                </button>

                {/* Pagination Dots */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`h-1.5 w-1.5 rounded-full transition-all sm:h-2 sm:w-2 ${
                        index === currentSlide
                          ? "w-4 bg-[#58B9D1] sm:w-6"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={scrollNext}
                  className="rounded-full border border-gray-300 p-2 transition-all hover:border-[#58B9D1] hover:bg-[#58B9D1]/10 lg:p-3"
                >
                  <FaChevronRight className="text-sm text-gray-600 sm:text-base lg:text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet */}
        <div className="z-10 flex w-full flex-col items-center lg:hidden">
          {/* Top Text */}
          <div className="mb-8 text-end sm:mb-12">
            <h1 className="font-avenir-heavy bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] bg-clip-text text-3xl text-transparent sm:text-5xl md:text-6xl">
              Preview
            </h1>
          </div>

          {/* Carousel Container */}
          <div className="w-full rounded-2xl bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] p-1 sm:rounded-3xl sm:p-1.5">
            <div className="rounded-xl bg-white sm:rounded-2xl">
              <Carousel
                className="h-48 w-full rounded-xl sm:h-96 sm:rounded-2xl md:h-[500px]"
                setApi={setApi}
              >
                <CarouselContent>
                  {images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-48 w-full overflow-hidden rounded-xl sm:h-96 sm:rounded-2xl md:h-[500px]">
                        <Image
                          src={src || "/placeholder.svg"}
                          alt={`Slide ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Navigation Controls Mobile */}
              <div className="flex items-center justify-center gap-3 pt-3 sm:gap-4 sm:pt-4">
                <button
                  onClick={scrollPrev}
                  className="rounded-full border border-gray-300 p-1.5 transition-all hover:border-[#58B9D1] hover:bg-[#58B9D1]/10 sm:p-2"
                >
                  <FaChevronLeft className="text-sm text-gray-600" />
                </button>

                {/* Pagination Dots Mobile */}
                <div className="flex items-center gap-1">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={`h-1.5 w-1.5 rounded-full transition-all ${
                        index === currentSlide
                          ? "w-3 bg-[#58B9D1] sm:w-4"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={scrollNext}
                  className="rounded-full border border-gray-300 p-1.5 transition-all hover:border-[#58B9D1] hover:bg-[#58B9D1]/10 sm:p-2"
                >
                  <FaChevronRight className="text-sm text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-8 text-start sm:mt-12">
            <h1 className="font-avenir-regular hidden bg-gradient-to-r from-[#58B9D1] to-[#6FAA26] bg-clip-text text-2xl text-transparent sm:flex sm:text-4xl md:text-5xl">
              Preview
            </h1>
          </div>
        </div>
      </div>
    </Container>
  );
}

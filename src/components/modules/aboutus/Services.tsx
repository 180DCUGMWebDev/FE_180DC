"use client";

// Import Packages
import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

// Import Components
import ImageAction from "@/components/elements/ImageAction";
import Container from "@/components/layout/Container";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function Services() {
  const [api, setApi] = useState<CarouselApi>();

  const content = {
    desc: "Our client-centric services are not limited to the example that we have given here, but will solely focus on the client's needs. We would be happy to hear your initial requests first!",
  };

  // Values
  const services = {
    Operations: {
      position: "top-0 right-0",
      src: "/img/aboutus/Services/operation.png",
      alt: "180dc services operation",
      values: [
        "Financial Analysis",
        "Business Model Transformation",
        "Process Optimization",
        "Partnership Evaluation",
      ],
    },
    "Market Research": {
      position: "top-0 left-0",
      src: "/img/aboutus/Services/market.png",
      alt: "180dc services market research",
      values: [
        "Competitive Analysis",
        "Industry Profiling",
        "Consumer Insights",
        "Data Analysis & Visualization",
      ],
    },
    Growth: {
      position: "top-0 left-0",
      src: "/img/aboutus/Services/growth.png",
      alt: "180dc services growth",
      values: [
        "Go-To-Market Strategy",
        "New Product Development",
        "Customer Acquisition Strategy",
        "Funding Strategy",
      ],
    },
    Organization: {
      position: "top-0 -right-[20%]",
      src: "/img/aboutus/Services/organization.png",
      alt: "180dc services organization",
      values: [
        "Organizational Design",
        "Human Capital Strategy",
        "Diversity, Equity & Inclusion",
        "Purpose Alignment",
      ],
    },
  };

  // Extraction
  const titles = new Array();
  const values = new Array();

  Object.entries(services).forEach((service) => {
    const [key, value] = service;
    titles.push(key);
    values.push(value);
  });

  // Page
  return (
    <Container color="dark" className="relative">
      {/* Background */}
      <div className="flex w-full items-center justify-center">
        <div className="flex h-fit w-full flex-col items-center justify-center px-12 py-6 lg:h-full lg:gap-12 lg:px-12 2xl:h-fit 2xl:w-[1536px]">
          <div className="flex h-fit w-full flex-col gap-4 lg:h-[28%] lg:gap-8">
            {/* Titles */}
            <div className="flex w-full flex-col items-center">
              <h1 className="font-avenir-black text-center text-[32px] leading-[30px] text-green-300 lg:text-[48px] lg:leading-[46px] 2xl:text-[61px] 2xl:leading-[60px]">
                {"Our Services"}
                <br />
                {"Offered for You"}
              </h1>
            </div>
            <div className="flex w-full items-center justify-center">
              <p className="font-lato-regular text-justify text-sm leading-[15px] text-gray-100 lg:text-2xl lg:leading-8 2xl:text-[30.7px] 2xl:leading-[41px]">
                {content.desc}
              </p>
            </div>
          </div>
          <div className="mt-8 flex h-fit w-full justify-center gap-6 2xl:gap-[72px]">
            {/* Cards DESKTOP */}
            {titles.map((val, idx) => {
              return (
                <div
                  key={idx}
                  className="group relative hidden h-[320px] max-h-full w-6/12 items-end overflow-clip rounded-t-[20px] p-4 pb-0 lg:flex 2xl:h-[440px] 2xl:p-[30px]"
                >
                  {/* Background Image */}
                  <div className={"absolute inset-0 z-0 w-[150%] " + values[idx].position}>
                    <ImageAction
                      src={values[idx].src || "/placeholder.svg"}
                      alt={values[idx].alt}
                      className="duration-500 group-hover:scale-[1.2]"
                    />
                  </div>
                  {/* Gradient Overlay */}
                  <div className="to-black-300 absolute inset-0 z-[5] bg-gradient-to-b from-transparent from-20% to-58%" />
                  {/* Content */}
                  <div className="relative z-10 flex h-[52%] w-full flex-col justify-start text-start duration-500 group-hover:translate-y-[-10%] 2xl:h-[187px]">
                    <h2 className="font-avenir-black text-2xl text-cyan-300 2xl:text-[29px]">
                      {val}
                    </h2>
                    <ul className="font-lato-regular w-full list-disc pl-6 text-base leading-[1.2] text-gray-100 2xl:pl-[30px] 2xl:text-[17.6px]">
                      {values[idx].values.map((value) => {
                        return <li key={value + "_" + idx}>{value}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}

            {/* Cards MOBILE - Replaced Swiper with shadcn Carousel */}
            <div className="flex w-full lg:hidden">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="-ml-0 gap-[18px]">
                  {titles.map((val, idx) => {
                    return (
                      <CarouselItem key={idx} className="basis-1/2 pl-0">
                        <div className="group relative flex h-[240px] max-h-full w-full items-end overflow-clip rounded-t-[20px] p-3 pb-0 lg:hidden">
                          {/* Background Image */}
                          <div
                            className={
                              "absolute inset-0 z-0 h-full w-[250%] " + values[idx].position
                            }
                          >
                            <ImageAction
                              src={values[idx].src || "/placeholder.svg"}
                              alt={values[idx].alt}
                              className="duration-500 group-hover:scale-[1.2]"
                            />
                          </div>
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 z-[5] bg-gradient-to-b from-green-300/50 from-20% to-black to-85%" />
                          {/* Content */}
                          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center text-start">
                            <div className="mb-2 flex h-12 w-8/12 items-end justify-center">
                              <h2 className="font-avenir-black text-center text-sm leading-[14px] text-cyan-300">
                                {val}
                              </h2>
                            </div>
                            <ul className="font-lato-regular h-32 w-10/12 list-disc pl-4 text-xs leading-[12px] text-gray-100">
                              {values[idx].values.map((value) => {
                                return <li key={value + "_" + idx}>{value}</li>;
                              })}
                            </ul>
                          </div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
          <div className="flex w-full items-center justify-center lg:hidden">
            <p className="font-lato-bold-italic grow text-start text-xs text-gray-100">{"<<"}</p>
            <p className="font-lato-bold-italic grow text-center text-xs text-gray-100">
              {"Swipe for More Information!"}
            </p>
            <p className="font-lato-bold-italic grow text-end text-xs text-gray-100">{">>"}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

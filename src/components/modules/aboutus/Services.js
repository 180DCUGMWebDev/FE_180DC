"use client";

// Import Packages
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Components
import ImgF from "@/components/element/ImgF";

// Import Configs
import { createBackground } from "@/config/Functions";

// Import Styles
import "swiper/css";

export default function Services() {
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
  let titles = new Array();
  let values = new Array();

  Object.entries(services).forEach((service) => {
    const [key, value] = service;
    titles.push(key);
    values.push(value);
  });

  // Page
  return (
    <section className="relative" id="services">
      {/* Background */}
      {createBackground("dark")}
      <div className="max-lg:min-h-[100 vmax] flex h-screen w-full items-center justify-center">
        <div className="flex h-fit w-full flex-col items-center justify-center px-[6vw] pb-[30px] pt-[20px] lg:h-full lg:gap-[60px] lg:px-[50px] 2xl:h-fit 2xl:w-[1536px]">
          <div className="flex h-fit w-full flex-col max-lg:gap-[1vh] lg:h-[28%] lg:flex-row">
            {/* Titles */}
            <div className="flex items-end lg:w-5/12">
              <h1 className="text-start font-avenir-black text-[8vw]/[7.6vw] text-primary lg:text-[4vw]/[3.9vw] 2xl:text-[61px]/[60px]">
                {"Our Services"}
                <br />
                {"Offered for You"}
              </h1>
            </div>
            <div className="flex items-end lg:w-7/12">
              <p className="text-justify font-lato-regular text-[3.5vw]/[3.7vw] text-light-white lg:text-[2vw]/[2.67vw] 2xl:text-[30.7px]/[41px]">
                {content.desc}
              </p>
            </div>
          </div>
          <div className="mt-[4vw] flex h-fit w-full justify-center gap-[3vw] 2xl:gap-[72px]">
            {/* Cards DESKTOP */}
            {titles.map((val, idx) => {
              return (
                <div
                  key={idx}
                  className="group relative hidden h-[360px] max-h-full w-6/12 items-end overflow-clip rounded-t-[20px] bg-linear-to-b from-transparent from-20% to-black to-58% p-[1.5vw] pb-0 lg:flex 2xl:h-[440px] 2xl:p-[30px]"
                >
                  {/* Background */}
                  <div className={"absolute -z-1 w-[150%] " + values[idx].position}>
                    <ImgF
                      src={values[idx].src}
                      alt={values[idx].alt}
                      className="duration-500 group-hover:scale-[1.2]"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex h-[52%] w-full flex-col justify-start text-start duration-500 group-hover:translate-y-[-10%] 2xl:h-[187px]">
                    <h2 className="font-avenir-black text-[1.9vw] text-secondary 2xl:text-[29px]">
                      {val}
                    </h2>
                    <ul className="w-full list-disc pl-[1.9vw] font-lato-regular text-[1.15vw] leading-[1.2] text-light-white 2xl:pl-[30px] 2xl:text-[17.6px]">
                      {values[idx].values.map((value) => {
                        return <li key={value + "_" + idx}>{value}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}

            {/* Cards MOBILE */}
            <div className="flex w-full lg:hidden">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={2}
                spaceBetween={18}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
              >
                {titles.map((val, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <div className="group relative flex h-[30vh] max-h-full w-full items-end overflow-clip rounded-t-[20px] bg-linear-to-b from-primary/50 from-20% to-black to-85% p-[1.5vw] pb-0 lg:hidden">
                        {/* Background */}
                        <div className={"absolute -z-1 h-full w-[250%] " + values[idx].position}>
                          <ImgF
                            src={values[idx].src}
                            alt={values[idx].alt}
                            className="duration-500 group-hover:scale-[1.2]"
                          />
                        </div>
                        {/* Content */}
                        <div className="flex h-full w-full flex-col items-center justify-center text-start">
                          <div className="mb-[1vh] flex h-[6vh] w-8/12 items-end justify-center">
                            <h2 className="text-center font-avenir-black text-[4vw]/[3.5vw] text-secondary">
                              {val}
                            </h2>
                          </div>
                          <ul className="h-[16vh] w-10/12 list-disc pl-[1.9vw] font-lato-regular text-[3.2vw]/[3.2vw] text-light-white">
                            {values[idx].values.map((value) => {
                              return <li key={value + "_" + idx}>{value}</li>;
                            })}
                          </ul>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="flex w-full items-center justify-center lg:hidden">
            <p className="grow text-start font-lato-bold-italic text-[3vw] text-light-white">{"<<"}</p>
            <p className="grow text-center font-lato-bold-italic text-[3vw] text-light-white">
              {"Swipe for More Information!"}
            </p>
            <p className="grow text-end font-lato-bold-italic text-[3vw] text-light-white">{">>"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

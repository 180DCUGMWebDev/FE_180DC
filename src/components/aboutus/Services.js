"use client";

// Import Packages
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Components
import ImgF from "../global/ImgF";

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
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}
      <div className="flex w-full h-screen max-lg:min-h-[100
        vmax] justify-center items-center">
        <div className="flex w-full h-fit lg:h-full flex-col justify-center items-center lg:gap-[60px] pt-[20px] pb-[30px] px-[6vw] lg:px-[50px] 2xl:w-[1536px] 2xl:h-fit">
          <div className="flex flex-col lg:flex-row w-full h-fit lg:h-[28%] max-lg:gap-[1vh]">
            {/* Titles */}
            <div className="flex lg:w-5/12 items-end">
              <h1 className="text-start text-primary text-[8vw]/[7.6vw] lg:text-[4vw]/[3.9vw] font-avenirBlack 2xl:text-[61px]/[60px]">
                {"Our Services"}
                <br />
                {"Offered for You"}
              </h1>
            </div>
            <div className="flex lg:w-7/12 items-end">
              <p className="font-latoRegular text-lightWhite text-justify text-[3.5vw]/[3.7vw] lg:text-[2vw]/[2.67vw] 2xl:text-[30.7px]/[41px]">
                {content.desc}
              </p>
            </div>
          </div>
          <div className="flex w-full h-fit justify-center mt-[4vw] gap-[3vw] 2xl:gap-[72px]">
            {/* Cards DESKTOP */}
            {titles.map((val, idx) => {
              return (
                <div
                  key={idx}
                  className="relative hidden lg:flex items-end h-[360px] max-h-full w-6/12 rounded-t-[20px] bg-gradient-to-b from-transparent from-20% to-black to-[58%] p-[1.5vw] pb-0 overflow-clip 2xl:h-[440px] 2xl:p-[30px]"
                >
                  {/* Background */}
                  <div
                    className={
                      "absolute -z-[1] w-[150%] " + values[idx].position
                    }
                  >
                    <ImgF src={values[idx].src} alt={values[idx].alt} />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col justify-start text-start w-full h-[52%] 2xl:h-[187px]">
                    <h2 className="text-secondary font-avenirBlack text-[1.9vw] 2xl:text-[29px]">
                      {val}
                    </h2>
                    <ul className="w-full list-disc text-lightWhite font-latoRegular leading-[1.2] text-[1.15vw] 2xl:text-[17.6px] pl-[1.9vw] 2xl:pl-[30px]">
                      {values[idx].values.map((value) => {
                        return <li key={value + "_" + idx}>{value}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}

            {/* Cards MOBILE */}
            <div className="lg:hidden flex w-full">
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
                      <div className="relative lg:hidden flex items-end h-[30vh] max-h-full w-full rounded-t-[20px] bg-gradient-to-b from-primary/[50%] from-20% to-black to-[85%] p-[1.5vw] pb-0 overflow-clip">
                        {/* Background */}
                        <div
                          className={
                            "absolute -z-[1] w-[250%] h-full " +
                            values[idx].position
                          }
                        >
                          <ImgF src={values[idx].src} alt={values[idx].alt} />
                        </div>
                        {/* Content */}
                        <div className="flex flex-col items-center justify-center text-start w-full h-full">
                          <div className="flex justify-center items-end w-8/12 h-[6vh] mb-[1vh]">
                            <h2 className="text-secondary font-avenirBlack text-[4vw]/[3.5vw] text-center">
                              {val}
                            </h2>
                          </div>
                          <ul className="w-10/12 list-disc text-lightWhite font-latoRegular text-[3.2vw]/[3.2vw] pl-[1.9vw] h-[16vh]">
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
          <div className="lg:hidden flex w-full justify-center items-center">
            <p className="text-lightWhite font-latoBoldItalic text-[3vw] grow text-start">
              {"<<"}
            </p>
            <p className="text-lightWhite font-latoBoldItalic text-[3vw] grow text-center">
              {"Swipe for More Information!"}
            </p>
            <p className="text-lightWhite font-latoBoldItalic text-[3vw] grow text-end">
              {">>"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

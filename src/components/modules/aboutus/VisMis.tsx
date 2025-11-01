// Import Packages
import React from "react";
import { FaBriefcase } from "react-icons/fa";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function VisMis() {
  // Values
  const vision =
    "To be the leading consulting organization that empowers individuals, creates social impact, and fosters sustainable growth through comprehensive strategies and collaborative partnerships";

  const missions = {
    Empowerment:
      "Empowering our members with the skills, knowledge, and experiences needed to excel in the consulting industry and make a meaningful difference in the world",
    "Social Impact":
      "Delivering high-quality projects and programs that create long-lasting social impact and address the diverse needs of our clients and communities",
    Growth:
      "Fostering sustainable growth by continuously improving our internal processes, expanding our partnerships, and attracting diversified talents from various disciplines",
  };

  // Extraction
  let titles = new Array();
  let values = new Array();

  Object.entries(missions).forEach((mission) => {
    const [key, value] = mission;
    titles.push(key);
    values.push(value);
  });

  const missionFormat = (title, content) => {
    return (
      <div id="vismis" className="flex grow flex-col max-lg:w-[94%]">
        {/* Title */}
        <div className="flex items-end max-lg:items-end">
          <FaBriefcase className="text-[5vw] text-green-300 max-lg:rotate-[8deg] lg:text-[50px]" />
          <p className="font-lato-bold-italic ml-[2vw] text-[3vw]/[2.5vw] text-gray-100 lg:ml-[20px] lg:text-[2vw]/[1.9vw] 2xl:text-[31px]/[29px]">
            {title}
          </p>
        </div>
        {/* Content */}
        <div className="mt-[2vw] lg:mt-[20px]">
          <p className="font-lato-regular text-justify text-[2.8vw]/[3.3vw] text-gray-100 lg:text-[1.3vw]/[1.7vw] 2xl:text-[20px]/[26px]">
            {content}
          </p>
        </div>
      </div>
    );
  };

  // Page
  return (
    <section className="relative">
      {/* Background */}
      {createBackground("dark")}

      {/* Content */}
      <div className="flex h-fit w-full items-center justify-center max-lg:py-[8vh] lg:h-screen">
        <div className="flex flex-col items-center justify-center px-[6vw] 2xl:w-[1536px] 2xl:px-[100px]">
          {/* Title */}
          <div className="w-full">
            <h1 className="font-avenir-black text-center text-[8vw]/[7.2vw] text-gray-100 lg:text-[4vw]/[3.8vw] lg:text-green-300 2xl:text-[61px]/[58px]">
              {"180DC UGM"}
              <br />
              <span className="max-lg:text-cyan-300">{"Vision"}</span>
              {" & "}
              <span className="max-lg:text-green-300">{"Mission"}</span>
            </h1>
          </div>
          {/* Vision */}
          <div className="mt-[40px] flex w-full max-lg:flex max-lg:h-fit max-lg:items-center">
            <h2 className="font-avenir-black w-[14.2%] text-[2.3vw]/[1.9vw] text-cyan-300 max-lg:hidden 2xl:text-[35px]/[29px]">
              {"Vision"}
            </h2>
            <div className="flex h-[10vw] w-[6%] justify-start lg:hidden">
              <div className="h-full w-[60%] rounded-[4vw] bg-cyan-300" />
            </div>
            <p className="font-lato-regular w-[94%] text-justify text-[2.8vw]/[3.3vw] text-gray-100 lg:w-[85.8%] lg:text-[1.5vw]/[2vw] 2xl:text-[23px]/[30px]">
              {vision}
            </p>
          </div>
          {/* Mision */}
          <div className="flex w-full lg:mt-[28px]">
            <h2 className="font-avenir-black w-[14.2%] text-[2.3vw]/[1.9vw] text-cyan-300 max-lg:hidden 2xl:text-[35px]/[29px]">
              {"Mision"}
            </h2>
            <div className="flex w-full flex-col gap-[2.5vw] max-lg:mt-[2.5vw] lg:w-[85.8%] lg:flex-row lg:gap-[120px]">
              {titles.map((title, idx) => {
                return (
                  <div key={title + "_" + idx} className="max-lg:flex">
                    {/* Bar Left MOBILE */}
                    <div className="flex h-[16.7vw] w-[6%] justify-start lg:hidden">
                      <div className="h-full w-[60%] rounded-[4vw] bg-green-300" />
                    </div>
                    {missionFormat(title, values[idx])}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

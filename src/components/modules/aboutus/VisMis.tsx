// Import Packages
import React from "react";
import { FaBriefcase } from "react-icons/fa";

// Import Configs
import { createBackground } from "@/config/Functions";
import Container from "@/components/layout/Container";

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
          <FaBriefcase className="text-[16px] text-green-300 max-lg:rotate-[8deg] lg:text-[32px]" />
          <p className="font-lato-bold-italic ml-[6px] text-[10px]/[8px] text-gray-100 lg:ml-[12px] lg:text-[20px]/[19px] 2xl:text-[24px]/[23px]">
            {title}
          </p>
        </div>
        {/* Content */}
        <div className="mt-[6px] lg:mt-[12px]">
          <p className="font-lato-regular text-justify text-[9px]/[11px] text-gray-100 lg:text-[14px]/[18px] 2xl:text-[16px]/[20px]">
            {content}
          </p>
        </div>
      </div>
    );
  };

  // Page
  return (
    <Container color="dark">
      {/* Content */}
      <div className="flex h-fit w-full items-center justify-center max-lg:py-[48px]">
        <div className="flex flex-col items-center justify-center px-[20px] 2xl:w-[1536px] 2xl:px-[80px]">
          {/* Title */}
          <div className="w-full">
            <h1 className="font-avenir-black text-center text-[26px]/[24px] text-gray-100 lg:text-[48px]/[46px] lg:text-green-300 2xl:text-[52px]/[50px]">
              {"180DC UGM"}
              <br />
              <span className="max-lg:text-cyan-300">{"Vision"}</span>
              {" & "}
              <span className="max-lg:text-green-300">{"Mission"}</span>
            </h1>
          </div>
          {/* Vision */}
          <div className="mt-[28px] flex w-full max-lg:flex max-lg:h-fit max-lg:items-center">
            <h2 className="font-avenir-black w-[14.2%] text-[24px]/[20px] text-cyan-300 max-lg:hidden 2xl:text-[28px]/[24px]">
              {"Vision"}
            </h2>
            <div className="flex h-[32px] w-[6%] justify-start lg:hidden">
              <div className="h-full w-[60%] rounded-[12px] bg-cyan-300" />
            </div>
            <p className="font-lato-regular w-[94%] text-justify text-[9px]/[11px] text-gray-100 lg:w-[85.8%] lg:text-[16px]/[22px] 2xl:text-[18px]/[24px]">
              {vision}
            </p>
          </div>
          {/* Mision */}
          <div className="flex w-full lg:mt-[20px]">
            <h2 className="font-avenir-black w-[14.2%] text-[24px]/[20px] text-cyan-300 max-lg:hidden 2xl:text-[28px]/[24px]">
              {"Mision"}
            </h2>
            <div className="flex w-full flex-col gap-[8px] max-lg:mt-[8px] lg:w-[85.8%] lg:flex-row lg:gap-[60px]">
              {titles.map((title, idx) => {
                return (
                  <div key={title + "_" + idx} className="max-lg:flex">
                    {/* Bar Left MOBILE */}
                    <div className="flex h-[54px] w-[6%] justify-start lg:hidden">
                      <div className="h-full w-[60%] rounded-[12px] bg-green-300" />
                    </div>
                    {missionFormat(title, values[idx])}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

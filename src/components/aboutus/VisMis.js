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
      <div className="flex flex-col grow max-lg:w-[94%]">
        {/* Title */}
        <div className="flex items-end max-lg:items-end">
          <FaBriefcase className="text-primary text-[5vw] lg:text-[50px] max-lg:rotate-[8deg]"/>
          <p className="font-latoBoldItalic text-lightWhite text-[3vw]/[2.5vw] lg:text-[2vw]/[1.9vw] ml-[2vw] lg:ml-[20px] 2xl:text-[31px]/[29px]">
            {title}
          </p>
        </div>
        {/* Content */}
        <div className="mt-[2vw] lg:mt-[20px]">
          <p className="font-latoRegular text-lightWhite text-justify text-[2.8vw]/[3.3vw] lg:text-[1.3vw]/[1.7vw] 2xl:text-[20px]/[26px]">
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
      <div className="flex w-full h-fit max-lg:py-[8vh] lg:h-screen items-center justify-center">
        <div className="flex flex-col justify-center items-center px-[6vw] 2xl:w-[1536px] 2xl:px-[100px]">
          {/* Title */}
          <div className="w-full">
            <h1 className="text-center text-lightWhite lg:text-primary text-[8vw]/[7.2vw] lg:text-[4vw]/[3.8vw] font-avenirBlack 2xl:text-[61px]/[58px]">
              {"180DC UGM"}
              <br />
              <span className="max-lg:text-secondary">{"Vision"}</span>
              {" & "}
              <span className="max-lg:text-primary">{"Mission"}</span>
            </h1>
          </div>
          {/* Vision */}
          <div className="flex mt-[40px] w-full max-lg:h-fit max-lg:flex max-lg:items-center">
            <h2 className="max-lg:hidden font-avenirBlack text-secondary text-[2.3vw]/[1.9vw] w-[14.2%] 2xl:text-[35px]/[29px]">
              {"Vision"}
            </h2>
            <div className="lg:hidden h-[10vw] w-[6%] flex justify-start">
              <div className="bg-secondary rounded-[4vw] w-[60%] h-full" />
            </div>
            <p className="font-latoRegular text-lightWhite text-justify text-[2.8vw]/[3.3vw] lg:text-[1.5vw]/[2vw] w-[94%] lg:w-[85.8%] 2xl:text-[23px]/[30px]">
              {vision}
            </p>
          </div>
          {/* Mision */}
          <div className="flex lg:mt-[28px] w-full">
            <h2 className="max-lg:hidden font-avenirBlack text-secondary text-[2.3vw]/[1.9vw] w-[14.2%] 2xl:text-[35px]/[29px]">
              {"Mision"}
            </h2>
            <div className="flex flex-col lg:flex-row w-full lg:w-[85.8%] gap-[2.5vw] lg:gap-[120px] max-lg:mt-[2.5vw]">
              {titles.map((title, idx) => {
                return (
                  <div key={title + "_" + idx} className="max-lg:flex">
                    {/* Bar Left MOBILE */}
                    <div className="lg:hidden h-[16.7vw] w-[6%] flex justify-start">
                      <div className="bg-primary rounded-[4vw] w-[60%] h-full" />
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

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
      <div className="flex flex-col grow">
        {/* Title */}
        <div className="flex items-end">
          <FaBriefcase className="text-primary" size="50" />
          <p className="font-latoBoldItalic text-lightWhite text-[2vw]/[1.9vw] ml-[20px] 2xl:text-[31px]/[29px]">
            {title}
          </p>
        </div>
        {/* Content */}
        <div className="mt-[20px]">
          <p className="font-latoRegular text-lightWhite text-[1.3vw]/[1.7vw] 2xl:text-[20px]/[26px]">
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
      <div className="hidden lg:flex w-full h-screen items-center justify-center">
        <div className="flex flex-col justify-center items-center px-[6vw] 2xl:w-[1300px] 2xl:px-0">
          {/* Title */}
          <div className="w-full">
            <h1 className="text-center text-primary text-[4vw]/[3.8vw] font-avenirBlack 2xl:text-[61px]/[58px]">
              {"180DC UGM"}
              <br />
              {"Vision & Mission"}
            </h1>
          </div>
          {/* Vision */}
          <div className="flex mt-[40px] w-full">
            <h2 className="font-avenirBlack text-secondary text-[2.3vw]/[1.9vw] w-[14.2%] 2xl:text-[35px]/[29px]">
              {"Vision"}
            </h2>
            <p className="font-latoRegular text-lightWhite text-justify text-[1.5vw]/[2vw] w-[85.8%] 2xl:text-[23px]/[30px]">
              {vision}
            </p>
          </div>
          {/* Mision */}
          <div className="flex mt-[28px] w-full">
            <h2 className="font-avenirBlack text-secondary text-[2.3vw]/[1.9vw] w-[14.2%] 2xl:text-[35px]/[29px]">
              {"Mision"}
            </h2>
            <div className="flex w-[85.8%] gap-[120px]">
              {titles.map((title, idx) => {
                return missionFormat(title, values[idx]);
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

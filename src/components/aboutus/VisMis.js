import React from "react";
import { FaBriefcase } from "react-icons/fa";

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
          <p className="font-latoBoldItalic text-lightWhite text-[28px]/[24px] ml-[20px]">
            {title}
          </p>
        </div>
        {/* Content */}
        <div className="mt-[20px]">
          <p className="font-latoRegular text-lightWhite text-[20px]/[28px]">
            {content}
          </p>
        </div>
      </div>
    );
  };

  // Page
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center px-[90px]">
      {/* Title */}
      <div className="w-full">
        <h1 className="text-center text-primary text-[64px]/[60px] font-avenirBlack">
          {"180DC UGM"}
          <br />
          {"Vision & Mission"}
        </h1>
      </div>
      {/* Vision */}
      <div className="flex mt-[40px] w-full">
        <h2 className="font-avenirBlack text-secondary text-[36px]/[30px] w-[14.2%]">
          {"Vision"}
        </h2>
        <p className="font-latoRegular text-lightWhite text-justify text-[24px]/[32px] w-[85.8%]">
          {vision}
        </p>
      </div>
      {/* Mision */}
      <div className="flex mt-[28px] w-full">
        <h2 className="font-avenirBlack text-secondary text-[36px]/[30px] w-[14.2%] mt-[10px]">
          {"Mision"}
        </h2>
        <div className="flex w-[85.8%] gap-[120px]">
          {titles.map((title, idx) => {
            return (
              missionFormat(title, values[idx])
            );
          })}
        </div>
      </div>
    </section>
  );
}

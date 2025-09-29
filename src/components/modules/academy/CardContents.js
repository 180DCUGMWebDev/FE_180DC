"use client";
import Image from "next/image";
import Blur from "@/components/element/Blur";

const CardContents = ({ image, module, title, link, isBlur }) => {
  return (
    <div className="flex gap-x-[2vw]">
      <Blur
        isBlur={isBlur}
        className="mb-[5vw] h-[25.313vw] w-[42.969vw] rounded-[1.6vw] bg-white shadow-xl"
      >
        <Image
          src={image}
          alt="background"
          width={2000}
          height={2000}
          className="inset-0 mx-[1vw] my-[1vw] h-[14.01vw] w-[40.99vw] object-cover max-lg:hidden"
        />
        <div className="mt-[1.5vw] text-[1vw]/[1.7vw]">
          <h1 className="ml-[1vw] font-avenir-heavy text-[1.302vw]"> {module}: </h1>
          <h1 className="ml-[1vw] font-avenir-heavy text-[1.823vw] text-[#58B9D1]"> {title} </h1>
        </div>

        <a
          href={link}
          className="mx-[1.3vw] mt-[1.7vw] flex h-[2.917vw] w-[39.948vw] items-center justify-center rounded-[1.3vw] border border-black bg-white text-center text-[1.563vw] transition-all duration-700 ease-in-out hover:scale-[102%] hover:bg-[#5AB0BB]/20"
        >
          See Details
        </a>
      </Blur>
    </div>
  );
};
export default CardContents;

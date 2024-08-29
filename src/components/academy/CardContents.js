"use client";
import Image from "next/image";

const CardContents = ({ image, module, title, link }) => {
  return (
    <div className="flex gap-x-[2vw]">
      <div className="w-[42.969vw] h-[25.313vw] rounded-[1.6vw] mb-[5vw]  bg-white shadow-xl">
        <Image
          src={image}
          alt="background"
          width={2000}
          height={2000}
          className="mx-[1vw] my-[1vw] inset-0 w-[40.99vw] h-[14.01vw] object-cover max-lg:hidden"
        />
        <div className="text-[1vw]/[1.7vw] mt-[1.5vw]">
          <h1 className="text-[1.302vw] font-avenirHeavy ml-[1vw]">
            {" "}
            {module}:{" "}
          </h1>
          <h1 className="text-[1.823vw] font-avenirHeavy ml-[1vw] text-[#58B9D1]">
            {" "}
            {title}{" "}
          </h1>
        </div>

        <a
          href={link}
          className="bg-white border-black border w-[39.948vw] h-[2.917vw] mx-[1.3vw] rounded-[1.3vw] mt-[1.7vw] text-[1.563vw] text-center flex items-center justify-center hover:bg-[#5AB0BB]/20 hover:scale-[102%] transition-all duration-700 ease-in-out"
        >
          See Details
        </a>
      </div>
    </div>
  );
};
export default CardContents;

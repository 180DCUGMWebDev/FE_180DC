import { FaPlay } from "react-icons/fa";

export default function WhoWeAre() {
  return (
    <section>
      <div className="w-full h-screen pt-[12%] pb-[5%] flex justify-center items-center gap-[60px]">
        <div className="w-3/12 h-full flex flex-col gap-[20px]">
          {/* Who Are We? */}
          <div className="w-full h-[25%] flex items-center text-lightWhite font-avenirBlack text-[52px]">
            <h1>{"Who Are We?"}</h1>
          </div>
          {/* 20+ Clients */}
          <div className="w-full h-[75%] flex flex-col items-start bg-[#ff8484] rounded-[10px] text-lightWhite p-[40px]">
            <div className="w-full flex flex-col font-avenirBlack">
              <h1 className="text-[124px] -mt-[30px]">{"20+"}</h1>
              <h1 className="text-[36px] -mt-[60px] ml-[4px]">{"Clients"}</h1>
            </div>
            <div className="w-full font-latoRegular">
              <p className="text-[14px] ml-[4px]">
                {"Successfully assisted both national and international enterprises to tackle their problems and reach their respective goals."}
              </p>
            </div>
          </div>
        </div>
        <div className="w-9/12 h-full flex flex-col gap-[20px]">
          {/* Who Are We? */}
          <div className="w-full h-[25%] flex items-center text-lightWhite font-latoRegular text-[20px]">
            {
              "180 DC UGM is the first Indonesian branch of the world’s largest consultancy for non-profit and social enterprises. Being at the very forefront of desirable change, 180 DC UGM has helped various entities in overcoming the challenges they face while further broadening its reach."
            }
          </div>
          {/* Video */}
          <div className="relative w-full h-[75%] flex items-start bg-[#ff8484] rounded-[10px]">
            <div className="absolute p-[8px] -right-[20px] -bottom-[20px] rounded-full w-[100px] h-[100px] bg-black">
              <div className="rounded-full bg-lightWhite w-full h-full p-[20px] pl-[28px]">
                <FaPlay className="w-full h-full text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

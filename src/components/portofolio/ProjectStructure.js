// Import Components
import ImgF from "../global/ImgF";
import ProjectStructureList from "../misc/ProjectStructureList";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function ProjectStructure() {
  return (
    <section className="relative flex justify-center items-center h-fit lg:h-[200vh] py-[10vh]">
      {/* Background */}
      {createBackground("dark", "max-lg:opacity-[85.45%]")}

      <div className="max-lg:hidden absolute top-0 left-0 w-[20vw] opacity-[30%] 2xl:w-[307px]">
        <ImgF
          alt="portofolio shard upper left"
          src="/img/portofolio/shard_upper_left.png"
        />
      </div>

      <div className="max-lg:hidden absolute top-0 right-0 w-[18vw] opacity-[30%] 2xl:w-[276px]">
        <ImgF
          alt="portofolio shard upper right"
          src="/img/portofolio/shard_upper_right.png"
        />
      </div>

      <div className="max-lg:hidden absolute top-[40vw] right-[18vw] w-[4vw] rotate-[45deg] 2xl:w-[61px] 2xl:right-[276px]">
        <ImgF
          alt="portofolio star green 1"
          src="/img/portofolio/type1green.png"
        />
      </div>

      <div className="max-lg:hidden absolute top-[25vw] left-[8vw] w-[10vw] 2xl:w-[154px] 2xl:left-[123px]">
        <ImgF
          alt="portofolio star blue 1"
          src="/img/portofolio/type2blue.png"
        />
      </div>

      <div className="max-lg:hidden absolute bottom-[27vw] right-[14vw] w-[8vw] rotate-[45deg] 2xl:w-[122px] 2xl:right-[215px]">
        <ImgF
          alt="portofolio star green 2"
          src="/img/portofolio/type1green.png"
        />
      </div>

      <div className="max-lg:hidden absolute bottom-[34vw] left-[12vw] w-[4vw] rotate-[-12deg] 2xl:w-[61px] 2xl:left-[184px]">
        <ImgF
          alt="portofolio star blue 2"
          src="/img/portofolio/type2blue.png"
        />
      </div>

      <div className="flex flex-col justify-center w-full lg:w-[40%] 2xl:w-[614px] max-lg:gap-[3vw]">
        <div className="flex items-center">
          {/* Mobile Decoration Left */}
          <div className="lg:hidden w-[14%] opacity-[0.3]">
            <ImgF
              alt="portofolio mobile deco left"
              src="/img/portofolio/mobile_assets/shard_left.png"
            />
          </div>

          <h1 className="max-lg:grow text-lightWhite lg:text-primary text-center text-[7vw] lg:text-[4.9vw]/[4.8vw] font-avenirBlack 2xl:text-[75px]/[64.5px]">
            {"Project Structure"}
          </h1>

          {/* Mobile Decoration Right */}
          <div className="lg:hidden w-[14%] opacity-[0.3]">
            <ImgF
              alt="portofolio mobile deco right"
              src="/img/portofolio/mobile_assets/shard_right.png"
            />
          </div>
        </div>
        <div className="max-lg:hidden w-full h-[0.15vw] bg-secondary mt-[1vw] mb-[3vw] 2xl:h-[2.3px] 2xl:mt-[15px] 2xl:mb-[46px]" />
        <ProjectStructureList
          divConfig={"w-full gap-[8vmin] 2xl:gap-[50px] max-lg:px-[8vw]"}
          lineConfig={"h-[146%] lg:h-[174%] mt-[1%]"}
        />
      </div>
    </section>
  );
}

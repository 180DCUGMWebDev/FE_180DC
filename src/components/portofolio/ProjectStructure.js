// Import Components
import ImgF from "../global/ImgF";
import ProjectStructureList from "../misc/ProjectStructureList";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function ProjectStructure() {
  return (
    <section className="relative flex h-fit items-center justify-center py-[10vh] lg:h-[200vh]">
      {/* Background */}
      {createBackground("dark", "max-lg:opacity-[85.45%]")}

      <div className="absolute left-0 top-0 w-[20vw] opacity-[30%] max-lg:hidden 2xl:w-[307px]">
        <ImgF alt="portofolio shard upper left" src="/img/portofolio/shard_upper_left.png" />
      </div>

      <div className="absolute right-0 top-0 w-[18vw] opacity-[30%] max-lg:hidden 2xl:w-[276px]">
        <ImgF alt="portofolio shard upper right" src="/img/portofolio/shard_upper_right.png" />
      </div>

      <div className="absolute right-[18vw] top-[40vw] w-[4vw] rotate-[45deg] max-lg:hidden 2xl:right-[276px] 2xl:w-[61px]">
        <ImgF alt="portofolio star green 1" src="/img/portofolio/type1green.png" />
      </div>

      <div className="absolute left-[8vw] top-[25vw] w-[10vw] max-lg:hidden 2xl:left-[123px] 2xl:w-[154px]">
        <ImgF alt="portofolio star blue 1" src="/img/portofolio/type2blue.png" />
      </div>

      <div className="absolute bottom-[27vw] right-[14vw] w-[8vw] rotate-[45deg] max-lg:hidden 2xl:right-[215px] 2xl:w-[122px]">
        <ImgF alt="portofolio star green 2" src="/img/portofolio/type1green.png" />
      </div>

      <div className="absolute bottom-[34vw] left-[12vw] w-[4vw] rotate-[-12deg] max-lg:hidden 2xl:left-[184px] 2xl:w-[61px]">
        <ImgF alt="portofolio star blue 2" src="/img/portofolio/type2blue.png" />
      </div>

      <div className="flex w-full flex-col justify-center max-lg:gap-[3vw] lg:w-[40%] 2xl:w-[614px]">
        <div className="flex items-center">
          {/* Mobile Decoration Left */}
          <div className="w-[14%] opacity-[0.3] lg:hidden">
            <ImgF
              alt="portofolio mobile deco left"
              src="/img/portofolio/mobile_assets/shard_left.png"
            />
          </div>

          <h1 className="text-center font-avenirBlack text-[7vw] text-lightWhite max-lg:grow lg:text-[4.9vw]/[4.8vw] lg:text-primary 2xl:text-[75px]/[64.5px]">
            {"Project Structure"}
          </h1>

          {/* Mobile Decoration Right */}
          <div className="w-[14%] opacity-[0.3] lg:hidden">
            <ImgF
              alt="portofolio mobile deco right"
              src="/img/portofolio/mobile_assets/shard_right.png"
            />
          </div>
        </div>
        <div className="mb-[3vw] mt-[1vw] h-[0.15vw] w-full bg-secondary max-lg:hidden 2xl:mb-[46px] 2xl:mt-[15px] 2xl:h-[2.3px]" />
        <ProjectStructureList
          divConfig={"w-full gap-[8vmin] 2xl:gap-[50px] max-lg:px-[8vw]"}
          lineConfig={"h-[146%] lg:h-[174%] mt-[1%]"}
        />
      </div>
    </section>
  );
}

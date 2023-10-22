// Import Components
import ImgF from "../global/ImgF";
import ProjectStructureList from "../misc/ProjectStructureList";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function ProjectStructure() {
  return (
    <section className="relative hidden lg:flex justify-center items-center h-[200vh]">
      {/* Background */}
      {createBackground("dark")}

      <div className="absolute top-0 left-0 w-[20vw] opacity-[30%] 2xl:w-[307px]">
        <ImgF
          alt="portofolio shard upper left"
          src="/img/portofolio/shard_upper_left.png"
        />
      </div>

      <div className="absolute top-0 right-0 w-[18vw] opacity-[30%] 2xl:w-[276px]">
        <ImgF
          alt="portofolio shard upper right"
          src="/img/portofolio/shard_upper_right.png"
        />
      </div>

      <div className="absolute top-[40vw] right-[18vw] w-[4vw] rotate-[45deg] 2xl:w-[61px] 2xl:right-[276px]">
        <ImgF
          alt="portofolio star green 1"
          src="/img/portofolio/type1green.png"
        />
      </div>

      <div className="absolute top-[25vw] left-[8vw] w-[10vw] 2xl:w-[154px] 2xl:left-[123px]">
        <ImgF
          alt="portofolio star blue 1"
          src="/img/portofolio/type2blue.png"
        />
      </div>

      <div className="absolute bottom-[27vw] right-[14vw] w-[8vw] rotate-[45deg] 2xl:w-[122px] 2xl:right-[215px]">
        <ImgF
          alt="portofolio star green 2"
          src="/img/portofolio/type1green.png"
        />
      </div>

      <div className="absolute bottom-[34vw] left-[12vw] w-[4vw] rotate-[-12deg] 2xl:w-[61px] 2xl:left-[184px]">
        <ImgF
          alt="portofolio star blue 2"
          src="/img/portofolio/type2blue.png"
        />
      </div>

      <div className="flex flex-col justify-center w-[40%] 2xl:w-[614px]">
        <h1 className="text-primary text-center text-[4.9vw]/[4.8vw] font-avenirBlack 2xl:text-[75px]/[64.5px]">
          {"Project Structure"}
        </h1>
        <div className="w-full h-[0.15vw] bg-secondary mt-[1vw] mb-[3vw] 2xl:h-[2.3px] 2xl:mt-[15px] 2xl:mb-[46px]" />
        <ProjectStructureList
          divConfig={"w-full gap-[8vmin] 2xl:gap-[50px]"}
          lineConfig={"h-[174%] mt-[1%]"}
        />
      </div>
    </section>
  );
}

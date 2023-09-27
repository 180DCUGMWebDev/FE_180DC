// Import Components
import ProjectStructureList from "../misc/ProjectStructureList";

// Import Configs
import { createBackground } from "@/config/Functions";

export default function ProjectStructure() {
  return (
    <section className="relative hidden lg:flex justify-center items-center h-[200vh]">
      {/* Background */}
      {createBackground("dark")}

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

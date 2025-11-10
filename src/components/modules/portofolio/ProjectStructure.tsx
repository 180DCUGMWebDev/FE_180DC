// Import Components
import ImageAction from "@/components/elements/ImageAction";
import ProjectStructureList from "@/components/contents/ProjectStructureList";

// Import Configs
import { createBackground } from "@/config/Functions";
import Container from "@/components/layout/Container";

export default function ProjectStructure() {
  return (
    <Container
      color="dark"
      className="lg:min-h-screen] relative flex h-fit items-center justify-center py-[10vh]"
    >
      <div className="absolute top-0 left-0 w-[20vw] opacity-30 max-lg:hidden 2xl:w-[307px]">
        <ImageAction alt="portofolio shard upper left" src="/img/portofolio/shard_upper_left.png" />
      </div>

      <div className="absolute top-0 right-0 w-[18vw] opacity-30 max-lg:hidden 2xl:w-[276px]">
        <ImageAction
          alt="portofolio shard upper right"
          src="/img/portofolio/shard_upper_right.png"
        />
      </div>

      <div className="absolute top-[40vw] right-[18vw] w-[4vw] rotate-45 max-lg:hidden 2xl:right-[276px] 2xl:w-[61px]">
        <ImageAction alt="portofolio star green 1" src="/img/portofolio/type1green.png" />
      </div>

      <div className="absolute top-[25vw] left-[8vw] w-[10vw] max-lg:hidden 2xl:left-[123px] 2xl:w-[154px]">
        <ImageAction alt="portofolio star cyan 1" src="/img/portofolio/type2blue.png" />
      </div>

      <div className="absolute right-[14vw] bottom-[27vw] w-[8vw] rotate-45 max-lg:hidden 2xl:right-[215px] 2xl:w-[122px]">
        <ImageAction alt="portofolio star green 2" src="/img/portofolio/type1green.png" />
      </div>

      <div className="absolute bottom-[34vw] left-[12vw] w-[4vw] -rotate-12 max-lg:hidden 2xl:left-[184px] 2xl:w-[61px]">
        <ImageAction alt="portofolio star cyan 2" src="/img/portofolio/type2blue.png" />
      </div>

      <div className="flex w-full flex-col justify-center max-lg:gap-[3vw] lg:w-[50%] 2xl:w-[60%]">
        <div className="flex items-center">
          {/* Mobile Decoration Left */}
          <div className="w-[14%] opacity-[0.3] lg:hidden">
            <ImageAction
              alt="portofolio mobile deco left"
              src="/img/portofolio/mobile_assets/shard_left.png"
            />
          </div>

          <h1 className="font-avenir-black text-center text-[7vw] text-gray-100 max-lg:grow lg:text-[4.9vw]/[4.8vw] lg:text-green-300 2xl:text-[75px]/[64.5px]">
            {"Project Structure"}
          </h1>

          {/* Mobile Decoration Right */}
          <div className="w-[14%] opacity-[0.3] lg:hidden">
            <ImageAction
              alt="portofolio mobile deco right"
              src="/img/portofolio/mobile_assets/shard_right.png"
            />
          </div>
        </div>
        <div className="mt-[1vw] mb-[3vw] h-[0.15vw] w-full bg-blue-300 max-lg:hidden 2xl:mt-[15px] 2xl:mb-[46px] 2xl:h-[2.3px]" />
        <ProjectStructureList
          divConfig={"w-full gap-[8vmin] 2xl:gap-[50px] max-lg:px-[8vw]"}
          lineConfig={"h-[146%] lg:h-[174%] mt-[1%]"}
        />
      </div>
    </Container>
  );
}

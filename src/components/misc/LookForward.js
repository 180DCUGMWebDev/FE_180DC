"use client";

// Import Packages
import { useRouter, usePathname } from "next/navigation";

// Import Components
import ImgF from "../global/ImgF";
import Button from "../global/Button";

// Import Configs
import { intLinks } from "@/config/Links";
import { directRoute } from "@/config/Functions";

export default function LookForward({ theme }) {
  // Router Hook
  const router = useRouter();
  const pathname = usePathname();

  // Themes
  const bgTheme =
    theme === "light"
      ? " bg-white "
      : theme === "dark"
      ? " bg-black "
      : " bg-primary ";

  const mobileBg =
  <div className="lg:hidden absolute -z-[998] left-0 top-0 w-full h-full">
    <div className="relative w-full h-full">
      <ImgF
        alit="building background lookforward"
        src="/img/global/bgimg-lookforward.png"
        className="absolute -bottom-[10%]"
      />
      <div className="absolute -z-[0] top-0 left-0 w-full h-[115%] bg-black opacity-[85%]" />
    </div>
  </div>

  const txtTheme =
    theme === "light"
      ? " text-black "
      : theme === "dark"
      ? " text-white "
      : " txt-primary ";

  const topLeftShard =
    pathname === "/portofolio" ? (
      <div className="absolute left-0 -top-[25vw] w-[25vw] opacity-[40%] 2xl:-top-[384px] 2xl:w-[384px]">
        <ImgF alt="portofolio shard left" src="/img/portofolio/shard1.png" />
      </div>
    ) : (
      <></>
    );

  const topRightShard =
    pathname === "/portofolio" ? (
      <div className="absolute right-0 -top-[15vw] w-[15vw] opacity-[25%] 2xl:-top-[230px] 2xl:w-[230px]">
        <ImgF alt="portofolio shard left" src="/img/portofolio/shard2.png" />
      </div>
    ) : (
      <></>
    );

  return (
    <section className="w-full h-fit">
      <div className="relative flex w-full h-[100vh] lg:h-full items-center justify-center">
        {/* Background */}
        {topLeftShard}
        {topRightShard}
        <div className={"max-lg:hidden absolute -z-[998] w-full h-full " + bgTheme} />
        {mobileBg}

        {/* Content */}
        <div className="relative w-full h-full 2xl:w-[1536px] mx-[50px]">
          <div className="flex flex-col justify-center items-center w-full h-full lg:gap-[16px] lg:p-[100px] py-[15vh] 2xl:py-[110px]">
            <h1 className="text-center font-avenirBlack text-[7vw] lg:text-[5.4vw]/[6vw] text-transparent bg-clip-text bg-gradient-to-br from-primary from-[35%] to-secondary to-[65%] leading-[1] py-[4px] 2xl:text-[83px]/[92px]">
              {"We Look Forward to"}
              <br />
              {"Speaking with You"}
            </h1>
            <h2
              className={
                "font-latoRegular text-center max-lg:text-lightWhite text-[2.8vw] lg:text-[1.8vw]/[2.1vw] mt-[8px] 2xl:text-[27.6px]/[32.3px] " +
                txtTheme
              }
            >
              {"Explore our different services offerings, and"}
              <br />
              {"reach out to us for a discussion."}
            </h2>
            <Button
              color={"green"}
              text={"Consult Now!"}
              addClass={
                "w-[18vw] lg:w-[11vw] text-[2vw] lg:text-[1.1vw] py-[2px] lg:py-[9px] 2xl:w-[170px] 2xl:text-[17px] max-lg:mt-[10px]"
              }
              action={() => {
                directRoute(intLinks.Apply, router, pathname);
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

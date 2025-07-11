"use client";

// Import Packages
import { useRouter, usePathname } from "next/navigation";

// Import Components
import ImgF from "@/components/global/ImgF";
import Button from "@/components/global/Button";

// Import Configs
import { intLinks } from "@/config/Links";
import { directRoute } from "@/config/Functions";

export default function LookForward({ theme }) {
  // Router Hook
  const router = useRouter();
  const pathname = usePathname();

  // Themes
  const bgTheme =
    theme === "light" ? " bg-white " : theme === "dark" ? " bg-black " : " bg-primary ";

  const mobileBg = (
    <div className="absolute left-0 top-0 -z-[998] h-full w-full lg:hidden">
      <div className="relative h-full w-full">
        <ImgF
          alt="building background lookforward"
          src="/img/global/bgimg_lookforward.png"
          className="absolute top-0"
        />
        <div className="absolute left-0 top-0 -z-[0] h-[115%] w-full bg-black opacity-[85%]" />
      </div>
    </div>
  );

  const txtTheme =
    theme === "light" ? " text-black " : theme === "dark" ? " text-white " : " txt-primary ";

  const topLeftShard =
    pathname === "/portofolio" ? (
      <div className="absolute -top-[25vw] left-0 w-[25vw] opacity-[40%] max-lg:hidden 2xl:-top-[384px] 2xl:w-[384px]">
        <ImgF alt="portofolio shard left" src="/img/portofolio/shard1.png" />
      </div>
    ) : (
      <></>
    );

  const topRightShard =
    pathname === "/portofolio" ? (
      <div className="absolute -top-[15vw] right-0 w-[15vw] opacity-[25%] max-lg:hidden 2xl:-top-[230px] 2xl:w-[230px]">
        <ImgF alt="portofolio shard left" src="/img/portofolio/shard2.png" />
      </div>
    ) : (
      <></>
    );

  return (
    <section className="h-fit w-full">
      <div className="relative flex h-[100vh] w-full items-center justify-center max-lg:max-h-[100vmin] lg:h-full">
        {/* Background */}
        {topLeftShard}
        {topRightShard}
        <div className={"absolute -z-[998] h-full w-full max-lg:hidden " + bgTheme} />
        {mobileBg}

        {/* Content */}
        <div data-gsap="up" className="relative mx-[50px] h-full w-full 2xl:w-[1536px]">
          <div className="flex h-full w-full flex-col items-center justify-center py-[15vh] lg:gap-[16px] lg:p-[100px] 2xl:py-[110px]">
            <h1 className="bg-gradient-to-br from-primary from-[35%] to-secondary to-[65%] bg-clip-text py-[4px] text-center font-avenirBlack text-[7vw] leading-[1] text-transparent lg:text-[5.4vw]/[6vw] 2xl:text-[83px]/[92px]">
              {"We Look Forward to"}
              <br />
              {"Speaking with You"}
            </h1>
            <h2
              className={
                "mt-[8px] text-center font-latoRegular text-[2.8vw] max-lg:text-lightWhite lg:text-[1.8vw]/[2.1vw] 2xl:text-[27.6px]/[32.3px] " +
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
                "w-[18vw] lg:w-[11vw] text-[2vw] lg:text-[1.1vw] py-[2px] lg:py-[9px] hover:bg-[green] duration-500 transition-all 2xl:w-[170px] 2xl:text-[17px] max-lg:mt-[10px]"
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

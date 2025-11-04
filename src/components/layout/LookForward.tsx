"use client";

// Import Packages
import { useRouter, usePathname } from "next/navigation";

// Import Components
import ImageAction from "@/components/elements/ImageAction";
import Button180 from "@/components/elements/Button180";

// Import Configs
import { intLinks } from "@/config/Links";
import { directRoute } from "@/config/Functions";

export default function LookForward({ theme }) {
  // Router Hook
  const router = useRouter();
  const pathname = usePathname();

  // Themes
  const bgTheme =
    theme === "light" ? " bg-white " : theme === "dark" ? " bg-black-300 " : " bg-green-300 ";

  const mobileBg = (
    <div className="absolute top-0 left-0 -z-998 h-full w-full lg:hidden">
      <div className="relative h-full w-full">
        <ImageAction
          alt="building background lookforward"
          src="/img/global/bgimg_lookforward.png"
          className="absolute top-0"
        />
        <div className="bg-black-300 absolute top-0 left-0 -z-0 h-[115%] w-full opacity-85" />
      </div>
    </div>
  );

  const txtTheme =
    theme === "light" ? " text-black-300 " : theme === "dark" ? " text-white " : " text-green-300 ";

  const topLeftShard =
    pathname === "/portofolio" ? (
      <div className="absolute -top-[480px] left-0 w-[480px] opacity-40 max-lg:hidden 2xl:-top-[384px] 2xl:w-[384px]">
        <ImageAction alt="portofolio shard left" src="/img/portofolio/shard1.png" />
      </div>
    ) : (
      <></>
    );

  const topRightShard =
    pathname === "/portofolio" ? (
      <div className="absolute -top-[288px] right-0 w-[288px] opacity-25 max-lg:hidden 2xl:-top-[230px] 2xl:w-[230px]">
        <ImageAction alt="portofolio shard left" src="/img/portofolio/shard2.png" />
      </div>
    ) : (
      <></>
    );

  return (
    <section className="h-fit w-full">
      <div className="relative flex w-full items-center justify-center">
        {/* Background */}
        {topLeftShard}
        {topRightShard}
        <div className={"absolute -z-998 h-full w-full max-lg:hidden " + bgTheme} />
        {mobileBg}

        {/* Content */}
        <div className="relative mx-auto h-full w-full max-w-[2160px]">
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 py-16 lg:gap-6 lg:p-[50px] lg:py-20 2xl:py-[60px]">
            <h1 className="font-avenir-black bg-gradient-to-br from-green-300 from-35% to-cyan-300 to-65% bg-clip-text text-center text-4xl leading-tight text-transparent sm:text-5xl lg:text-[60px]/[66px] 2xl:text-[52px]/[58px]">
              {"We Look Forward to"}
              <br />
              {"Speaking with You"}
            </h1>
            <h2
              className={
                "font-lato-regular text-center text-base leading-relaxed max-lg:text-gray-100 sm:text-lg lg:text-[22px]/[26px] 2xl:text-[19px]/[23px] " +
                txtTheme
              }
            >
              {"Explore our different services offerings, and"}
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              {"reach out to us for a discussion."}
            </h2>
            <Button180
              size="md"
              color="green"
              text="Consult Now!"
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

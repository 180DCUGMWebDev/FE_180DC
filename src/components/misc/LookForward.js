"use client"

// Import Packages
import { useRouter, usePathname } from "next/navigation";

// Import Components
import Button from "../global/Button";

// Import Configs
import { intLinks } from "@/config/Links";
import { directRoute } from "@/config/Functions"

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

  const txtTheme =
    theme === "light"
      ? " text-black "
      : theme === "dark"
      ? " text-white "
      : " txt-primary ";

  return (
    <section className="w-full h-fit">
      <div className="relative hidden lg:flex w-full h-full items-center justify-center">
        {/* Background */}
        <div className={"absolute -z-[998] w-full h-full " + bgTheme} />

        {/* Content */}
        <div className="relative w-full h-full 2xl:w-[1536px] mx-[50px]">
          <div className="flex flex-col justify-center items-center w-full h-full gap-[16px] p-[100px] py-[15vh] 2xl:py-[110px]">
            <h1 className="text-center font-avenirBlack text-[5.4vw]/[6vw] text-transparent bg-clip-text bg-gradient-to-br from-primary from-[35%] to-secondary to-[65%] leading-[1] py-[4px] 2xl:text-[83px]/[92px]">
              {"We Look Forward to"}
              <br />
              {"Speaking with You"}
            </h1>
            <h2
              className={
                "font-latoRegular text-center text-[1.8vw]/[2.1vw] mt-[8px] 2xl:text-[27.6px]/[32.3px] " +
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
              addClass={"w-[11vw] text-[1.1vw] py-[9px] 2xl:w-[170px] 2xl:text-[17px]"}
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

"use client";

// Import Packages
import { useRouter, usePathname } from "next/navigation";

// Import Configs
import { intLinks } from "@/config/Links";
import { directRoute } from "@/config/Functions";
import ImgF from "@/components/element/ImgF";
import Button180 from "@/components/element/Button";

export default function SecureYours({ theme }) {
  // Router Hook
  const router = useRouter();

  return (
    <section className="h-fit w-full overflow-hidden">
      <div className="relative flex h-screen w-full items-center justify-center bg-[#1A1A1A] max-lg:max-h-[100vmin] lg:h-full">
        {/* Background */}
        <div className="absolute right-0 top-0 w-[28vw] opacity-10 2xl:w-[330px]">
          <ImgF alt="" src="/img/store/merch/right-shard.png" />
        </div>

        {/* Content */}
        <div data-gsap="up" className="relative mx-[50px] h-full w-full 2xl:w-[1536px]">
          <div className="flex h-full w-full flex-col items-center justify-center py-[15vh] lg:gap-[16px] lg:p-[100px] 2xl:py-[110px]">
            <h1 className="bg-linear-to-br from-primary from-35% to-secondary to-65% bg-clip-text py-[4px] text-center font-avenir-black text-[12vw] leading-none text-transparent lg:text-[6vw]/[6vw] 2xl:text-[90px]/[92px]">
              {"Secure yours"}
              <br />
              {"right now!"}
            </h1>
            <h2
              className={
                "mt-[8px] text-center font-lato-regular text-[3.8vw] text-white max-lg:text-light-white lg:text-[1.8vw]/[2.1vw] 2xl:text-[27.6px]/[32.3px]"
              }
            >
              {"discover the blueprint for"}
              <br />
              {"consulting excellence"}
            </h2>
            <Button180
              color={"green"}
              text={"Buy Now"}
              addClass={
                "max-lg:mt-[7vw] lg:mt-[0.5vw]! hover:bg-[green] transition-all duration-500 w-[22vw] lg:w-[11vw] text-[3.3vw] lg:text-[1.1vw] py-[2vw] lg:py-[9px] 2xl:w-[170px] 2xl:text-[17px]"
              }
              action={() => {
                window.location.href =
                  "https://docs.google.com/forms/d/e/1FAIpQLSf9lMS6EHYZPyo6IL80EcYrdxVglOv1PnpZnTS29Ew0jBHEMw/viewform";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

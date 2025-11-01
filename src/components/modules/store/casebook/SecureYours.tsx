"use client";

// Import Packages
import { useRouter, usePathname } from "next/navigation";

// Import Configs
import { intLinks } from "@/config/Links";
import { directRoute } from "@/config/Functions";
import ImageAction from "@/components/elements/ImageAction";
import Button180 from "@/components/elements/Button180";

export default function SecureYours({ theme }) {
  // Router Hook
  const router = useRouter();

  return (
    <section className="h-fit w-full overflow-hidden">
      <div className="relative flex h-screen w-full items-center justify-center bg-[#1A1A1A] max-lg:max-h-[100vmin] lg:h-full">
        {/* Background */}
        <div className="absolute top-0 right-0 w-[28vw] opacity-10 2xl:w-[330px]">
          <ImageAction alt="" src="/img/store/merch/right-shard.png" />
        </div>

        {/* Content */}
        <div data-gsap="up" className="relative mx-[50px] h-full w-full 2xl:w-[1536px]">
          <div className="flex h-full w-full flex-col items-center justify-center py-[15vh] lg:gap-[16px] lg:p-[100px] 2xl:py-[110px]">
            <h1 className="font-avenir-black bg-linear-to-br from-green-300 from-35% to-cyan-300 to-65% bg-clip-text py-[4px] text-center text-[12vw] leading-none text-transparent lg:text-[6vw]/[6vw] 2xl:text-[90px]/[92px]">
              {"Secure yours"}
              <br />
              {"right now!"}
            </h1>
            <h2
              className={
                "font-lato-regular mt-[8px] text-center text-[3.8vw] text-white max-lg:text-gray-100 lg:text-[1.8vw]/[2.1vw] 2xl:text-[27.6px]/[32.3px]"
              }
            >
              {"discover the cyanprint for"}
              <br />
              {"consulting excellence"}
            </h2>
            <Button180
              color="green"
              text="Buy Now"
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

"use client";

import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { useDesktop } from "@/hooks/DesktopProvider";
import { useTablet } from "@/hooks/TabletProvider";

export default function TimelineCard({
  period,
  description,
  index,
  isLast = false,
  className,
  ...props
}) {
  const isDesktop = useDesktop();
  const isTablet = useTablet();

  let dashHeights: number[];
  let dashGap: number;
  if (isDesktop) {
    dashHeights = [4, 7, 7, 7, 4];
    dashGap = 7;
  } else if (isTablet) {
    dashHeights = [2, 4, 4, 4, 2];
    dashGap = 4;
  } else {
    dashHeights = [1, 2, 2, 2, 1];
    dashGap = 2;
  }

  return (
    <motion.div className={cn("relative flex flex-row items-center", className)} {...props}>
      <div className="absolute top-7 left-[133px] z-30 w-1 sm:left-[165px] md:left-[235px] lg:top-18 lg:left-[373px] 2xl:top-22 2xl:left-[400px]">
        {isLast
          ? null
          : dashHeights.map((height, index) => {
              // Hitung posisi Y
              let yPosition = 0;
              for (let i = 0; i < index; i++) {
                yPosition += dashHeights[i] + dashGap;
              }

              const isLast = index === dashHeights.length - 1;

              return (
                <div
                  key={index}
                  className="absolute w-[1.21px] rounded-sm bg-[#58B9D1] lg:w-[3.26px]"
                  style={{
                    left: 0,
                    top: `${yPosition}px`,
                    height: `${height}px`,
                  }}
                />
              );
            })}
      </div>
      {/* Period */}
      <motion.div
        className="flex max-w-[120px] min-w-[115px] flex-wrap items-center justify-center rounded-[6.94px] bg-[#77BA47] py-[3%] sm:ml-[5%] sm:py-[1.2%] md:min-w-[170px] md:py-[1.5%] lg:min-w-[275px] lg:rounded-[18.65px] lg:py-[2%]"
        data-aos="fade"
        data-aos-duration="400"
        data-aos-delay={index * 200}
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="flex items-center gap-2">
          <div className="font-lato-black text-[8.95px] text-white md:text-[14px] lg:text-[24.04px]">
            {period}
          </div>
        </div>
      </motion.div>

      {/* Timeline Circle */}
      <div className="absolute top-1/2 left-32 flex -translate-y-1/2 flex-col items-center justify-center sm:left-40 md:left-[230px] lg:left-90 2xl:left-97">
        <motion.div
          className="relative z-10 flex h-[11.02px] w-[11.02px] items-center justify-center rounded-full bg-[#58B9D1] shadow-lg lg:h-[29.61px] lg:w-[29.61px]"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay={index * 200}
          data-aos-anchor-placement="top-bottom"
          data-aos-once="true"
          data-aos-easing="ease-out-back"
        ></motion.div>
      </div>

      {/* Timeline Card */}
      <motion.div
        className="group ml-[10%] w-full transition-all duration-300 lg:ml-[3%] lg:w-[50%] lg:pl-[60px]"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay={index * 150 + 150}
        data-aos-anchor-placement="top-bottom"
        data-aos-once="true"
        data-aos-easing="ease-out-cubic"
      >
        {/* Content Section */}
        <div className="text-[8.95px] leading-relaxed text-black lg:text-[24.04px]">
          {description}
        </div>
      </motion.div>
    </motion.div>
  );
}

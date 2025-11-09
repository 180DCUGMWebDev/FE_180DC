"use client";

import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";
import { useDesktop } from "@/utils/hooks/DesktopProvider";
import { useTablet } from "@/utils/hooks/TabletProvider";

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

  let dashHeights: number[]
  let dashGap: number
  if (isDesktop) {
    dashHeights = [4, 7, 7, 7, 4];
    dashGap = 7
  } else if (isTablet){
    dashHeights = [2, 4, 4, 4, 2];
    dashGap = 4
  } else {
    dashHeights = [1, 2, 2, 2, 1];
    dashGap = 2
  }

  return (
    <motion.div          
      className={cn(
        "relative flex flex-row items-center",
        className
      )}
      {...props}
    >
      <div className="absolute z-30 left-[133px] sm:left-[165px] md:left-[235px] lg:left-[373px] 2xl:left-[400px] top-7 lg:top-18 2xl:top-22 w-1">                  
        {isLast ? null : dashHeights.map((height, index) => {
          // Hitung posisi Y
          let yPosition = 0;
          for (let i = 0; i < index; i++) {
            yPosition += dashHeights[i] + dashGap;
          }

          const isLast = index === dashHeights.length - 1;
          
          return (
            <div
              key={index}
              className="absolute w-[1.21px] lg:w-[3.26px] bg-[#58B9D1] rounded-sm"
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
        className="min-w-[115px] max-w-[120px] md:min-w-[170px] lg:min-w-[275px] py-[3%] sm:py-[1.2%] sm:ml-[5%] md:py-[1.5%] lg:py-[2%] flex justify-center items-center rounded-[6.94px] lg:rounded-[18.65px] flex-wrap bg-[#77BA47] "
        data-aos="fade"
        data-aos-duration="400"
        data-aos-delay={index * 200}
        data-aos-once="true"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="flex items-center gap-2">
          <div className="text-white text-[8.95px] md:text-[14px] lg:text-[24.04px] font-lato-black">{period}</div>
        </div>
      </motion.div>

      {/* Timeline Circle */}
      <div className="flex flex-col justify-center items-center absolute left-32 top-1/2 -translate-y-1/2 sm:left-40 md:left-[230px] lg:left-90 2xl:left-97">
        <motion.div
          className="w-[11.02px] h-[11.02px] lg:w-[29.61px] lg:h-[29.61px] bg-[#58B9D1] rounded-full flex justify-center items-center z-10 relative shadow-lg"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay={index * 200}
          data-aos-anchor-placement="top-bottom"
          data-aos-once="true"
          data-aos-easing="ease-out-back"
        >
        </motion.div>
      </div>

      {/* Timeline Card */}
      <motion.div
        className="w-full ml-[10%] lg:w-[50%] lg:pl-[60px] lg:ml-[3%] transition-all duration-300 group"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay={(index * 150) + 150}
        data-aos-anchor-placement="top-bottom"
        data-aos-once="true"
        data-aos-easing="ease-out-cubic"
      >
        {/* Content Section */}
        <div className="text-black leading-relaxed text-[8.95px] lg:text-[24.04px]">
          {description}
        </div>
      </motion.div>
    </motion.div>
  );
}
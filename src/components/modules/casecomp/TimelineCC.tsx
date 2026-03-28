import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";

const timelineSteps = [
  {
    title: "Open Registration",
    date: "29 Maret - 27 April 2026",
    description: "(Dibuka sampai 30 April)",
  },
  {
    title: "Early Bird",
    date: "29 March - 8 April 2026",
    description: "",
  },
  {
    title: "Normal",
    date: "9 April - 27 April 2026",
    description: "",
  },
  {
    title: "Case Release",
    date: "19 April 2026",
    description: "",
  },
  {
    title: "Submission Period",
    date: "19 April - 2 May 2026",
    description: "(23.59 WIB)",
  },
  {
    title: "Masterclass",
    date: "25 April 2026",
    description: "",
  },
  {
    title: "Semifinal Announcement",
    date: "8 May 2026",
    description: "",
  },
  {
    title: "Training Days",
    date: "16 May 2026",
    description: "",
  },
  {
    title: "Finalist Announcement",
    date: "29 May 2026",
    description: "",
  },
  {
    title: "Company Visit",
    date: "27 June 2026",
    description: "& Final Mentoring",
  },
  {
    title: "Final Presentation",
    date: "4 July 2026",
    description: "& Awarding",
  },
];

export function TimelineCC() {
  return (
    <section className="relative z-20 w-full pt-8 pb-12 lg:pb-24">
      {/* Polyangle decorations */}
      <div className="pointer-events-none absolute top-[15%] -left-[3%] z-10 h-[140px] w-[140px] opacity-60 lg:h-[200px] lg:w-[200px]">
        <Image
          src="/img/videocasecomp/polyangle.webp"
          alt=""
          width={250}
          height={250}
          className="h-full w-full object-contain blur-md"
        />
      </div>
      <div className="pointer-events-none absolute right-[1%] bottom-[10%] z-10 h-[100px] w-[100px] opacity-50 lg:h-[150px] lg:w-[150px]">
        <Image
          src="/img/videocasecomp/polyangle.webp"
          alt=""
          width={200}
          height={200}
          className="h-full w-full object-contain blur-sm"
        />
      </div>

      {/* Title bar */}
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-once="true"
        className="relative mb-10 w-full items-center justify-center border-y border-black/50 py-5 sm:py-6"
      >
        <div className="absolute inset-0 w-full bg-gradient-to-r from-[#58B9D1]/10 via-[#73B743] to-[#58B9D1]/10" />
        <h2
          className="font-avenir-black relative z-10 text-center text-xl italic sm:text-3xl md:text-4xl lg:text-5xl"
          style={{
            background: "linear-gradient(90deg, #8ADF60, #58B9D1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            WebkitTextStroke: "1.5px black",
            filter: "drop-shadow(3px 4px 5px rgba(0,0,0,0.8))",
          }}
        >
          Competition Timeline
        </h2>
      </div>

      {/* Timeline cards sequence */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col items-center gap-y-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-4 sm:gap-y-12 lg:gap-x-8 xl:gap-x-12">
          {timelineSteps.map((step, i) => (
            <React.Fragment key={i}>
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={(i % 4) * 150}
                data-aos-once="true"
                className="relative flex min-h-[160px] w-[280px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-white text-center shadow-xl transition-transform hover:-translate-y-1 sm:aspect-[4/3] sm:min-h-0 sm:w-[300px] lg:w-[240px] xl:w-[280px]"
              >
                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-white p-5">
                  <h3 className="font-avenir-black text-[15px] leading-tight text-[#2B2B2B] uppercase sm:text-[18px]">
                    {step.title}
                  </h3>
                  <p className="font-lato-bold mt-2 text-[13px] text-[#2b2b2b] sm:text-sm">{step.date}</p>
                  {step.description && (
                    <p className="font-lato-regular mt-1 text-[11px] leading-tight text-gray-500 sm:text-[12px]">
                      {step.description}
                    </p>
                  )}
                </div>
                {/* Green bottom border gradient */}
                <div className="absolute bottom-0 left-0 h-[6px] w-full bg-gradient-to-r from-[#8ADF60] to-[#58B9D1]" />
              </div>

              {/* Connector Arrow */}
              {i < timelineSteps.length - 1 && (
                <div 
                  data-aos="fade-in"
                  data-aos-duration="600"
                  data-aos-delay={(i % 4) * 150 + 75}
                  data-aos-once="true"
                  className="flex items-center justify-center py-4 sm:py-0"
                >
                  {/* Desktop/Tablet Arrow (Right) */}
                  <ArrowRight className="hidden h-5 w-5 text-[#73B743] opacity-40 sm:block" />
                  {/* Mobile Arrow (Down) */}
                  <ArrowDown className="h-5 w-5 text-[#73B743] opacity-40 sm:hidden" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

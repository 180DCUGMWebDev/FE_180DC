import Image from "next/image";

const timelineSteps = [
  {
    title: "Open Registration",
    date: "8–29 March 2026",
    description: "(23.59 WIB)",
  },
  {
    title: "Open Submission",
    date: "8 March–3 April 2026",
    description: "(23.59 WIB)",
  },
  {
    title: "Announcement",
    date: "8 April 2026",
    description: "",
  },
];

export function TimelineVCC() {
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

      {/* Timeline cards */}
      <div className="relative z-20 mx-auto px-4 lg:px-6">
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-center lg:gap-8">
          {timelineSteps.map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={i * 150}
                data-aos-once="true"
                className="relative flex aspect-[4/3] w-full max-w-[290px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-white text-center shadow-xl transition-transform hover:-translate-y-1 md:max-w-[320px]"
              >
                <div className="relative z-10 flex h-full w-full flex-col items-center justify-center bg-white p-6">
                  <h3 className="font-avenir-black text-[20px] leading-tight text-[#2B2B2B] uppercase">
                    {step.title}
                  </h3>
                  <p className="font-lato-bold mt-2 text-sm text-[#2B2B2B]">{step.date}</p>
                  {step.description && (
                    <p className="font-lato-regular mt-1 text-[13px] text-gray-500">
                      {step.description}
                    </p>
                  )}
                </div>
                {/* Green bottom border gradient */}
                <div className="absolute bottom-0 left-0 h-[6px] w-full bg-gradient-to-r from-[#8ADF60] to-[#58B9D1]" />
              </div>

              {/* Arrow between cards */}
              {i < timelineSteps.length - 1 && (
                <div className="my-2 flex min-w-[30px] rotate-90 items-center justify-center lg:my-0 lg:rotate-0">
                  <div className="font-avenir-light flex tracking-[2px] text-white">--&gt;</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

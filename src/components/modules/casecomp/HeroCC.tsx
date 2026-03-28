"use client";

import Image from "next/image";
import Button180 from "@/components/elements/Button180";
import { usePathname } from "next/navigation";
import { Settings, Users, BarChart3, Award, Briefcase } from "lucide-react";
import Container from "@/components/layout/Container";

const benefits = [
  {
    text: "Compete on an APAC Stage",
    icon: <Settings className="h-5 w-5 text-black" />,
  },
  {
    text: "Sharpen Real-World Strategic Thinking",
    icon: <Users className="h-5 w-5 text-black" />,
  },
  {
    text: "Expand Your Global Network",
    icon: <BarChart3 className="h-5 w-5 text-black" />,
  },
  {
    text: "Boost Your Career Credibility",
    icon: <Award className="h-5 w-5 text-black" />,
  },
  {
    text: "Unlock Recognition and Opportunities",
    icon: <Briefcase className="h-5 w-5 text-black" />,
  },
];

export function HeroCC() {
  const pathname = usePathname();
  const formRef = `${pathname}/form`;

  return (
    <section className="relative z-20 w-full py-20 pb-16 lg:py-28 lg:pb-24">
      {/* Polyangle decorations */}
      <div className="pointer-events-none absolute top-[5%] -left-[6%] z-[-1] h-[180px] w-[180px] opacity-80 lg:h-[280px] lg:w-[280px]">
        <Image
          src="/img/videocasecomp/polyangle.webp"
          alt=""
          width={300}
          height={300}
          className="h-full w-full object-contain blur-[2px]"
        />
      </div>
      <div className="pointer-events-none absolute top-[15%] -right-[5%] z-[-1] h-[120px] w-[120px] opacity-70 lg:h-[220px] lg:w-[220px]">
        <Image
          src="/img/videocasecomp/polyangle.webp"
          alt=""
          width={200}
          height={200}
          className="h-full w-full object-contain blur-[1px]"
        />
      </div>

      {/* Main content */}
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto flex flex-col items-center text-center">
          {/* Title */}
          <h1
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-once="true"
            className="font-avenir-black text-[40px] leading-tight text-white md:text-[52px] lg:text-[72px]"
            style={{
              textShadow: "0px 4px 6px rgba(0,0,0,0.8)",
              WebkitTextStroke: "1px #000",
            }}
          >
            180DC Case Competition
          </h1>

          {/* Subtitle */}
          <p
            data-aos="fade-down"
            data-aos-duration="600"
            data-aos-delay="100"
            data-aos-once="true"
            className="font-lato-regular mt-4 text-base text-white md:text-xl lg:text-3xl"
          >
            <span className="font-lato-black-italic mr-2 text-white">By</span>
            <span
              className="font-lato-black text-stroke-[1px] text-stroke-black text-[#8ADF60]"
              style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.8)" }}
            >
              180DC UGM
            </span>
          </p>

          {/* Tagline Box - Pulled out slightly from exact bounds visually if needed, but contained in code */}
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
            data-aos-once="true"
            className="relative mt-8 w-full items-center justify-center border-y border-black/50 py-5 sm:mt-12 sm:py-6 lg:mt-16"
          >
            <div className="absolute inset-0 w-full bg-gradient-to-r from-[#58B9D1]/10 via-[#73B743] to-[#58B9D1]/10" />
            <h2
              className="font-avenir-black relative z-10 text-[24px] italic sm:text-4xl md:text-5xl lg:text-[64px]"
              style={{
                background: "linear-gradient(90deg, #8ADF60, #58B9D1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                WebkitTextStroke: "1.5px black",
                filter: "drop-shadow(3px 4px 5px rgba(0,0,0,0.8))",
              }}
            >
              Winning the Next Curve: Formulating Future-Ready Growth Strategies
            </h2>
          </div>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            data-aos-once="true"
            className="font-lato-regular mt-8 text-lg text-white md:text-xl"
          >
            Turn your insight into impact,
          </p>
          <p className="font-lato-regular mt-1 text-base text-white md:text-lg">
            Let&apos;s shape tomorrow&apos;s strategies! 🌟
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="400"
            data-aos-once="true"
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button180
              color="green"
              text="Enroll Me"
              href={formRef}
              size="lg"
              className="font-avenir-heavy rounded-full px-10"
            />
            <Button180
              color="white"
              text="Guidebook"
              href="#guidebook"
              size="lg"
              className="font-avenir-heavy rounded-full px-10 text-[#2B2B2B]"
            />
          </div>

          {/* Benefits Section */}
          <div className="relative z-20 mx-auto mt-20 flex w-full flex-col px-4 sm:px-2">
            {/* Benefits label with full-width line */}
            <div className="mb-8 flex w-full items-center justify-center gap-6">
              <div className="h-[1px] flex-grow bg-white/40" />
              <span className="font-avenir-heavy shrink-0 text-sm tracking-[0.05em] text-white">
                Benefits
              </span>
              <div className="h-[1px] flex-grow bg-white/40" />
            </div>

            {/* Benefit cards */}
            <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:flex-wrap lg:flex-nowrap">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay={i * 100 + 500}
                  data-aos-once="true"
                  className="relative flex min-h-[85px] w-full flex-col justify-center overflow-hidden rounded-[20px] bg-white p-4 shadow-xl transition-transform hover:-translate-y-1 sm:w-[48%] lg:w-[19%]"
                >
                  <div className="z-10 flex h-full w-full items-center justify-between gap-3">
                    <p className="font-lato-bold text-left text-[13px] leading-snug text-[#2B2B2B]">
                      {b.text}
                    </p>
                    <div className="shrink-0">{b.icon}</div>
                  </div>
                  {/* Green bottom border gradient */}
                  <div className="absolute bottom-0 left-0 h-[6px] w-full bg-gradient-to-r from-[#8ADF60] to-[#58B9D1]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

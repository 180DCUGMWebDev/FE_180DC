import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import { ArrowRight, Calendar, Users, Briefcase, GraduationCap, Video } from "lucide-react";

const programs = [
  {
    title: "Open Recruitment",
    description: "Join our next batch of driven consultants. Apply now to kickstart your journey.",
    href: "/events/oprec",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1500&auto=format&fit=crop", // collaborative team
    available: true,
  },
  {
    title: "Consulting Bootcamp",
    description:
      "Intensive training program designed to teach core consulting frameworks and skills.",
    href: "/events/bootcamp",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1500&auto=format&fit=crop", // workshop/bootcamp setting
    available: true,
  },
  {
    title: "Academy",
    description: "Exclusive educational sessions led by top-tier consultants and industry experts.",
    href: "/events/academy",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1500&auto=format&fit=crop", // lecture/presentation
    available: true,
  },
  {
    title: "Case Competition",
    description:
      "Test your business acumen by solving real-world challenges in our upcoming competitions.",
    href: "/events/casecompetition",
    icon: Calendar,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1500&auto=format&fit=crop", // team working on computers/data
    available: true,
  },
  {
    title: "Video Case Competition",
    description:
      "Showcase your analytical and presentation skills through a creative video case study.",
    href: "/events/videocasecompetition",
    icon: Video,
    image:
      "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=1500&auto=format&fit=crop", // videography/camera setup
    available: true,
  },
];

export default function EventsHub() {
  return (
    <main className="bg-black-300 min-h-screen">
      {/* McKinsey-style List Section */}
      <section className="bg-black-300 pt-16 pb-32">
        <Container>
          <div className="mt-4 flex w-full flex-col">
            {/* Section Header */}
            <div className="mb-4 flex flex-col items-start justify-between pb-6">
              <h2 className="font-avenir-black text-3xl text-white md:text-4xl">
                Our <span className="text-green-300">Programs</span> and{" "}
                <span className="text-green-300">Events</span>
              </h2>
              <p className="font-mulish mb-3 text-sm text-gray-300 md:text-base">
                Explore the various programs and events organized by 180 Degrees Consulting UGM.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {programs.map((program, index) => {
                const isFeatured = index === 0;

                const content = (
                  <>
                    {/* Background Image Area */}
                    <div className="bg-black-400 absolute inset-0 z-0 overflow-hidden">
                      {/* Contextual Background Image with full color restored */}
                      <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-70"
                        style={{ backgroundImage: `url('${program.image}')` }}
                      />

                      {/* Dark gradient overlay for text readability */}
                      <div className="from-black-400 via-black-400/80 absolute inset-0 bg-gradient-to-t to-transparent opacity-90" />
                    </div>

                    {/* Content Area (Bottom Aligned) */}
                    <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
                      <div className="flex flex-col gap-3 transition-transform duration-500 group-hover:-translate-y-2">
                        {/* Kicker / Category */}
                        <span className="font-avenir-heavy text-xs tracking-[0.15em] text-green-300 uppercase">
                          {program.available ? "Program" : "Coming Soon"}
                        </span>

                        {/* Title */}
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-avenir-black text-2xl leading-[1.2] text-white md:text-3xl">
                            {program.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="font-mulish mt-1 line-clamp-2 hidden text-sm text-gray-300 md:block md:text-base">
                          {program.description}
                        </p>

                        {/* Button Replica (To avoid hydration parsing errors with nested <a> and <button>, we fake the Button180 style directly on a div) */}
                        {program.available && (
                          <div className="mt-4 flex items-center">
                            <div className="font-lato-regular inline-flex items-center justify-center gap-2 rounded-[10px] border-r-[1px] border-b-[2px] border-green-400 bg-green-300 px-6 py-2 text-sm whitespace-nowrap text-white shadow-md transition-all duration-300 group-hover:bg-green-400 group-hover:shadow-lg">
                              <span className="relative inline-flex items-center overflow-hidden">
                                <span>Explore</span>
                                <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                );

                if (!program.available) {
                  return (
                    <div
                      key={index}
                      className={`group relative h-[300px] w-full cursor-not-allowed overflow-hidden opacity-80 md:h-[350px] ${
                        isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                      }`}
                    >
                      {content}
                    </div>
                  );
                }

                return (
                  <Link
                    key={index}
                    href={program.href}
                    className={`group relative block h-[300px] w-full overflow-hidden md:h-[350px] ${
                      isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                    }`}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

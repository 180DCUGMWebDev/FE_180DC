import React from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Button180 from "@/components/elements/Button180";
import { ArrowRight } from "lucide-react";

export default function HeroArticle() {
  return (
    <section className="bg-black-400 relative flex min-h-[50vh] items-center overflow-hidden pt-32 pb-12 text-white">
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/img/industrialreport/bg-indusrep.png"
          alt="180DC UGM Article Hub Background"
          fill
          className="object-cover"
          priority
        />
        <div className="from-black-400 absolute inset-0 bg-gradient-to-t to-transparent" />
      </div>

      {/* Smooth transition gradient matching the bg-black-300 of the section below */}
      <div className="from-black-300 absolute right-0 bottom-0 left-0 z-0 h-32 bg-gradient-to-t to-transparent" />

      <Container className="relative z-10 w-full">
        <div className="flex flex-col gap-4">
          <h1 className="font-avenir-black text-4xl leading-tight md:text-5xl lg:text-6xl">
            Our <span className="text-green-300">Thoughts</span>
          </h1>
          <p className="font-mulish max-w-2xl text-lg text-gray-300 md:text-xl">
            Explore our latest publications, ranging from in-depth industry analysis in Industrial
            Reports to insightful articles in the Telescope.
          </p>
        </div>
      </Container>
    </section>
  );
}

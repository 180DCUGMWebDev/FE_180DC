"use client";
import { Hero, Speaker, WhatWouldYouGet, Timeline } from "@/components/modules/bootcamp";

export default function Bootcamp() {
  return (
    <main className="bg-[#E8E8E8]">
      <Hero />
      <Speaker />
      <Timeline />
      <WhatWouldYouGet />
    </main>
  );
}

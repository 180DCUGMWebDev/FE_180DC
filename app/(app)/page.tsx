"use client";
import { HomeStore, VisitSpotify, HomeJoinUs } from "@/components/modules/homepage";
import LookForward from "@/components/layout/LookForward";
import { Hero } from "@/components/modules/homepage";
import { WhatIs } from "@/components/modules/homepage";
import { OurClients } from "@/components/modules/homepage";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Hero contactRef={contactRef} />
      <OurClients />
      <WhatIs />

      <HomeStore />
      <VisitSpotify />
      <HomeJoinUs />
      <LookForward theme="dark" />
    </>
  );
}

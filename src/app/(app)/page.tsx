"use client";
import { Hero, OurClients, WhatIs } from "@/components/modules/homepage";
import LookForward from "@/components/layout/LookForward";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef(null);
  return (
    <>
      <Hero contactRef={contactRef} />
      <WhatIs />
      <OurClients />
      <LookForward theme="dark" />
    </>
  );
}

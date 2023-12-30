"use client";
import { Hero, OurClients } from "@/components/homepage";
import LookForward from "@/components/misc/LookForward";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef();
  return (
    <main>
      <Hero contactRef={contactRef} />
      <OurClients />
      <LookForward theme="dark" />
      <div ref={contactRef} />
    </main>
  );
}

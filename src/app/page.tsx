"use client";
import { Hero, OurClients } from "@/components/modules/homepage";
import LookForward from "@/components/element/LookForward";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef(null);
  return (
    <main>
      <Hero contactRef={contactRef} />
      <OurClients />
      <LookForward theme="dark" />
    </main>
  );
}

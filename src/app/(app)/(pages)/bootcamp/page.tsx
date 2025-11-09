"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Hero, Timeline, GuideBookBootcamp, Speaker } from "@/components/modules/bootcamp";
import SecureYours from "@/components/modules/store/casebook/SecureYours";
import Container from "@/components/layout/Container";


export const metadata = {
  title: "Bootcamp | 180 Degrees Consulting UGM",
};
export default function Bootcamp() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-in-out',
      offset: 120,
    });
  }, []);
  return (
    <main className="bg-[#C4E2E4]">
      <Hero />
      <Speaker />
      <Timeline />
      <GuideBookBootcamp />
      <Container className="hidden min-w-screen h-auto px-0 sm:px-0 py-0 lg:block">
        <SecureYours theme = "dark" padding-y = "0" />
      </Container>
    </main>
  );
}

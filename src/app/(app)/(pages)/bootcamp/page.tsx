import {
  Hero,
  Timeline,
  GuideBookBootcamp,
  Speaker,
  ApplyNow,
} from "@/components/modules/bootcamp";
import AOSInit from "@/components/AOSInit";
import Container from "@/components/layout/Container";

export const metadata = {
  title: "Bootcamp | 180 Degrees Consulting UGM",
};

export default function Bootcamp() {
  return (
    <main>
      <AOSInit />
      <Hero />
      <Speaker />
      <Timeline />
      <GuideBookBootcamp />
      <ApplyNow theme="dark" />
    </main>
  );
}

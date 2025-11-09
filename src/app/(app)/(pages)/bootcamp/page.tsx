import { Hero, Timeline, GuideBookBootcamp, Speaker } from "@/components/modules/bootcamp";
import SecureYours from "@/components/modules/store/casebook/SecureYours";
import AOSInit from "@/components/AOSInit"; // komponen baru
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
      <SecureYours theme="dark"/>
    </main>
  );
}

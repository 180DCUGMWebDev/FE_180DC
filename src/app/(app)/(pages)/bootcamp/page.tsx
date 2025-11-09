// app/bootcamp/page.tsx (Server Component)
import { Hero, Timeline, GuideBookBootcamp, Speaker } from "@/components/modules/bootcamp";
import SecureYours from "@/components/modules/store/casebook/SecureYours";
import AOSInit from "@/components/AOSInit"; // komponen baru

export const metadata = {
  title: "Bootcamp | 180 Degrees Consulting UGM",
};

export default function Bootcamp() {
  return (
    <>
      <main className="bg-[#C4E2E4]">
        <AOSInit />
        <Hero />
        <Speaker />
        <Timeline />
        <GuideBookBootcamp />
        <SecureYours theme="dark" />
      </main>
    </>
  );
}

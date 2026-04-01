import { HeroCC } from "@/components/modules/casecomp/HeroCC";
import { TimelineCC } from "@/components/modules/casecomp/TimelineCC";
import { GuidebookCC } from "@/components/modules/casecomp/GuidebookCC";

export const metadata = {
  title: "180DC Case Competition | 180 Degrees Consulting UGM",
};

export default function CaseComp() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#2B2B2B] pt-16">
      {/* Hero section enclosed in its own bg container, fully full width, rounded bottom only */}
      <div className="relative z-20 w-full">
        <div
          className="relative w-full rounded-b-[1.5rem] border-b-[2px] border-gray-500/20 bg-cover bg-bottom shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] sm:rounded-b-[3rem] sm:border-b-[3px]"
          style={{ backgroundImage: "url('/img/videocasecomp/bg-vcc.webp')" }}
        >
          {/* Subtle darken overlay */}
          <div className="absolute inset-0 z-0 rounded-b-[1.5rem] bg-black/5 mix-blend-overlay sm:rounded-b-[3rem]" />
          <div className="relative z-10 w-full rounded-b-[1.5rem] sm:rounded-b-[3rem]">
            <HeroCC />
          </div>
        </div>
      </div>
      <TimelineCC />
      <GuidebookCC />
    </main>
  );
}

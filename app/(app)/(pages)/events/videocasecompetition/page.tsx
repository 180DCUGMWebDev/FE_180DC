import { HeroVCC } from "@/components/modules/videocasecompetition/HeroVCC";
import { TimelineVCC } from "@/components/modules/videocasecompetition/TimelineVCC";
import { GuidebookVCC } from "@/components/modules/videocasecompetition/GuidebookVCC";

export const metadata = {
  title: "Video Case Competition | 180 Degrees Consulting UGM",
};

export default function VideoCaseComp() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-[#2B2B2B] pt-16">
      {/* Hero section enclosed in its own bg container, fully full width, rounded bottom only */}
      <div className="relative z-20 w-full">
        <div
          className="relative w-full rounded-b-[3rem] border-b-[3px] border-gray-500/20 bg-cover bg-bottom shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]"
          style={{ backgroundImage: "url('/img/videocasecomp/bg-vcc.webp')" }}
        >
          {/* Subtle darken overlay */}
          <div className="absolute inset-0 z-0 rounded-b-[3rem] bg-black/5 mix-blend-overlay" />
          <div className="relative z-10 w-full rounded-b-[3rem]">
            <HeroVCC />
          </div>
        </div>
      </div>
      <TimelineVCC />
      <GuidebookVCC />
    </main>
  );
}

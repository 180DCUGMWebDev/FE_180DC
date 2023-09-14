import VisMis from "@/components/aboutus/VisMis";
import WhoWeAre from "@/components/aboutus/WhoWeAre";
import Services from "@/components/aboutus/Services";
import Team from "@/components/aboutus/Team";
import LookForward from "@/components/aboutus/LookForward";

export default function AboutUs() {
  return (
    <main className="px-[50px]">
      <WhoWeAre />
      <VisMis />
      <Services />
      <Team />
      <LookForward />
    </main>
  );
}

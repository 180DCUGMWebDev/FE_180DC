import VisMis from "@/components/aboutus/VisMis";
import WhoWeAre from "@/components/aboutus/WhoWeAre";
import Services from "@/components/aboutus/Services";
import Team from "@/components/aboutus/Team";
import LookForward from "@/components/misc/LookForward";

export default async function AboutUs() {
  return (
    <main>
      <WhoWeAre />
      <VisMis />
      <Services />
      <Team />
      <LookForward theme="light" />
    </main>
  );
}

import VisMis from "@/components/modules/aboutus/VisMis";
import WhoWeAre from "@/components/modules/aboutus/WhoWeAre";
import Services from "@/components/modules/aboutus/Services";
import Team from "@/components/modules/aboutus/Team";
import LookForward from "@/components/layout/LookForward";

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

import LookForward from "@/components/layout/LookForward";
import PreviousClients from "@/components/modules/portofolio/PreviousClients";
import ProjectStructure from "@/components/modules/portofolio/ProjectStructure";

export const metadata = {
  title: "Portfolio | 180 Degrees Consulting UGM",
};

export default function Portofolio() {
  return (
    <main>
      <PreviousClients />
      <ProjectStructure />
      <LookForward theme={"dark"} />
    </main>
  );
}

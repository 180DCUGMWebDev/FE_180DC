import LookForward from "@/components/misc/LookForward";
import PreviousClients from "@/components/portofolio/PreviousClients";
import ProjectStructure from "@/components/portofolio/ProjectStructure";

export default function Portofolio() {
  return (
    <main>
      <PreviousClients />
      <ProjectStructure />
      <LookForward theme={"dark"} />
    </main>
  )
}
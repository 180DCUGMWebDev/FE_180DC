import LookForward from "@/components/misc/LookForward";
import { Telescopes } from "@/components/telescope";

export default function Telescope() {
  return (
    <main>
      <Telescopes />
      <LookForward theme={"dark"} />
    </main>
  );
}

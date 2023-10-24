import { Hero, OurClients } from "@/components/homepage";
import LookForward from "@/components/misc/LookForward";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurClients />
      <LookForward theme="dark" />
    </main>
  );
}

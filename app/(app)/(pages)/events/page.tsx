import EventsHub from "@/components/modules/events/EventsHub";
import LookForward from "@/components/layout/LookForward";

export const metadata = {
  title: "Programs & Events | 180 Degrees Consulting UGM",
};

export default function EventsPage() {
  return (
    <>
      <EventsHub />
      <LookForward theme={"dark"} />
    </>
  );
}

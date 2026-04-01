import EventsHub from "@/components/modules/events/EventsHub";
import CTASection180 from "@/components/elements/CTASection180";

export const metadata = {
  title: "Programs & Events | 180 Degrees Consulting UGM",
};

export default function EventsPage() {
  return (
    <>
      <EventsHub />
      <CTASection180 
        title={<>We Look Forward to<br/>Speaking with You</>}
        subtitle={<>Explore our different services offerings, and<br className="hidden sm:block" /> reach out to us for a discussion.</>}
        primaryButtonText="Consult Now!"
        primaryButtonHref="/apply"
      />
    </>
  );
}

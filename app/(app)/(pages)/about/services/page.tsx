import CTASection180 from "@/components/elements/CTASection180";
import PreviousClients from "@/components/modules/portofolio/PreviousClients";
import ProjectStructure from "@/components/modules/portofolio/ProjectStructure";

export const metadata = {
  title: "Services | 180 Degrees Consulting UGM",
};

export default function Portofolio() {
  return (
    <main>
      <PreviousClients />
      <ProjectStructure />
      <CTASection180 
        title={<>We Look Forward to<br/>Speaking with You</>}
        subtitle={<>Explore our different services offerings, and<br className="hidden sm:block" /> reach out to us for a discussion.</>}
        primaryButtonText="Consult Now!"
        primaryButtonHref="/apply"
      />
    </main>
  );
}

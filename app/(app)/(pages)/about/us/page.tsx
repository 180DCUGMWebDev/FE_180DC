import VisMis from "@/components/modules/aboutus/VisMis";
import WhoWeAre from "@/components/modules/aboutus/WhoWeAre";
import Services from "@/components/modules/aboutus/Services";
import Team from "@/components/modules/aboutus/Team";
import CTASection180 from "@/components/elements/CTASection180";

export const metadata = {
  title: "About Us | 180 Degrees Consulting UGM",
};

export default async function AboutUs() {
  return (
    <main>
      <WhoWeAre />
      <VisMis />
      <Services />
      <Team />
      <CTASection180 
        title={<>We Look Forward to<br/>Speaking with You</>}
        subtitle={<>Explore our different services offerings, and<br className="hidden sm:block" /> reach out to us for a discussion.</>}
        primaryButtonText="Consult Now!"
        primaryButtonHref="/apply"
      />
    </main>
  );
}

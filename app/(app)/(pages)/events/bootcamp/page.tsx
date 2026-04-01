import { Hero, Timeline, GuideBookBootcamp, Speaker } from "@/components/modules/bootcamp";
import AOSInit from "@/components/elements/AOSInit";
import Container from "@/components/layout/Container";
import CTASection180 from "@/components/elements/CTASection180";

export const metadata = {
  title: "Bootcamp | 180 Degrees Consulting UGM",
};

export default function Bootcamp() {
  return (
    <main>
      <AOSInit />
      <Hero />
      <Speaker />
      <Timeline />
      <GuideBookBootcamp />
      <CTASection180
        title={
          <>
            Join Our
            <br />
            Bootcamp!
          </>
        }
        subtitle={
          <>
            Transform your consulting skills and learn
            <br />
            from industry experts in just a few weeks
          </>
        }
        primaryButtonText="Register Now"
        primaryButtonHref="/events/bootcamp/registration"
        decoration="shard"
      />
    </main>
  );
}

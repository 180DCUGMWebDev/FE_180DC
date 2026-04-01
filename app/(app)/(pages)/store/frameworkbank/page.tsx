import HeroFbanks from "@/components/modules/store/frameworkbank/HeroFBanks";
import PreviewFbanks from "@/components/modules/store/frameworkbank/PreviewFbanks";
import CTASection180 from "@/components/elements/CTASection180";

export const metadata = {
  title: "Framework Bank | 180 Degrees Consulting UGM",
};

export default function frameworkbank() {
  return (
    <main>
      <HeroFbanks />
      <PreviewFbanks />
      <CTASection180
        title={
          <>
            Secure yours
            <br />
            right now!
          </>
        }
        subtitle={
          <>
            discover the cyanprint for
            <br />
            consulting excellence
          </>
        }
        primaryButtonText="Buy Now"
        primaryButtonHref="https://lynk.id/180dcugm/wxwNY7V"
        decoration="shard"
      />
    </main>
  );
}

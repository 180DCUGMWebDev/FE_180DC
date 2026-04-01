import HeroMerch from "@/components/modules/store/merch/HeroMerch";
import LayoutMerch from "@/components/modules/store/merch/LayoutMerch";
import CTASection180 from "@/components/elements/CTASection180";

export const metadata = {
  title: "Merch | 180 Degrees Consulting UGM",
};

export default async function Merch() {
  return (
    <main>
      <HeroMerch />
      <LayoutMerch />
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
        primaryButtonAction={() => {
          window.location.href =
            "https://docs.google.com/forms/d/e/1FAIpQLScOuHT1hdVMUeLNjxFaLC8zAcgERZnL5b2qZgjcWBdaRSi4NQ/viewform";
        }}
        decoration="shard"
      />
    </main>
  );
}

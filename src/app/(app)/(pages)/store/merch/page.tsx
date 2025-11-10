import HeroMerch from "@/components/modules/store/merch/HeroMerch";
import LayoutMerch from "@/components/modules/store/merch/LayoutMerch";
import SecureYours from "@/components/modules/store/merch/SecureYours";

export const metadata = {
  title: "Merch | 180 Degrees Consulting UGM",
};

export default async function Merch() {
  return (
    <main>
      <HeroMerch />
      <LayoutMerch />
      <SecureYours />
    </main>
  );
}

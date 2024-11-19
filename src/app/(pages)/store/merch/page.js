import HeroMerch from "@/components/store/merch/HeroMerch";
import LayoutMerch from "@/components/store/merch/LayoutMerch";
import SecureYours from "@/components/store/merch/SecureYours";
import WhatTheySay from "@/components/store/merch/WhatTheySay";

export default async function Casebook() {
  return (
    <main>
      <HeroMerch />
      <LayoutMerch />
      <WhatTheySay />
      <SecureYours />
    </main>
  );
}

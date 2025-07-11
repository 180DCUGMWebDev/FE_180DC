import HeroMerch from "@/components/modules/store/merch/HeroMerch";
import LayoutMerch from "@/components/modules/store/merch/LayoutMerch";
import SecureYours from "@/components/modules/store/merch/SecureYours";
import WhatTheySay from "@/components/modules/store/merch/WhatTheySay";

export default async function Casebook() {
  return (
    <main>
      <HeroMerch />
      <LayoutMerch />
      {/* <WhatTheySay /> */}
      <SecureYours />
    </main>
  );
}

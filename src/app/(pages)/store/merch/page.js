import HeroMerch from "@/components/store/merch/HeroMerch";
import SecureYours from "@/components/store/merch/SecureYours";
import WhatTheySay from "@/components/store/merch/WhatTheySay";

export default async function Casebook() {
  return (
    <main>
      <HeroMerch />
      <WhatTheySay />
      <SecureYours />
    </main>
  );
}

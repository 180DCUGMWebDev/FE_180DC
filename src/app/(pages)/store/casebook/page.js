import HeroCasebook from "@/components/store/casebook/HeroCasebook";
import SecureYours from "@/components/store/casebook/SecureYours";
import WhatInside from "@/components/store/casebook/WhatInside";
import WhatTheySay from "@/components/store/casebook/WhatTheySay";
import CasebookJourney from "@/components/store/casebook/CasebookJourney";

export default function Casebook() {
  return (
    <main>
      <HeroCasebook />
      <WhatInside />
      <CasebookJourney />
      {/* <WhatTheySay /> */}
      <SecureYours />
    </main>
  );
}

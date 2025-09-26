import HeroCasebook from "@/components/modules/store/casebook/HeroCasebook";
import SecureYours from "@/components/modules/store/casebook/SecureYours";
import WhatInside from "@/components/modules/store/casebook/WhatInside";
import WhatTheySay from "@/components/modules/store/casebook/WhatTheySay";
import CasebookJourney from "@/components/modules/store/casebook/CasebookJourney";

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

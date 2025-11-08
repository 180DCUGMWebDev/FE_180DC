import HeroCasebook from "@/components/modules/store/casebook/HeroCasebook";
import SecureYours from "@/components/modules/store/casebook/SecureYours";
import WhatTheySay from "@/components/modules/store/casebook/WhatTheySay";
import CasebookJourney from "@/components/modules/store/casebook/CasebookJourney";

export const metadata = {
  title: "Casebook | 180 Degrees Consulting UGM",
};

export default function Casebook() {
  return (
    <main>
      <HeroCasebook />
      <CasebookJourney />
      {/* <WhatTheySay /> */}
      <SecureYours theme="dark" />
    </main>
  );
}

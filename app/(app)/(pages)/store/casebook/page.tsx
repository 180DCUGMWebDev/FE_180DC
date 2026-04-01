import HeroCasebook from "@/components/modules/store/casebook/HeroCasebook";
import WhatTheySay from "@/components/modules/store/casebook/WhatTheySay";
import CasebookJourney from "@/components/modules/store/casebook/CasebookJourney";
import CTASection180 from "@/components/elements/CTASection180";

export const metadata = {
  title: "Casebook | 180 Degrees Consulting UGM",
};

export default function Casebook() {
  return (
    <main>
      <HeroCasebook />
      <CasebookJourney />
      {/* <WhatTheySay /> */}
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
            discover the blueprint for
            <br />
            consulting excellence
          </>
        }
        primaryButtonText="Buy Now"
        primaryButtonHref="https://docs.google.com/forms/d/e/1FAIpQLSf9lMS6EHYZPyo6IL80EcYrdxVglOv1PnpZnTS29Ew0jBHEMw/viewform"
        decoration="shard"
      />
    </main>
  );
}

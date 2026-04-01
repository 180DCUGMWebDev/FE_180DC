import CTASection180 from "@/components/elements/CTASection180";
import { Telescopes } from "@/components/modules/telescope";
import { useRef } from "react";
import { getPayload } from "payload";
import config from "@payload-config";

export const metadata = {
  title: "Telescope | 180 Degrees Consulting UGM",
};

export default async function TelescopePage() {
  const payload = await getPayload({ config });

  const telescope = await payload.find({
    collection: "telescope",
  });

  return (
    <main>
      <Telescopes articles={telescope.docs} />
      <CTASection180 
        title={<>We Look Forward to<br/>Speaking with You</>}
        subtitle={<>Explore our different services offerings, and<br className="hidden sm:block" /> reach out to us for a discussion.</>}
        primaryButtonText="Consult Now!"
        primaryButtonHref="/apply"
      />
    </main>
  );
}

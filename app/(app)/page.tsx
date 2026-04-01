import { HomeStore, VisitSpotify, HomeJoinUs } from "@/components/modules/homepage";
import CTASection180 from "@/components/elements/CTASection180";
import { Hero } from "@/components/modules/homepage";
import { WhatIs } from "@/components/modules/homepage";
import { OurClients } from "@/components/modules/homepage";
import { getPayload } from "payload";
import config from "@payload-config";

const DUMMY = {
  notification: "You have 3 Notifications!",
  contact: "wa.me/628111478173",
  newsTitle: "Exciting News!",
  newsContent: "We are thrilled to announce the launch of our new product line next month. Stay tuned for more details!"
};


export default async function Home() {
  const payload = await getPayload({ config });

  const hero = await payload.find({
    collection: "hero",
    limit: 1,
    sort: "-createdAt",
    depth: 1,
  });

  const heroData = hero.docs?.[0] ?? DUMMY;

  const telescope = await payload.find({
    collection: "telescope",
    sort: "-publishedDate",
    limit: 3,
    depth: 1,
  });

  return (
    <>
      <Hero heroData={heroData} />
      <WhatIs />
      <HomeJoinUs />
      <OurClients cards={telescope.docs} />
      <HomeStore />
      <VisitSpotify />
      <CTASection180 
        title={<>We Look Forward to<br/>Speaking with You</>}
        subtitle={<>Explore our different services offerings, and<br className="hidden sm:block" /> reach out to us for a discussion.</>}
        primaryButtonText="Consult Now!"
        primaryButtonHref="/apply"
      />
    </>
  );
}

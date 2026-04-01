import { HeroArticle, FeaturedTelescope, FeaturedReports } from "@/components/modules/article";
import { getPayload } from "payload";
import config from "@payload-config";
import CTASection180 from "@/components/elements/CTASection180";

export const metadata = {
  title: "Article Hub | 180 Degrees Consulting UGM",
};

export default async function ArticleHubPage() {
  const payload = await getPayload({ config });

  // Fetch only the telescope articles needed (sorted by newest, maybe limited to 3)
  const telescope = await payload.find({
    collection: "telescope",
    sort: "-publishedDate",
    limit: 3,
  });

  return (
    <>
      <HeroArticle />
      <FeaturedTelescope articles={telescope.docs} />
      <FeaturedReports />
      <CTASection180 
        title={<>We Look Forward to<br/>Speaking with You</>}
        subtitle={<>Explore our different services offerings, and<br className="hidden sm:block" /> reach out to us for a discussion.</>}
        primaryButtonText="Consult Now!"
        primaryButtonHref="/apply"
      />
    </>
  );
}

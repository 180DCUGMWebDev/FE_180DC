import { HeroArticle, FeaturedTelescope, FeaturedReports } from "@/components/modules/article";
import { getPayload } from "payload";
import config from "@payload-config";
import LookForward from "@/components/layout/LookForward";

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
      <LookForward theme={"dark"} />
    </>
  );
}

import type { MetadataRoute } from "next";

// Vercel only serves its own auto-generated preview hostnames as noindex. A
// custom domain pointed at a branch — like 180dcpreview.vercel.app — is
// crawlable like any other, so without this the preview would compete with
// www.180dcugm.com in search results, and show recruitment as open while
// production has it closed.
export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.VERCEL_ENV === "production";

  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "/admin/", "/api/"],
    },
  };
}

import Custom404 from "@/components/layout/Custom404";

export default function NotFound() {
  return (
    <Custom404
      title="Link Not Found"
      subtitle="Oops! This short link doesn't exist."
      description="The link might have been removed, disabled, or you entered the wrong URL. Let's get you back on track!"
      homeLink="/"
      additionalLinks={[
        { text: "Open Recruitment", href: "/oprec", onClick: null },
        { text: "About Us", href: "/about/us", onClick: null },
        { text: "Portfolio", href: "/about/services", onClick: null },
        { text: "Store", href: "/store", onClick: null },
        { text: "Academy", href: "/academy", onClick: null },
      ]}
    />
  );
}

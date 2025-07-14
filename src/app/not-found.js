import Custom404 from "@/components/layout/Custom404";

export default function NotFound() {
  return (
    <Custom404
      title="Page Not Found"
      subtitle="Oops! The page you're looking for doesn't exist."
      description="The page might have been moved, deleted, or you entered the wrong URL. Let's get you back on track!"
      homeLink="/"
      additionalLinks={[
        { text: "Open Recruitment", href: "/oprec" },
        { text: "About Us", href: "/aboutus" },
        { text: "Portfolio", href: "/portofolio" },
        { text: "Store", href: "/store" },
        { text: "Academy", href: "/academy" },
      ]}
    />
  );
}

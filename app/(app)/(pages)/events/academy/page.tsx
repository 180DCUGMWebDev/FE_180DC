import AcademyHero from "@/components/modules/academy/AcademyHero";
import PresidentRemarks from "@/components/modules/academy/PresidentRemarks";
import CourseSection from "@/components/modules/academy/CourseSection";

export const metadata = {
  title: "Academy | 180 Degrees Consulting UGM",
};

export default async function Academy() {
  return (
    <main>
      <AcademyHero />
      <PresidentRemarks />
      <CourseSection />
    </main>
  );
}

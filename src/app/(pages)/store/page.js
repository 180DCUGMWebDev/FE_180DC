import AcademyHero from "@/components/modules/academy/AcademyHero";
import PresidentRemarks from "@/components/modules/academy/PresidentRemarks";
import CourseSection from "@/components/modules/academy/CourseSection";

export default async function Store() {
  return (
    <main>
      <AcademyHero />
      <PresidentRemarks />
      <CourseSection />
    </main>
  );
}

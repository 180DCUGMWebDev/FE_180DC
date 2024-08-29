import AcademyHero from "@/components/academy/AcademyHero";
import PresidentRemarks from "@/components/academy/PresidentRemarks";
import CourseSection from "@/components/academy/CourseSection";

export default async function Store() {
  return (
    <main>
      <AcademyHero />
      <PresidentRemarks />
      <CourseSection />
    </main>
  );
}

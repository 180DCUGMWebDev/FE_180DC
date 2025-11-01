import dynamic from "next/dynamic";
import ModuleMain from "@/components/modules/academy/module/ModuleMain";
import CountinueCourse from "@/components/modules/academy/module1/ContinueCourse";
import PdfViewer from "@/components/modules/academy/module/PdfViewer";
import MiniQuiz from "@/components/modules/academy/module/MiniQuiz";

export default function AcademyModule({ params }) {
  const { slug } = params;

  const moduleData = {
    type: "Modules 3",
    name: "Consulting 103",
  };

  const pdfFileUrl = "/file/samplepdf.pdf";

  return (
    <main className="bg-black-300">
      <ModuleMain data={moduleData} />
      <PdfViewer url={"/file/samplepdf.pdf"} />
      <MiniQuiz />
      <CountinueCourse />
    </main>
  );
}

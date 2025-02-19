import dynamic from "next/dynamic";
import ModuleMain from "@/components/academy/module/ModuleMain";
import CountinueCourse from "@/components/academy/module1/ContinueCourse";
import PdfViewer from "@/components/academy/module/PdfViewer";
import MiniQuiz from "@/components/academy/module/MiniQuiz";


export default function AcademyModule({ params }) {
 
  const { slug } = params;

  const moduleData = {
    type : "Modules 3",
    name : "Consulting 103"
  }

  const pdfFileUrl = "/file/samplepdf.pdf"; 




  return (
    
    <main className="bg-black">
      <ModuleMain data={moduleData} />
      <PdfViewer url={"/file/samplepdf.pdf"} />
      <MiniQuiz/>
      <CountinueCourse />
    </main>
  );
}

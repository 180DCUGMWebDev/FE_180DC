"use client";
// import { Viewer, Worker } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
const PdfViewer = ({ url }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <section className="relative">
      <div className="mx-auto max-h-[90vh] overflow-y-auto bg-black px-[9%] pt-[9.92vw] lg:mt-[9.92vw] lg:px-[9%]">
        {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js">
            <Viewer
            fileUrl={url}
            plugins={[defaultLayoutPluginInstance]}
            renderMode="canvas"
            />
        </Worker> */}
        <iframe src={url} className="h-full w-full" />
      </div>
    </section>
  );
};
export default PdfViewer;

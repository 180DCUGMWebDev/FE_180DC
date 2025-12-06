export interface IndustrialReport {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  pdfFile: string;
  driveLink: string;
  fileName: string;
}

export const industrialReports: IndustrialReport[] = [
  {
    id: "1",
    slug: "cafe-industries",
    title: "Café Industries",
    subtitle: "Coffee Market Analysis",
    description: "Comprehensive analysis of the café and coffee industries",
    coverImage: "/img/industrialreport/IR1.png",
    pdfFile: "/file/ADLReport.pdf",
    driveLink: "https://drive.google.com/file/d/1-b-srMHzofqIB-TW4IKtaBNzvWlFisqW/view?usp=sharing",
    fileName: "CafeIndustries-Report.pdf",
  },
  {
    id: "2",
    slug: "tenun-lurik",
    title: "Tenun Lurik",
    subtitle: "Traditional Weaving Analysis",
    description: "Comprehensive analysis of Tenun Lurik textile industry",
    coverImage: "/img/industrialreport/IR2.png",
    pdfFile: "/file/ReapraReport.pdf",
    driveLink: "https://drive.google.com/file/d/your-tenun-lurik-link/view?usp=sharing",
    fileName: "Reapra-Report.pdf",
  },
  {
    id: "3",
    slug: "sustainibility-report",
    title: "Sustainibility Report",
    subtitle: "Environmental Impact Analysis",
    description: "Comprehensive analysis of sustainability practices",
    coverImage: "/img/industrialreport/SustainableReport.jpg",
    pdfFile: "/file/SustainibilityReport.pdf",
    driveLink:
      "https://docs.google.com/presentation/d/1Hqe2jQzUgeN7qYpK_koziuxGbGDP5cA0TaNtgTiaELE/edit?slide=id.g15687b4e4a8204ee_0#slide=id.g15687b4e4a8204ee_0",
    fileName: "SustainibilityReport.pdf",
  },
];

export const getReportBySlug = (slug: string): IndustrialReport | undefined => {
  return industrialReports.find((report) => report.slug === slug);
};

export const getAllReportSlugs = (): string[] => {
  return industrialReports.map((report) => report.slug);
};

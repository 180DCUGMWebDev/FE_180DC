import { notFound } from "next/navigation";
import { use } from "react";
import type { Metadata } from "next";
import IndustrialReportsDetail from "@/components/modules/industrialreports/IndustrialReportsDetail";
import { getReportBySlug } from "@/components/modules/industrialreports/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const report = getReportBySlug(slug);

  return {
    title: `${report.title} | 180 Degrees Consulting UGM`,
  };
}

export default function IndustrialReportPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const report = getReportBySlug(slug);

  if (!report) {
    notFound();
  }

  return <IndustrialReportsDetail report={report} />;
}

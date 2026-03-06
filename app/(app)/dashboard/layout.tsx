import { Metadata } from "next";
import { DashboardGuard } from "@/components/modules/admin/DashboardGuard";

export const metadata: Metadata = {
  title: "Dashboard | 180 Degrees Consulting",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <DashboardGuard>{children}</DashboardGuard>;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | 180 Degrees Consulting',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return children;
}

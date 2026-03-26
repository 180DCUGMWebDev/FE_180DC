"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/integrations/supabase/client";
import { CCAdmin } from "@/components/modules/admin/cc/CCAdmin";
import { Loader2 } from "lucide-react";

export default function CCAdminPage() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [adminUser, setAdminUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function fetchData() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        window.location.href = "/dashboard/login";
        return;
      }
      setAdminUser(user);

      const { data: submissionsData, error } = await supabase
        .from("casecomp-registrations")
        .select("*")
        .order("submitted_at", { ascending: false });

      if (error) {
        console.error("Error fetching submissions:", error);
      } else {
        setSubmissions(submissionsData || []);
      }
      setLoading(false);
    }
    fetchData();
  }, [supabase]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-green-300" />
      </div>
    );
  }

  return <CCAdmin submissions={submissions} adminUser={adminUser} />;
}

import { redirect } from "next/navigation";
import { createClient } from "@/integrations/supabase/admin";
import { VCCAdmin } from "@/components/modules/admin/vcc/VCCAdmin";

export default async function VCCAdminPage() {
  const supabase = await createClient();

  // Check if user is authenticated
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/dashboard/login");
  }

  // Check if user is admin
  const { data: adminUser, error: adminError } = await supabase
    .from("admin_users")
    .select("*")
    .eq("id", user.id)
    .single();

  if (adminError || !adminUser) {
    redirect("/dashboard/login?error=unauthorized");
  }

  // Fetch VCC registrations
  const { data: submissions, error: submissionsError } = await supabase
    .from("vcc-registrations")
    .select("*")
    .order("submitted_at", { ascending: false });

  if (submissionsError) {
    console.error("Error fetching VCC registrations:", submissionsError);
  }

  return <VCCAdmin submissions={submissions || []} adminUser={adminUser} />;
}

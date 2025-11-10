import { redirect } from "next/navigation";
import { createClient } from "@/integrations/supabase/admin";
import { Admin } from "@/components/modules/admin/bootcamp-25/Admin";

export default async function BootcampAdminPage() {
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

  // Fetch bootcamp submissions
  const { data: submissions, error: submissionsError } = await supabase
    .from("bootcamp-submissions-2025")
    .select("*")
    .order("submitted_at", { ascending: false });

  if (submissionsError) {
    console.error("Error fetching bootcamp submissions:", submissionsError);
  }

  return <Admin submissions={submissions || []} adminUser={adminUser} />;
}

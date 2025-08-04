import { redirect } from "next/navigation";
import { createClient } from "@/integrations/supabase/admin";
import { Admin } from "@/components/modules/admin/Admin";

export default async function AdminPage() {
  const supabase = await createClient();

  // Check if user is authenticated
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/admin/login");
  }

  // Check if user is admin
  const { data: adminUser, error: adminError } = await supabase
    .from("admin_users")
    .select("*")
    .eq("id", user.id)
    .single();

  if (adminError || !adminUser) {
    redirect("/admin/login?error=unauthorized");
  }

  // Fetch submissions
  const { data: submissions, error: submissionsError } = await supabase
    .from("functional-batch1-25-26-submissions")
    .select("*")
    .order("submitted_at", { ascending: false });

  if (submissionsError) {
    console.error("Error fetching submissions:", submissionsError);
  }

  return <Admin submissions={submissions || []} adminUser={adminUser} />;
}

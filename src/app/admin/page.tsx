import { redirect } from "next/navigation";
import { createClient } from "@/integrations/supabase/admin";
import Link from "next/link";
import { Button } from "@/components/elements/Form/button";

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
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-lg text-gray-600">Choose your management section</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Consulting Card */}
          <div className="rounded-lg border-2 bg-white p-6 shadow-md transition-shadow duration-300 hover:border-blue-300 hover:shadow-lg">
            <div className="pb-4 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100"></div>
              <h2 className="mb-2 text-2xl font-semibold text-gray-900">Consulting Management</h2>
              <p className="mb-6 text-gray-600">
                Manage consulting projects, clients, and related administrative tasks
              </p>
            </div>
            <Link href="/admin/consulting">
              <Button
                className="w-full bg-blue-600 py-3 text-lg font-medium text-white hover:bg-blue-700"
                size="lg"
              >
                Access Consulting
              </Button>
            </Link>
          </div>

          {/* Functional Card */}
          <div className="rounded-lg border-2 bg-white p-6 shadow-md transition-shadow duration-300 hover:border-green-300 hover:shadow-lg">
            <div className="pb-4 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100"></div>
              <h2 className="mb-2 text-2xl font-semibold text-gray-900">Functional Management</h2>
              <p className="mb-6 text-gray-600">
                Manage functional teams, operations, and organizational tasks
              </p>
            </div>
            <Link href="/admin/functional">
              <Button
                className="w-full bg-green-600 py-3 text-lg font-medium text-white hover:bg-green-700"
                size="lg"
              >
                Access Functional
              </Button>
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">Need help? Contact the system administrator</p>
        </div>
      </div>
    </div>
  );
}

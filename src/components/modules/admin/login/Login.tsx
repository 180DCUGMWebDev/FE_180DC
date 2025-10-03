"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertCircle, Shield, Lock, Mail } from "lucide-react";
import { createClient } from "@/integrations/supabase/client";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();
  const supabase = createClient();

  async function handleSubmit(formData) {
    setIsLoading(true);
    setError(null);

    const email = formData.get("email");
    const password = formData.get("password");

    console.log("Attempting login with:", { email, password: "***" });

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      console.log("Supabase auth response:", { data, signInError });

      if (signInError) {
        console.error("Sign in error:", signInError);
        setError("Email atau password salah");
        return;
      }

      if (data.user) {
        console.log("User authenticated:", data.user.id);

        // Check if admin_users table exists and user has admin access
        try {
          const { data: adminUser, error: adminError } = await supabase
            .from("admin_users")
            .select("*")
            .eq("id", data.user.id)
            .single();

          console.log("Admin check response:", { adminUser, adminError });

          if (adminError) {
            console.error("Admin check error:", adminError);

            // If table doesn't exist, we'll skip admin check for now
            if (adminError.code === "42P01") {
              console.warn("admin_users table doesn't exist, proceeding without admin check");
              router.push("/admin");
              return;
            }

            await supabase.auth.signOut();
            setError("Anda tidak memiliki akses admin");
            return;
          }

          if (!adminUser) {
            console.log("User not found in admin_users table");
            await supabase.auth.signOut();
            setError("Anda tidak memiliki akses admin");
            return;
          }

          console.log("Admin access granted, redirecting...");
          router.push("/admin");
        } catch (adminCheckError) {
          console.error("Error checking admin status:", adminCheckError);
          setError("Terjadi kesalahan saat memeriksa akses admin");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-linear-to-b from-black to-primary/90 p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Admin Login</h1>
          <p className="mt-2 text-gray-300">
            Masukkan kredensial admin Anda untuk mengakses dashboard
          </p>
        </div>

        {/* Login Form */}
        <div className="rounded-lg bg-white/90 p-8 shadow-2xl backdrop-blur-xs">
          {error && (
            <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4">
              <div className="flex items-center">
                <AlertCircle className="mr-3 h-5 w-5 text-red-600" />
                <p className="text-sm font-medium text-red-800">{error}</p>
              </div>
            </div>
          )}

          <form action={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@180dcugm.org"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="h-12 w-full text-base font-medium"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center text-white">
                  <div className="mr-3 h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                  Logging in...
                </div>
              ) : (
                <p className="text-white">Login to Dashboard</p>
              )}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-6 border-t border-gray-200 pt-6">
            <p className="text-center text-sm text-gray-600">
              Secured by 180DC UGM Web Development Team
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-300">
            Having trouble logging in? Contact the web development team.
          </p>
        </div>
      </div>
    </section>
  );
}

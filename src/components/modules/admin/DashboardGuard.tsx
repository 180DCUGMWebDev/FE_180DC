"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { createClient } from "@/integrations/supabase/client";

export function DashboardGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const supabase = createClient();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        if (pathname !== "/dashboard/login") {
          router.push("/dashboard/login");
        }
      } else {
        setIsAuthenticated(true);
      }
    };

    checkAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT" || !session) {
        if (pathname !== "/dashboard/login") {
          router.push("/dashboard/login");
        }
      } else {
        setIsAuthenticated(true);
      }
    });

    return () => subscription.unsubscribe();
  }, [router, pathname, supabase.auth]);

  // If not authenticated and not on login page, show nothing (or loading state) to prevent flash of content
  if (!isAuthenticated && pathname !== "/dashboard/login") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-green-300"></div>
      </div>
    );
  }

  return <>{children}</>;
}

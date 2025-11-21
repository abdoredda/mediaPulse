"use client";
import HorizontalNavbar from "@/components/ui/HorizontalNavbar";
import VerticalNavbar from "@/components/ui/VerticalNavbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
// Placeholder auth hook. Replace with your real logic.
function useAuth() {
  // Replace with your actual auth state (e.g., from context, cookies, etc.)
  const isAuthenticated = true; // Set to true to simulate logged-in
  return { isAuthenticated };
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    // Optionally show a loading spinner or nothing while redirecting
    return null;
  }

  return (
    <>
      <HorizontalNavbar userName='Abdelrahman' />
      <main className=''>
        <div className='flex'>
          <VerticalNavbar />
          <section className='flex-1'>{children}</section>
        </div>
      </main>
    </>
  );
}

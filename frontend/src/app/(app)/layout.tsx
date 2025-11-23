"use client";
import HorizontalNavbar from "@/components/ui/HorizontalNavbar";
import VerticalNavbar from "@/components/ui/VerticalNavbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import WaveformLoader from "@/components/ui/loading/WaveformLoader";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return <WaveformLoader />;
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <HorizontalNavbar
        userName={user?.name || "User"}
        avatarUrl={user?.avatar}
      />
      <main className=''>
        <div className='flex'>
          <VerticalNavbar />
          <section className='flex-1 p-6'>{children}</section>
        </div>
      </main>
    </>
  );
}

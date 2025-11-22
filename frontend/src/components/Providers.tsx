"use client";

import { AuthProvider } from "@/context/AuthContext";
import { SnackbarProvider } from "notistack";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <SnackbarProvider>{children}</SnackbarProvider>
    </AuthProvider>
  );
}

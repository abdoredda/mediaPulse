import { useMemo } from "react";

export default function useBreadcrumbs(pathname: string) {
  return useMemo(() => {
    if (!pathname || pathname === "/") return [];
    const parts = pathname.split("/").filter(Boolean);
    const crumbs = parts.map((part, idx) => {
      const href = "/" + parts.slice(0, idx + 1).join("/");
      return { label: decodeURIComponent(part), href };
    });
    return crumbs;
  }, [pathname]);
}

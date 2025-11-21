"use client";

import { usePathname } from "next/navigation";

const stb = "/ahmed/reda/Ali";
console.log(stb.split("/").filter(Boolean));
function PlaygroundPage() {
  const pathname = usePathname();
  console.log(pathname);

  return <div>page</div>;
}

export default PlaygroundPage;

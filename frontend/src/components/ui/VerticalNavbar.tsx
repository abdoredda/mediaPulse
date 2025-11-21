"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Tooltip } from "@mui/material"; // keeping only Tooltip per requirement
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactElement;
  section?: "top" | "bottom"; // allows grouping if needed later
};

const items: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: <DashboardOutlinedIcon /> },
  { label: "Youtube", href: "/youtube", icon: <YouTubeIcon /> },
  { label: "Facebook", href: "/facebook", icon: <FacebookIcon /> },
  { label: "X", href: "/x", icon: <TwitterIcon /> },
  {
    label: "Settings",
    href: "/settings",
    icon: <SettingsOutlinedIcon />,
    section: "bottom",
  },
];

/**
 * VerticalNavbar (Tailwind version): slim vertical icon bar with MUI Tooltips.
 * Uses Tailwind for layout & styling, only MUI Tooltip for accessible hover labels.
 */
export default function VerticalNavbar() {
  const pathname = usePathname();

  const renderItem = (item: NavItem) => {
    const isActive =
      pathname === item.href ||
      (item.href !== "/" && pathname.startsWith(item.href + "/"));
    return (
      <Tooltip key={item.href} title={item.label} placement='right'>
        <Link
          href={item.href}
          className={[
            "group relative flex h-10 w-10 items-center justify-center rounded-xl transition-colors",
            "outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900/0",
            isActive
              ? "bg-blue-500/10 text-blue-500 shadow-sm"
              : "text-gray-400 hover:text-blue-400 hover:bg-blue-400/10",
          ].join(" ")}
        >
          <span className='text-[1.35rem] leading-none flex'>{item.icon}</span>
          <span className='sr-only'>{item.label}</span>
          {/* Active indicator bar */}
          <span
            className={[
              "absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 rounded-r-full bg-blue-500 transition-opacity",
              isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40",
            ].join(" ")}
          />
        </Link>
      </Tooltip>
    );
  };

  return (
    <nav className='w-12 shrink-0 border-r border-gray-200 flex flex-col items-center py-2 gap-2 h-[calc(100vh-53px)] sticky top-0 bg-white'>
      <ul className='flex-1 w-full flex flex-col items-center gap-1'>
        {items
          .filter((i) => i.section !== "bottom")
          .map((item) => (
            <li key={item.href}>{renderItem(item)}</li>
          ))}
      </ul>
      <div className='my-1 h-px w-8 bg-gray-200 dark:bg-gray-700' />
      <ul className='w-full flex flex-col items-center gap-1'>
        {items
          .filter((i) => i.section === "bottom")
          .map((item) => (
            <li key={item.href}>{renderItem(item)}</li>
          ))}
      </ul>
    </nav>
  );
}

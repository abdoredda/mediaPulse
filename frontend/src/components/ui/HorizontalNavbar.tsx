"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";

interface HorizontalNavbarProps {
  /** Optional user display name */
  userName?: string;
  /** URL of avatar image; if omitted a placeholder circle is shown */
  avatarUrl?: string;
}

export function HorizontalNavbar({
  userName = "User",
  avatarUrl,
}: HorizontalNavbarProps) {
  const pathname = usePathname();
  const breadcrumbs = useBreadcrumbs(pathname);

  return (
    <header className='flex items-center gap-3 w-full border-b border-gray-200  py-2.5 px-2 '>
      {/* Logo */}
      <Link
        href='/'
        className='flex items-center gap-2 font-semibold text-gray-800 group'
      >
        <Image src='/logo.svg' alt='Logo' width={22} height={22} priority />
      </Link>

      {/* Breadcrumbs */}
      <nav aria-label='Breadcrumb' className='flex-1'>
        <ol className='flex items-center gap-2 text-sm text-gray-600'>
          <li>
            <Link href='/' className='hover:text-gray-900 transition'>
              Home
            </Link>
          </li>
          {breadcrumbs.map((crumb, i) => (
            <li key={crumb.href} className='flex items-center gap-2'>
              <span className='text-gray-400'>/</span>
              {i < breadcrumbs.length - 1 ? (
                <Link
                  href={crumb.href}
                  className='hover:text-gray-900 capitalize transition'
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  className='font-medium text-gray-800 capitalize'
                  aria-current='page'
                >
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* User avatar */}
      <div className='flex items-center gap-3'>
        <div className='flex flex-col items-end leading-tight mr-1'>
          <span className='text-sm font-medium text-gray-700 max-w-[120px] truncate'>
            {userName}
          </span>
        </div>
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt={userName}
            width={28}
            height={28}
            className='rounded-full ring-1 ring-gray-300 object-cover'
          />
        ) : (
          <div className='w-7 h-7 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center text-sm font-semibold ring-1 ring-indigo-200'>
            {userName.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
    </header>
  );
}

export default HorizontalNavbar;

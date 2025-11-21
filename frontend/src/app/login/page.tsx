"use client";

import Image from "next/image";
import logo from "@/../public/logo.svg";
import { Button } from "@mui/material";
import GoogleIcon from "@/components/ui/GoogleIcon";

export default function LoginPage() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-white'>
      <div className='w-full max-w-md flex flex-col items-center gap-8 px-4'>
        <div className='flex items-center gap-3'>
          <span className='inline-block'>
            <Image src={logo} alt='App Logo' width={32} height={32} />
          </span>
          <span className='h-6 w-px bg-gray-300' aria-hidden />
          <span className='text-lg font-medium text-gray-900'>
            Sign in to continue
          </span>
        </div>
        <Button
          variant='contained'
          aria-label='Sign in with Google'
          className='w-[300px] inline-flex items-center justify-center gap-3 rounded-b-4xl bg-[#131428]! text-white text-[1.1rem]'
        >
          <span className='-mt-0.5' aria-hidden>
            <GoogleIcon width={20} height={20} />
          </span>
          <span>Sign in with Google</span>
        </Button>
      </div>
    </div>
  );
}

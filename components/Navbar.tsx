"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  const [overlay, setOverlay] = useState<{ left: number; right: number }>({ left: 0, right: 0 });

  useEffect(() => {
    const overlayAPI = (navigator as any)?.windowControlsOverlay;

    if (overlayAPI) {
      const updateOverlay = () => {
        const { left, right } = overlayAPI.getBoundingClientRect();
        setOverlay({ left, right });
      };

      overlayAPI.addEventListener('geometrychange', updateOverlay);
      updateOverlay(); // Initial update

      return () => overlayAPI.removeEventListener('geometrychange', updateOverlay);
    }
  }, []);

  return (
    <nav
      className="flex fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10"
      style={{ paddingLeft: `${overlay.left}px`, paddingRight: `${overlay.right}px` }}
    >
      {/* Draggable Region for Title Bar */}
      <div
        className="absolute left-0 right-0 top-0 bottom-0"
        style={{ WebkitAppRegion: 'drag' } as React.CSSProperties}
      />

      {/* Logo and Name */}
      <Link href="/" className="flex items-center gap-1 relative z-10">
        <Image src="/icons/logo.svg" width={32} height={32} alt="BMeet Logo" className="max-sm:size-10" />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">B.Meet</p>
      </Link>

      {/* User Controls */}
      <div className="flex flex-between gap-5 relative z-10">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;

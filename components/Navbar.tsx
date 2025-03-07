import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <main className='bg-dark-1 fixed w-screen h-16 z-50'>
      <nav className='flex flex-between fixed z-50 w-screen bg-dark-1 pl-6 pr-6 lg:pl-10 lg:pr-10' id="title-bar">
        <Link href='/' className="flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={32}
            height={32}
            alt="BMeet Logo"
            className='max-sm:size-10'
            />
          <p className='text-[26px] font-extrabold text-white max-sm:hidden'>B.Meet</p>
        </Link>
        <div className='w-[calc(100%-200px)] px-4 h-16' id="drag-reg"/>
        <div className='flex flex-between gap-5'>
          {/**clerk user management */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          <MobileNav />
        </div>
      </nav>
        </main>
  )
}

export default Navbar
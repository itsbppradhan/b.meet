import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { Metadata } from 'next';
import React, { Children, ReactNode } from 'react'

export const metadata: Metadata = {
  title: "B.Meet",
  description: "Experience seamless, ultra-light, and fast video calls with our cloud-based app. Enjoy high-quality communication with minimal data usage and instant connectivity, making it the perfect solution for effortless, on-the-go conversations.",
  icons: {icon: '/icons/logo.svg'}
};

const HomeLayout = ({children}: {children: ReactNode }) => {
  return (
    <main className='relative'>
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
                <div className='w-full'>
                    {children}  
                </div>
            </section>
        </div>

    </main>
  )
}

export default HomeLayout
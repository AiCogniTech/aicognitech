"use client";
import { navList } from '@/constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import CtaButton from '../shared/CtaButton';
import { cn } from '@/lib/utils';
import MultiLingualTool from './MultiLingualTool';
import MobileNav from './MobileNav';

const Header = () => {
    const pathName = usePathname();
    return (
        <header className="flex justify-between items-center my-5 md:my-8 mx-5 md:mx-10 lg:mx-16 py-4 pl-4 sm:pl-10 lg:pl-16 pr-4 rounded-3xl md:rounded-full bg-slate-600/40 border-text border-[0.6px] before:absolute before:h-full before:w-full before:top-0 before:left-0 before:z-[-1]">
            {/* Logo */}
            <Link href={"/"}>
                <Image
                    src={"/images/LOGO_Sharp.jpg"}
                    alt='Logo'
                    height={80}
                    width={100}
                    className='rounded-lg'
                />
            </Link>

            {/* Navigation Menu */}
            <nav className='hidden md:block'>
                <ul className='flex items-center gap-8 font-helvetica'>
                    {
                        navList.map((nav, index) => {
                            const path = pathName == nav.path
                            return (
                                <Link key={index} href={nav.path}
                                    className={cn('hover:text-primary transition duration-300',
                                        path && "text-primary"
                                    )}
                                >
                                    <li className='font-light text-base'>
                                        {nav.title}
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </nav>

            {/* ReQuest Service Button & MultiLingual Selection */}
            <div className='flex items-center gap-4'>
                <div className='hidden md:block'>
                    <CtaButton />
                </div>
                <MultiLingualTool />
                <MobileNav />
            </div>
        </header>
    )
}

export default Header
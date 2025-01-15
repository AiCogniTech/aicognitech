"use client";
import { navList } from '@/constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button';
import CtaButton from '../shared/CtaButton';
import { cn } from '@/lib/utils';

const Header = () => {
    const pathName = usePathname();
    return (
        <header className="flex justify-between items-center my-5 md:my-8 mx-6 md:mx-10 lg:mx-16 py-4 pl-16 pr-4 rounded-full bg-slate-600/40 border-text border-[0.6px]">
            {/* Logo */}
                <Image
                    src={"/images/LOGO_Sharp.jpg"}
                    alt=''
                    height={80}
                    width={100}
                    className='rounded-lg'
                />

            {/* Navigation Menu */}
            <nav>
                <ul className='flex items-center gap-8'>
                    {
                        navList.map((nav, index) => {
                            const path = pathName == nav.path
                            return (
                                <Link key={index} href={nav.path}
                                    className={cn('hover:text-primary transition duration-300',
                                        path && "text-primary"
                                    )}
                                >
                                    <li className='font-light text-base font-inter'>
                                        {nav.title}
                                    </li>
                                </Link>
                            )
                        })
                    }
                </ul>
            </nav>

            {/* ReQuest Service Button */}
            <CtaButton />
        </header>
    )
}

export default Header
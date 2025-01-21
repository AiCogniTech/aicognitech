"use client";
import React from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
    SheetTitle, // Importing SheetTitle
} from "@/components/ui/sheet";

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navList } from '@/constant/constant';
import CtaButton from '../shared/CtaButton';

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <section className='md:hidden'>
            <Sheet>
                <SheetTrigger asChild>
                    <Menu height={36} width={36} className='cursor-pointer text-white' />
                </SheetTrigger>
                <SheetContent side={"right"} className='bg-tertiary'>
                    {/* Adding SheetTitle for accessibility */}
                    <SheetTitle className="my-4">
                        <Link href={"/"} className='flex items-center gap-1'>
                            <Image
                                src={"/images/LOGO_Sharp.jpg"}
                                alt="logo"
                                height={80}
                                width={100}
                                className='cursor-pointer rounded-lg'
                                priority={true}
                            />
                        </Link>
                    </SheetTitle>
                    <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
                        <SheetClose asChild>
                            <section className="flex flex-col gap-6 mt-10">
                                {navList.map((link, index) => {
                                    const isActive = pathname === link.path;
                                    return (
                                        <SheetClose asChild={true} key={index}>
                                            <Link href={link.path}
                                                className={cn(
                                                    'font-normal px-3 py-2 hover:bg-circle hover:text-secondary rounded-3xl cursor-pointer font-helvetica',
                                                    {
                                                        'bg-primary text-secondary': isActive,
                                                    }
                                                )}
                                            >
                                                <h4
                                                    className='font-semibold'>
                                                    {link.title}
                                                </h4>
                                            </Link>
                                        </SheetClose>
                                    );
                                })}
                                <SheetClose asChild>
                                    <CtaButton text='/#contact' />
                                </SheetClose>
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNav;
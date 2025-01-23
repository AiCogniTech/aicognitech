import { navList } from '@/constant/constant'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CtaButton from '../shared/CtaButton'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='sections_container !my-10'>
            {/* Upper Section */}
            <div className='flex flex-col justify-between gap-8 h-full md:h-[40vh] lg:w-[80vw] mx-auto'>
                {/* Logo & Navigation & Links */}
                <div className='flex flex-col md:flex-row justify-between gap-5 items-center'>
                    <Link href={"/"}>
                        <Image
                            src={"/images/LOGO_Sharp.jpg"}
                            alt='Logo'
                            height={120}
                            width={150}
                            className='rounded-lg'
                        />
                    </Link>

                    <div className='space-y-5'>
                        <div className='flex items-center gap-8 font-helvetica'>
                            {
                                navList.map((nav, index) => {
                                    return (
                                        <Link key={index} href={nav.path}
                                            className={cn('hover:text-primary transition duration-300 font-light text-base'
                                            )}
                                        >
                                            {nav.title}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div className='hidden md:flex md:justify-end'>
                            <CtaButton />
                        </div>
                    </div>
                </div>

                {/*  Social Media Icons &other Images */}
                <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-5'>
                    <div className='space-y-4'>
                        <h6 className='text-base font-bold'>
                            Email: <Link href={"mailto:contact@AiCognitech.com"}
                                className='hover:underline hover:text-primary duration-300'>
                                contact@AiCognitech.com
                            </Link>
                        </h6>
                        <div className="flex items-center gap-6 py-2 px-3 rounded-full border-text bg-slate-600/40 w-full">
                            <Link href={"https://www.facebook.com/brain.power.1272"}
                                className='rounded-full group bg-tertiary p-2 hover:scale-[1.02] transition duration-500'
                            >
                                <FaFacebook
                                    size={22}
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href={"https://www.instagram.com/Aicognitech3000"}
                                className='rounded-full bg-tertiary p-2 hover:scale-[1.02] transition duration-500'
                            >
                                <FaInstagram
                                    size={22}
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href={'https://www.linkedin.com/in/aicogntech-ai-powered-health-wellness-technology-solutions/'}
                                className='rounded-full bg-tertiary p-2 hover:scale-[1.02] transition duration-500'
                            >
                                <FaLinkedin
                                    size={22}
                                    className="cursor-pointer"
                                />
                            </Link>
                            <Link href={'https://x.com/@EarthHealthTech'}
                                className='rounded-full bg-tertiary p-2 hover:scale-[1.02] transition duration-500'
                            >
                                <FaXTwitter
                                    size={22}
                                    className="cursor-pointer"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className='flex items-center gap-5'>
                        <Image
                            src={"/images/HIPAA-Compliant-Logo.png"}
                            alt="HIPPA"
                            height={80}
                            width={80}
                            className="md:w-full md:h-auto"
                        />
                        <Image
                            src={"/images/GDPR_edited.jpg"}
                            alt="GDPR"
                            height={80}
                            width={80}
                            className="md:w-full md:h-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Lower Section */}
            <div className='flex flex-col gap-5 justify-center items-center'>
                <Link href={"/"}>
                    <Image
                        src={"/images/LOGO_Sharp.jpg"}
                        alt='Logo'
                        height={120}
                        width={150}
                        className='rounded-lg'
                    />
                </Link>
                <p className='text-sm lg:text-base font-bold font-helvetica'>
                    © 2025 AiCogniTech. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
import { navList } from '@/constant/constant'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CtaButton from '../shared/CtaButton'
import { getTranslations } from 'next-intl/server'
import SocialMediaLinks from '../shared/SocialMediaLinks'

const Footer = async () => {
    const t = await getTranslations("Navigation");
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
                                            {t(`navlist.${index}`)}
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
                    <div className='flex flex-col items-start gap-4'>
                        <h6 className='text-base font-bold'>
                            Email: <Link href={"mailto:contact@AiCognitech.com"}
                                className='hover:underline hover:text-primary duration-300'>
                                contact@AiCognitech.com
                            </Link>
                        </h6>
                        <SocialMediaLinks />
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
                    {t('p')}
                </p>
            </div>
        </footer>
    )
}

export default Footer
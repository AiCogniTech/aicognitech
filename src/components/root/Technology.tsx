import React from 'react'
import TechButton from '../shared/TechButton'
import Image from 'next/image'
import CtaButton from '../shared/CtaButton'
import { getTranslations } from 'next-intl/server'

const Technology = async () => {
    const t = await getTranslations("HomePage.Technology");
    return (
        <section className='bg-primary px-5 md:px-10 lg:px-16 py-6 md:py-12 lg:py-[60px] flex flex-col lg:flex-row justify-between items-center gap-20 text-secondary'>
            {/* Text */}
            <div className='flex flex-col justify-center items-start gap-6 font-helvetica flex-1'>
                <div className='space-y-4'>
                    <TechButton text='The Technology' />
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold font-helvetica'>
                        {t('h2_1')} <br />
                        {t('h2_2')}
                    </h2>
                </div>
                <div className='space-y-4'>
                    <p className='text-base md:text-lg xl:text-xl font-normal'>
                        {t('p1')} <span className='font-bold'>
                            {t('sp1')}
                        </span> {t('p2')} <span className='font-bold'>
                            {t('sp2')}</span>
                    </p>
                    <CtaButton primary={false} />
                </div>
            </div>
            {/* Image */}
            <div className='flex-1'>
                <Image
                    src={"/images/technology-1.svg"}
                    alt='Technology'
                    height={500}
                    width={500}
                />
            </div>
        </section>
    )
}

export default Technology
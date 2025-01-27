import React from 'react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server';
import SocialMediaLinks from '../shared/SocialMediaLinks';

const OwnerOveriew = async () => {
    const t = await getTranslations("HomePage.OwnerOverwrite");
    return (
        <section className='sections_container'>
            <div className='space-y-4 text-center'>
                <h2 className="section_heading">
                    {t('h2_1')} <span className='text-primary'>
                        {t('span')}
                    </span> {t('h2_2')}
                </h2>
            </div>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-16 border border-primary rounded-md py-6 md:py-12 px-8 md:px-14'>
                <div className='flex-1 flex flex-col gap-4 font-helvetica'>
                    <h4 className='text-2xl md:text-3xl font-bold text-primary'>
                        {t('h4')}
                    </h4>
                    <h6 className='text-xl md:text-2xl font-bold text-text'>
                        {t('h6')}
                    </h6>
                    <p className='text-base md:text-lg lg:text-xl font-light text-text-secodnary'>
                        {t('p')}
                    </p>
                </div>
                <div className='flex-1 flex flex-col gap-5 justify-center items-center hover:scale-[1.01] hover:shadow-md transition-all duration-700'>
                    <Image
                        src={"/images/cebuan.jpg"}
                        alt='Cebuan De La Rochette'
                        height={350}
                        width={350}
                        className='rounded-sm'
                    />
                    <SocialMediaLinks />
                </div>
            </div>
        </section>
    )
}

export default OwnerOveriew
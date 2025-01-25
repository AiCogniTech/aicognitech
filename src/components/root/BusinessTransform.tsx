import React from 'react'
import CtaButton from '../shared/CtaButton'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server';

const BusinessTransform = async () => {
    const t = await getTranslations("HomePage.BusinessTransform");
    const listItems = [
        "Sector-specific expertise",
        "International market reach, (EN, FR, DE, IT)",
        "Consultative + Personal Attention",
        "Proven solution templates, Customized bundles Strategies"
    ]

    return (
        <section className='bg-primary px-5 md:px-10 lg:px-16 py-6 md:py-12 flex flex-col-reverse md:flex-col lg:flex-row justify-between items-center gap-20 text-secondary'>
            <div className='flex flex-col justify-center items-start gap-6 font-helvetica flex-1'>
                <h2 className='section_heading'>
                    {t('h2')}
                </h2>

                {/* Paragraph with text only */}
                <p className='text-base md:text-lg lg:text-xl font-light'>
                    {t('p')}
                </p>

                {/* Use a UL to list items */}
                <ul className='list-disc list-inside'>
                    {listItems.map((item, i) => (
                        <li key={i} className='my-2 font-bold'>{t(`listItems.${i}`)}</li>
                    ))}
                </ul>

                <CtaButton primary={false} />
            </div>

            <div className='flex-1'>
                <Image
                    src={"/images/business_transform.png"}
                    alt='Business Transform'
                    height={500}
                    width={500}
                />
            </div>
        </section>
    )
}

export default BusinessTransform

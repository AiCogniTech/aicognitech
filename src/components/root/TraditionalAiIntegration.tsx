import { aiIntegrations } from '@/constant/constant'
import { getTranslations } from 'next-intl/server';
import React from 'react'

const TraditionalAiIntegration = async () => {
    const t = await getTranslations("HomePage.TraditionalAiIntegration");
    return (
        <section className='sections_container'>
            <div className='space-y-4 text-center md:w-[70vw] lg:w-[50vw] mx-auto'>
                <h2 className="section_heading text-text">
                    {t("h2")}
                </h2>
                <p className='text-base md:text-lg lg:text-xl font-normal text-text-secodnary'>
                    {t("p1")}
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    aiIntegrations.map((_, index) => (
                        <div key={index} className='flex flex-col items-start gap-4 text-lg font-bold text-primary border-2 border-primary p-8 rounded-xl'>
                            <h4 className='text-primary text-xl md:text-2xl font-bold'>
                                {t(`aiIntegrations.${index}.title`)}
                            </h4>
                            <p className='text-text-secodnary text-lg lg:text-xl font-light'>
                                {t(`aiIntegrations.${index}.description`)}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default TraditionalAiIntegration
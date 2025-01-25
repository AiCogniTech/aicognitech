import { getTranslations } from 'next-intl/server';
import React from 'react'

const TraditionalAi = async () => {
    const t = await getTranslations("HomePage.TraditionalAI");
    return (
        <section className='bg-tertiary rounded-t-2xl font-helvetica'>
            <div className='py-10 lg:py-20 w-[90vw] mx-auto space-y-8'>
                <div className='space-y-4 text-center md:w-[70vw] lg:w-[50vw] mx-auto'>
                    <h2 className="section_heading text-text">
                        {t("h2")}
                    </h2>
                    <p className='text-base md:text-lg lg:text-xl font-normal text-text-secodnary'>
                        {t("p2")}
                    </p>
                </div>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                    {
                        ["Identify performance bottlenecks", "Streamline marketing & sales processes",
                            "Create bespoke AI tools tailored to your needs", "Transform operational pain points into competitive advantages"
                        ].map((_, index) =>(
                            <li className='flex flex-col justify-center items-start gap-4 text-lg font-bold text-primary border-2 border-primary p-8 rounded-xl' key={index}>
                                {t(`ul.${index}`)}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default TraditionalAi
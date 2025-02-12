import React from 'react'
import CtaButton from '../shared/CtaButton'
import { getTranslations } from 'next-intl/server';

const ContactHero = async () => {
    const t = await getTranslations("Contact.Hero");
    return (
        <section className="flex justify-center items-center h-[70vh] w-full mb-28 sm:mb-32 xl:mb-0">
            <div className="absolute inset-0 bg-contact-hero bg-cover bg-center w-full h-full z-[-1] opacity-50" />
            <div className="flex-center flex-col text-center gap-10 md:gap-5 relative bottom-10 z-10 w-[90vw] md:w-[70vw] xl:w-[55vw] font-helvetica text-text">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    {t("h1_1")}<br className="hidden lg:block" />
                    {t("h1_2")} <span className="text-primary">{t("span")} <span className='text-text'>{t("h1_3")} 
                        </span> {t("span2")}</span>
                </h1>
                <p className='text-base md:text-lg lg:text-2xl font-bold'>
                    {t('p')}
                </p>
                <CtaButton />
            </div>
        </section>
    )
}

export default ContactHero
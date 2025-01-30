import React from 'react'
import CtaButton from './CtaButton'
import { getTranslations } from 'next-intl/server';
import SubscribeEmail from './SubscribeEmail';

const TransformContent = async () => {
    const t = await getTranslations("Blog.TransformContent");
    return (
        <section className='bg-primary px-5 md:px-10 lg:px-16 py-8 md:py-12 lg:py-20'>
            <div className='px-4 md:px-8 lg:px-12 py-5 md:py-10 lg:py-16 flex flex-col md:flex-row justify-center items-start lg:items-center gap-20 font-helvetica flex-1 rounded-lg bg-secondary text-text'>
                <div className='flex-1 flex flex-col justify-between gap-8'>
                    <div className='h-2 w-20 bg-primary' />
                    <h4 className='text-lg md:text-xl lg:text-2xl font-bold'>
                        {t("h4")}
                    </h4>
                    <SubscribeEmail />
                </div>
                <div className='flex-1'>
                    <p className='text-base md:text-lg font-light'>
                        {t('p')}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TransformContent
import React from 'react'
import Image from 'next/image'
import SubscribeEmail from '../shared/SubscribeEmail'
import { getTranslations } from 'next-intl/server';

const BlogHero = async () => {
    const t = await getTranslations("blog.hero");
    return (
        <section className="flex flex-col-reverse lg:flex-row justify-center lg:justify-start lg:items-center px-5 md:px-10 lg:px-16 w-full h-[80vh] lg:h-auto lg:min-h-[80vh] md:mb-36 xl:mb-0">
            <div className='absolute top-0 left-0 bg-primary/50 w-full h-full object-cover z-[-1] opacity-95' />
            <div className="flex-between flex-col lg:flex-row gap-10 md:gap-20 relative z-10 font-helvetica w-full py-6 md:py-12 px-8 md:px-14 lg:bottom-10">
                <div className='flex-1 flex flex-col gap-6'>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        {t("h1")}
                    </h1>
                    <p className='text-base md:text-lg font-light text-text-secodnary'>
                        {t("p")}
                    </p>
                    <SubscribeEmail />
                </div>
                <div className='flex-1 hidden xl:flex justify-center'>
                    <Image
                        src={"/images/cebuan.jpg"}
                        alt='Cebuan De La Rochette'
                        height={400}
                        width={400}
                        className='rounded-sm'
                    />
                </div>
            </div>
        </section>
    )
}

export default BlogHero
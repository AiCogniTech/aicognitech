import React, { ReactNode } from 'react'
import { getTranslations } from 'next-intl/server';
import Calendly from '../shared/Calendly';

const TransformBusiness = async ({ children }: { children?: ReactNode }) => {
    const t = await getTranslations("HomePage.TransformBusiness");
    return (
        <section className='bg-primary text-secondary font-helvetica' id='contact'>
            <div className='py-10 lg:py-20 w-[90vw] mx-auto space-y-5'>
                <div className='space-y-4 text-center lg:w-[40vw] mx-auto'>
                    <h2 className="section_heading">
                        {t("h2")}
                    </h2>
                    <p className='text-base md:text-lg lg:text-xl font-normal'>
                        {t("p1")} <span className='font-bold'>
                            {t("sp1")}
                        </span>
                    </p>
                </div>
                {/* <hr className='' /> */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                    {
                        children && (
                            <div className='flex-1'>
                                {children}
                            </div>
                        )
                    }
                    <Calendly />
                </div>
            </div>
        </section>
    )
}

export default TransformBusiness;

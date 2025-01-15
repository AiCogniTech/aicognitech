import React from 'react'
import TechButton from '../shared/TechButton'
import Image from 'next/image'

const OwnerOveriew = () => {
    return (
        <section className='w-[90vw] mx-auto my-20 space-y-8'>
            <div className='space-y-4 text-center'>
                <TechButton text='The Technology' primary={false} />
                <h2 className="section_heading">
                    Elevating <span className='text-primary'>
                        Health Industries
                    </span> with Personalized AI
                </h2>
            </div>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-16 border border-primary rounded-md py-6 md:py-12 px-8 md:px-14'>
                <div className='flex-1 flex flex-col gap-4 font-helvetica'>
                    <h4 className='text-2xl md:text-3xl font-bold text-primary'>
                        Cebuan De La Rochette
                    </h4>
                    <h6 className='text-xl md:text-2xl font-bold text-text'>
                        CEO & Founder
                    </h6>
                    <p className='text-base md:text-lg lg:text-xl font-light text-text-secodnary'>
                        Cebuan De La Rochette is on a mission to transform Health and Wellness through AI-driven marketing and sales. As the Founder & CEO of AICogniTech®, he collaborates with forward-thinking companies in FemTech, AgeTech, HealthTech, and Longevity to create solutions that truly enhance human well-being. Drawing on extensive expertise in AI architecture & multi-model prompt engineering, Cebuan guides leaders across the globe—helping them navigate today’s fast-paced AI landscape for real, measurable impact. With a background spanning European and international markets, he brings a multicultural perspective in English, French, German, and Italian. Ready to embrace AI without sacrificing a human touch? Cebuan is here to help you unlock unprecedented growth.
                    </p>
                </div>
                <div className='flex-1 hover:scale-[1.01] hover:shadow-md transition-all duration-700'>
                    <Image
                        src={"/images/cebuan.jpg"}
                        alt='Cebuan De La Rochette'
                        height={500}
                        width={500}
                        className='rounded-sm'
                    />
                </div>
            </div>
        </section>
    )
}

export default OwnerOveriew
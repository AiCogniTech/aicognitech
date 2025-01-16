import { aiIntegrations } from '@/constant/constant'
import React from 'react'

const TraditionalAiIntegration = () => {
    return (
        <section className='sections_container'>
            <div className='space-y-4 text-center md:w-[70vw] lg:w-[50vw] mx-auto'>
                <h2 className="section_heading text-text">
                    AI-Powered Market Acceleration for Health Innovation
                </h2>
                <p className='text-base md:text-lg lg:text-xl font-normal text-text-secodnary'>
                    {`Why us?  We dive deep into your sector's unique challenges. Our specialized AI team works only with FemTech, AgeTech, HealthTech, and Longevity innovators`}
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    aiIntegrations.map((integeration, index) => (
                        <div key={index} className='flex flex-col items-start gap-4 text-lg font-bold text-primary border-2 border-primary p-8 rounded-xl'>
                            <h4 className='text-primary text-xl md:text-2xl font-bold'>
                                {integeration.title}
                            </h4>
                            <p className='text-text-secodnary text-lg lg:text-xl font-light'>
                                {integeration.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default TraditionalAiIntegration
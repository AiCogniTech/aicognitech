import { servingIndustries } from '@/constant/constant'
import React from 'react'
import CtaButton from '../shared/CtaButton'

const WeServe = () => {
    return (
        <section className='bg-primary text-secondary rounded-t-2xl font-helvetica'>
            <div className='py-10 lg:py-20 w-[90vw] mx-auto space-y-8'>
                <div className='space-y-4 text-center md:w-[60vw] lg:w-[40vw] mx-auto'>
                    <h2 className="section_heading">
                        Who We Serve
                    </h2>
                    <p className='text-base md:text-lg lg:text-xl font-normal'>
                        We identify your specific pain points and develop tailored AI solutions to eliminate, optimize and automate everything from marketing to sales and customer interactions
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {servingIndustries.map((industry, index) => (
                        <div key={index} className='flex flex-col items-start gap-5 border-2 border-tertiary p-5 md:p-8 rounded-xl'>
                            <industry.icon className='h-5 md:h-7 w-5 md:w-7 lg:h-10 lg:w-10' />
                            <h4 className='text-xl md:text-2xl font-bold'>
                                {industry.title}
                            </h4>
                            <p className='text-lg font-normal'>
                                {industry.description}
                            </p>
                            <CtaButton primary={false} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WeServe
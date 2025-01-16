import { journeySteps } from '@/constant/constant'
import Image from 'next/image'
import React from 'react'

const TransformationJourney = () => {
    return (
        <section className='flex flex-col lg:flex-row gap-12 px-5 md:px-10 lg:px-16 py-10 lg:py-20 bg-primary text-secondary'>
            {/* Custom Transformation Journey */}
            <div className='flex flex-col items-start gap-6 font-helvetica flex-1 h-full lg:sticky top-20'>
                <h2 className='section_heading'>
                    Your Custom AI Transformation Journey
                </h2>

                {/* Paragraph with text only */}
                <p className='text-base md:text-lg lg:text-xl font-light'>
                    Welcome to AiCogniTech, where we turn AI potential into measurable business results. Our expertise lies in developing bespoke AI solutions that adapt to your unique operational challenges. We distinguish ourselves by creating intuitive, powerful tools that amplify your team's natural capabilities, streamline complex processes, and eliminate persistent bottlenecks. Our approach isn't about replacing human insight - it's about augmenting it with AI that understands your specific business context, leading to exponential improvements in productivity & performance
                </p>
            </div>
            {/* Transformation Journey Steps */}
            <div className='flex-1 space-y-5'>
                {
                    journeySteps.map((step, index) => (
                        <div key={index} className='flex flex-col justify-center items-start gap-3 bg-secondary p-5 md:p-10 lg:p-[60px] rounded-xl font-helvetica'>
                            <Image
                                src={step.icon}
                                alt='step icon'
                                height={50}
                                width={50}
                            />
                            <h4 className='text-primary text-xl md:text-2xl font-bold'>
                                {step.title}
                            </h4>
                            <p className='text-text-secodnary text-lg md:text-xl lg:text-2xl font-light'>
                                {step.description}
                            </p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default TransformationJourney
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
                    At AiCogniTech, we’re redefining how work gets done, harnessing the power of AI to revolutionize productivity and unlock new possibilities. We go beyond the hype, custom-creating transformative AI solutions that elevate your team’s capabilities, streamline operations, and cut through inefficiencies. By aligning custom-built AI tools with your core business needs, we’re not just enhancing workflows—we’re reshaping the future of work itself, empowering your team to overcome every bottleneck, 25x their human capabilities, and achieve far greater impact. Here’s how we do it.
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
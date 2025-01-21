import React from 'react'
import TechButton from '../shared/TechButton'
import Image from 'next/image'
import CtaButton from '../shared/CtaButton'

const Technology = () => {
    return (
        <section className='bg-primary px-5 md:px-10 lg:px-16 py-6 md:py-12 lg:py-[60px] flex flex-col lg:flex-row justify-between items-center gap-20 text-secondary'>
            {/* Text */}
            <div className='flex flex-col justify-center items-start gap-6 font-helvetica flex-1'>
                <div className='space-y-4'>
                    <TechButton text='The Technology' />
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold font-helvetica'>
                        Innovative AI Solutions for Health & Wellness: Redefining Industry Standards
                    </h2>
                </div>
                <div className='space-y-4'>
                    <p className='text-base md:text-lg xl:text-xl font-normal'>
                        We specialize in custom AI consulting and integration services, focusing on <span className='font-bold'>
                            FemTech, AgeTech, and Longevity.
                        </span> Our approach involves immersing ourselves in your organization to identify tedious, repetitive processes that hinder efficiency—from marketing and sales to patient engagement, operations, and more. We then develop tailored AI bots, agents, and automations using leading LLMs (such as ChatGPT, Claude, Gemini), CustomGPTs, and our own innovative frameworks. <span className='font-bold'>
                            Ready to transform how your team delivers care and drives growth?</span>
                    </p>
                    <CtaButton primary={false} />
                </div>
            </div>
            {/* Image */}
            <div className='flex-1'>
                <Image
                    src={"/images/technology-1.svg"}
                    alt='Technology'
                    height={500}
                    width={500}
                />
            </div>
        </section>
    )
}

export default Technology
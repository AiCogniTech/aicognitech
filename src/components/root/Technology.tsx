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
                    <h2 className='text-3xl lg:text-4xl xl:text-[40px] font-bold'>
                        AI & Wellness: Redefining the Path to Better Health
                    </h2>
                </div>
                <div className='space-y-4'>
                    <p className='text-base md:text-lg xl:text-xl font-normal'>
                        We’re a custom AI consulting and integrations firm specializing in <span className='font-bold'>
                            FemTech, AgeTech & Longevity.
                        </span> We step INSIDE your organization to pinpoint the tedious, repetitive processes slowing you down—from marketing and sales to patient engagement, operations, and beyond. Then we build bespoke AI bots, agents & automations using leading LLMs (ChatGPT, Claude, Gemini), CustomGPTs, and our own pioneering frameworks. <span className='font-bold'>
                            Ready to reimagine how your team delivers care and grows? Let’s transform health and wellness together.</span>
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
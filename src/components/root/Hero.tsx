import React from 'react'
import CtaButton from '../shared/CtaButton'

const Hero = () => {
    return (
        <section className="flex flex-col-reverse lg:flex-row justify-center lg:justify-start lg:items-center px-5 md:px-10 lg:px-16 w-full h-[80vh] lg:h-auto lg:min-h-[80vh]">
            <div className='flex flex-col justify-center lg:justify-between items-center lg:items-start gap-8 relative z-10 bottom-20 lg:bottom-10 xl:bottom-5 font-helvetica lg:w-[60vw] xl:w-[40vw] text-center lg:text-left'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-[50px]'>
                    AI Innovation for FemTech, AgeTech, HealthTech, Wellness & Longevity Sectors
                </h1>
                <h4 className="text-base md:text-lg font-normal">
                    Strategic AI Solution for the Future of Health & Wellbeing
                </h4>
                <CtaButton />
            </div>
            <video src="/videos/hero-background.mp4" autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-95' />
        </section>
    )
}

export default Hero
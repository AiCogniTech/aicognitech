import React from 'react'
import CtaButton from '../shared/CtaButton'

const ContactHero = () => {
    return (
        <section className="flex justify-center items-center h-[70vh] w-full mb-28 sm:mb-32 xl:mb-0">
            <div className="absolute inset-0 bg-contact-hero bg-cover bg-center w-full h-full z-[-1] opacity-50" />
            <div className="flex-center flex-col text-center gap-10 md:gap-5 relative bottom-10 z-10 w-[90vw] md:w-[70vw] xl:w-[55vw] font-helvetica text-text">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    Partner & Grow: AI <br className="hidden lg:block" />
                    for <span className="text-primary">Health <span className='text-text'>& 
                        </span> Wellness</span> <br className='hidden xl:block' />
                </h1>
                <p className='text-base md:text-lg lg:text-2xl font-bold'>
                    Harness AI to Boost Your Health & Wellness Business. Schedule Your Discovery Call Today!
                </p>
                <CtaButton />
            </div>
        </section>
    )
}

export default ContactHero
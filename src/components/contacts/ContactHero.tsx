import React from 'react'
import CtaButton from '../shared/CtaButton'

const ContactHero = () => {
    return (
        <section className="flex justify-center items-center h-[70vh] w-full mb-28 sm:mb-32 xl:mb-0">
            <div className="absolute inset-0 bg-contact-hero bg-cover bg-center w-full h-full z-[-1]" />
            <div className="flex-center flex-col text-center gap-10 md:gap-5 relative bottom-10 z-10 text-white w-[90vw] md:w-[70vw] xl:w-[55vw] font-helvetica">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                    Your Partner In Creating <br className="hidden lg:block" />
                    Intelligent <span className="text-primary">Solutions</span> <br className='hidden xl:block' />
                    For A Better World
                </h1>
                <p className='text-base md:text-lg lg:text-xl font-light'>
                    Custom software design, development & AI solutions for healthcare with a vision to change the world.
                </p>
                <CtaButton primary={false} />
            </div>
        </section>
    )
}

export default ContactHero
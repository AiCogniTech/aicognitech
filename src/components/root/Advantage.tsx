import { advantages } from '@/constant/constant'
import React from 'react'

const Advantage = () => {
    return (
        <section className='sections_container'>
            <div className='space-y-4 text-center md:w-[60vw] lg:w-[40vw] mx-auto'>
                <h2 className="section_heading">
                    Consumers across <span className='text-primary'>
                        Health & Wellness
                    </span> sectors seek personalized experiences.
                </h2>
                <p className='text-base md:text-lg lg:text-xl font-light text-text-secodnary'>
                    We identify your specific pain points and develop tailored AI solutions to eliminate, optimize and automate everything from marketing to sales and customer interactions
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {advantages.map((advantage, index) => (
                    <div key={index} className='flex flex-col justify-center items-start gap-3 border border-primary p-5 md:p-10 lg:p-[60px] rounded-xl'>
                        <advantage.icon className='h-5 md:h-7 lg:h-10 w-5 md:w-7 lg:w-10 text-primary' />
                        <h4 className='text-primary text-xl md:text-2xl font-bold'>
                            {advantage.title}
                        </h4>
                        <p className='text-text-secodnary text-lg md:text-xl lg:text-2xl font-normal'>
                            {advantage.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Advantage
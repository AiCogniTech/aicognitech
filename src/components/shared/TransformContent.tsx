import React from 'react'
import CtaButton from './CtaButton'

const TransformContent = () => {
    return (
        <section className='bg-primary px-5 md:px-10 lg:px-16 py-6 md:py-12 sections_container'>
            <div className='px-4 md:px-8 lg:px-12 py-5 md:py-10 flex flex-col md:flex-row justify-center items-start gap-20 font-helvetica flex-1 rounded-lg bg-secondary text-text'>
                <div className='flex-1 flex flex-col gap-4'>
                    <div className='h-2 w-20 bg-primary' />
                    <h4>
                        Transform Your Content with Julia McCoy's AI-Driven Expertise
                    </h4>
                    <CtaButton />
                </div>
                <div className='flex-1'>
                    <p>
                        Unlock the full potential of AI-powered content creation with Julia McCoy’s expert insights and guidance. Whether you're a business owner, marketer, or writer looking to improve your strategy, Julia’s AI-driven techniques can help you achieve your goals faster and more effectively.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TransformContent
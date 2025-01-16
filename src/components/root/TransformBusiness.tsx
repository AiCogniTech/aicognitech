"use client";
import React from 'react'
import dynamic from 'next/dynamic';

// Dynamically import InlineWidget only on the client-side
const InlineWidget = dynamic(() => import('react-calendly').then((mod) => mod.InlineWidget), {
    ssr: false // Disable Server-Side Rendering for this component
});


const TransformBusiness = () => {
    return (
        <section className='bg-primary text-secondary rounded-t-2xl font-helvetica'>
            <div className='py-10 lg:py-20 w-[70vw] mx-auto space-y-8'>
                <div className='space-y-4 text-center lg:w-[45vw] mx-auto'>
                    <h2 className="section_heading">
                        Ready to Transform Healthcare & Wellness?
                    </h2>
                    <p className='text-base md:text-lg lg:text-xl font-normal'>
                        The future of health belongs to early innovators. Whether you're looking to revolutionize personalized medicine, enhance aging-in-place solutions, or transform women's health technology, AICogniTech provides the cutting-edge AI expertise and support you need to lead in the AI digital health revolution. Schedule a consultation today and discover how we can help you leverage AI to pioneer the future of longevity and wellness.
                    </p>
                </div>
                <div className="App">
                    <InlineWidget url="https://calendly.com/cdlr-aicognitech/ai-cognitech-get-to-know" 
                    styles={{
                        height: '1000px',
                        backgroundColor: "010216",
                        color: "7AFFFE"
                      }} 
                    />
                </div>
            </div>
        </section>
    )
}

export default TransformBusiness;

"use client";
import React from 'react'
import dynamic from 'next/dynamic';

// Dyamically import InlineWidget only on the client-side
const InlineWidget = dynamic(() => import('react-calendly').then((mod) => mod.InlineWidget), {
    ssr: false // Disable Server-Side Rendering for this component
});

const Calendly = () => {
    return (
        <div className='flex-1 h-fit'>
            <InlineWidget url="https://calendly.com/cdlr-aicognitech/ai-cognitech-get-to-know"
                styles={{
                    height: '1000px',
                    backgroundColor: "010216",
                    color: "7AFFFE"
                }}
            />
        </div>
    )
}

export default Calendly
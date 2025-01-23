import React from 'react'

const TraditionalAi = () => {
    return (
        <section className='bg-tertiary rounded-t-2xl font-helvetica'>
            <div className='py-10 lg:py-20 w-[90vw] mx-auto space-y-8'>
                <div className='space-y-4 text-center md:w-[70vw] lg:w-[50vw] mx-auto'>
                    <h2 className="section_heading text-text">
                        AI-Powered Market Acceleration for Health Innovation
                    </h2>
                    <p className='text-base md:text-lg lg:text-xl font-normal text-text-secodnary'>
                        {`Why us?  We dive deep into your sector's unique challenges. Our specialized AI team works only with FemTech, AgeTech, HealthTech, and Longevity innovators`}
                    </p>
                </div>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                    {
                        ["Personalized Marketing at Scale", "Complex Product Education & Communication",
                            "Lead Qualification & Sales Cycle Optimization", "Market Intelligence & Competitive Positioning"
                        ].map((val, index) =>(
                            <li className='flex flex-col justify-center items-start gap-4 text-lg font-bold text-primary text-center border-2 border-primary p-8 rounded-xl' key={index}>
                                {val}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default TraditionalAi
import Image from 'next/image'
import React from 'react'

const SpeicficBlogHero = ({ blog }: { blog: Post }) => {
    return (
        <section className="flex flex-col-reverse lg:flex-row justify-center lg:justify-start lg:items-center px-5 md:px-10 lg:px-16 w-full h-[80vh] lg:h-auto lg:min-h-[80vh] mb-16 md:mb-28 lg:mb-0">
            <div className='absolute top-0 left-0 bg-primary/50 w-full h-full z-[-1] opacity-95' />
            <div className="flex-between flex-col md:flex-col-reverse lg:flex-row justify-center items-center gap-10 md:gap-20 relative z-10 font-helvetica w-full py-6 md:py-12 px-4 sm:px-8 md:px-14 bottom-12 lg:bottom-10">
                <div className='flex-1 flex flex-col gap-8'>
                    <div className='hidden xl:flex h-2 w-20 bg-primary' />
                    <h1 className="text-3xl sm:text-4xl xl:text-5xl md:leading-[50px] font-bold text-primary text-center lg:text-left">
                        {blog.title}
                    </h1>
                    <div className='flex items-center gap-3'>
                        <Image
                            src={blog.author.image_url}
                            alt='Author'
                            width={60}
                            height={60}
                            className='rounded-xl'
                        />
                        <div className='flex flex-col gap-2'>
                            <h4 className='text-text text-lg font-inter'>
                                {blog.author.name}
                            </h4>
                            <h6 className='text-text-secodnary text-sm'>
                                {blog.author.destination}
                            </h6>
                        </div>
                    </div>
                </div>
                <div className='flex-1 hidden md:flex justify-center w-full'>
                    <Image
                        src={blog.imageSrc}
                        alt={blog.title}
                        className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                        height={400}
                        width={400}
                    />
                </div>
            </div>
        </section>
    )
}

export default SpeicficBlogHero
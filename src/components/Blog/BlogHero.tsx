import React from 'react'
import Image from 'next/image'
import { randomBlog } from '@/lib/actions/blogs.actions';
import { PortableText } from 'next-sanity';
import { urlFor } from '@/sanity/lib/image';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const BlogHero = async ({ locale }: { locale: string }) => {
    const randomBlogs: Post = await randomBlog();
    // console.log(randomBlogs)
    const components = {
        types: {
            image: ({ value }: { value: any }) => {
                if (!value || !value.asset) return null;
                const imageUrl = urlFor(value).url();

                return (
                    <Image
                        src={imageUrl}
                        alt={value?.alt || "Blog Image"}
                        width={800}
                        height={500}
                        className="w-full h-auto rounded-lg"
                    />
                );
            },
        },
    };

    return (
        <section className="flex flex-col-reverse lg:flex-row justify-center lg:justify-start lg:items-center px-5 md:px-10 lg:px-16 w-full h-[80vh] lg:h-auto lg:min-h-[80vh] md:mb-36 xl:mb-0">
            <div className='absolute top-0 left-0 bg-primary/50 w-full h-full object-cover z-[-1] opacity-95' />
            <div className="flex-between flex-col lg:flex-row gap-10 md:gap-20 relative z-10 font-helvetica w-full py-6 md:py-12 px-8 md:px-14 lg:bottom-10">
                <div className='flex-1 flex flex-col gap-6'>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                        {randomBlogs.title}
                    </h1>
                    <div className='text-base md:text-lg font-light text-text-secodnary line-clamp-5'>
                        <PortableText value={randomBlogs.body} components={components} />
                    </div>
                    <Link href={`/${locale}/blog/${randomBlogs.slug}`}>
                        <Button className={cn('rounded-[50px] font-bold text-base font-helvetica text-center w-auto bg-secondary text-primary hover:bg-secondary/80',
                        )} size={"lg"}
                        >
                            Read Now
                        </Button>
                    </Link>
                </div>
                <div className='flex-1 hidden md:flex justify-center w-full'>
                    <Image
                        src={randomBlogs.imageSrc}
                        alt={randomBlogs.title}
                        className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                        height={400}
                        width={400}
                    />
                </div>
            </div>
        </section>
    )
}

export default BlogHero
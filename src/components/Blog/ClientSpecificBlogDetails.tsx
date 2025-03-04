"use client";
import { Locale, useRouter } from '@/i18n/routing';
import { fetchBlogDetails } from '@/lib/actions/blogs.actions';
// import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import SpeicficBlogHero from './SpeicficBlogHero';
import SpecificBlogDetails from './SpecificBlogDetails';
import LatestBlogs from './LatestBlogs';
import { Skeleton } from '../ui/skeleton';

const ClientSpecificBlogDetails = ({ locale, slug }: { locale: string, slug: string }) => {
    const router = useRouter();
    const [blogDetails, setBlogDetails] = useState<Post | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            // Ensure that locale is a valid string; you might log it to check.
            console.log("Fetching posts with locale:", locale);
            const data: Post[] = await fetchBlogDetails(locale);
            const currentBlog = data.find((blog) => blog.slug === slug);

            if (!currentBlog) {
                data.forEach((blog: Post) => {
                    if (blog._translations) {
                        const translatedPost = blog._translations.find((t: Translation) => t.language === locale);
                        if (translatedPost) {
                            setBlogDetails(translatedPost);
                            router.replace({
                                pathname: "/blog/[slug]",
                                params: { slug: translatedPost.slug },
                            }, { locale: locale as Locale });
                        }
                    }
                });
            } else {
                setBlogDetails(currentBlog);
            }
        };

        fetchData();
    }, [locale, slug]);


    if (!blogDetails) {
        return <section className="flex flex-col-reverse lg:flex-row justify-center lg:justify-start lg:items-center px-5 md:px-10 lg:px-16 w-full h-[80vh] lg:h-auto lg:min-h-[80vh] mb-16 md:mb-28 lg:mb-0">
            <div className='absolute top-0 left-0 bg-primary/50 w-full h-full z-[-1] opacity-95' />
            <div className="flex-between flex-col md:flex-col-reverse lg:flex-row justify-center items-center gap-10 md:gap-20 relative z-10 font-helvetica w-full py-6 md:py-12 px-4 sm:px-8 md:px-14 bottom-12 lg:bottom-10">
                <div className="flex flex-col space-y-3">
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    <div className="flex items-center space-x-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                </div>
                <div className='flex-1 hidden md:flex justify-center w-full'>
                    <Skeleton className="h-[400px] w-[400px]" />
                </div>
            </div>
        </section>
    }

    return (
        <main>
            {/* <h1>{blogDetails.title}</h1> */}
            {/* <p>{blogDetails.body}</p> */}
            <SpeicficBlogHero blog={blogDetails} />
            <SpecificBlogDetails blog={blogDetails} />
            <LatestBlogs categorySlug={null} language={locale} />
        </main>
    );
}

export default ClientSpecificBlogDetails
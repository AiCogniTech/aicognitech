"use client";
import { Locale, useRouter } from '@/i18n/routing';
import { fetchBlogDetails } from '@/lib/actions/blogs.actions';
// import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import SpeicficBlogHero from './SpeicficBlogHero';
import SpecificBlogDetails from './SpecificBlogDetails';
import LatestBlogs from './LatestBlogs';

const ClientSpecificBlogDetails = ({ locale, slug }: { locale: string, slug: string }) => {
    const router = useRouter();
    const [blogDetails, setBlogDetails] = useState<Post | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data: Post[] = await fetchBlogDetails(locale);
            const currentBlog = data.find((blog) => blog.slug === slug);

            if (!currentBlog) {
                data.forEach((blog: Post) => {
                    if (blog._translations) {
                        const translatedPost = blog._translations.find((t:Translation) => t.language === locale);
                        if (translatedPost) {
                            setBlogDetails(translatedPost);
                            router.replace({
                                pathname: "/blog/[slug]", // This should match your routing config
                                params: { slug: translatedPost.slug }, // Ensure correct slug is used
                                 
                            },{ locale: locale as Locale });
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
        return <main><h1>Loading...</h1></main>;
    }

    return (
        <main>
            {/* <h1>{blogDetails.title}</h1> */}
            {/* <p>{blogDetails.body}</p> */}
            <SpeicficBlogHero blog={blogDetails} />
            <SpecificBlogDetails blog={blogDetails} />
            <LatestBlogs categorySlug={null} />
        </main>
    );
}

export default ClientSpecificBlogDetails
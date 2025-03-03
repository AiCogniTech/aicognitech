import LatestBlogs from '@/components/Blog/LatestBlogs'
import SpecificBlogDetails from '@/components/Blog/SpecificBlogDetails'
import SpeicficBlogHero from '@/components/Blog/SpeicficBlogHero'
import { fetchBlogDetails } from '@/lib/actions/blogs.actions'
import React from 'react'

interface Iparams {
    params: Promise<{
        locale: string,
        slug: string
    }>
}


const SpecificBlogPage = async ({ params }: Iparams) => {
    const blogSlug = (await (params)).slug;
    const locale:string = (await params).locale;
    const blogDetails = await fetchBlogDetails(blogSlug, locale);
    console.log(blogDetails);
    return (
        <main>
            {locale}
            {blogSlug}
            {/* <SpeicficBlogHero blog={blogDetails} />
            <SpecificBlogDetails blog={blogDetails} />
            <LatestBlogs categorySlug={null} /> */}
        </main>
    )
}

export default SpecificBlogPage
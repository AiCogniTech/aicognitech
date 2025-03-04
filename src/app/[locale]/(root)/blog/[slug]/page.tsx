import ClientSpecificBlogDetails from '@/components/blog/ClientSpecificBlogDetails'
import LatestBlogs from '@/components/blog/LatestBlogs'
import SpecificBlogDetails from '@/components/blog/SpecificBlogDetails'
import SpeicficBlogHero from '@/components/blog/SpeicficBlogHero'
import { fetchBlogDetails } from '@/lib/actions/blogs.actions'
import React from 'react'

interface Iparams {
    params: Promise<{
        locale: string,
        slug: string
    }>
}


const SpecificBlogPage = async ({ params }: Iparams) => {
    const {locale, slug} = (await (params));

    // const data: Post[] = await fetchBlogDetails(locale);
    //  // Filter the specific blog post by slug
    //  const blogDetails = data.map((post) => post.slug === slug);

    // //  // If no blog post is found, return a 404 message
    // //  if (!blogDetails) {
    // //      return <main><h1>Blog not found for this language</h1></main>;
    // //  }
    // console.log(blogDetails);
    return (
        // <main>
        //     {locale}
        //     {data[0].title}
        //     {/* <SpeicficBlogHero blog={blogDetails} />
        //     <SpecificBlogDetails blog={blogDetails} />
        //     <LatestBlogs categorySlug={null} /> */}
        // </main>
        <ClientSpecificBlogDetails locale={locale} slug={slug} />
    )
}

export default SpecificBlogPage
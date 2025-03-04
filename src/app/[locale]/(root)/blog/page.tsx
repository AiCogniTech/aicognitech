import BlogHero from '@/components/blogs/BlogHero'
import Blogs from '@/components/blogs/Blogs'
import TransformContent from '@/components/shared/TransformContent'
import React, { Suspense } from 'react'

const BlogPage = async ({params}: {params: {locale: string}}) => {
    const locale = (await (params)).locale
    return (
        <main>
            <BlogHero locale={locale} />
            <Suspense fallback={<div>Loading...</div>}>
                <Blogs locale={locale} />
            </Suspense>
            <TransformContent />
        </main>
    )
}

export default BlogPage
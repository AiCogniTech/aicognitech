import BlogHero from '@/components/Blog/BlogHero'
import Blogs from '@/components/Blog/Blogs'
import TransformContent from '@/components/shared/TransformContent'
import React, { Suspense } from 'react'

const BlogPage = async ({params}: {params: {locale: string}}) => {
    const locale = (await (params)).locale
    return (
        <main>
            <BlogHero />
            <Suspense fallback={<div>Loading...</div>}>
                <Blogs locale={locale} />
            </Suspense>
            <TransformContent />
        </main>
    )
}

export default BlogPage
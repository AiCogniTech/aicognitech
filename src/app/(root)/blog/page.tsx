import BlogHero from '@/components/Blog/BlogHero'
import Blogs from '@/components/Blog/Blogs'
import TransformContent from '@/components/shared/TransformContent'
import React, { Suspense } from 'react'

const BlogPage = () => {
    return (
        <main>
            <BlogHero />
            <Suspense fallback={<div>Loading...</div>}>
                <Blogs />
            </Suspense>
            <TransformContent />
        </main>
    )
}

export default BlogPage
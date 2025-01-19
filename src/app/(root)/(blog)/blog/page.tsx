import BlogHero from '@/components/Blog/BlogHero'
import Blogs from '@/components/Blog/Blogs'
import TransformContent from '@/components/shared/TransformContent'
import React from 'react'

const BlogPage = () => {
    return (
        <main>
            <BlogHero />
            <Blogs />
            <TransformContent />
        </main>
    )
}

export default BlogPage
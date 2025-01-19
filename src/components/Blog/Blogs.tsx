import React from 'react'
import AllBlogs from './AllBlogs'
import CategorizedBlogs from './CategorizedBlogs'
import AuthorDetails from './AuthorDetails'

const Blogs = () => {
    return (
        <div className='sections_container flex flex-col md:flex-col-reverse lg:flex-row justify-between items-start gap-5 !space-y-0'>
            <AllBlogs />
            <div className='basis-1/4 border-2 border-text-secodnary rounded-xl p-5 space-y-8'>
                <CategorizedBlogs />
                <AuthorDetails />
            </div>
        </div>
    )
}

export default Blogs
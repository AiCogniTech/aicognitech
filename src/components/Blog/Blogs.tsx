import React from 'react'
import AllBlogs from './AllBlogs'
import CategorizedBlogs from './CategorizedBlogs'
import AuthorDetails from './AuthorDetails'

const Blogs = ({locale}: {locale: string}) => {
    return (
        <div className='sections_container flex flex-col md:flex-col-reverse lg:flex-row justify-between items-start gap-5 !space-y-0 !my-10'>
                <AllBlogs locale={locale} />
            <div className='basis-1/4 border-2 border-text-secodnary rounded-xl p-5 space-y-8'>
                <CategorizedBlogs locale={locale} />
                <AuthorDetails locale={locale} />
            </div>
        </div>
    )
}

export default Blogs
import React from 'react'

interface Iparams {
    params: Promise<{
        slug: string
    }>
}


const SpecificBlogPage = async ({ params }: Iparams) => {
    const blogSlug = (await (params)).slug
    return (
        <div>
            SpecificBlogPage : {blogSlug}
        </div>
    )
}

export default SpecificBlogPage
import React from 'react'

const AllBlogs = () => {
    return (
        <section className='flex-1 grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='border-2 border-text-secodnary rounded-xl p-5'>
                blog1
            </div>
            <div className='border-2 border-text-secodnary rounded-xl p-5'>
                blog2
            </div>
        </section>
    )
}

export default AllBlogs
import { client } from '@/sanity/lib/client'
import { PortableText } from 'next-sanity';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const AuthorDetails = async () => {
    const author: Author = await client.fetch(`*[_type == "author"][0]{
        _id,
        name,
        destination,
        "socials": socials[]{platform, url}, // Select only the 'platform' and 'url' fields
        bio,    
        "slug": slug.current,
        "image_url": image.asset->url,
        }
`)
    // console.log(author)
    return (
        <section className="flex flex-col gap-5 font-helvetica">
            <h4 className="text-xl lg:text-2xl font-normal text-primary">
                About the Author
            </h4>
            {/* Owner Block */}
            <PortableText value={author.bio} />

            <div className='flex flex-col gap-3'>
                {/* Introduction & Profile */}
                <div className='flex items-center gap-3'>
                    <Image
                        src={author.image_url}
                        alt='Author'
                        width={60}
                        height={60}
                        className='rounded-xl'
                    />
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-text text-lg font-inter'>
                            {author.name}
                        </h4>
                        <h6 className='text-text-secodnary text-sm'>
                            {author.destination}
                        </h6>
                    </div>
                </div>
                {/* Social Media Links */}
                <div className='flex items-center gap-5'>
                    {
                        author.socials.map((val, index) =>
                            val.platform.toLowerCase() === "linkedin" ? (
                                <Link href={val.url}
                                    className='hover:scale-[1.02] transition duration-500'
                                    key={index}
                                >
                                    <FaLinkedin
                                        size={20}
                                        className="cursor-pointer text-primary/50"
                                    />
                                </Link>
                            ) : val.platform.toLowerCase() === "instagram" ? (
                                <Link href={val.url}
                                    className='hover:scale-[1.02] transition duration-500'
                                    key={index}
                                >
                                    <FaInstagram
                                        size={20}
                                        className="cursor-pointer text-primary/50"
                                    />
                                </Link>
                            ) : val.platform.toLowerCase() === "x" ? (
                                <Link href={val.url}
                                    className='hover:scale-[1.02] transition duration-500'
                                    key={index}
                                >
                                    <FaXTwitter
                                        size={20}
                                        className="cursor-pointer text-primary/50"
                                    />
                                </Link>
                            ) : val.platform.toLowerCase() === "facebook" && (
                                <Link href={"https://www.facebook.com/brain.power.1272"}
                                    className='hover:scale-[1.02] transition duration-500'
                                    key={index}
                                >
                                    <FaFacebook
                                        size={20}
                                        className="cursor-pointer text-primary/50"
                                    />
                                </Link>
                            )
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default AuthorDetails
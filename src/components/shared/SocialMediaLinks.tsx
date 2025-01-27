import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMediaLinks = () => {
    return (
        <div className="flex items-center gap-4 py-2 px-3 rounded-full border-text bg-slate-600/40 w-auto">
            <Link href={"https://www.facebook.com/brain.power.1272"}
                className='rounded-full group bg-tertiary p-2 hover:scale-[1.02] transition duration-500' target="_blank" rel="noopener noreferrer"
            >
                <FaFacebook
                    size={22}
                    className="cursor-pointer"
                />
            </Link>
            <Link href={"https://www.instagram.com/Aicognitech3000"}
                className='rounded-full bg-tertiary p-2 hover:scale-[1.02] transition duration-500' target="_blank" rel="noopener noreferrer"
            >
                <FaInstagram
                    size={22}
                    className="cursor-pointer"
                />
            </Link>
            <Link href={'https://www.linkedin.com/in/aicogntech-ai-powered-health-wellness-technology-solutions/'}
                className='rounded-full bg-tertiary p-2 hover:scale-[1.02] transition duration-500' target="_blank" rel="noopener noreferrer"
            >
                <FaLinkedin
                    size={22}
                    className="cursor-pointer"
                />
            </Link>
            <Link href={'https://x.com/@EarthHealthTech'}
                className='rounded-full bg-tertiary p-2 hover:scale-[1.02] transition duration-500' target="_blank" rel="noopener noreferrer"
            >
                <FaXTwitter
                    size={22}
                    className="cursor-pointer"
                />
            </Link>
        </div>
    )
}

export default SocialMediaLinks
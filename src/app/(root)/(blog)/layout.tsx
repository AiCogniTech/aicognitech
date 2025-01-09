import React, { ReactNode } from 'react'
import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "AiCogniTech",
    description: "Solutions for HealthCare & Wellness",
};


const BlogLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            {children}
        </main>
    )
};

export default BlogLayout
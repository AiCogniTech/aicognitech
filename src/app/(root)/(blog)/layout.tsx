import React, { ReactNode } from 'react'
import type { Metadata } from "next";
import { BlogPostContextProvider } from '@/context/BlogContext';


export const metadata: Metadata = {
    title: "AiCogniTech",
    description: "Solutions for HealthCare & Wellness",
};


const BlogLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <BlogPostContextProvider>
                {children}
            </BlogPostContextProvider>
        </main>
    )
};

export default BlogLayout
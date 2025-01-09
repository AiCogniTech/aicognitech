import React, { ReactNode } from 'react'
import type { Metadata } from "next";
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';


export const metadata: Metadata = {
    title: "AiCogniTech",
    description: "Solutions for HealthCare & Wellness",
};


const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
};

export default RootLayout
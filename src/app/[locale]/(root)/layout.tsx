import Footer from '@/components/navigation/Footer';
import Header from '@/components/navigation/Header';
import { Locale } from '@/i18n/routing';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "AiCogniTech - AI Chatbots, Automation & Multilingual Solutions for Health Businesses",
    description: "Empower your health sector business with AiCogniTech! Explore AI-powered chatbots, automation services, and multilingual support to enhance engagement, drive sales, and streamline workflows. Optimised for healthcare, wellness, and longevity industries.",
};


const RootLayout = async ({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { locale: Locale };
}>) => {
    const { locale } = await params;
    return (
        <main className="font-urbanist">
            <Header locale={locale} />
            {children}
            <Footer locale={locale} />
        </main>
    )
}

export default RootLayout
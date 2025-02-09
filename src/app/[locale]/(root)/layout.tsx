"use client";
import { Locale } from '@/i18n/routing';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import React from 'react'

// export const metadata: Metadata = {
//     title: "AiCogniTech - AI Chatbots, Automation & Multilingual Solutions for Health Businesses",
//     description: "Empower your health sector business with AiCogniTech! Explore AI-powered chatbots, automation services, and multilingual support to enhance engagement, drive sales, and streamline workflows. Optimised for healthcare, wellness, and longevity industries.",
// };


const RootLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className="font-urbanist">
            {children}
            <FloatingWhatsApp phoneNumber="+41774651146" accountName="AiCogniTech" 
            chatMessage="Reach out - we'll get back to you in no time!
            \nReach out - we'll get back to you in no time!" darkMode={true}
            />
        </main>
    )
}

export default RootLayout
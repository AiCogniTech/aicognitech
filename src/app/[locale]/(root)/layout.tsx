"use client";
import { Locale } from '@/i18n/routing';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import React from 'react'
import { Metadata } from 'next';


const RootLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className="font-urbanist">
            {children}
            <FloatingWhatsApp phoneNumber="+41774651146" accountName="AiCogniTech" 
            chatMessage="Let’s unlock AI-driven growth for you. What do you need?" darkMode={true} statusMessage="Reach out - we'll get back to you in no time!"
            />
        </main>
    )
}

export default RootLayout
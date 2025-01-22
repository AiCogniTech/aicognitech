import React, { ReactNode } from 'react'
import type { Metadata } from "next";
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import { NextIntlClientProvider } from "next-intl";
import { Locale, routing } from 'i18n/routing';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';


export const metadata: Metadata = {
    title: "AiCogniTech",
    description: "Solutions for HealthCare & Wellness",
};


const RootLayout = async ({ children, params }: { children: ReactNode; params: { locale: Locale }; }) => {
    const { locale } = await params;
      if (!routing.locales.includes(locale as Locale)) {
        notFound();
      }
      // Providing all messages to the client
      // side is the easiest way to get started
      const messages = await getMessages();

    return (
        <html lang={locale}>
            <body
            >
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    )
};

export default RootLayout
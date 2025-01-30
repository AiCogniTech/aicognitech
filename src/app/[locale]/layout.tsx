import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "./globals.css";
import { Locale, routing } from "@/i18n/routing";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "AiCogniTech - AI Chatbots, Automation & Multilingual Solutions for Health Businesses",
  description: "Empower your health sector business with AiCogniTech! Explore AI-powered chatbots, automation services, and multilingual support to enhance engagement, drive sales, and streamline workflows. Optimised for healthcare, wellness, and longevity industries.",
};



export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
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
        className={`antialiased bg-secondary text-text`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
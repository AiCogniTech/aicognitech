// "use client"
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "./globals.css";
import { Locale, routing } from "@/i18n/routing";
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aicognitech.com/"),
  title: "AICogniTech - AI Chatbots, Automation & Multilingual Solutions for Health Businesses",
  description:
    "Empower your health sector business with AiCogniTech! Explore AI-powered chatbots, automation services, and multilingual support to enhance engagement, drive sales, and streamline workflows. Optimised for healthcare, wellness, and longevity industries.",
  generator:
  "Empowering Health Businesses with AI-Driven Chatbots, Automated Patient Engagement, and Multilingual Digital Solutions",

  keywords: [
    "AI Health Solutions",
    "AI Chatbots for Healthcare",
    "Custom AI Consulting for HealthTech",
    "FemTech AI Solutions",
    "AgeTech AI Innovation",
    "Longevity AI Solutions",
    "HealthTech Digital Transformation",
    "AI in Wellness & Longevity",
    "Personalized AI Marketing",
    "AI Marketing Automation",
    "Healthcare AI Integration",
    "AI-Powered Patient Engagement",
    "Multilingual AI Solutions",
    "Predictive Analytics in Health",
    "AI-Driven Market Acceleration",
    "Custom AI Bots for Health",
    "AI Automation in Healthcare",
    "Digital Health Transformation",
    "AI Solutions for FemTech",
    "AI Strategy in Health & Wellness"
  ],
  openGraph: {
    title: "AICogniTech - AI Chatbots, Automation & Multilingual Solutions for Health Businesses",
    description:
      "Empower your health sector business with AiCogniTech! Explore AI-powered chatbots, automation services, and multilingual support to enhance engagement, drive sales, and streamline workflows. Optimised for healthcare, wellness, and longevity industries.",
    images: [
      {
        url: "images/Metaimage.jpg",
        width: 1200,
        height: 630,
        alt: "AI Agent Toolkit",
      },
    ],
    type: "website",
    url: "https://aicognitech.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "AICogniTech - AI Chatbots, Automation & Multilingual Solutions for Health Businesses",
    description:
      "Empower your health sector business with AiCogniTech! Explore AI-powered chatbots, automation services, and multilingual support to enhance engagement, drive sales, and streamline workflows. Optimised for healthcare, wellness, and longevity industries.",
    images: ["images/LOGO_Sharp.jpg"],
    creator: "@EarthHealthTech",
  },
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

          <Header locale={locale} />
          {children}
          <Toaster />
          <Analytics />
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
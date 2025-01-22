import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { Locale, routing } from "i18n/routing";
import { getMessages } from "next-intl/server";

const helvetica = localFont({
  src: [
    { path: "../../fonts/helvetica/helvetica-light.ttf", weight: "300", style: "light" },
    { path: "../../fonts/helvetica/Helvetica.ttf", weight: "400", style: "normal" },
    { path: "../../fonts/helvetica/Helvetica-Bold.ttf", weight: "700", style: "bold" },
    { path: "../../fonts/helvetica/helvetica-black.otf", weight: "900", style: "black" },
  ],
  variable: "--font-helvetica",
  display: "swap",
});


const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "AiCogniTech",
  description: "Solutions for HealthCare & Wellness",
};

export default async function MainRootLayout({
  children,
  params
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
        className={`${helvetica.variable} ${inter.variable} antialiased text-text bg-secondary`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

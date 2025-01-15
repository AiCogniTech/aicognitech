import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const helvetica = localFont({
  src: [
    { path: "../fonts/helvetica/helvetica-light.ttf", weight: "300", style: "light" },
    { path: "../fonts/helvetica/Helvetica.ttf", weight: "400", style: "normal" },
    { path: "../fonts/helvetica/Helvetica-Bold.ttf", weight: "700", style: "bold" },
    { path: "../fonts/helvetica/helvetica-black.otf", weight: "900", style: "black" },
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

export default function MainRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${helvetica.variable} ${inter.variable} antialiased text-text bg-secondary`}
      >
        {children}
      </body>
    </html>
  );
}

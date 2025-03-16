import { Metadata } from "next";
import React, { ReactNode } from "react";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string, slug: string }>;
}): Promise<Metadata> {
    // Compute a dynamic title using the tabs parameter (or fetch additional data if needed)
    const slug = (await params).slug
    const locale = (await params).locale
    const formattedTabs = slug ? slug.replace(/-/g, " ") : "";
    const dynamicTitle = slug
        ? `${formattedTabs} - AI Agent Toolkit`
        : "AI Agent Frameworks";

    // Create canonical URL
    const canonicalUrl = `https://aicognitech.com/${locale}/blog/${slug}`;

    return {
        metadataBase: new URL("https://aicognitech.com/"),
        title: "AICogniTech - AI Chatbots, Automation & Multilingual Solutions for Health Businesses",
        description:
            "Empower your health sector business with AiCogniTech! Explore AI-powered chatbots, automation services, and multilingual support to enhance engagement, drive sales, and streamline workflows. Optimised for healthcare, wellness, and longevity industries.",
        generator:
            "Empowering Health Businesses with AI-Driven Chatbots, Automated Patient Engagement, and Multilingual Digital Solutions",
        // Add canonical URL
        alternates: {
            canonical: canonicalUrl,
        },

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
}

const BlogLayout = ({ children }: { children: ReactNode }) => {
    return <main>{children}</main>;
};

export default BlogLayout;
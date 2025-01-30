// "use client";
import Advantage from "@/components/root/Advantage";
import BusinessTransform from "@/components/root/BusinessTransform";
import Hero from "@/components/root/Hero";
import OwnerOveriew from "@/components/root/OwnerOveriew";
import Technology from "@/components/root/Technology";
import TraditionalAi from "@/components/root/TraditionalAi";
import TraditionalAiIntegration from "@/components/root/TraditionalAiIntegration";
import TransformationJourney from "@/components/root/TransformationJourney";
import TransformBusiness from "@/components/root/TransformBusiness";
import WeServe from "@/components/root/WeServe";
import { setRequestLocale } from "next-intl/server";

export default async function Home({params}: {params: {locale: string}}) {
  const locale = (await (params)).locale
  setRequestLocale(locale);
  return (
    <main>
      <Hero />
      <Technology />
      <OwnerOveriew />
      <BusinessTransform />
      <Advantage />
      <WeServe />
      <TraditionalAi />
      <TransformationJourney />
      <TraditionalAiIntegration /> 
      <TransformBusiness />
    </main>
  );
}
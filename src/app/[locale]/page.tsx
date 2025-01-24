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
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");
  return (
    <main>
      <div>
      <h1 className="text-text">{t('title')}</h1> 
    </div>
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
"use client";
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
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  // const { t } = useTranslation('common');
  const t = useTranslation('common');
  console.log(t)
  return (
    <main>
      {/* <div>
      <h1>{t('welcome')}</h1>
      <p>{t('blog')}</p>
    </div> */}
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
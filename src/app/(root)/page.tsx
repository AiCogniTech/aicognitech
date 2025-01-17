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

export default function Home() {
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
import HeroSection from '@/components/hero/HeroSection';
import CapabilitiesSection from '@/components/capabilities/CapabilitiesSection';
import BlueprintsSection from '@/components/blueprints/BlueprintsSection';
import CtaBanner from '@/components/cta/CtaBanner';
import { getHeroData, getCapabilities, getBlueprints, getCtaData } from '@/services';

export default async function HomePage() {
  const [heroRes, capabilitiesRes, blueprintsRes, ctaRes] = await Promise.all([
    getHeroData(),
    getCapabilities(),
    getBlueprints({ limit: 4 }),
    getCtaData(),
  ]);

  return (
    <div className="w-full">
      <HeroSection
        initialData={heroRes.data}
        initialError={heroRes.error}
      />
      <CapabilitiesSection
        initialData={capabilitiesRes.data}
        initialError={capabilitiesRes.error}
      />
      <BlueprintsSection
        initialData={blueprintsRes.data}
        initialError={blueprintsRes.error}
      />
      <CtaBanner
        initialData={ctaRes.data}
        initialError={ctaRes.error}
      />
    </div>
  );
}

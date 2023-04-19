import SectionHero from '@/components/pages/home/section-hero/section-hero.component';
import SectionGreet from '@/components/pages/home/section-greet/section-greet.component';
import SectionFeatures from '@/components/pages/home/section-features/section-features.component';

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionGreet />
      <SectionFeatures />
    </>
  );
}

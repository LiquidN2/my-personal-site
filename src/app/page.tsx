import SectionHero from '@/components/pages/home/section-hero.component';
import SectionGreet from '@/components/pages/home/section-greet.component';
import SectionFeatures from '@/components/pages/home/section-features.component';

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionGreet />
      <SectionFeatures />
    </>
  );
}

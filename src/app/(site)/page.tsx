import SectionHero from '@/components/pages/home/section-hero';
import SectionGreet from '@/components/pages/home/section-greet';
import SectionFeatured from '@/components/pages/home/section-featured';

import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.container}>
      <SectionHero />
      <SectionGreet />
      <SectionFeatured />
    </main>
  );
}

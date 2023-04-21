'use client';

import { FC } from 'react';

import SectionHeroText from './section-hero-text.component';
import SectionHeroImage from './section-hero-image.component';

import { Theme, useThemes } from '@/hooks/useThemes';

import styles from './index.module.scss';

const SectionHero: FC = () => {
  const containerRef = useThemes({
    [Theme.Default]: styles.container,
    [Theme.Dark]: styles['container--dark'],
  });

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={`${styles['inner-box']} u-container`}>
        <SectionHeroText />
        <SectionHeroImage />
      </div>
    </section>
  );
};

export default SectionHero;

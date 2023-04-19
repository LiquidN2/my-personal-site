'use client';

import { FC, useRef } from 'react';

import SectionHeroText from './section-hero-text.component';
import SectionHeroImage from './section-hero-image.component';

import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/components/context/theme-context';

import styles from './section-hero.module.scss';

const SectionHero: FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);

  useTheme(containerRef, {
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

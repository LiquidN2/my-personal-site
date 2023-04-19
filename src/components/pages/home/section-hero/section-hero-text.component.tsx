import { FC, useRef } from 'react';

import Button from '@/components/ui/button.component';

import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/components/context/theme-context';

import styles from './section-hero-text.module.scss';

const SectionHeroText: FC = () => {
  const headingMainRef = useRef<HTMLHeadingElement | null>(null);
  const headingSubRef = useRef<HTMLHeadingElement | null>(null);

  useTheme(headingMainRef, {
    [Theme.Default]: styles['heading--main'],
    [Theme.Dark]: styles['heading--main-light'],
  });

  useTheme(headingSubRef, {
    [Theme.Default]: styles['heading--sub'],
    [Theme.Dark]: styles['heading--sub-light'],
  });

  return (
    <div className={styles.container}>
      <h1 className={styles['heading--main']} ref={headingMainRef}>
        Hi, I&apos;m{' '}
        <span className={`${styles.bold} ${styles['color-gradient']}`}>
          Hugh Nguyen
        </span>
        <br />
        Full-Stack Developer
      </h1>

      <h4 className={styles['heading--sub']} ref={headingSubRef}>
        Experienced in <span className={styles.bold}>React</span>,{' '}
        <span className={styles.bold}>NodeJs</span>,{' '}
        <span className={styles.bold}>PHP</span>
      </h4>

      <div className={styles.cta}>
        <Button type="link" href="/contact" theme="primary">
          Contact Me 👋
        </Button>
        <Button type="link" href="/about" theme="default">
          About Me 🥷
        </Button>
      </div>
    </div>
  );
};

export default SectionHeroText;

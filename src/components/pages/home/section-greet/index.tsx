'use client';

import { FC } from 'react';

import { Theme, useThemes } from '@/hooks/useTheme';

import styles from './index.module.scss';

const SectionGreet: FC = () => {
  const containerRef = useThemes<HTMLDivElement>({
    [Theme.Default]: styles.container,
    [Theme.Dark]: styles['container--dark'],
  });

  const textRef = useThemes<HTMLParagraphElement>({
    [Theme.Default]: styles.text,
    [Theme.Dark]: styles['text--light'],
  });

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={`${styles['inner-box']} u-container`}>
        <h2 className={styles.heading}>Welcome to My Playground</h2>
        <p className={styles.text} ref={textRef}>
          &ldquo;I started this website with the purpose to explore, design,
          express and play with my ideas via building an application, drawing a
          picture or simply writing a blog post within the confine of
          technology, web development, health and well-being. Thank you for
          visiting.&rdquo; 🙂
        </p>
      </div>
    </section>
  );
};

export default SectionGreet;

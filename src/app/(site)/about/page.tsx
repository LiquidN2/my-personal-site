import HeadingPrimary from '@/components/ui/heading/heading-primary.component';

import styles from './page.module.scss';

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <section className={`${styles['inner-box']} u-container`}>
        <HeadingPrimary>About Me</HeadingPrimary>
      </section>
    </main>
  );
}

'use client';

import Image from 'next/image';

import MainContainer from '@/components/layout/main-container.component';
import SectionContainer from '@/components/layout/section-container.component';
import HeadingPrimary from '@/components/ui/heading/heading-primary.component';
import HeadingSecondary from '@/components/ui/heading/heading-secondary.component';

import { Theme, useThemes } from '@/hooks/useThemes';

import styles from './page.module.scss';

export default function AboutPage() {
  const abstractRef = useThemes<HTMLParagraphElement>({
    [Theme.Default]: styles.abstract,
    [Theme.Dark]: styles['abstract--light'],
  });

  const textInnerBoxRef = useThemes<HTMLDivElement>({
    [Theme.Default]: styles['text-inner-box'],
    [Theme.Dark]: styles['text-inner-box--dark'],
  });

  return (
    <MainContainer>
      <SectionContainer>
        <HeadingPrimary>About Me</HeadingPrimary>

        <p className={styles.abstract} ref={abstractRef}>
          &ldquo;A journey of a thousand miles begins with a single step&rdquo;
          - Lao Tzu
        </p>

        <figure className={styles['image-container']}>
          <Image
            src="img/developer-activity.svg"
            alt="typing code"
            height={528}
            width={528}
            priority={true}
          />
        </figure>

        <div className={styles['text-container']}>
          <HeadingSecondary>My Story</HeadingSecondary>

          <div className={styles['text-inner-box']} ref={textInnerBoxRef}>
            <p>
              I do not have a degree in computer science or information
              technology like the majority of coders.
            </p>

            <p>
              Nulla est elit, feugiat et lacinia nec, aliquam sit amet est. Ut
              in consequat ipsum, in sagittis felis.
            </p>

            <p>
              Phasellus arcu mauris, fermentum ac dui quis, blandit pharetra
              orci. lacus et eros suscipit malesuada. Suspendisse hendrerit leo
              vitae. Sed in ipsum porttitor. Pellentesque sollicitudin pharetra.
            </p>
          </div>
        </div>
      </SectionContainer>
    </MainContainer>
  );
}

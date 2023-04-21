import { FC } from 'react';
import Link from 'next/link';

import { Theme, useThemes } from '@/hooks/useTheme';

import styles from './card-heading.module.scss';

interface CardHeadingProps {
  text: string;
  url?: string;
}

const CardHeading: FC<CardHeadingProps> = ({ text, url = '#' }) => {
  const headingRef = useThemes<HTMLHeadingElement>({
    [Theme.Default]: styles.text,
    [Theme.Dark]: styles['text--light'],
  });

  return (
    <Link href={url} legacyBehavior>
      <a className={styles.link}>
        <h5 className={styles.text} ref={headingRef}>
          {text}
        </h5>
      </a>
    </Link>
  );
};

export default CardHeading;

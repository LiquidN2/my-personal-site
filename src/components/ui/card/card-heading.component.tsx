import { FC } from 'react';
import Link from 'next/link';

import styles from './card-heading.module.scss';

interface CardHeadingProps {
  text: string;
  url?: string;
}

const CardHeading: FC<CardHeadingProps> = ({ text, url = '#' }) => {
  return (
    <Link href={url} legacyBehavior>
      <a className={styles.link}>
        <h5 className={styles.text}>{text}</h5>
      </a>
    </Link>
  );
};

export default CardHeading;

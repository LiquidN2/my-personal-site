'use client';

import { FC, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import { useTheme } from '@/hooks/useTheme';

import styles from './logo.module.scss';

const Logo: FC = () => {
  const logoTextRef = useRef<HTMLDivElement | null>(null);

  useTheme(logoTextRef, {
    default: styles.text,
    dark: `${styles.text} ${styles['text--dark']}`,
  });

  return (
    <Link href="/" legacyBehavior>
      <a className={styles.link}>
        <FontAwesomeIcon className={styles.svg} icon={faCode} />
        <div className={styles.text} ref={logoTextRef}>
          Hugh Nguyen
        </div>
      </a>
    </Link>
  );
};

export default Logo;

'use client';

import { FC, useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { useTheme } from '@/hooks/useTheme';
import { Theme, ThemeContext } from '@/components/context/theme-context';

import styles from './footer-poweredby.module.scss';

const FooterPoweredBy: FC = () => {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [logoFileName, setLogoFileName] = useState('nextjs-logo-dark.svg');

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const fileName =
      theme === Theme.Dark ? 'nextjs-logo-light.svg' : 'nextjs-logo-dark.svg';
    setLogoFileName(fileName);
  }, [theme]);

  useTheme(textRef, {
    [Theme.Default]: styles.text,
    [Theme.Dark]: styles['text--light'],
  });

  return (
    <div className={styles.container}>
      <span className={styles.text} ref={textRef}>
        Powered by&nbsp;
      </span>
      <Image
        src={`/img/logos/${logoFileName}`}
        alt="nextjs logo dark"
        width={50}
        height={25}
      />
    </div>
  );
};

export default FooterPoweredBy;

'use client';

import { FC, useRef } from 'react';

import Logo from '@/components/ui/logo.component';
import FooterCopyright from './footer-copyright.component';
import FooterPoweredBy from './footer-poweredby.component';

import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/components/context/theme-context';

import styles from './footer.module.scss';

const Footer: FC = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useTheme(footerRef, {
    [Theme.Default]: styles.container,
    [Theme.Dark]: styles['container--dark'],
  });

  return (
    <footer ref={footerRef}>
      <div className={`${styles['inner-box']} u-container`}>
        <Logo />
        <FooterCopyright />
        <FooterPoweredBy />
      </div>
    </footer>
  );
};

export default Footer;

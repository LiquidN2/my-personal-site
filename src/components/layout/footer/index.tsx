'use client';

import { FC } from 'react';

import Logo from '@/components/ui/logo.component';
import FooterCopyright from './footer-copyright.component';
import FooterPoweredBy from './footer-poweredby.component';

import { Theme, useThemes } from '@/hooks/useTheme';

import styles from './index.module.scss';

const Footer: FC = () => {
  const footerRef = useThemes<HTMLDivElement>({
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

'use client';

import { FC, useEffect, useState } from 'react';

import HeaderLogo from './header-logo.component';
import HeaderSearch from './header-search.component';
import HeaderNav from './header-nav.component';
import HeaderNavToggle from './header-nav-toggle.component';
import HeaderNavClose from './header-nav-close.component';
import ButtonDarkModeToggle from '@/components/ui/button-darkmode-toggle.module';

import { useResponsive } from '@/hooks/useResponsive';

import styles from './header.module.scss';

const Header: FC = () => {
  const [hiddenNav, setHiddenNav] = useState(true);
  const [navContainerClass, setNavContainerClass] = useState(
    styles['nav-container']
  );
  const [darkModeOn, setDarkModeOn] = useState(false);
  const { respondMobile } = useResponsive();

  useEffect(() => {
    hiddenNav
      ? setNavContainerClass(styles['nav-container'])
      : setNavContainerClass(
          `${styles['nav-container']} ${styles['nav-container--shown']}`
        );
  }, [hiddenNav]);

  return (
    <header className={styles.container}>
      <div className={`${styles['inner-box']} u-container`}>
        <HeaderLogo />
        {!respondMobile && <HeaderSearch />}
        {respondMobile && (
          <HeaderNavToggle onClick={() => setHiddenNav(false)} />
        )}
        <div className={navContainerClass}>
          {respondMobile && (
            <HeaderNavClose onClick={() => setHiddenNav(true)} />
          )}
          <HeaderNav />
          <ButtonDarkModeToggle
            isOn={darkModeOn}
            onChange={() => setDarkModeOn(!darkModeOn)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

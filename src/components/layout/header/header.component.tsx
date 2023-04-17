'use client';

import { FC, useEffect, useContext, useRef, useState } from 'react';

import Logo from '@/components/ui/logo.component';
import HeaderSearch from './header-search.component';
import HeaderNav from './header-nav.component';
import HeaderNavToggle from './header-nav-toggle.component';
import HeaderNavClose from './header-nav-close.component';
import ButtonDarkModeToggle from '@/components/ui/button-darkmode-toggle.module';
import { Theme, ThemeContext } from '@/components/context/theme-context';

import { useResponsive } from '@/hooks/useResponsive';
import { useTheme } from '@/hooks/useTheme';

import styles from './header.module.scss';

const Header: FC = () => {
  const [hiddenNav, setHiddenNav] = useState(true);
  const [navContainerClass, setNavContainerClass] = useState(
    styles['nav-container']
  );
  const [darkModeOn, setDarkModeOn] = useState(false);

  const { enableTheme } = useContext(ThemeContext);

  const headerRef = useRef<HTMLDivElement | null>(null);

  const { respondMobile } = useResponsive();

  useEffect(() => {
    hiddenNav
      ? setNavContainerClass(styles['nav-container'])
      : setNavContainerClass(
          `${styles['nav-container']} ${styles['nav-container--shown']}`
        );
  }, [hiddenNav]);

  useEffect(() => {
    if (!darkModeOn) {
      enableTheme(Theme.Default);
      return;
    }
    enableTheme(Theme.Dark);
  }, [darkModeOn, enableTheme]);

  useTheme(headerRef, {
    default: styles.container,
    dark: `${styles.container} ${styles['container--dark']}`,
  });

  return (
    <header className={styles.container} ref={headerRef}>
      <div className={`${styles['inner-box']} u-container`}>
        <Logo />
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

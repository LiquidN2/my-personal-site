'use client';

import { FC, useEffect, useContext, useState } from 'react';

import Logo from '@/components/ui/logo.component';
import HeaderSearch from './header-search.component';
import HeaderNav from './header-nav.component';
import HeaderNavToggle from './header-nav-toggle.component';
import HeaderNavClose from './header-nav-close.component';
import ButtonDarkModeToggle from '@/components/ui/button/button-darkmode-toggle.module';
import { Theme, ThemeContext } from '@/components/context/theme-context';

import { useResponsive } from '@/hooks/useResponsive';
import { useThemes } from '@/hooks/useThemes';

import styles from './index.module.scss';

const Header: FC = () => {
  const [hiddenNav, setHiddenNav] = useState(true);
  const [navContainerClass, setNavContainerClass] = useState(
    styles['nav-container']
  );
  const [darkModeOn, setDarkModeOn] = useState(false);

  const { enableTheme } = useContext(ThemeContext);

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

  const headerRef = useThemes<HTMLDivElement>({
    [Theme.Default]: styles.container,
    [Theme.Dark]: styles['container--dark'],
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

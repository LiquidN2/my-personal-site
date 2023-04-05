import { FC } from 'react';

import HeaderLogo from './header-logo.component';
import HeaderSearch from './header-search.component';
import HeaderNav from './header-nav.component';

import styles from './header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.container}>
      <div className={`${styles['inner-box']} u-container`}>
        <HeaderLogo />

        <HeaderSearch />

        <div className={styles['nav-container']}>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

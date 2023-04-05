import { FC } from 'react';

import HeaderNavItem from './header-nav-item.component';
import styles from './header-nav.module.scss';

const HeaderNav: FC = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <HeaderNavItem url="/about" name="About Me" />
        <HeaderNavItem url="/portfolio" name="Portfolio" />
        <HeaderNavItem url="/blog" name="Blog" />
        <HeaderNavItem url="/contact" name="Contact" />
      </ul>
    </nav>
  );
};

export default HeaderNav;

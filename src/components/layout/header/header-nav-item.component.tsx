'use client';

import { FC, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Theme, ThemeContext } from '@/components/context/theme-context';

import styles from './header-nav-item.module.scss';

interface HeaderNavItemProps {
  url: string;
  name: string;
}

const HeaderNavItem: FC<HeaderNavItemProps> = ({ url, name }) => {
  const [linkClassName, setLinkClassName] = useState(styles.link);
  const pathname = usePathname();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const defaultStyles =
      theme === Theme.Dark
        ? `${styles.link} ${styles['link--dark']}`
        : styles.link;

    const linkStyles = pathname.startsWith(url)
      ? `${defaultStyles} ${styles['link--active']}`
      : defaultStyles;

    setLinkClassName(linkStyles);
  }, [pathname, theme, url]);

  return (
    <li className={styles.container} onClick={() => console.log('close menu?')}>
      <Link href={url} legacyBehavior>
        <a className={linkClassName}>{name}</a>
      </Link>
    </li>
  );
};

export default HeaderNavItem;

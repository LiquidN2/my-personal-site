'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './header-nav-item.module.scss';

interface HeaderNavItemProps {
  url: string;
  name: string;
}

const HeaderNavItem: FC<HeaderNavItemProps> = ({ url, name }) => {
  const [linkClassName, setLinkClassName] = useState(styles.link);
  const pathname = usePathname();

  useEffect(() => {
    const linkStyles = pathname.startsWith(url)
      ? `${styles.link} ${styles['link--active']}`
      : styles.link;

    setLinkClassName(linkStyles);
  }, [pathname, url]);

  return (
    <li className={styles.container}>
      <Link href={url} legacyBehavior>
        <a className={linkClassName}>{name}</a>
      </Link>
    </li>
  );
};

export default HeaderNavItem;

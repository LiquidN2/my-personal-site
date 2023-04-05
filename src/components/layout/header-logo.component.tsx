import { FC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import styles from './header-logo.module.scss';

const HeaderLogo: FC = () => {
  return (
    <Link href="/" legacyBehavior>
      <a className={styles.link}>
        <FontAwesomeIcon className={styles.svg} icon={faCode} />
        <div className={styles.text}>Hugh&apos;s Home</div>
      </a>
    </Link>
  );
};

export default HeaderLogo;

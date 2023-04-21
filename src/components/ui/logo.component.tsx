import { FC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import { Theme, useThemes } from '@/hooks/useThemes';

import styles from './logo.module.scss';

const Logo: FC = () => {
  const textRef = useThemes<HTMLDivElement>({
    [Theme.Default]: styles.text,
    [Theme.Dark]: styles['text--light'],
  });

  return (
    <Link href="/" legacyBehavior>
      <a className={styles.link}>
        <FontAwesomeIcon className={styles.svg} icon={faCode} />
        <div className={styles.text} ref={textRef}>
          Hugh Nguyen
        </div>
      </a>
    </Link>
  );
};

export default Logo;

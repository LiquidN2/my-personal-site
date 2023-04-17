import { FC } from 'react';

import styles from './footer-copyright.module.scss';

const FooterCopyright: FC = () => {
  return (
    <div>
      <p className={styles.text}>
        Design inspired by ElegantStack. Built and customised by{' '}
        <span>Hugh Nguyen</span>
      </p>
      <p className={styles.text}>
        Vector artwork created by Stories (source: www.freepik.com)
      </p>
    </div>
  );
};

export default FooterCopyright;

import { FC, ReactNode } from 'react';

import styles from './heading-primary.module.scss';

interface HeadingPrimaryProps {
  children: ReactNode;
}

const HeadingPrimary: FC<HeadingPrimaryProps> = ({ children }) => {
  return <h2 className={styles.text}>{children}</h2>;
};

export default HeadingPrimary;

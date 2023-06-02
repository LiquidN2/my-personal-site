'use client';

import { FC, ReactNode } from 'react';

import { Theme, useThemes } from '@/hooks/useThemes';

import styles from './heading-primary.module.scss';

interface HeadingPrimaryProps {
  children: ReactNode;
}

const HeadingPrimary: FC<HeadingPrimaryProps> = ({ children }) => {
  const ref = useThemes<HTMLHeadingElement>({
    [Theme.Default]: styles.text,
    [Theme.Dark]: styles['text--light'],
  });

  return (
    <h2 className={styles.text} ref={ref}>
      {children}
    </h2>
  );
};

export default HeadingPrimary;

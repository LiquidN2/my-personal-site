'use client';

import { FC, ReactNode } from 'react';

import { Theme, useThemes } from '@/hooks/useThemes';

import styles from './main-container.module.scss';

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  const ref = useThemes<HTMLDivElement>({
    [Theme.Default]: styles.container,
    [Theme.Dark]: styles['container--dark'],
  });

  return (
    <main className={styles.container} ref={ref}>
      {children}
    </main>
  );
};

export default MainContainer;

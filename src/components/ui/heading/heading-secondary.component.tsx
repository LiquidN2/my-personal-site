import { FC, ReactNode } from 'react';

import { Theme, useThemes } from '@/hooks/useThemes';

import styles from './heading-secondary.module.scss';

interface HeadingSecondaryProps {
  children: ReactNode;
}

const HeadingSecondary: FC<HeadingSecondaryProps> = ({ children }) => {
  const ref = useThemes<HTMLHeadingElement>({
    [Theme.Default]: styles.text,
    [Theme.Dark]: styles['text--light'],
  });

  return (
    <h3 className={styles.text} ref={ref}>
      {children}
    </h3>
  );
};

export default HeadingSecondary;

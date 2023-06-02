import { FC, ReactNode } from 'react';

import styles from './section-container.module.scss';

interface SectionContainerProps {
  children: ReactNode;
}

const SectionContainer: FC<SectionContainerProps> = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};

export default SectionContainer;

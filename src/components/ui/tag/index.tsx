import { FC } from 'react';

import styles from './index.module.scss';

interface TagProps {
  text: string;
}

const Tag: FC<TagProps> = ({ text }) => {
  return <span className={styles.container}>#{text}</span>;
};

export default Tag;

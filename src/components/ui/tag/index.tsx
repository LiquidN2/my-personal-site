import { FC } from 'react';

import { Theme, useThemes } from '@/hooks/useTheme';

import styles from './index.module.scss';

interface TagProps {
  text: string;
}

const Tag: FC<TagProps> = ({ text }) => {
  const textRef = useThemes<HTMLSpanElement>({
    [Theme.Default]: styles.container,
    [Theme.Dark]: styles['container--light'],
  });

  return (
    <span className={styles.container} ref={textRef}>
      #{text}
    </span>
  );
};

export default Tag;

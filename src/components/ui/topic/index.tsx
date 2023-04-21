import { FC } from 'react';

import { Theme, useThemes } from '@/hooks/useThemes';

import styles from './index.module.scss';

interface TopicProps {
  text: string;
  icon: string;
}

const Topic: FC<TopicProps> = ({ text, icon }) => {
  const containerRef = useThemes<HTMLDivElement>({
    [Theme.Default]: styles.container,
    [Theme.Dark]: styles['container--dark'],
  });

  const figureRef = useThemes<HTMLElement>({
    [Theme.Default]: styles.thumbnail,
    [Theme.Dark]: styles['thumbnail--dark'],
  });

  const textRef = useThemes<HTMLParagraphElement>({
    [Theme.Default]: styles.text,
    [Theme.Dark]: styles['text--light'],
  });

  return (
    <div className={styles.container} ref={containerRef}>
      <figure className={styles.thumbnail} ref={figureRef}>
        <span className={styles.icon}>{icon}</span>
      </figure>
      <p className={styles.text} ref={textRef}>
        {text}
      </p>
    </div>
  );
};

export default Topic;

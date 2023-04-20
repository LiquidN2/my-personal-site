import { FC } from 'react';

import styles from './index.module.scss';

interface TopicProps {
  text: string;
  icon: string;
}

const Topic: FC<TopicProps> = ({ text, icon }) => {
  return (
    <div className={styles.container}>
      <figure className={styles.thumbnail}>
        <span className={styles.icon}>{icon}</span>
      </figure>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Topic;

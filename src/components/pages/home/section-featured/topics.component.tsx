'use client';

import { FC, useEffect, useState } from 'react';

import Topic from '@/components/ui/topic';

import styles from './topics.module.scss';

const Topics: FC = () => {
  const [topics, setTopics] = useState<any[]>([]);

  useEffect(() => {
    setTopics([
      {
        text: 'Programming / Development',
        icon: '👨‍💻',
      },
      {
        text: 'Design / UX',
        icon: '🖌️',
      },
      {
        text: 'Health & Fitness',
        icon: '‍🏃',
      },
      {
        text: 'Mental Health & Well-Being',
        icon: '🧘‍♂️',
      },
    ]);
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Topics</h3>
      <div className={styles.list}>
        {topics.map(({ text, icon }, index) => (
          <Topic key={index} text={text} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default Topics;

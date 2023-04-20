'use client';

import { FC, useEffect, useState } from 'react';

import Card from '@/components/ui/card';

import styles from './recent-blogs.module.scss';

const RecentBlogs: FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  useEffect(() => {
    setBlogs([
      {
        imageUrl: '/img/design.jpg',
        topic: 'design',
        heading: 'Design Philosophy',
        excerpt:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ipsum nesciunt officia perferendis quisquam quod...',
        date: '20th Apr 2023',
        time: '1:04 PM',
        url: '/',
      },
      {
        imageUrl: '/img/coding.jpg',
        topic: 'coding',
        heading: 'Why should we use Typescript?',
        excerpt:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ipsum nesciunt officia perferendis quisquam quod...',
        date: '17th Apr 2023',
        time: '09:56 AM',
        url: '/',
      },
    ]);
  }, []);

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Recently Published</h3>
      <div className={styles.list}>
        {blogs.map(
          ({ imageUrl, topic, heading, excerpt, date, time, url }, index) => (
            <Card
              key={index}
              imageUrl={imageUrl}
              topic={topic}
              heading={heading}
              excerpt={excerpt}
              date={date}
              time={time}
              url={url}
            />
          )
        )}
      </div>
    </div>
  );
};

export default RecentBlogs;

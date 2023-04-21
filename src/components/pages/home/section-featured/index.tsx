'use client';

import { FC } from 'react';

import RecentBlogs from './recent-blogs.component';
import Topics from './topics.component';
import PopularTags from './popular-tags.component';

import { Theme, useThemes } from '@/hooks/useTheme';

import styles from './index.module.scss';

const IndexComponent: FC = () => {
  const sectionRef = useThemes<HTMLDivElement>({
    [Theme.Default]: styles.container,
    [Theme.Dark]: styles['container--dark'],
  });

  return (
    <section className={styles.container} ref={sectionRef}>
      <div className={`${styles['inner-box']} u-container`}>
        <div className={styles.left}>
          <RecentBlogs />
        </div>
        <div className={styles.right}>
          <Topics />
          <PopularTags />
        </div>
      </div>
    </section>
  );
};

export default IndexComponent;

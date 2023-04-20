import { FC } from 'react';

import RecentBlogs from './recent-blogs.component';
import Topics from './topics.component';
import PopularTags from './popular-tags.component';

import styles from './index.module.scss';

const IndexComponent: FC = () => {
  return (
    <section className={styles.container}>
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

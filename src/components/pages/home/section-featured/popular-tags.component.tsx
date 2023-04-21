'use client';

import { FC, useEffect, useState } from 'react';

import Tag from '@/components/ui/tag';
import { Theme, useThemes } from '@/hooks/useThemes';
import styles from './popular-tags.module.scss';

const PopularTags: FC = () => {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    setTags([
      'javascript',
      'typescript',
      'react',
      'nodejs',
      'php',
      'html',
      'css',
      'mongdb',
      'sql',
      'front-end',
      'back-end',
      'full-stack',
    ]);
  }, []);

  const headingRef = useThemes<HTMLHeadingElement>({
    [Theme.Default]: styles.heading,
    [Theme.Dark]: styles['heading--light'],
  });

  const listContainerRef = useThemes<HTMLDivElement>({
    [Theme.Default]: styles.list,
    [Theme.Dark]: styles['list--dark'],
  });

  return (
    <div className={styles.container}>
      <h3 className={styles.heading} ref={headingRef}>
        Popular Tags
      </h3>
      <div className={styles.list} ref={listContainerRef}>
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </div>
    </div>
  );
};

export default PopularTags;

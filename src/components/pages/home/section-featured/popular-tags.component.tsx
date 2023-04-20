'use client';

import { FC, useEffect, useState } from 'react';

import Tag from '@/components/ui/tag';

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

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Popular Tags</h3>
      <div className={styles.list}>
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </div>
    </div>
  );
};

export default PopularTags;

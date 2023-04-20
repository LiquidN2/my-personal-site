import { FC } from 'react';
import Link from 'next/link';

import styles from './card-topic.module.scss';

interface CardTopicProps {
  text: string;
  url?: string;
}

const CardTopic: FC<CardTopicProps> = ({ text, url = '#' }) => {
  return (
    <Link href={url} legacyBehavior>
      <a className={styles['container--primary']}>{text}</a>
    </Link>
  );
};

export default CardTopic;

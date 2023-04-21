import { FC } from 'react';

import CardThumbnail from './card-thumbnail.component';
import CardTopic from './card-topic.component';
import CardHeading from './card-heading.component';
import CardExcept from './card-excerpt.component';
import CardDateTime from './card-datetime.component';

import { Theme, useThemes } from '@/hooks/useTheme';

import styles from './index.module.scss';

interface CardProps {
  heading: string;
  topic: string;
  excerpt: string;
  date: string;
  time: string;
  imageUrl: string;
  url: string;
}

const Card: FC<CardProps> = ({
  heading,
  topic,
  excerpt,
  date,
  time,
  imageUrl,
  url,
}) => {
  const containerRef = useThemes<HTMLDivElement>({
    [Theme.Default]: styles.container,
    [Theme.Dark]: styles['container--dark'],
  });

  return (
    <article className={styles.container} ref={containerRef}>
      <CardThumbnail imageUrl={imageUrl} alt={heading} />
      <div className={styles['text-box']}>
        <CardTopic text={topic} />
        <CardHeading text={heading} url={url} />
        <CardExcept text={excerpt} />
        <CardDateTime date={date} time={time} />
      </div>
    </article>
  );
};

export default Card;

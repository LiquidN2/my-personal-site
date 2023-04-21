import { FC } from 'react';

import { Theme, useThemes } from '@/hooks/useThemes';

import styles from './card-datetime.module.scss';

interface CardDateTimeProps {
  date: string;
  time: string;
}

const CardDateTime: FC<CardDateTimeProps> = ({ date, time }) => {
  const textRef = useThemes<HTMLTimeElement>({
    [Theme.Default]: styles.container,
    [Theme.Dark]: styles['container--light'],
  });

  return (
    <time className={styles.container} ref={textRef}>
      📅 {date} - 🕧 {time}
    </time>
  );
};

export default CardDateTime;

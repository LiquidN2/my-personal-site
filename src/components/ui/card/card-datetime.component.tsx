import { FC } from 'react';

import styles from './card-datetime.module.scss';

interface CardDateTimeProps {
  date: string;
  time: string;
}

const CardDateTime: FC<CardDateTimeProps> = ({ date, time }) => {
  return (
    <time className={styles.container}>
      📅 {date} - 🕧 {time}
    </time>
  );
};

export default CardDateTime;

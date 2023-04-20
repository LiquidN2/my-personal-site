import { FC } from 'react';

import styles from './card-excerpt.module.scss';

interface CardExceptProps {
  text: string;
}

const CardExcept: FC<CardExceptProps> = ({ text }) => {
  return <p className={styles.container}>{text}</p>;
};

export default CardExcept;

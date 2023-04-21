import { FC } from 'react';

import { Theme, useThemes } from '@/hooks/useThemes';

import styles from './card-excerpt.module.scss';

interface CardExceptProps {
  text: string;
}

const CardExcept: FC<CardExceptProps> = ({ text }) => {
  const textRef = useThemes<HTMLParagraphElement>({
    [Theme.Default]: styles.container,
    [Theme.Dark]: styles['container--light'],
  });

  return (
    <p className={styles.container} ref={textRef}>
      {text}
    </p>
  );
};

export default CardExcept;

import { FC } from 'react';
import Image from 'next/image';

import styles from './card-thumbnail.module.scss';

interface CardThumbnailProps {
  imageUrl: string;
  alt: string;
}

const CardThumbnail: FC<CardThumbnailProps> = ({ imageUrl, alt }) => {
  return (
    <Image
      src={imageUrl}
      alt={alt}
      height={210}
      width={210}
      className={styles.container}
    />
  );
};

export default CardThumbnail;

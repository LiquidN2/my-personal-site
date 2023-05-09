import { FC } from 'react';
import Image from 'next/image';

import styles from './section-hero-image.module.scss';

const SectionHeroImage: FC = () => {
  return (
    <figure className={styles.container}>
      <Image
        src="img/typing-code.svg"
        alt="typing code image"
        height={500}
        width={500}
        priority={true}
      />
    </figure>
  );
};

export default SectionHeroImage;
